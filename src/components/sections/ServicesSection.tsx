import { useEffect, useState } from "react";
import servicesData from "@/data/services.json";
import mainData from "@/data/main.json";
import type { Service, ServicesData } from "@/types";
import { SectionHeader } from "./SectionHeader";
import ServiceSectionDetails from "./ServiceSectionDetails";

export default function ServicesSection() {
  const { services } = servicesData as ServicesData;
  const section = mainData.services;

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleOpen = (service: Service) => {
    setSelectedService(service);
    requestAnimationFrame(() => {
      setIsDetailsOpen(true);
    });
  };

  const handleClose = () => {
    setIsDetailsOpen(false);
  };

  useEffect(() => {
    if (!isDetailsOpen && selectedService) {
      const timer = window.setTimeout(() => {
        setSelectedService(null);
      }, 380);

      return () => window.clearTimeout(timer);
    }
  }, [isDetailsOpen, selectedService]);

  return (
    <>
      <section className="py-10">
        <SectionHeader
          badge={section.badge}
          title={section.title}
          subtitle={section.subtitle}
        />

        <div className="space-y-6">
          {services.map((service, index) => {
            const isOdd = index % 2 === 0;
            const isTarot = service.id === "bai-tarot";
            const isLenormand = service.id === "bai-lenormand";

            const imageShellClass = isTarot
              ? "bg-[linear-gradient(180deg,rgba(54,35,74,0.94),rgba(27,17,40,0.98))] border-[#4E3B5F]/22"
              : isLenormand
                ? "bg-[linear-gradient(180deg,rgba(237,242,249,0.92),rgba(226,233,244,0.98))] border-[#D4D9E5]"
                : "bg-[linear-gradient(180deg,rgba(251,248,252,0.96),rgba(243,236,248,0.98))] border-[#E5DBEE]";

            const glowClass = isTarot
              ? "bg-[#8D63D2]/16"
              : isLenormand
                ? "bg-[#D7E0F0]/50"
                : "bg-[#EADCF3]/65";

            const accentClass = isTarot
              ? "bg-[#D7B178]/14"
              : isLenormand
                ? "bg-[#EEF3FB]/75"
                : "bg-[#F8EFDF]/60";

            return (
              <article
                key={service.id}
                className="rounded-[28px] border border-white/40 bg-white/30 px-4 py-5 shadow-[0_20px_40px_rgba(43,34,51,0.08)] backdrop-blur-[2px]"
              >
                <div className="grid grid-cols-2 items-center gap-5">
                  <div className={isOdd ? "order-1" : "order-2"}>
                    <div
                      className={`group relative overflow-hidden rounded-[24px] border border-white/40 p-[6px] shadow-[0_10px_30px_rgba(43,34,51,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(43,34,51,0.12)] ${imageShellClass}`}
                    >
                      <div className="pointer-events-none absolute inset-0">
                        <div
                          className={`absolute -left-6 top-[-10px] h-20 w-20 rounded-full blur-2xl ${glowClass}`}
                        />
                        <div
                          className={`absolute bottom-[-12px] right-[-8px] h-20 w-20 rounded-full blur-2xl ${accentClass}`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
                      </div>

                      <div className="relative overflow-hidden rounded-[20px]">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="h-44 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(30,20,40,0.25),transparent)]" />
                        <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      isOdd
                        ? "order-2 flex flex-col justify-center gap-3 pr-1"
                        : "order-1 flex flex-col justify-center gap-3 pr-1"
                    }
                  >
                    <h2 className="text-[22px] leading-[1.08] font-[var(--font-heading)] text-[#7E7090]">
                      {service.name}
                    </h2>

                   <p className="max-w-[220px] text-[13.5px] leading-[1.7] text-[#7B6D87]">
                    {service.tagline}
                  </p>

                    <button
                      type="button"
                      onClick={() => handleOpen(service)}
                      className="mt-1 inline-flex h-10 w-fit items-center justify-center rounded-full border border-[#3A2D45] bg-transparent px-5 text-[13px] font-medium text-[#3A2D45] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[#3A2D45] hover:text-white hover:shadow-[0_6px_16px_rgba(43,34,51,0.15)]"
                    >
                      Tìm hiểu
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ServiceSectionDetails
        service={selectedService}
        isOpen={isDetailsOpen}
        onClose={handleClose}
      />
    </>
  );
}
