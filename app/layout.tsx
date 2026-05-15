import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Mahalaxmi Estate | Premium 2 & 3 BHK Flats in Nagpur",
  description: "Mahalaxmi Estate — Premium 2 BHK & 3 BHK luxury flats in Nagpur. Projects at Subhash Nagar, Besa, Ambazhari. NAREDCO certified developer. Book at ₹51,000.",
  keywords: "2 BHK flats Nagpur, 3 BHK flats Nagpur, Mahalaxmi Estate, flats in Subhash Nagar Nagpur, luxury apartments Nagpur, Besa Ghogli flats, property in Nagpur",
  openGraph: {
    title: "Mahalaxmi Estate | Premium Flats in Nagpur",
    description: "Trusted real estate developer in Nagpur. 2 & 3 BHK luxury flats. Book now at ₹51,000.",
    type: "website",
    url: "https://mahalaxmiestate.com",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${montserrat.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
