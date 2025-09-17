import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Brew & Beyond",
  description: "Stories & Rituals Around the Perfect Cup",
};

export default async function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
