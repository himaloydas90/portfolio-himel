import Hero from "./Home/page";
import AboutSection from "./AboutSection/page"; 
import Skills from "./Skils/page";
import ProfessionalProjects from "./Project/page";
import PremiumBlogMarquee from "./blog/page";
import ContactPage from "./Contact/page";





export default function Home() {
  return (
    <main className="w-full bg-slate-950">
      <Hero /> 
      <AboutSection />
      <Skills />
      <ProfessionalProjects />
      <PremiumBlogMarquee/>
      <ContactPage />
    </main>
  );
}