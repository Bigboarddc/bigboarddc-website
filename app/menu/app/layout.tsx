export const metadata = {
  title: "The Big Board | Washington DC",
  description: "Classic American Fare & Craft Beer at 421 H St NE Washington DC"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
