export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
