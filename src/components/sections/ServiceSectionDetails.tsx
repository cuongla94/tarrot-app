import { useEffect, useState } from "react";
import type { Service } from "@/types";
import { CircleAlert, Sparkles } from "lucide-react";

type Props = {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ServiceSectionDetails({
  service,
  isOpen,
  onClose,
}: Props) {
  const [activeService, setActiveService] = useState<Service | null>(service);

  useEffect(() => {
    if (service) setActiveService(service);
  }, [service]);

  useEffect(() => {
    if (!isOpen && activeService) {
      const timer = setTimeout(() => setActiveService(null), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeService]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!activeService) return null;

  const isTarot = activeService.id === "bai-tarot";
  const isLenormand = activeService.id === "bai-lenormand";

  const baseTextClass = isTarot
    ? "text-[#d8c7e5]"
    : isLenormand
      ? "text-[#6F748A]"
      : "text-[#6b5a79]";

  const titleTextClass = isTarot
    ? "text-[#f3e7cf]"
    : isLenormand
      ? "text-[#2E3142]"
      : "text-[#2b1834]";

  const iconClass = isTarot
    ? "text-[#d3a35f]"
    : isLenormand
      ? "text-[#B28A53]"
      : "text-[#b28a53]";

  const sectionCardClass = isTarot
    ? "border-[#f3e7cf]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
    : isLenormand
      ? "border-[#d7ddea] bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(241,245,252,0.76))]"
      : "border-[#eadcf3] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(249,242,252,0.92))]";

  return (
    <div
      className={`fixed inset-0 z-[70] overflow-hidden transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
  className={`absolute inset-0 transform-gpu will-change-transform transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    isOpen ? "translate-y-0" : "translate-y-full"
  }`}
>
        <div
          className={`h-full overflow-hidden ${
            isTarot
              ? "bg-[#160f1f]"
              : isLenormand
                ? "bg-[#E7EBF2]"
                : "bg-[#f8f3fa]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0">
            {isTarot ? (
              <>
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/20 to-transparent" />
                <div className="absolute -top-10 left-[-10%] h-64 w-64 rounded-full bg-[#6e3fd4]/20 blur-3xl" />
                <div className="absolute right-[-8%] top-24 h-72 w-72 rounded-full bg-[#c48a3c]/12 blur-3xl" />
                <div className="absolute bottom-20 left-[15%] h-56 w-56 rounded-full bg-[#7b46ff]/10 blur-3xl" />
              </>
            ) : isLenormand ? (
              <>
                <div className="absolute -top-16 left-[-12%] h-60 w-60 rounded-full bg-[#cfd8ee]/50 blur-3xl" />
                <div className="absolute right-[-10%] top-20 h-72 w-72 rounded-full bg-[#f3f6ff]/70 blur-3xl" />
                <div className="absolute bottom-10 left-[10%] h-56 w-56 rounded-full bg-[#d9d2e9]/35 blur-3xl" />
              </>
            ) : (
              <>
                <div className="absolute -top-16 left-[-20%] h-56 w-56 rounded-full bg-[#d7c2ff]/35 blur-3xl" />
                <div className="absolute right-[-10%] top-32 h-64 w-64 rounded-full bg-[#f3d6b3]/25 blur-3xl" />
                <div className="absolute bottom-10 left-[-10%] h-52 w-52 rounded-full bg-[#c7b3ff]/20 blur-3xl" />
              </>
            )}
          </div>

          <div className="relative h-screen overflow-y-auto px-5 pb-10 pt-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
                <h3
                  className={`pr-4 text-[42px] font-semibold leading-[1] sm:text-[32px] ${
                    isTarot
                      ? "!text-[#FFF4E0] [text-shadow:0_0_12px_rgba(243,231,207,0.15)]"
                      : isLenormand
                        ? "text-[#2E3142]"
                        : "text-[#2b1834]"
                  }`}
                >
                  {activeService.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(43,24,52,0.10)] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${
                  isTarot
                    ? "border-[#f3e7cf]/25 bg-white/10 text-[#f3e7cf]"
                    : isLenormand
                      ? "border-white/60 bg-white/55 text-[#3f465c]"
                      : "border-white/60 bg-white/70 text-[#2b1834]"
                }`}
              >
                ✕
              </button>
            </div>

            <div
              className={`mt-5 rounded-[28px] border p-5 shadow-[0_14px_40px_rgba(43,24,52,0.08)] backdrop-blur-sm ${
                isTarot
                  ? "border-[#f3e7cf]/20 bg-white/5"
                  : isLenormand
                    ? "border-[#c9cfdd] bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(240,244,251,0.72))]"
                    : "border-[#2b1834]/35 bg-white/55"
              }`}
            >
              {activeService.description && (
                <p
                  className={`text-[15px] leading-8 ${
                    isTarot
                      ? "text-[#e8d9f3]"
                      : isLenormand
                        ? "text-[#5E6278]"
                        : "text-[#4b3958]"
                  }`}
                >
                  {activeService.description}
                </p>
              )}
            </div>

            {activeService.highlight_title && activeService.highlights?.length ? (
              <div
                className={`mt-8 overflow-hidden rounded-[30px] border p-7 shadow-[0_16px_40px_rgba(43,24,52,0.07)] ${sectionCardClass}`}
              >
                <div className="flex items-center gap-3">
                  <Sparkles
                    className={`h-4 w-4 shrink-0 ${iconClass}`}
                    strokeWidth={2.2}
                  />
                  <p
                    className={`text-[19px] font-semibold leading-7 ${titleTextClass}`}
                  >
                    {activeService.highlight_title}
                  </p>
                </div>

                <ul className="mt-5 space-y-4">
                  {activeService.highlights.map((item: string) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-[15px] leading-8 ${baseTextClass}`}
                    >
                      <span
                        className={`mt-[8px] shrink-0 text-[13px] leading-none ${iconClass}`}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeService.notice_title && activeService.notices?.length ? (
              <div
                className={`mt-8 overflow-hidden rounded-[30px] border p-7 shadow-[0_16px_40px_rgba(43,24,52,0.07)] ${sectionCardClass}`}
              >
                <div className="flex items-center gap-3">
                  <CircleAlert
                    className={`h-4 w-4 shrink-0 ${iconClass}`}
                    strokeWidth={2.2}
                  />
                  <p
                    className={`text-[19px] font-semibold leading-7 ${titleTextClass}`}
                  >
                    {activeService.notice_title}
                  </p>
                </div>

                <ul className="mt-5 space-y-4">
                  {activeService.notices.map((item: string) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-[15px] leading-8 ${baseTextClass}`}
                    >
                      <span
                        className={`mt-[8px] shrink-0 text-[13px] leading-none ${iconClass}`}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeService.prices?.length > 0 && (
              <div className="mt-8">
                <p
                  className={`text-[11px] uppercase tracking-[0.28em] ${
                    isTarot
                      ? "text-[#cbb6e3]"
                      : isLenormand
                        ? "text-[#8E94AC]"
                        : "text-[#9a7fb1]"
                  }`}
                >
                  Mức giá
                </p>

                <h4
                  className={`mt-2 text-[30px] font-semibold leading-[1.05] ${
                    isTarot
                      ? "!text-[#FFF4E0] [text-shadow:0_0_12px_rgba(255,244,224,0.18)]"
                      : isLenormand
                        ? "text-[#2E3142]"
                        : "text-[#2b1834]"
                  }`}
                >
                  Chọn gói phù hợp với bạn
                </h4>

                {isTarot && activeService.pricing_highlight_title ? (
                  <div className="mt-5 overflow-hidden rounded-[28px] border border-[#f3e7cf]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                    <p className="text-[16px] font-semibold leading-7 text-[#f3e7cf]">
                      {activeService.pricing_highlight_title}
                    </p>

                    {activeService.pricing_benefits?.length ? (
                      <ul className="mt-4 space-y-3">
                        {activeService.pricing_benefits.map((item: string) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[14px] leading-7 text-[#d8c7e5]"
                          >
                            <span className="mt-[8px] shrink-0 text-[13px] leading-none text-[#d3a35f]">
                              ✦
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : null}

                {activeService.selection_hint && (
                  <p
                    className={`mt-4 text-[13px] leading-6 ${
                      isTarot
                        ? "text-[#cdb8db]"
                        : isLenormand
                          ? "text-[#7A8098]"
                          : "text-[#7b6d87]"
                    }`}
                  >
                    {activeService.selection_hint}
                  </p>
                )}

                <div className="mt-5 space-y-4">
                  {activeService.prices.map((item: any, index: number) => (
                    <div
                      key={`${item.label}-${item.price}`}
                      className={`rounded-[26px] border px-5 py-4 shadow-[0_10px_24px_rgba(43,24,52,0.05)] ${
                        isTarot
                          ? index === 1
                            ? "border-[#d3a35f]/35 bg-[linear-gradient(135deg,rgba(211,163,95,0.16),rgba(255,255,255,0.03))]"
                            : "border-[#f3e7cf]/12 bg-white/5"
                          : isLenormand
                            ? "border-[#d4d9e5] bg-[linear-gradient(135deg,rgba(255,255,255,0.48),rgba(238,243,250,0.74))]"
                            : index === 1
                              ? "border-[#eadcf3] bg-[linear-gradient(135deg,#fff9ef,#ffffff)]"
                              : "border-[#eee4f3] bg-white/85"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col justify-start">
                          <p
                            className={`text-[22px] font-semibold leading-none ${
                              isTarot
                                ? "text-[#f6ecda]"
                                : isLenormand
                                  ? "text-[#2E3142]"
                                  : "text-[#2b1834]"
                            }`}
                          >
                            {item.label}
                          </p>

                          {item.sub_label && (
                            <p
                              className={`mt-3 text-[13px] leading-6 ${
                                isTarot
                                  ? "text-[#cdb8db]"
                                  : isLenormand
                                    ? "text-[#7A8098]"
                                    : "text-[#7b6d87]"
                              }`}
                            >
                              {item.sub_label}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col items-end justify-start text-right">
                          <p
                            className={`text-[22px] font-semibold leading-none ${
                              isTarot
                                ? "text-[#f6ecda]"
                                : isLenormand
                                  ? "text-[#2E3142]"
                                  : "text-[#2b1834]"
                            }`}
                          >
                            {item.price}
                          </p>

                          {isTarot && item.save_label && (
                            <div className="mt-3 flex flex-col items-end text-right">
                              <span className="text-[13px] font-semibold leading-none text-[#E7C27D]">
                                {item.save_label}
                              </span>

                              {item.save_note && (
                                <span className="mt-1 text-[11px] leading-none text-[#BFAFD0]">
                                  {item.save_note}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeService.support_note && (
                  <p
                    className={`mt-4 text-[13px] leading-6 ${
                      isTarot
                        ? "text-[#cdb8db]"
                        : isLenormand
                          ? "text-[#7A8098]"
                          : "text-[#7b6d87]"
                    }`}
                  >
                    {activeService.support_note}
                  </p>
                )}

                {!activeService.support_note && activeService.pricing_note && (
                  <p
                    className={`mt-4 text-[13px] leading-6 ${
                      isTarot
                        ? "text-[#cdb8db]"
                        : isLenormand
                          ? "text-[#7A8098]"
                          : "text-[#7b6d87]"
                    }`}
                  >
                    {activeService.pricing_note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
