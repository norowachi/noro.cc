"use client";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, useEffect, useState } from "react";

export default function ShowProjects(props: { input: any }) {
	const item = props.input as {
		name: string;
		description: string;
		demo?: { url: string; target?: HTMLAttributeAnchorTarget };
		repo?: { url: string; target?: HTMLAttributeAnchorTarget };
		status: "active" | "paused" | "discontinued" | "unknown";
	};

	const [smolScreen, setSmolScreen] = useState(false);

	useEffect(() => {
		setSmolScreen(window.innerWidth <= 450);
		window.addEventListener("resize", () => {
			setSmolScreen(window.innerWidth <= 450);
		});
	}, []);

	return (
		<div
			className={`rounded-md border-2 border-black dark:border-white project-card ${
				item.status
			} ${smolScreen ? "cursor-pointer" : ""}`}
			onClick={() => {
				if (smolScreen) window.open(item.demo?.url || item.repo?.url);
				return;
			}}
		>
			<span className={`pb-4 font-semibold text-lg`}>{item.name}</span>
			<p className="text-md">{item.description}</p>
			<div className="mt-2 flex flex-row justify-evenly">
				{item.demo && (
					<Link
						target={item.demo.target || "_blank"}
						href={item.demo.url}
						className="obj-scale"
					>
						<Image
							src="/svg/earth.svg"
							alt="Earth SVG"
							width={24}
							height={24}
						/>
					</Link>
				)}
				{item.repo && (
					<Link
						target={item.repo.target || "_blank"}
						href={item.repo.url}
						className="obj-scale"
					>
						<Image
							src="/svg/github.svg"
							alt="Github SVG"
							width={24}
							height={24}
						/>
					</Link>
				)}
			</div>
		</div>
	);
}
