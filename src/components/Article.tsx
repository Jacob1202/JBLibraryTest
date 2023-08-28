import { StackIcon } from "@radix-ui/react-icons";

type DocumentationProps = {
  title: string;
  data?: {
    id: number;
    sectionTitle: string;
    sectionText: string;
  }[];
};

export default function Article() {
  return (
    <div className="flex w-full flex-col pl-4">
      <h1 className="text-2xl font-semibold sm:text-4xl"></h1>
      <div className="flex w-full flex-col gap-6"></div>
    </div>
  );
}
