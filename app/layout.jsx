import Nav from "@/components/Nav";
import "@/style/global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-BackgroundColor text-textColor font-Humanist">
        <main className="">
          <Nav />
          <div className="pt-[80px] md:px-20 md:pt-0 z-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
