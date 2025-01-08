import Link from "next/link";

export default function SectionSecondaryNavigation(): React.ReactNode {
  return (
    <nav className="flex self-start px-4 py-2 border-b-2 border-gray-200 w-full">
      <ul className="flex gap-4">
        <li>
          <Link href="#benefits">Benefits</Link>
        </li>
        <li>
          <Link href="#process">Process</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
