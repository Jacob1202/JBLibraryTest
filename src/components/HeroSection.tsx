import WelcomeText from "./WelcomeText";

export default function HeroSection() {
  return (
    <div>
      <div className="mt-40 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <WelcomeText />
          <h1 className="font-semibold sm:text-3xl md:text-6xl">
            I&#39;m Jakub
          </h1>
        </div>
        <div className="text-center">
          <h3 className="-translate-y-7 font-semibold leading-[90px] sm:text-3xl md:text-6xl">
            and this is my documentation
          </h3>
          <h3 className="text-md -translate-y-4 text-gray-400 dark:text-gray-500  sm:text-lg md:text-2xl">
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
