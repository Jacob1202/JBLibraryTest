import Link from "next/link";
import WelcomeText from "./WelcomeText";

export default function HeroSection() {
  return (
    <div>
      <div className="mt-40 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <WelcomeText />
          <h1 className="text-6xl font-semibold">I&#39;m Jakub</h1>
        </div>
        <div className="text-center">
          <h3 className="-translate-y-7 text-6xl font-semibold leading-[90px]">
            and this is my documentation
          </h3>
          <h3 className="-translate-y-7  text-2xl  text-gray-400 dark:text-gray-500">
            I&#39;m creating this page to document my growth and what I&#39;ve
            learned.
            <br /> Study concepts and implementation with me.
          </h3>
        </div>
        <div className="align-center flex flex-row justify-center gap-4">
          <button className="rounded-md bg-black px-7 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black">
            Learn More
          </button>
          <button className="rounded-md border-2 border-black px-10 py-3 text-sm font-semibold text-black dark:border-white dark:text-white">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
