import Link from "next/link";
import WelcomeText from "./WelcomeText";
import { ThemeSwitch } from "./ThemeSwitch";

export default function HeroSection() {
  return (
    <div>
      <div className="mt-32 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <WelcomeText />
          <h1 className="text-6xl font-semibold">I&#39;m Jakub</h1>
        </div>
        <div className="text-center">
          <h3 className="-translate-y-3 text-6xl font-semibold leading-[90px]">
            Lorem ipsum dolor sit amet.
          </h3>
          <h3 className="text-2xl text-gray-400">
            I&#39;m creating this page to document my growth and what I&#39;ve
            learned
            <br /> as a software developer
          </h3>
        </div>
        <div className="align-center mt-4 flex flex-row justify-center gap-4">
          <button className=" rounded-lg bg-blue-700 px-7 py-4 text-white">
            <Link href="/dashboard">Learn More</Link>
          </button>
          <button>
            <Link href="/dashboard">GitHub</Link>
            <ThemeSwitch />
          </button>
        </div>
      </div>
    </div>
  );
}
