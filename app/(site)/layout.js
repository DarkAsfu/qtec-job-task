import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Quick Hire",
  description: "A streamlined job application platform connecting job seekers with employers for a faster, more efficient hiring process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
