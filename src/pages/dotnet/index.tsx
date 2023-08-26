import SideMenu from "~/components/SideMenu";

export default function Dotnet() {
  return (
    <>
      <div className="flex-row mt-10 flex min-h-screen items-start justify-start">
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
