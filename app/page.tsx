import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
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

      {/* Hero Section */}
      <section
        style={{
          background: "#111",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
          Classic American Fare
        </h1>
        <p style={{ fontSize: "22px", marginBottom: "40px" }}>
          Burgers • Craft Beer • Washington DC
        </p>

        <Link
          href="/menu"
          style={{
            background: "white",
            color: "black",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Menu
        </Link>
      </section>

      {/* Location Section */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>Visit Us</h2>
        <p style={{ fontSize: "18px" }}>
          421 H St NE, Washington, DC 20002
        </p>
      </section>

    </main>
  );
}

