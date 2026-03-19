import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      
      {/* Section Tambahan */}
      <section className="py-40 px-10 text-center">
        <h2 className="text-3-xl font-light tracking-widest text-ap-gold uppercase">
          Born in Le Brassus
        </h2>
        <p className="max-w-2xl mx-auto mt-8 text-gray-400 leading-relaxed">
          Our craftsmanship is the result of a long history of expertise, 
          passed down through generations of watchmakers.
        </p>
      </section>
    </main>
  );
}
