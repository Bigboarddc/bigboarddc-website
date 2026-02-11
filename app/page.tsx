export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <section
        style={{
          background: "#111",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          The Big Board
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Classic American Fare & Craft Beer
        </p>
        <a
          href="/menu"
          style={{
            background: "white",
            color: "black",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          View Menu
        </a>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Visit Us</h2>
        <p>421 H St NE</p>
        <p>Washington, DC 20002</p>
      </section>
    </main>
  );
}
