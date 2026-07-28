import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

function HomePage() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const page = document.querySelector(".page");
      if (!page) return;

      const pageTop = page.getBoundingClientRect().top;
      setShowStickyNav(pageTop <= 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Hero />
      <Navbar className={showStickyNav ? "navbar-fixed" : "navbar-hidden"} />
      <HomeContent />
    </>
  );
}

export default HomePage;
