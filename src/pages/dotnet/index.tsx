import SideMenu from "~/components/SideMenu";

export default function Dotnet() {
  return (
    <>
      <div className="mx-[2rem] mt-10 flex min-h-screen flex-row items-start justify-start sm:mx-0">
        {/* Scroll Area */}
        <div className="flex flex-col">
          <h2 className="mb-4 font-semibold">.NET Development</h2>
          <SideMenu data={links} />
        </div>
      </div>
    </>
  );
}

const links = [
  {
    name: "Endpoints",
    href: "/",
  },
  {
    name: "Authorization",
    href: "/",
  },
  {
    name: "REST API",
    href: "/",
  },
  {
    name: "Email service",
    href: "/",
  },
  {
    name: "Internationalization",
    href: "/",
  },
  {
    name: "Best practices",
    href: "/",
  },
];
