import mainData from "@/data/main.json";
import type { FloatingActionItem } from "@/types";
import { BookingIcon, MessengerIcon, ZaloIcon } from "@/components/ui/icons";

function ActionButton({ item }: { item: FloatingActionItem }) {
  const brandClassName =
    "flex h-10 w-10 items-center justify-center transition active:scale-[0.95]";

  const bookingClassName = "flex h-10 w-10 items-center justify-center rounded-full bg-[#2b2233] text-white transition active:scale-[0.95]";

  if (item.type === "booking") {
    return (
      <a
        href={item.target}
        aria-label={item.label}
        className={bookingClassName}
      >
        <BookingIcon className="h-5 w-5" />
      </a>
    );
  }

  if (item.type === "zalo") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={item.label}
        className={brandClassName}
      >
        <ZaloIcon className="block h-9 w-9" />
      </a>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      className={brandClassName}
    >
      <MessengerIcon className="block h-10 w-10" />
    </a>
  );
}

export default function FloatingActions() {
  const floatingActions = mainData.floating_actions;

  if (!floatingActions?.enabled) return null;

  const visibleItems = (floatingActions.items as FloatingActionItem[]).filter(
    (item) => item.enabled,
  );

  if (visibleItems.length === 0) return null;

  return (
    <div className="fixed right-1 bottom-4 z-50">
      <div className="flex flex-col gap-2.5">
        {visibleItems.map((item) => (
          <ActionButton key={`${item.type}-${item.label}`} item={item} />
        ))}
      </div>
    </div>
  );
}
