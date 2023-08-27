import Documentation from "~/components/Article";

export default function Dotnet() {
  return (
    <>
      <div className="mt-16 flex min-h-screen flex-row items-start justify-start px-4 sm:px-0">
        {/* Scroll Area */}
        {/* Documentation content */}
        <Documentation title={".NET development"} />
      </div>
    </>
  );
}
