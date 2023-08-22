import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";

export default function AppHeader() {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between">
      <div className="flex space-x-4">
        <div>JBLibrary</div>
        <div className="flex space-x-4">
          <s>
            <Link href="/dashboard" className="">
              Documentation
            </Link>
          </s>
          <s>
            <Link href="/">Design</Link>
          </s>
        </div>
      </div>
      <div className="flex gap-2">
        <button className={`rounded-md bg-gray-200 px-4 py-2`}>Login</button>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
