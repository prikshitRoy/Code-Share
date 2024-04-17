import Editor from "@/components/Editor";
import { authOptions } from "@/lib/auth";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const isAuthenticated = !!session;

  if (session) {
    redirect("/dashboard");
  }
  return <Editor editable={true} isAuthenticated={isAuthenticated} />;
}
