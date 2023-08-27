import Article from "~/components/Article";
import { dataML } from "~/content/ml";

export default function Dotnet() {
  return (
    <>
      <div className="mt-16 flex min-h-screen flex-col items-start justify-start gap-8 px-4 sm:px-0">
        <Article title={"Machine Learning Library"} data={dataML} />
      </div>
    </>
  );
}
