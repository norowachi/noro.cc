import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";

export const metadata = {
	title: "Noro",
};

export default function Home() {
	return (
		<>
			<div className="flex justify-evenly items-center pt-8">
				<div className="float-left dark:invert">
					<Image
						src="/images/noro-avatar.png"
						alt="Noro's Avatar"
						width={128}
						height={128}
						className="w-auto h-auto rounded-full"
						priority={true}
					/>
				</div>
				<div className="flex flex-col items-center justify-evenly p-4">
					<h1 className="text-4xl font-bold">Hi, I&#39;m Noro!</h1>
					<p className="text-lg font-semibold">A self-taught lil developer</p>
				</div>
			</div>
			<h2 className="text-2xl font-bold text-center">Projects</h2>
			<section className="projects-section mt-8">
				{ReturnProjects().map((item) => {
					return <ProjectCard input={item} key={item.name} />;
				})}
				{/* <p className="projects-color-guide text-center p-4">
					<span className="font-semibold text-lg">color guide:</span>
					<br />
					<span className="active">active</span>
					<br />
					<span className="paused">paused</span>
					<br />
					<span className="discontinued">discontinued</span>
					<br />
					<span className="unknown">unknown</span>
				</p> */}
			</section>
			<Link
				className="fixed bottom-3 right-2 p-3 cursor-help bg-white dark:bg-black border-2 border-dotted border-black dark:border-white rounded-md hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black hover:border-solid transition-all duration-700 hover:animate-pulse focus:animate-ping"
				href="/credits"
			>
				Credits
			</Link>
		</>
	);
}

function ReturnProjects(): {
	name: string;
	description: string;
	demo?: { url: string; target?: HTMLAttributeAnchorTarget };
	repo?: { url: string; target?: HTMLAttributeAnchorTarget };
	status: "active" | "paused" | "discontinued" | "unknown";
}[] {
	return [
		{
			name: "Menherachan Bot",
			description: "A multipurpose discord bot made with OpenianDev",
			demo: {
				url: "https://discord.com/oauth2/authorize?client_id=731143954032230453&scope=bot%20applications.commands",
			},
			repo: { url: "https://github.com/OpenianDevelopment/Menhera-Chan" },
			status: "paused",
		},
		{
			name: "Menherachan Dashboard",
			description: "A dashboard for Menherachan Bot",
			// demo: "https://menherachan.norowa.dev/",
			status: "unknown",
		},
		{
			name: "CDNE (next)",
			description:
				"little fuzzy/linear local image search site by route in nextjs",
			demo: { url: "https://cdne.norowa.dev/" },
			repo: { url: "https://github.com/Noro95/cdne/tree/next" },
			status: "active",
		},
		{
			name: "CDNE (vue)",
			description: "little fuzzy/linear local image search site by UI in vue",
			demo: { url: "https://cdne.pages.dev" },
			repo: { url: "https://github.com/Noro95/cdne/tree/vue" },
			status: "active",
		},
		{
			name: "Gitbot",
			description:
				"A Bot that integrates Github's Actions and API with Discord's commands",
			demo: { url: "/gitbot", target: "_self" },
			repo: { url: "https://github.com/Noro95/gitbot" },
			status: "active",
		},
		// always last
		{
			name: "You can see my other repos on github",
			description: "just press the button below",
			repo: { url: "https://github.com/Noro95?tab=repositories" },
			status: "active",
		},
	];
}
