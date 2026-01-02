import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/20 font-lexend">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
