export function SectionHeader({
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 px-1">
      <h2 className="text-[26px] leading-[1.1] font-[var(--font-heading)] tracking-[-0.01em] text-[#7E7090]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[13px] leading-7 text-[#7B6D87]">
          {subtitle}
        </p>
      )}

      <div className="mt-6 h-px w-full bg-[#E7DFF0]" />
    </div>
  );
}
