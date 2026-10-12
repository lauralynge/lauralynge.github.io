import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar sticky />
      {children}
      <Footer />
    </>
  );
}
