import Link from "next/link";

export default function HomePage() {
  return (
    <main>

     {/* Hero Section */}
<section
  style={{
    position: "relative",
    background: "#111",
    color: "white",
    padding: "140px 20px",
    textAlign: "center",
    overflow: "hidden"
  }}
>
  {/* Watermark Logo */}
  <img
    src="/logo.png"
    alt="Watermark Logo"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      opacity: 0.12,
      pointerEvents: "none"
    }}
  />

  <div style={{ position: "relative", zIndex: 2 }}>
    <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
      Classic American Fare
    </h1>
    <p style={{ fontSize: "22px", marginBottom: "40px" }}>
      Burgers • Craft Beer • Washington DC
    </p>

    <a
      href="/menu"
      style={{
        background: "white",
        color: "black",
        padding: "14px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      View Menu
    </a>
  </div>
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
