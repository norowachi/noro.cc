import Image from "next/image";
import Link from "next/link";

export default function GitbotHome() {
	return (
		<>
			<div className="flex justify-center items-center mt-10 p-[2%]">
				<div className="float-left invert dark:invert-0">
					<Image
						src="/images/git-logo.png"
						alt="Git Logo"
						width={128}
						height={128}
						className="w-auto h-auto rounded-full"
						priority={true}
					/>
				</div>
				<div className="flex flex-col items-center justify-evenly px-2">
					<h1 className="text-4xl font-bold">Gitbot</h1>
					<p className="text-lg font-semibold">
						A Discord Bot integrated with the GitHub API
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center mt-8 text-lg">
				<span className="text-2xl font-black">Useful Links</span>
				<ul className="grid grid-cols-2 justify">
					{/* show all links */}
					{Links().map((item) => {
						return (
							<li key={item.name}>
								<Link
									href={item.link}
									target={item.blank ? "_blank" : ""}
									className="link"
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="mt-12">
					<iframe
						src="https://github.com/sponsors/Noro95/button"
						title="Sponsor Noro95"
						height="32"
						width="115"
						className="border-0 rounded-md"
					></iframe>
				</div>
			</div>
		</>
	);
}

function Links() {
	return [
		{
			name: "Terms of Service",
			link: "/gitbot/terms",
			blank: false,
		},
		{
			name: "Privacy Policy",
			link: "/gitbot/privacy",
			blank: false,
		},
		{
			name: "Invite Gitbot",
			link: "/gitbot/invite",
			blank: true,
		},
		{
			name: "GitHub Repository",
			link: "https://github.com/Noro95/gitbot",
			blank: true,
		},
		{
			name: "Support Server",
			link: "/discord",
			blank: true,
		},
		{
			name: "Usage Guide",
			link: "/gitbot/guide",
			blank: false,
		},
		// {
		// 	name: "Documentation",
		// 	link: "#",
		// },
		// {
		// 	name: "Changelog",
		// 	link: "/gitbot/changelog",
		// },
	];
}
