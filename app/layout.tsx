import Image from "next/image";
import Link from "next/link";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
});



export const metadata = {
  title: "The Big Board | Washington DC",
  description:
    "Classic American Fare & Craft Beer at 421 H St NE Washington DC 20002",
  verification: {
    google: "LgRFdm8v7Wi_WtM56LV8VxnpTcXIeTD6g3xO3Oefvg4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* Global Header */}
<header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eaeaea",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <Link href="/">
      <Image
        src="/logo.png"
        alt="The Big Board Logo"
        width={70}
        height={70}
        priority
      />
    </Link>

    <Link
  href="/"
  className={oswald.className}
  style={{
    fontSize: "54px",
    fontWeight: "800",
    textDecoration: "none",
    color: "black",
    letterSpacing: "2px"
  }}
>
  The Big Board
</Link>


  </div>

  <nav style={{ display: "flex", gap: "30px", fontWeight: "bold" }}>
    <Link href="/">Home</Link>
    <Link href="/menu">Menu</Link>
    <a
      href="https://www.ubereats.com/store/the-big-board-421-h-st-ne/QamoMbACXcyVGG2TQRjdBQ?diningMode=DELIVERY&ps=1&surfaceName="
      target="_blank"
      rel="noopener noreferrer"
    >
      Order Online
    </a>
  </nav>
</header>

        {children}

      </body>
    </html>
  );
}
