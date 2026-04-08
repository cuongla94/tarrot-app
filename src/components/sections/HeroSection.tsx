import { Sparkles, Moon } from "lucide-react";
import mainData from "@/data/main.json";

export default function HeroSection() {
  const hero = mainData.hero;

  return (
    <section className="relative mb-12 px-1 pt-2">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-[120px] w-[120px] rounded-full bg-[#EADCF3]/45 blur-2xl" />
        <div className="absolute right-[10%] bottom-0 h-[100px] w-[100px] rounded-full bg-[#F8EFDF]/35 blur-2xl" />
      </div>

      <div className="relative">
        <div className="mb-3 flex items-center gap-2 text-[#B28A53]">
          <Sparkles size={16} strokeWidth={1.6} />
          <Moon size={16} strokeWidth={1.6} />
        </div>

        <h2 className="mt-1 max-w-[320px] text-[30px] leading-[1.1] font-[var(--font-heading)] tracking-[-0.01em] text-[#7E7090]">
          {hero.title}
        </h2>

        <p className="mt-6 max-w-[330px] text-[17px] leading-9 text-[#6F627C]">
          {hero.description}
        </p>

        <p className="mt-3 text-[12px] italic text-[#9A8DA8]">
          Không cần vội. Bạn có thể dừng lại ở đây một chút.
        </p>

        <div className="mt-6 flex items-center gap-2 text-[#B28A53]/60">
          <span className="text-[10px]">✦</span>
          <div className="h-px w-14 bg-[#E5DBEE]" />
        </div>
      </div>
    </section>
  );
}
