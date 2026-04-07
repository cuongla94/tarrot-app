export function SectionHeader({
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 px-1">
      <h2 className="mt-1 text-xl font-semibold text-[#2b2233]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-[#6b5e7a]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
