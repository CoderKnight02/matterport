import HeroSection from "@/components/hero-section";
import CategoriesSection from "@/components/categories-section";
import FaqSection from "@/components/faq-section";
import TravelBooking from "@/components/travel-booking";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TravelBooking />
      <CategoriesSection />
      <FaqSection />
    </main>
  );
}
