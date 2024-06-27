import "../styles/global.css";

export const metadata = {
  title: "Billionaires",
  description: "NomadCoders Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white py-10 h-[100vh]">{children}</body>
    </html>
  );
}
