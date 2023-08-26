import { ThemeSwitch } from "./ThemeSwitch";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="container mx-auto flex h-20 items-center justify-between">
      <div className="flex flex-wrap items-center justify-start space-x-4 md:flex-nowrap md:justify-center ">
        <Link href="/" className="text-md ml-4 mt-6 font-semibold md:m-0">
          JBLibrary
        </Link>
        <HeaderMenu />
      </div>

      <div className="absolute right-4 top-4 gap-2 md:relative md:flex md:flex-row">
        <div className="flex-row flex">
          <button
            className={`rounded-md bg-gray-200 px-4 py-1 text-sm font-semibold dark:bg-zinc-800`}
          >
            Login
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
