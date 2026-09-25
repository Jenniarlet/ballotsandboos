import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ballots & Booze — The Horrors of Not Voting",
  description: "A playful, nonpartisan introduction to your Hawaii ballot.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
