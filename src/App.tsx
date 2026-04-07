import MainLayout from "@/components/layout/Mainlayout";
import ServicesSection from "@/components/sections/ServicesSection";
import FloatingActions from "@/components/ui/FloatingActions";

export default function App() {
  return (
    <>
      <MainLayout>
        <ServicesSection />
      </MainLayout>

      <FloatingActions />
    </>
  );
}
