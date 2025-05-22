import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
