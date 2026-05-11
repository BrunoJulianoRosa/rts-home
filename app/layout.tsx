import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roadmap to Success | AI Sherpa for Small Business",
  description:
    "Business ownership is a series of mountains. Your RTS AI Sherpa Guide gives you the skills to scale safely, stay on track, and reach every basecamp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
