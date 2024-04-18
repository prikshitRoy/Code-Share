import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

import { prisma } from "@/lib/prisma";
import Editor from "@/components/Editor";
import { authOptions } from "@/lib/auth";
import SetupStore from "@/components/Editor/SetupStore";

async function getSnippet(id: string) {
  return await prisma.snippet.findUnique({
    where: {
      id,
    },
    include: {
      views: true,
    },
  });
}

async function increaseViewCount(id: string) {
  return await prisma.view.update({
    where: {
      snippetId: id,
    },
    data: {
      count: {
        increment: 1,
      },
    },
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  const snippet = await getSnippet(params.id);

  let views;

  if (snippet) {
    views =
      session?.user?.id !== snippet.userId
        ? await increaseViewCount(params.id)
        : snippet.views;
  }

  const editable = session?.user?.id === snippet?.userId;
  const isAuthenticated = !!session;

  if (!snippet) {
    notFound();
  }

  return (
    <>
      <SetupStore snippet={snippet} />

      <Editor
        views={views?.count}
        editable={editable}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
}
