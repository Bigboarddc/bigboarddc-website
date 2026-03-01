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
            width: "50%",
            maxWidth: "500px",
            opacity: 0.08,
            filter: "invert(1)",
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

          <Link
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
          </Link>
        </div>
      </section>


{/* Hours Section */}
<section
  style={{
    padding: "80px 20px",
    background: "#f8f8f8",
    textAlign: "center"
  }}
>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "32px", marginBottom: "60px" }}>
      Hours
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "600px",
        margin: "0 auto",
        gap: "120px"
      }}
    >
      {/* Bar Hours */}
      <div>
        <h3 style={{ marginBottom: "25px" }}>Bar</h3>

        {[
          ["Mon", "5pm–12am"],
          ["Tue", "5pm–12am"],
          ["Wed", "5pm–12am"],
          ["Thu", "5pm–12am"],
          ["Fri", "5pm–1am"],
          ["Sat", "5pm–1am"],
          ["Sun", "5pm–12am"],
        ].map(([day, hours]) => (
          <div
            key={day}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 120px",
              justifyContent: "center",
              marginBottom: "6px"
            }}
          >
            <span>{day}</span>
            <span style={{ textAlign: "right" }}>{hours}</span>
          </div>
        ))}
      </div>

      {/* Kitchen Hours */}
      <div>
        <h3 style={{ marginBottom: "25px" }}>Kitchen</h3>

        {[
          ["Mon", "5pm–10pm"],
          ["Tue", "5pm–10pm"],
          ["Wed", "5pm–10pm"],
          ["Thu*", "5pm–10pm"],
          ["Fri*", "5pm–10pm"],
          ["Sat*", "12pm–10pm"],
          ["Sun", "12pm–10pm"],
        ].map(([day, hours]) => (
          <div
            key={day}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 120px",
              justifyContent: "center",
              marginBottom: "6px"
            }}
          >
            <span>{day}</span>
            <span style={{ textAlign: "right" }}>{hours}</span>
          </div>
        ))}
      </div>
    </div>

    <p
      style={{
        marginTop: "40px",
        fontSize: "14px",
        color: "#555"
      }}
    >
      *Smaller late night menu available from 10:30pm – 12:30am
    </p>
  </div>
</section>
{/* TV Packages Section */}
<section
  style={{
    padding: "80px 20px",
    background: "#f8f8f8",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
    Sports & TV Packages
  </h2>

  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      fontSize: "18px"
    }}
  >
    <div>NFL Sunday Ticket</div>
    <div>SEC Network</div>
    <div>MLB Extra Innings</div>
    <div>B1G Ten Network</div>
    <div>MASN</div>
    <div>
      Direct TV Sports Package  
      <div style={{ fontSize: "14px", marginTop: "5px", color: "#555" }}>
        (ESPN, ESPN2, ESPNU, FS1, CBSSN, ESPN+)
      </div>
      <div style={{ fontSize: "14px", color: "#555" }}>
        Call for ESPN+ Availability
      </div>
    </div>
  </div>
</section>

   {/* Location Section */}
<section style={{ padding: "80px 20px", textAlign: "center" }}>
  <h2 style={{ fontSize: "32px" }}>Visit Us</h2>
  <p style={{ fontSize: "18px", marginBottom: "10px" }}>
    421 H St NE, Washington, DC 20002
  </p>
  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
    202-543-3630
  </p>
</section>

    </main>
  );
}
