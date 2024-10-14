import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Coaching Tales",
	description: "The stories of female coaches in football",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
