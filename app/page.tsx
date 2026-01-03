import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/home-hero";
export default function Home() {
  return (
    <div className="bg-[#1F2937]">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
