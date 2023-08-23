/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function HeaderMenu() {
  return (
    <div className="w-[320px]">
      <NavigationMenu.Root className="relative z-[1] flex w-full justify-center">
        <NavigationMenu.List className="center m-0 flex list-none p-1">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" text-md group flex select-none items-center justify-between gap-1 rounded-sm px-3 py-2 font-medium leading-none outline-none">
              Documentation{" "}
              <CaretDownIcon
                className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full bg-red-500 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <ul className="one m-0 flex grid list-none flex-col gap-x-[10px] p-3 sm:w-[500px]">
                <li>Hello</li>
                <li>Goodbye</li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" text-md group flex select-none items-center justify-between gap-1 rounded-sm px-3 py-2 font-medium leading-none outline-none">
              Design{" "}
              <CaretDownIcon
                className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full bg-red-500 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <ul className="one m-0 flex grid list-none flex-col gap-x-[10px] p-3 sm:w-[500px]">
                <li>Hello</li>
                <li>Goodbye</li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" text-md group flex select-none items-center justify-between gap-1 rounded-sm px-3 py-2 font-medium leading-none outline-none">
              Contact{" "}
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
