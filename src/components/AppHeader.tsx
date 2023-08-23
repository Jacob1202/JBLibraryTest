import { ThemeSwitch } from "./ThemeSwitch";
import HeaderMenu from "./HeaderMenu";

export default function AppHeader() {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between">
      <div className="flex items-center justify-center space-x-4">
        <div className="text-md font-semibold">Logo</div>
        <HeaderMenu />
      </div>
      <div className="flex gap-2">
        <button
          className={`rounded-md bg-gray-200 px-4 py-1 text-sm font-semibold`}
        >
          Login
        </button>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
