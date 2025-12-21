import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Features } from "./components/features";
import Footer from "./components/footer";
import WaitlistForm from "./components/waitlistform";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/20 font-lexend">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
