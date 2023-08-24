import HeroSection from "~/components/HeroSection";
import InfoSection from "~/components/InfoSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HeroSection />
        <InfoSection />
      </main>
    </>
  );
}
