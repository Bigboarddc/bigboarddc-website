export const metadata = {
  title: "Menu | The Big Board Washington DC",
  description:
    "View the full food menu for The Big Board located at 421 H St NE Washington DC."
};

export default function MenuPage() {
  const sectionStyle = {
    maxWidth: "900px",
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
          rel="noopener noreferrer"
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
        
        {/* Starters */}
        <h2>Starters</h2>
        <div style={rowStyle}><span>Chicken Wings</span><span>$14.00</span></div>
        <div style={rowStyle}><span>Hummus Plate</span><span>$12.00</span></div>
        <div style={rowStyle}><span>Catfish Bites</span><span>$14.00</span></div>
        <div style={rowStyle}><span>Fried Pickles (sm/lg)</span><span>$7.00 / $11.00</span></div>
        <div style={rowStyle}><span>Mozzarella Sticks</span><span>$12.00</span></div>

        {/* Sides */}
        <h2 style={{ marginTop: "40px" }}>Sides</h2>
        <div style={rowStyle}><span>Sweet Potato Fries</span><span>$7.75</span></div>
        <div style={rowStyle}><span>Hand-cut French Fries</span><span>$6.00</span></div>
        <div style={rowStyle}><span>Onion Rings</span><span>$8.00</span></div>
        <div style={rowStyle}><span>House Cole Slaw</span><span>$4.75</span></div>
        <div style={rowStyle}><span>Side Salad (sm/lg)</span><span>$5.25 / $9.25</span></div>
        <div style={rowStyle}><span>Corn on the Cob</span><span>$4.00</span></div>
        <div style={rowStyle}><span>Vegetable of the Day</span><span>$6.00</span></div>

        {/* Entrée Salads */}
        <h2 style={{ marginTop: "40px" }}>Entrée Salads</h2>
        <div style={rowStyle}><span>Grilled Salmon Salad</span><span>$18.00</span></div>
        <div style={rowStyle}><span>Beef Burger Salad</span><span>$15.50</span></div>
        <div style={rowStyle}><span>Chicken Breast Salad</span><span>$14.50</span></div>

        {/* Vegetarian */}
        <h2 style={{ marginTop: "40px" }}>Vegetarian</h2>
        <div style={rowStyle}><span>Wild Austin Rose</span><span>$12.99</span></div>
        <div style={rowStyle}><span>Casablanca</span><span>$12.99</span></div>

        {/* Chicken & Fish */}
        <h2 style={{ marginTop: "40px" }}>Chicken & Fish</h2>
        <div style={rowStyle}><span>Jalisco Frito</span><span>$13.50</span></div>
        <div style={rowStyle}><span>The Atlantic</span><span>$14.50</span></div>
        <div style={rowStyle}><span>Fried Cod</span><span>$14.50</span></div>

        {/* Burgers */}
        <h2 style={{ marginTop: "40px" }}>Burgers</h2>
        <div style={rowStyle}><span>Port d’Amsterdam (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Ciao Bella (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Le Burg-aire au Poivre (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>The Big Apple (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Memphis Blues 3.0 (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>The Great Chicago Fire (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Quebec City (6oz / 8oz)</span><span>$12.99 / $15.50</span></div>
        <div style={rowStyle}><span>Build Your Own (6oz / 8oz)</span><span>$11.00 / $13.00</span></div>

        <p style={{ fontSize: "12px", marginTop: "30px", color: "#666" }}>
          *Consuming raw or undercooked animal proteins may increase the risk of foodborne illness.
        </p>

      </div>
    </main>
  );
}
