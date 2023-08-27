import { StackIcon } from "@radix-ui/react-icons";

type DocumentationProps = {
  title: string;
  data?: {
    id: number;
    sectionTitle: string;
    sectionText: string;
  }[];
};

export default function Documentation({ title, data }: DocumentationProps) {
  return (
    <div className="flex w-full flex-col px-4">
      <h1 className="text-2xl font-semibold sm:text-4xl">{title}</h1>
      <div className="flex w-full flex-col gap-6">
        {data?.map((section) => (
          <div key={section.id}>
            <div className="my-2 flex flex-row items-center gap-4 border-b-2 py-2 text-lg font-semibold sm:text-2xl">
              <StackIcon className="text-blue-700" />
              <p>{section.sectionTitle}</p>
            </div>
            <div className="text-md text-justify">{section.sectionText}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
