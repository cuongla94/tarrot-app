import type { ReactNode } from "react";
import HeaderBar from "../sections/HeaderBar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F3F6] text-[#7B6D87]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#EADCF3]/40 blur-3xl" />
        <div className="absolute bottom-[0%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#F8EFDF]/30 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[10%] top-[50%] text-[6px] text-[#B28A53]">✦</div>
        <div className="absolute left-[80%] top-[60%] text-[6px] text-[#B28A53]">✦</div>
        <div className="absolute left-[30%] top-[75%] text-[5px] text-[#B28A53]">✦</div>
        <div className="absolute left-[20%] top-[65%] text-[6px] text-[#B28A53]/40">✦</div>
        <div className="absolute right-[25%] top-[72%] text-[5px] text-[#B28A53]/30">✦</div>
        <div className="absolute left-[50%] top-[85%] text-[5px] text-[#B28A53]/30">✦</div>
      </div>

      <div className="relative mx-auto max-w-md px-4">
        <HeaderBar />
        {children}
      </div>
    </main>
  );
}
