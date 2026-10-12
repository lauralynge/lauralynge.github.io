import FeatProjectsSection from "../components/FeatProjectsSection";
import Navbar from "../components/Navbar";
import PillsSection from "../components/PillSection";

// Heroen ligger i HomeLayout. Headeren her er den faste, der først dukker op,
// når man er scrollet forbi heroen og scroller op igen
function HomePage() {
  return (
    <>
      <Navbar sticky overHero />
      <FeatProjectsSection />
      <PillsSection />
    </>
  );
}

export default HomePage;
