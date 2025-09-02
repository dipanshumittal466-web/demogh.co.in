import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mittal Electricals — Premium Electrical Services",
  description: "Modern 2025 website for an electrical contractor: residential, commercial, and industrial projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
