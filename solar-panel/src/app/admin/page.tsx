import { redirect } from "next/navigation";

export default function AdminPage(): React.ReactNode {
  redirect("/admin/dashboard");
}
