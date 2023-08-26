import * as ScrollArea from "@radix-ui/react-scroll-area";

type SideMenuProps = {
  data: { name: string; href: string }[];
};

export default function SideMenu({ data }: SideMenuProps) {
  return (
    <ScrollArea.Root className="h-[500px] w-[200px] overflow-hidden bg-gray-100 dark:bg-zinc-800">
      <ScrollArea.Viewport className="h-full w-full">
        <div className="px-5 py-4">
          <div className="text-md font-medium">Web API</div>
          {data.map((item) => (
            <div className="mt-2.5 border-t pt-2.5 text-sm" key={item.name}>
              {item.name}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
