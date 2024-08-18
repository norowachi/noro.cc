import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s@norowa.dev",
		default: "root",
	},
	icons: "/favicon.ico",
};

export default function TerminalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
