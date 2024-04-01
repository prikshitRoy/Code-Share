import Editor from "@/components/Editor";
import { redirect } from "next/navigation";

export default function Home() {
  const session = false;

  if (session) {
    redirect("/dashboard");
  }
  return <Editor />;
}
