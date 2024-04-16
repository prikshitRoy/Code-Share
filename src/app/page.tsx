import { getSession } from "@/lib/auth";
import Editor from "@/components/Editor";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  const isAuthenticated = !!session;

  if (session) {
    redirect("/dashboard");
  }
  return <Editor editable={true} isAuthenticated={isAuthenticated} />;
}
