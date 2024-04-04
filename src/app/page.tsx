import Editor from "@/components/Editor";
import { redirect } from "next/navigation";

export default function Home() {
  const session = false;

  const isAuthenticated = !!session;

  if (session) {
    redirect("/dashboard");
  }
  return <Editor editable={true} isAuthenticated={isAuthenticated} />;
}
