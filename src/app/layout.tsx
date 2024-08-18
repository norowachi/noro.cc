import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "next-themes";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Noro",
		default: "Noro",
	},
	icons: "/favicon.ico",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-all duration-500`}
			>
				<ThemeProvider attribute="class">
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
