import servicesData from "@/data/services.json";
import mainData from "@/data/main.json";
import type { ServicesData } from "@/types";
import { SectionHeader } from "./SectionHeader";

export default function ServicesSection() {
  const { services } = servicesData as ServicesData;
  const section = mainData.services;

  return (
    <section className="py-8">
      {/* 🔥 Section Header */}
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
      />

      {/* Services list */}
      <div className="space-y-12">
        {services.map((service, index) => {
          const isOdd = index % 2 === 0;

          return (
            <article
              key={service.name}
              className="grid grid-cols-2 items-start gap-5"
            >
              <div className={isOdd ? "order-1" : "order-2"}>
                <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(47,34,56,0.06)] transition-transform duration-300 active:scale-[0.98]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-47.5 w-full object-cover"
                  />
                </div>
              </div>

              <div
                className={
                  isOdd
                    ? "order-2 flex h-47.5 flex-col justify-center"
                    : "order-1 flex h-47.5 flex-col justify-center"
                }
              >
                <h2 className="text-[21px] leading-[1.05] text-heading">
                  {service.name}
                </h2>

                <p className="mt-3 max-w-41.25 text-[13px] leading-6 text-muted">
                  {service.short_description}
                </p>

                <button
                  type="button"
                  className="mt-auto inline-flex h-10 w-28 items-center justify-center rounded-full border border-[#2f2238] bg-transparent text-[12px] font-medium tracking-[0.01em] text-[#2f2238] transition duration-200 hover:bg-[#2f2238] hover:text-white active:scale-[0.98]"
                >
                  Chi tiết
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
