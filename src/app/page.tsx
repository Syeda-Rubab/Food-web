import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Survey from "./components/Survey";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature/>
      <Services/>
      <Menu />
      <Survey />
    </div>
    
  );
}
