import MainLayout from "@/components/layout/Mainlayout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BookingSection from "@/components/sections/BookingSection";

export default function App() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <BookingSection />
    </MainLayout>
  );
}
