import "./globals.css";

export const metadata = {
  title: "Weather Now",
  description: "Weather in {Todo: Montevideo}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto">
        {children}
        <div className="bg-orange-200">
          <div>I am footer</div>
          <div>i am config icon </div>
        </div>
      </body>
    </html>
  );
}
