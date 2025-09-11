import Header from "@/components/Header";
import "./globals.css";
import { fetchSiteSettings } from "@/lib/api";


export const metadata = {
  title: "Brew & Beyond",
  description: "Stories & Rituals Around the Perfect Cup",
};

export default async function RootLayout({ children }) {
  const settings = await fetchSiteSettings();
   
  return (
    <html lang="en">
      <body>
        <Header logo={settings.logo}/>
        {children}
      </body>
    </html>
  );
}
