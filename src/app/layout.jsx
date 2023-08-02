import '@/styles/globals.sass';
import "@/styles/main.sass";
import { Header, Footer } from "@/components/ui";

import { notoSansTC, chelaOne } from "@/lib/fonts"

export const metadata = {
  title: "Jasper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansTC.variable} ${chelaOne.variable}`}>
        <Header navOptionsData/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
