import Link from "next/link";

export default function AdminSidebar(): React.ReactNode {
  return (
    <aside className="w-64 bg-gray-800 p-6 text-white">
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <nav className="space-y-2">
          <Link
            href="/admin/dashboard"
            className="block rounded px-4 py-2 hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/evaluations"
            className="block rounded px-4 py-2 hover:bg-gray-700"
          >
            Evaluations
          </Link>
          <Link
            href="/admin/settings"
            className="block rounded px-4 py-2 hover:bg-gray-700"
          >
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}
