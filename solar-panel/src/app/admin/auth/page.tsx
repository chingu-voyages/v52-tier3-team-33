import { redirect } from "next/navigation";

export default function AuthPage(): React.ReactNode {
  redirect("/admin/auth/login");
}
