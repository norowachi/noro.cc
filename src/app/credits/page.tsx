import Link from "next/link";

export default function Guide() {
	return (
		<section>
			<h1 className="font-black text-4xl my-8 text-center">Credits</h1>
			<p className="text-center">
				While everything is mostly my own there are some assets that are not{" "}
				<span className="font-black">:D</span>
			</p>
			<ul className="flex justify-center list-disc">
				<li>
					<Link href="/favicon.ico" target="_blank" className="link">
						favicon
					</Link>
					{" - "}
					<Link
						href="https://twitter.com/miratsu169"
						target="_blank"
						className="link"
					>
						@miratsu169
					</Link>
				</li>
			</ul>
		</section>
	);
}
