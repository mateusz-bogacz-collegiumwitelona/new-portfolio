import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-[#1F2937]">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen  text-[#E5E7EB]"></main>
      <Footer />
    </div>
  );
}
