"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
	const { setTheme, systemTheme, theme } = useTheme();

	return (
		<Button
			size="icon"
			onClick={() =>
				setTheme(
					// if theme is system, check system and switch it
					theme === "system"
						? systemTheme === "dark"
							? "light"
							: "dark"
						: // if not check current theme and switch it
						theme === "dark"
						? "light"
						: "dark"
				)
			}
			className="border-2 border-black dark:border-white rounded-md p-1 bg-white dark:bg-black text-black dark:text-white transition-colors duration-150 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
