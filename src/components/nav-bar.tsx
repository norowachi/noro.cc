"use client";
import ModeToggle from "@/components/theme-toggle";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuCheckboxItem,
	ContextMenuItem,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [mounted] = useState(true);
	const [oneko, setOneko] = useState(false);

	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		setOneko(localStorage.getItem("oneko") === "on");
	}, []);

	useEffect(() => {
		if (!oneko) {
			document.getElementById("oneko")?.remove();
			document.getElementById("oneko-script")?.remove();
		} else {
			const NekoScript = document.createElement("script");
			NekoScript.src = "/oneko/oneko.js";
			NekoScript.id = "oneko-script";
			document.body.appendChild(NekoScript);
		}
	}, [oneko]);

	return (
		mounted && (
			<ContextMenu>
				<ContextMenuTrigger>
					<div className="flex flex-wrap place-items-center mb-3 max-h-12">
						<nav className="flex justify-between w-screen border-b-black border-b-2 dark:border-b-white">
							<div className="px-5 flex w-full items-center">
								<ul className="flex mr-auto font-semibold font-heading space-x-4">
									<li
										className={`p-4 ${
											pathname == "/" ? "active-path" : "obj-scale"
										}`}
										onClick={() => router.push("/")}
										onMouseEnter={() => router.prefetch("/")}
									>
										Home
									</li>
									<li className="border-l-2 border-black dark:border-white" />
									<li
										className={`p-4 ${
											pathname.startsWith("/gitbot")
												? "active-path"
												: "obj-scale"
										}`}
										onClick={() => router.push("/gitbot")}
										onMouseEnter={() => router.prefetch("/gitbot")}
									>
										Gitbot
									</li>
									<li className="border-l-2 border-black dark:border-white" />
								</ul>
								<ModeToggle />
							</div>
						</nav>
					</div>
				</ContextMenuTrigger>
				<ContextMenuContent className="bg-white dark:bg-black text-black dark:text-white border-black dark:border-white hover:*:!bg-black hover:*:!text-white dark:hover:*:!bg-white dark:hover:*:!text-black">
					<ContextMenuItem disabled>
						Grats! You found the hidden menu!
					</ContextMenuItem>
					<ContextMenuCheckboxItem
						checked={oneko}
						id="oneko-toggler"
						onCheckedChange={(value) => {
							setOneko(value);
							localStorage.setItem("oneko", value ? "on" : "off");
						}}
					>
						Oneko
					</ContextMenuCheckboxItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	);
}
