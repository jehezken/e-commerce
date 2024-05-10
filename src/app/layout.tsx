import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/styles/globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "...................................",
	description: "...................................",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={jost.className}>{children}</body>
		</html>
	);
}
