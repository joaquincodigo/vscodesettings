import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weights: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Weather Now",
  description: "Weather in {Todo: Montevideo}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        {children}
        <div className="bg-orange-200">
          I am footer
          <div>i am config icon </div>
        </div>
      </body>
    </html>
  );
}
