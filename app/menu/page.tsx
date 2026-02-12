export const metadata = {
  title: "Menu | The Big Board Washington DC",
  description:
    "View the full food menu for The Big Board located at 421 H St NE Washington DC.",
};

export default function MenuPage() {
  const sectionStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
  };

  const sectionHeader = {
    fontSize: "28px",
    marginTop: "50px",
    marginBottom: "20px",
    borderBottom: "2px solid #111",
    paddingBottom: "8px",
  };

  const itemContainer = {
    padding: "14px 0",
    borderBottom: "1px solid #eee",
  };

  const itemTitleStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 600,
    fontSize: "18px",
  };

  const descriptionStyle = {
    marginLeft: "20px",
    marginTop: "6px",
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Food Menu
          import Image from "next/image";
        </h1>

        <a
          href="https://www.ubereats.com/store/the-big-board-421-h-st-ne/QamoMbACXcyVGG2TQRjdBQ?diningMode=DELIVERY&ps=1&surfaceName="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "black",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Order Online with Uber Eats
        </a>
      </section>
  <div
  style={{
    marginTop: "40px",
    display: "flex",
    justifyContent: "center"
  }}
>
  <Image
    src="/menu-hero.jpg"
    alt="The Big Board Food"
    width={1000}
    height={600}
    style={{
      width: "100%",
      maxWidth: "900px",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
    }}
  />
</div>

      <div style={sectionStyle}>
        {/* STARTERS */}
        <h2 style={sectionHeader}>Starters</h2>

        <MenuItem
          name="Chicken Wings"
          price="$14.00"
          description="Choose from Buffalo, Habanero BBQ, Kung Pao, Honey Mustard BBQ or Old Bay Rub. Served with blue cheese sauce or ranch. Extra sauces 25¢ ea."
        />

        <MenuItem
          name="Hummus Plate"
          price="$12.00"
          description="Served with pretzels, cucumbers and tomatoes."
        />

        <MenuItem
          name="Catfish Bites"
          price="$14.00"
          description="Seasoned & deep fried. Served with sweet & spicy chili sauce."
        />

        <MenuItem
          name="Fried Pickles (sm/lg)"
          price="$7.00 / $11.00"
          description="Battered pickle slices deep fried with harissa aioli."
        />

        <MenuItem
          name="Mozzarella Sticks"
          price="$12.00"
          description="Crispy herb-battered mozzarella with marinara."
        />

        {/* SALADS */}
        <h2 style={sectionHeader}>Entrée Salads</h2>

        <MenuItem
          name="Grilled Salmon Salad"
          price="$18.00"
          description="Atlantic salmon over mixed greens with cucumber, tomato, & onion."
        />

        <MenuItem
          name="Beef Burger Salad"
          price="$15.50"
          description="Grilled beef burger over mixed greens with smoked bacon, cucumber, tomato, & onion."
        />

        <MenuItem
          name="Chicken Breast Salad"
          price="$14.50"
          description="Chicken breast (crispy or grilled) over mixed greens with cucumber, tomato, & onion."
        />

        {/* BURGERS */}
        <h2 style={sectionHeader}>Burgers</h2>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          All burgers are 100% all-natural beef. Potato–sesame buns baked fresh
          from Gold Crust Bakery. Ask about our gluten free options!
        </p>

        <MenuItem
          name="Port d’Amsterdam (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Sautéed cremini mushrooms, port reduction, & aged Swiss."
        />

        <MenuItem
          name="Ciao Bella (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Sliced prosciutto, mozzarella, roasted red pepper, & sweet red pepper aioli."
        />

        <MenuItem
          name="Le Burg-aire au Poivre (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Seared with cracked black pepper, topped with blue cheese & a cognac cream sauce."
        />

        <MenuItem
          name="The Big Apple (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Topped with applewood-smoked bacon, American cheese, sliced tomato, & pickles."
        />

        <MenuItem
          name="Memphis Blues 3.0 (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Provolone cheese, house barbecue sauce, & crispy steak cut onion rings."
        />

        <MenuItem
          name="The Great Chicago Fire (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Chipotle-dusted burger topped with fire-roasted chili & mango salsa, pepper jack cheese, & chipotle aioli. Served with mango-habanero sauce. (SPICY)"
        />

        <MenuItem
          name="Quebec City (6oz / 8oz)"
          price="$12.99 / $15.50"
          description="Crispy hand-cut French fries, brown gravy, & melted cheese curds."
        />

        <MenuItem
          name="Build Your Own Burger (6oz / 8oz)"
          price="$11.00 / $13.00"
          description="Choose from our toppings and call it whatever you like! Served with lettuce, tomato, onion, & pickles."
        />

        <p style={{ marginTop: "40px", fontSize: "14px", color: "#777" }}>
          *Consuming raw or undercooked animal proteins may increase the risk
          of foodborne illness.
        </p>
      </div>
    </main>
  );
}

/* Reusable Menu Item Component */

function MenuItem({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description?: string;
}) {
  return (
    <div style={{ padding: "14px 0", borderBottom: "1px solid #eee" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        <span>{name}</span>
        <span>{price}</span>
      </div>

      {description && (
        <div
          style={{
            marginLeft: "20px",
            marginTop: "6px",
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
