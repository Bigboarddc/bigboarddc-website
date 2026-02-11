export const metadata = {
  title: "Menu | The Big Board Washington DC",
  description:
    "View the full food menu for The Big Board located at 421 H St NE Washington DC."
};

export default function MenuPage() {
  const sectionStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px"
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "42px" }}>Food Menu</h1>
        <a
          href="https://www.ubereats.com/store/the-big-board-421-h-st-ne/QamoMbACXcyVGG2TQRjdBQ?diningMode=DELIVERY&ps=1&surfaceName="
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "black",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Order Online with Uber Eats
        </a>
      </section>

      <div style={sectionStyle}>
        <h2>Starters</h2>
        <div style={rowStyle}><span>Chicken Wings</span><span>$14.00</span></div>
        <div style={rowStyle}><span>Hummus Plate</span><span>$12.00</span></div>
        <div style={rowStyle}><span>Catfish Bites</span><span>$14.00</span></div>
        <div style={rowStyle}><span>Fried Pickles (sm/lg)</span><span>$7.00 / $11.00</span></div>
        <div style={rowStyle}><span>Mozzarella Sticks</span><span>$12.00</span></div>

        <h2 style={{ marginTop: "40px" }}>Burgers</h2>
        <div style={rowStyle}><span>Port d’Amsterdam (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Ciao Bella (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>The Big Apple (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Build Your Own (6oz / 8oz)</span><span>$11.00 / $13.00</span></div>
      </div>
    </main>
  );
}
