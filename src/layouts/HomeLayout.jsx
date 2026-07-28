
import Hero from "../components/Hero";

export default function HomeLayout({ children }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
