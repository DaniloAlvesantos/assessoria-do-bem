import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const DEFAULT_URL = "https://assessoria-do-bem-design.netlify.app";
const DEFAULT_DESCRIPTION = "";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assessoria do bem",
  description: DEFAULT_DESCRIPTION,
  keywords: [],
  robots: "index follow",
  alternates: {
    canonical: DEFAULT_URL,
    languages: {
      "pt-BR": DEFAULT_URL,
    },
  },
  openGraph: {
    title: "Assessoria do bem",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_URL + "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Assessoria do bem Logo",
      },
    ],
    type: "website",
    siteName: "Assessoria do bem",
    url: DEFAULT_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Assessoria do bem",
    description: "",
    images: [DEFAULT_URL + "/LOGO.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
  },
  other: {
    "application-name": "Assessoria do bem",
  },
  authors: [{ name: "Assessoria do bem" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${fontPoppins.variable} ${fontMontserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
