
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AuthorsSection from "@/components/AuthorsSection";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-chess-black">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <AuthorsSection />
      <LeadForm />
      <FAQ />
      <CTA />
      <Footer />
      
    </div>
  );
};

export default Index;
