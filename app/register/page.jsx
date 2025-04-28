import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import RegisterForm from "./register-form";
import { redirect } from "next/navigation";

//keep this as a sever component(funtional component)
export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="container mx-auto">
      <RegisterForm />
    </div>
  );
}
