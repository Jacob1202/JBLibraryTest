import Documentation from "~/components/Documentation";
import SideMenu from "~/components/SideMenu";
import { dataML } from "~/content/ml";

export default function Dotnet() {
  return (
    <>
      <div className="mt-16 flex min-h-screen flex-row flex-wrap items-start justify-start gap-8 px-4 sm:flex-nowrap sm:px-0">
        {/* Scroll Area */}
        <div className="flex flex-col">
          <SideMenu data={links} />
        </div>
        {/* Documentation content */}
        <Documentation title={"Machine Learning Library"} data={dataML} />
      </div>
    </>
  );
}

const links = [
  {
    name: "Linear Regression",
    href: "/",
  },
  {
    name: "ROC",
    href: "/",
  },
];
