import "@/styles/main.sass";

import { Header, Footer } from "@/components/ui";

export const metadata = {
  title: "Jasper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header navOptionsData/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
