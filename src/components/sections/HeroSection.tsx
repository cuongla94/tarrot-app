export default function HeroSection() {
  return (
    <section className="py-6">
      <div className="rounded-lg border border-border bg-card p-4 shadow-card">
        <p className="text-sm text-muted">Tarot reading</p>
        <h1 className="mt-2 text-2xl font-semibold text-text">Find clarity</h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Mobile-first one-page booking app.
        </p>

        <button className="mt-4 rounded-md bg-primary px-4 py-3 text-sm font-medium text-white">
          Book now
        </button>
      </div>
    </section>
  );
}
