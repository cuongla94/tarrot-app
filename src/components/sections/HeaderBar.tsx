import mainData from "@/data/main.json";

export default function HeaderBar() {
  const brand = mainData.brand;

  return (
    <header className="relative -mx-4 mb-10 h-[220px] overflow-hidden">
      <div className="absolute inset-0 bg-[#F6F2F4]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-32%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#EADCF3]/60 blur-3xl" />
        <div className="absolute bottom-[-22%] left-[18%] h-[180px] w-[180px] rounded-full bg-[#F8EFDF]/38 blur-3xl" />
        <div className="absolute bottom-[-22%] right-[18%] h-[180px] w-[180px] rounded-full bg-[#D9D2E9]/28 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.34]">
        <div className="absolute left-[30%] top-[24%] text-[8px] text-[#C6A96A]">✦</div>
        <div className="absolute left-[46%] top-[16%] text-[10px] text-[#C6A96A]">✦</div>
        <div className="absolute left-[51%] top-[24%] text-[6px] text-[#C6A96A]">✦</div>
        <div className="absolute left-[58%] top-[14%] text-[8px] text-[#C6A96A]">✦</div>
        <div className="absolute right-[20%] top-[30%] text-[6px] text-[#C6A96A] opacity-60">✦</div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#F7F3F6]" />

      <div className="relative flex h-full items-center justify-center">
        <h1 className="font-[var(--font-heading)] text-[52px] leading-none tracking-[-0.02em] text-[#8C7CA3]">
          {brand.title}
        </h1>
      </div>
    </header>
  );
}
