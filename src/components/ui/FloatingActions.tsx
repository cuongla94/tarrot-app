import { useEffect, useState } from "react";
import mainData from "@/data/main.json";
import type { FloatingActionItem } from "@/types";
import { BookingIcon, InstagramIcon, MessengerIcon, ZaloIcon } from "@/components/ui/Icons";

function ActionButton({
  item,
  index,
}: {
  item: FloatingActionItem;
  index: number;
}) {
  const sharedClassName =
    "group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] active:scale-[0.95]";

  const idleFloatStyle = {
    animation: `floatingAction 3.2s ease-in-out ${index * 0.18}s infinite`,
  } as const;

  const glowClassName =
    "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100";

  if (item.type === "booking") {
    return (
      <a
        href={item.target}
        aria-label={item.label}
        className={`${sharedClassName} bg-[#2b2233] text-white shadow-[0_8px_18px_rgba(43,34,51,0.16)]`}
        style={idleFloatStyle}
      >
        <span className={`${glowClassName} bg-[#2b2233]/30`} />
        <BookingIcon className="relative h-4 w-4" />
      </a>
    );
  }

  const socialMap = {
    zalo: {
      glow: "bg-[#0068FF]/18",
      icon: <ZaloIcon className="relative block h-7 w-7" />,
    },
    messenger: {
      glow: "bg-[#5B7CFF]/16",
      icon: <MessengerIcon className="relative block h-7 w-7" />,
    },
    instagram: {
      glow:
        "bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] opacity-30",
      icon: <InstagramIcon className="relative block h-7 w-7" />,
    },
  } as const;

  const socialItem =
    socialMap[item.type as keyof typeof socialMap] ?? socialMap.messenger;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      className={`${sharedClassName} bg-white/72 backdrop-blur-sm shadow-[0_6px_16px_rgba(43,34,51,0.08)]`}
      style={idleFloatStyle}
    >
      <span className={`${glowClassName} ${socialItem.glow}`} />
      {socialItem.icon}
    </a>
  );
}

export default function FloatingActions() {
  const floatingActions = mainData.floating_actions;
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let timeoutId: number | undefined;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY + 2;

      if (isScrollingDown) {
        setIsDimmed(true);
      } else {
        setIsDimmed(false);
      }

      lastY = currentY;

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsDimmed(false);
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!floatingActions?.enabled) return null;

  const visibleItems = (floatingActions.items as FloatingActionItem[]).filter(
    (item) => item.enabled,
  );

  if (visibleItems.length === 0) return null;

  return (
    <>
      <style>
        {`
          @keyframes floatingAction {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-2px);
            }
          }
        `}
      </style>

      <div
        className={`fixed bottom-4 right-2 z-40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDimmed ? "translate-y-1 opacity-55" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="rounded-[20px] border border-white/50 bg-white/24 p-1.5 shadow-[0_12px_28px_rgba(43,34,51,0.10)] backdrop-blur-md">
          <div className="flex flex-col gap-1.5">
            {visibleItems.map((item, index) => (
              <ActionButton
                key={`${item.type}-${item.label}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
