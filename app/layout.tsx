import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Alexander Watson Counselling | Greater Manchester & Online";
const description = "Thoughtful, honest counselling for adults who understand themselves in theory but still feel stuck underneath. Based in Greater Manchester and working online.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexanderwatsoncounselling.co.uk"),
  title,
  description,
  applicationName: "Alexander Watson Counselling",
  authors: [{ name: "Alexander Watson" }],
  creator: "Alexander Watson",
  category: "Counselling",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Alexander Watson Counselling",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/alexander-watson-counsellor-hero.webp",
        width: 1448,
        height: 1086,
        alt: "Alexander Watson seated in a calm counselling room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/alexander-watson-counsellor-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe7",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
