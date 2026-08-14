import Hero from "../components/Hero";
import HomeFooter from "../components/HomeFooter";

export default function HomeLayout({ children }) {
  return (
    <>
      <Hero />
      {children}
      <HomeFooter />
    </>
  );
}