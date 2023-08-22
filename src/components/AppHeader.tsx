import { ThemeSwitch } from "./ThemeSwitch";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function AppHeader() {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between">
      <div className="flex space-x-4">
        <div className="text-md font-semibold">Logo</div>
        <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
          <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]"></NavigationMenu.List>
        </NavigationMenu.Root>
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
