import { ArrowUpRightIcon, GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              <GithubIcon />
            </a>
            <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">
              {project.title}
            </h3>
          </div>
          <p className="text-sm leading-7 text-neutral-600 sm:text-[15px]">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700 sm:text-[15px]">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition group-hover:gap-3"
        >
          View repository
          <ArrowUpRightIcon />
        </a>
      </div>
    </article>
  );
}
