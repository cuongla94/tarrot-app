import MainLayout from "@/components/layout/MainLayout";
import ServicesSection from "@/components/sections/ServicesSection";
import FloatingActions from "@/components/ui/FloatingActions";
import HeroSection from "./components/sections/HeroSection";

export default function App() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <div className="mt-6 border-t border-[#EEE7F2]" />
        <ServicesSection />
      </MainLayout>
      <FloatingActions />
    </>
  );
}
