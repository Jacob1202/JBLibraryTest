"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  return <button onClick={() => setTheme("dark")}>Dark mode</button>;
}
