import { Metadata } from "next";

export const metadata: Metadata = {
	title: { template: "%s | Gitbot", absolute: "Gitbot" },
	description: "A Discord Bot integrated with the GitHub API",
	icons: "/images/git-logo.png",
	twitter: {
		card: "summary",
		images: `${process.env.NEXT_PUBLIC_SITE_URL}/images/git-logo.png`,
	},
};

export default function GitbotLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
