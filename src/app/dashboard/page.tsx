import { redirect } from "next/navigation";

export default function Page() {
  const session = "true";
  if (!session) {
    redirect("/");
  }

  return <div>Dashbord</div>;
}
