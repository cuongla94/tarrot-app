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
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (service) setActiveService(service);
  }, [service]);

  useEffect(() => {
    if (!isOpen && activeService) {
      const timer = setTimeout(() => {
        setActiveService(null);
        setShowNotice(false);
      }, 700);
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
  const isTeaLeaf = activeService.id === "bai-tea-leaf";
  const isLenormand = activeService.id === "bai-lenormand";

  const baseTextClass = isTarot
    ? "text-[#d8c7e5]"
    : isTeaLeaf
      ? "text-[#6E6180]"
      : isLenormand
        ? "text-[#6F748A]"
        : "text-[#d4c6ea]";

  const titleTextClass = isTarot
    ? "text-[#f3e7cf]"
    : isTeaLeaf
      ? "text-[#2F2140]"
      : isLenormand
        ? "text-[#2E3142]"
        : "text-[#f4ead8]";

  const iconClass = isTarot
    ? "text-[#d3a35f]"
    : isTeaLeaf
      ? "text-[#B7894C]"
      : isLenormand
        ? "text-[#B28A53]"
        : "text-[#d9b06b]";

  const sectionCardClass = isTarot
    ? "border-[#f3e7cf]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
    : isTeaLeaf
      ? "border-[#d8cde1] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(246,241,249,0.82))]"
      : isLenormand
        ? "border-[#d7ddea] bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(241,245,252,0.76))]"
        : "border-[#eadcf3]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]";

  const pageBgClass = isTarot
    ? "bg-[#12081b]"
    : isTeaLeaf
      ? "bg-[#ECE4F1]"
      : isLenormand
        ? "bg-[#E7EBF2]"
        : "bg-[#12081f]";

  const closeButtonClass = isTarot
    ? "border-[#f3e7cf]/25 bg-white/10 text-[#f3e7cf]"
    : isTeaLeaf
      ? "border-[#d9cfdf] bg-white/65 text-[#4E3C60]"
      : isLenormand
        ? "border-white/60 bg-white/55 text-[#3f465c]"
        : "border-white/15 bg-white/5 text-[#f4ead8]";

  const dividerMoonColor = isLenormand
    ? "text-[#B28A53]"
    : isTeaLeaf
      ? "text-[#B7894C]"
      : "text-[#d9b56f]";

  const dividerMainMoonColor = isLenormand
    ? "text-[#C79C5A]"
    : isTeaLeaf
      ? "text-[#C79A58]"
      : "text-[#e7c985]";

  const dividerLineClass = isLenormand
    ? "bg-[linear-gradient(90deg,transparent,rgba(178,138,83,0.95),transparent)]"
    : isTeaLeaf
      ? "bg-[linear-gradient(90deg,transparent,rgba(183,137,76,0.9),transparent)]"
      : "bg-[linear-gradient(90deg,transparent,rgba(217,181,111,0.95),transparent)]";

  return (
    <div
      className={`fixed inset-0 z-[70] overflow-hidden transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/25 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`h-full overflow-hidden ${pageBgClass}`}>
          <div className="pointer-events-none absolute inset-0">
            {isTarot ? (
              <>
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="absolute -top-10 left-[-10%] h-64 w-64 rounded-full bg-[#6e3fd4]/18 blur-3xl" />
                <div className="absolute right-[-8%] top-24 h-72 w-72 rounded-full bg-[#c48a3c]/10 blur-3xl" />
                <div className="absolute bottom-20 left-[15%] h-56 w-56 rounded-full bg-[#7b46ff]/8 blur-3xl" />
              </>
            ) : isTeaLeaf ? (
              <>
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/18 to-transparent" />
                <div className="absolute -top-10 left-[-10%] h-64 w-64 rounded-full bg-[#d8c8ea]/55 blur-3xl" />
                <div className="absolute right-[-8%] top-24 h-72 w-72 rounded-full bg-[#f6edf8]/70 blur-3xl" />
                <div className="absolute bottom-20 left-[15%] h-56 w-56 rounded-full bg-[#e4d7ef]/45 blur-3xl" />
              </>
            ) : isLenormand ? (
              <>
                <div className="absolute -top-16 left-[-12%] h-60 w-60 rounded-full bg-[#cfd8ee]/50 blur-3xl" />
                <div className="absolute right-[-10%] top-20 h-72 w-72 rounded-full bg-[#f3f6ff]/70 blur-3xl" />
                <div className="absolute bottom-10 left-[10%] h-56 w-56 rounded-full bg-[#d9d2e9]/35 blur-3xl" />
              </>
            ) : (
              <>
                <div className="absolute -top-16 left-[-20%] h-56 w-56 rounded-full bg-[#d7c2ff]/20 blur-3xl" />
                <div className="absolute right-[-10%] top-32 h-64 w-64 rounded-full bg-[#f3d6b3]/15 blur-3xl" />
                <div className="absolute bottom-10 left-[-10%] h-52 w-52 rounded-full bg-[#c7b3ff]/15 blur-3xl" />
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
                      : isTeaLeaf
                        ? "text-[#2F2140]"
                        : isLenormand
                          ? "text-[#2E3142]"
                          : "text-[#f4ead8]"
                  }`}
                >
                  {activeService.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(43,24,52,0.10)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${closeButtonClass}`}
              >
                ✕
              </button>
            </div>

            {activeService.highlight_title && activeService.highlights?.length ? (
              <div
                className={`mt-8 overflow-hidden rounded-[28px] border px-5 py-6 shadow-[0_16px_40px_rgba(43,24,52,0.07)] ${sectionCardClass}`}
              >
                <div className="mb-4 flex items-start gap-3">
                  <Sparkles
                    className={`mt-[5px] h-[18px] w-[18px] shrink-0 ${iconClass}`}
                    strokeWidth={2.1}
                  />
                  <p
                    className={`max-w-[280px] text-[18px] font-semibold leading-[1.45] ${titleTextClass}`}
                  >
                    {activeService.highlight_title}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {activeService.highlights.map((item: string) => (
                    <li
                      key={item}
                      className={`grid grid-cols-[16px_1fr] gap-x-3 text-[14px] ${baseTextClass}`}
                    >
                      <span
                        className={`mt-[8px] text-[12px] leading-none ${iconClass}`}
                      >
                        ✦
                      </span>
                      <span className="max-w-[285px] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeService.prices?.length > 0 && (
              <div className="mt-6">
                <h4
                  className={`mt-2 text-center text-[36px] font-semibold leading-[1.05] ${
                    isTarot
                      ? "!text-[#FFF4E0] [text-shadow:0_0_12px_rgba(255,244,224,0.18)]"
                      : isTeaLeaf
                        ? "text-[#2F2140]"
                        : isLenormand
                          ? "text-[#2E3142]"
                          : "text-[#f4ead8]"
                  }`}
                >
                  Bảng giá
                </h4>

                <div className="mt-4">
                  <div className="flex items-center justify-center gap-4 text-center">
                    <span className={`text-[20px] leading-none ${dividerMoonColor}`}>
                      ☾
                    </span>
                    <span className={`text-[20px] leading-none ${dividerMoonColor}`}>
                      ◐
                    </span>
                    <span className={`text-[24px] leading-none ${dividerMainMoonColor}`}>
                      ●
                    </span>
                    <span className={`text-[20px] leading-none ${dividerMoonColor}`}>
                      ◑
                    </span>
                    <span
                      className={`text-[20px] leading-none ${dividerMoonColor} rotate-180`}
                    >
                      ☾
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className={`h-px w-12 ${dividerLineClass}`} />
                    <span className={`text-[12px] ${dividerMoonColor}`}>✦</span>
                    <span className={`h-px w-12 ${dividerLineClass}`} />
                  </div>

                  <p
                    className={`mt-3 text-center text-[13px] font-medium uppercase tracking-[0.04em] sm:text-[14px] ${
                      isLenormand
                        ? "text-[#8E94AC]/90"
                        : isTeaLeaf
                          ? "text-[#6A597D]/85"
                          : "text-[#f1dec2]/85"
                    }`}
                  >
                    Càng xem lâu – càng tiết kiệm
                  </p>
                </div>

                {isTarot ? (
                  <div className="mt-6 overflow-hidden rounded-[30px] border border-[#c49757]/55 bg-[radial-gradient(circle_at_50%_22%,rgba(80,34,112,0.14),transparent_34%),linear-gradient(180deg,rgba(3,2,12,0.98),rgba(6,3,16,0.99))] shadow-[0_18px_45px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(242,201,128,0.04)]">
                    <div className="pointer-events-none h-px w-full bg-[linear-gradient(90deg,transparent,rgba(214,176,122,0.7),transparent)]" />

                    {activeService.prices.map((item: any, index: number) => (
                      <div key={`${item.label}-${item.price}`} className="relative">
                        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 px-5 py-5">
                          <div className="min-w-0">
                            <div className="flex items-start gap-2">
                              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#d9b56f]">
                                ✦
                              </span>

                              <div className="min-w-0">
                                <p className="text-[22px] font-semibold leading-none text-[#f1dec2]">
                                  {item.label}
                                </p>

                                {item.sub_label && (
                                  <p className="mt-3 max-w-[200px] text-[12px] leading-[1.5] text-[#d3c0df]/75">
                                    {item.sub_label}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex min-w-[150px] flex-col items-end text-right">
                            <div className="relative">
                              <div className="absolute left-1/2 top-1/2 h-10 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b960ff]/12 blur-xl" />
                              <p className="relative text-[27px] font-semibold leading-none tracking-[0.01em] text-[#e7b0ff] [text-shadow:0_0_8px_rgba(243,185,255,0.35),0_0_20px_rgba(171,67,233,0.25)]">
                                {item.price}
                              </p>
                            </div>

                            {item.save_label && (
                              <div className="mt-4 flex flex-col items-end">
                                <span className="relative inline-flex items-center justify-center px-5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f3d598] [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_50%,100%_100%,12px_100%,0_50%)]">
                                  <span className="absolute inset-0 bg-[linear-gradient(90deg,#6a3197_0%,#8645bb_48%,#7a3db1_100%)]" />
                                  <span className="absolute inset-0 opacity-70 [background:linear-gradient(180deg,rgba(255,255,255,0.14),transparent_55%)]" />
                                  <span className="absolute inset-[1px] opacity-40 [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_50%,100%_100%,12px_100%,0_50%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_60%)]" />
                                  <span className="relative">{item.save_label}</span>
                                </span>

                                {item.save_note && (
                                  <span className="mt-3 max-w-[145px] text-[11px] leading-[1.2] text-[#d8c7e5]">
                                    {item.save_note}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {index !== activeService.prices.length - 1 && (
                          <div className="mx-5 h-px bg-[linear-gradient(90deg,transparent,rgba(196,151,87,0.08),rgba(196,151,87,0.45),rgba(196,151,87,0.08),transparent)]" />
                        )}
                      </div>
                    ))}

                    <div className="pointer-events-none h-px w-full bg-[linear-gradient(90deg,transparent,rgba(214,176,122,0.7),transparent)]" />
                  </div>
                ) : isTeaLeaf ? (
                  <div className="mt-6 overflow-hidden rounded-[30px] border border-[#d8cde1] bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(245,239,248,0.78))] shadow-[0_18px_45px_rgba(104,77,128,0.08),inset_0_0_0_1px_rgba(255,255,255,0.28)]">
                    <div className="pointer-events-none h-px w-full bg-[linear-gradient(90deg,transparent,rgba(183,137,76,0.45),transparent)]" />

                    {activeService.prices.map((item: any, index: number) => (
                      <div key={`${item.label}-${item.price}`} className="relative">
                        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 px-5 py-5">
                          <div className="min-w-0">
                            <div className="flex items-start gap-2">
                              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#c49a56]">
                                ✦
                              </span>

                              <div className="min-w-0">
                                <p className="text-[22px] font-semibold leading-none text-[#2F2140]">
                                  {item.label}
                                </p>

                                {item.sub_label && (
                                  <p className="mt-3 max-w-[200px] text-[12px] leading-[1.5] text-[#6E6180]/82">
                                    {item.sub_label}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex min-w-[150px] flex-col items-end text-right">
                            <div className="relative">
                              <div className="absolute left-1/2 top-1/2 h-10 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4b8f6]/18 blur-xl" />
                              <p className="relative text-[27px] font-semibold leading-none tracking-[0.01em] text-[#8b67b7] [text-shadow:0_0_8px_rgba(139,103,183,0.12),0_0_18px_rgba(139,103,183,0.08)]">
                                {item.price}
                              </p>
                            </div>

                            {item.save_label && (
                              <div className="mt-4 flex flex-col items-end">
                                <span className="relative inline-flex items-center justify-center px-5 py-[9px] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f4e1b4] [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_50%,100%_100%,12px_100%,0_50%)]">
                                  <span className="absolute inset-0 bg-[linear-gradient(90deg,#8d69b6_0%,#a784cb_48%,#9875bf_100%)]" />
                                  <span className="absolute inset-0 opacity-60 [background:linear-gradient(180deg,rgba(255,255,255,0.18),transparent_55%)]" />
                                  <span className="absolute inset-[1px] opacity-35 [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_50%,100%_100%,12px_100%,0_50%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_60%)]" />
                                  <span className="relative">{item.save_label}</span>
                                </span>

                                {item.save_note && (
                                  <span className="mt-3 max-w-[145px] text-[11px] leading-[1.2] text-[#6E6180]/78">
                                    {item.save_note}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {index !== activeService.prices.length - 1 && (
                          <div className="mx-5 h-px bg-[linear-gradient(90deg,transparent,rgba(183,137,76,0.08),rgba(183,137,76,0.28),rgba(183,137,76,0.08),transparent)]" />
                        )}
                      </div>
                    ))}

                    <div className="pointer-events-none h-px w-full bg-[linear-gradient(90deg,transparent,rgba(183,137,76,0.45),transparent)]" />
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    {activeService.prices.map((item: any) => (
                      <div
                        key={`${item.label}-${item.price}`}
                        className={`rounded-[26px] border px-5 py-4 shadow-[0_10px_24px_rgba(43,24,52,0.05)] ${
                          isLenormand
                            ? "border-[#d4d9e5] bg-[linear-gradient(135deg,rgba(255,255,255,0.48),rgba(238,243,250,0.74))]"
                            : "border-white/12 bg-[linear-gradient(135deg,rgba(47,32,64,0.78),rgba(29,17,42,0.92))]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p
                              className={`text-[22px] font-semibold leading-none ${
                                isLenormand ? "text-[#2E3142]" : "text-[#f4ead8]"
                              }`}
                            >
                              {item.label}
                            </p>

                            {item.sub_label && (
                              <p
                                className={`mt-2 text-[12px] leading-[1.5] ${
                                  isLenormand
                                    ? "text-[#7A8098]/80"
                                    : "text-[#c8badf]/75"
                                }`}
                              >
                                {item.sub_label}
                              </p>
                            )}
                          </div>

                          <p
                            className={`text-[22px] font-semibold leading-none ${
                              isLenormand ? "text-[#2E3142]" : "text-[#f4ead8]"
                            }`}
                          >
                            {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  <div className="grid grid-cols-3 gap-0">
                    <div className="px-3 py-2 text-center">
                      <div
                        className={`mx-auto flex h-10 w-10 items-center justify-center text-[18px] ${
                          isLenormand
                            ? "text-[#B28A53]"
                            : isTeaLeaf
                              ? "text-[#B7894C]"
                              : "text-[#d6b07a]"
                        }`}
                      >
                        ✦
                      </div>
                      <p
                        className={`mt-2 text-[14px] font-semibold leading-7 ${
                          isLenormand
                            ? "text-[#2E3142]"
                            : isTeaLeaf
                              ? "text-[#2F2140]"
                              : "text-[#f1dec2]"
                        }`}
                      >
                        {isTeaLeaf ? "Nhìn trước tổng quan" : "Giải mã chi tiết"}
                      </p>
                      <p
                        className={`mt-1 text-[13px] leading-6 ${
                          isLenormand
                            ? "text-[#7A8098]"
                            : isTeaLeaf
                              ? "text-[#6E6180]"
                              : "text-[#d3c0df]"
                        }`}
                      >
                        {isTeaLeaf
                          ? "năng lượng và chuyển động sắp tới"
                          : "vấn đề sâu, đa khía cạnh"}
                      </p>
                    </div>

                    <div
                      className={`border-x px-3 py-2 text-center ${
                        isLenormand
                          ? "border-[#c9cfdd]"
                          : isTeaLeaf
                            ? "border-[#d8cde1]"
                            : "border-[#c2935c]/20"
                      }`}
                    >
                      <div
                        className={`mx-auto flex h-10 w-10 items-center justify-center text-[18px] ${
                          isLenormand
                            ? "text-[#8D6AD6]"
                            : isTeaLeaf
                              ? "text-[#9a76c7]"
                              : "text-[#bb8cff]"
                        }`}
                      >
                        ✧
                      </div>
                      <p
                        className={`mt-2 text-[14px] font-semibold leading-7 ${
                          isLenormand
                            ? "text-[#2E3142]"
                            : isTeaLeaf
                              ? "text-[#2F2140]"
                              : "text-[#f1dec2]"
                        }`}
                      >
                        {isTeaLeaf ? "Chuẩn bị trước" : "Không giới hạn"}
                      </p>
                      <p
                        className={`mt-1 text-[13px] leading-6 ${
                          isLenormand
                            ? "text-[#7A8098]"
                            : isTeaLeaf
                              ? "text-[#6E6180]"
                              : "text-[#d3c0df]"
                        }`}
                      >
                        {isTeaLeaf
                          ? "cho điều đáng chú ý đang đến gần"
                          : "số lượng câu hỏi trong thời gian"}
                      </p>
                    </div>

                    <div className="px-3 py-2 text-center">
                      <div
                        className={`mx-auto flex h-10 w-10 items-center justify-center text-[18px] ${
                          isLenormand
                            ? "text-[#9A73E8]"
                            : isTeaLeaf
                              ? "text-[#b18ad8]"
                              : "text-[#d98cff]"
                        }`}
                      >
                        ♡
                      </div>
                      <p
                        className={`mt-2 text-[14px] font-semibold leading-7 ${
                          isLenormand
                            ? "text-[#2E3142]"
                            : isTeaLeaf
                              ? "text-[#2F2140]"
                              : "text-[#f1dec2]"
                        }`}
                      >
                        {isTeaLeaf ? "Nhẹ nhàng mà rõ" : "Phù hợp khi cần"}
                      </p>
                      <p
                        className={`mt-1 text-[13px] leading-6 ${
                          isLenormand
                            ? "text-[#7A8098]"
                            : isTeaLeaf
                              ? "text-[#6E6180]"
                              : "text-[#d3c0df]"
                        }`}
                      >
                        {isTeaLeaf
                          ? "để bạn chủ động hơn trong thời gian tới"
                          : "định hướng kỹ lưỡng"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeService.notice_title && activeService.notices?.length ? (
              <div
                className={`mt-6 overflow-hidden rounded-[30px] border p-5 opacity-90 shadow-[0_16px_40px_rgba(43,24,52,0.07)] ${sectionCardClass}`}
              >
                <button
                  type="button"
                  onClick={() => setShowNotice((prev) => !prev)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <CircleAlert
                      className={`mt-[4px] h-4 w-4 shrink-0 ${iconClass}`}
                      strokeWidth={2.2}
                    />
                    <p
                      className={`text-[18px] font-semibold leading-7 ${titleTextClass}`}
                    >
                      {activeService.notice_title}
                    </p>
                  </div>

                  <span
                    className={`text-[18px] leading-none transition-transform duration-300 ${
                      showNotice ? "rotate-180" : ""
                    } ${titleTextClass}`}
                  >
                    ▾
                  </span>
                </button>

                {showNotice && (
                  <ul className="mt-4 space-y-4">
                    {activeService.notices.map((item: string) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-[14px] leading-8 ${baseTextClass}`}
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
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
