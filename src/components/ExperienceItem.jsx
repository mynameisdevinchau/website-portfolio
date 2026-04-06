export default function ExperienceItem({ item }) {
  return (
    <article className="relative rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
      <div className="absolute left-0 top-10 h-3 w-3 -translate-x-[7px] rounded-full border-4 border-[#f7f3ea] bg-neutral-950" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">{item.company}</p>
          <h3 className="mt-1 text-xl font-semibold text-neutral-950">{item.role}</h3>
        </div>
        <div className="text-sm text-neutral-500 sm:text-right">
          <p>{item.period}</p>
          <p>{item.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-[15px]">
        {item.summary}
      </p>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-700 sm:text-[15px]">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
