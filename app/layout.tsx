import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Big Board | Washington DC",
  description:
    "Classic American Fare & Craft Beer at 421 H St NE Washington DC 20002",
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
          <Link href="/">
            <Image
              src="/logo.png"
              alt="The Big Board Logo"
              width={200}
              height={80}
              priority
            />
          </Link>

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
