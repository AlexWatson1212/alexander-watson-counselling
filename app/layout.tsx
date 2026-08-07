import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexanderwatsoncounselling.co.uk"),
  title: "Alexander Watson Counselling",
  description: "Thoughtful, honest counselling in Greater Manchester and online for adults who understand themselves in theory but still feel stuck underneath.",
  applicationName: "Alexander Watson Counselling",
  authors: [{ name: "Alexander Watson" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alexander Watson Counselling",
    description: "You do not need a better explanation before counselling can begin.",
    url: "/",
    siteName: "Alexander Watson Counselling",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f4ef", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
