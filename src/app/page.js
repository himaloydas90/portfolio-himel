import Hero from "./Home/page";
import AboutSection from "./AboutSection/page"; // 📢 আপনার নতুন সেকশনটি ইমপোর্ট করলেন

export default function Home() {
  return (
    <main className="w-full bg-slate-950">
      <Hero /> 
      <AboutSection />
    </main>
  );
}