/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutSection() {
  const [hRef, hIn] = useInView({ threshold: 0.2 });

  // line animates after ABOUT is in view
  const lineLoaded = hIn;

  const [pRef, pIn] = useInView({ threshold: 0.2 });
  const [w1Ref, w1In] = useInView({ threshold: 0.2 });
  const [w2Ref, w2In] = useInView({ threshold: 0.2 });

  const [wsRef, wsIn] = useInView({ threshold: 0.2 });
  const [apRef, apIn] = useInView({ threshold: 0.2 });
  const [cdRef, cdIn] = useInView({ threshold: 0.2 });

  const pop = (inView, extra = "") =>
    cx(
      "transition-all duration-700 ease-out",
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      extra,
    );

  return (
    <section className="relative py-20 bg-[#fbf6ea]">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div
          ref={hRef}
          className={cx(
            "text-center mb-10 md:mb-12 transition-all duration-700 ease-out",
            hIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl md:text-8xl font-bold text-neutral-900">
            ABOUT
          </h2>

          {/* Line draws only after you reach the section */}
          <div className="flex justify-center">
            <div className="relative h-[3px] w-64 mt-4 rounded-full overflow-hidden">
              <div
                className={cx(
                  "absolute inset-0 bg-black/80 rounded-full origin-center",
                  "transition-transform duration-700 ease-out",
                  lineLoaded ? "scale-x-35" : "scale-x-0",
                )}
                style={{ transitionDelay: "150ms" }}
              />
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Portrait */}
          <div
            ref={pRef}
            className={cx("md:col-span-5 md:row-span-2", pop(pIn))}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img
                src="03f6ab3d-dc6a-4bb9-8e4d-a9b4eeb103e7.jpg"
                alt="Portrait photo"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fbf6ea]/95 via-[#fbf6ea]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Hi, I'm Devin
                </h3>
                <p className="text-neutral-700">
                  Software Engineer & Creative Developer
                </p>
              </div>
            </div>
          </div>

          {/* Who I Am */}
          <div
            ref={w1Ref}
            className={cx("md:col-span-7", pop(w1In))}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="h-full rounded-2xl border border-black/10 bg-white p-6 md:p-8 hover:bg-black/[0.02] transition">
              <p className="text-xs font-medium tracking-widest text-neutral-600 uppercase mb-4">
                Who I Am
              </p>
              <p className="text-lg md:text-xl text-neutral-900 leading-relaxed">
                A software engineer focused on creating great user experiences.
                I build interactive apps that focuses on user needs with
                efficiency and creativity.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div
            ref={w2Ref}
            className={cx("md:col-span-7", pop(w2In))}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="h-full rounded-2xl border border-black/10 bg-white p-6 md:p-8 hover:bg-black/[0.02] transition">
              <p className="text-xs font-medium tracking-widest text-neutral-600 uppercase mb-4">
                What I Do
              </p>
              <p className="text-lg md:text-xl text-neutral-900 leading-relaxed">
                I specialize in back-end development with Python and Java, with
                strong experience in SQL and MongoDB for data management. I also
                enjoy building polished front-end experiences with React,
                JavaScript, and CSS, focusing on seamless UI and intuitive
                interactions.
              </p>
            </div>
          </div>

          {/* Workspace */}
          <div
            ref={wsRef}
            className={cx("md:col-span-4", pop(wsIn))}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="group relative h-48 md:h-full min-h-[200px] rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img
                src="891bba7c-450e-4ebc-9e50-8aa7569f2554.jpg"
                alt="Workspace setup"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Approach */}
          <div
            ref={apRef}
            className={cx("md:col-span-4", pop(apIn))}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="h-full rounded-2xl border border-black/10 bg-neutral-900 p-6 md:p-8 hover:bg-neutral-800 transition">
              <p className="text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
                My Approach
              </p>
              <p className="text-white leading-relaxed">
                Every project starts with understanding user needs and crafting
                solutions that are both efficient and effective.
              </p>
            </div>
          </div>

          {/* Coding */}
          <div
            ref={cdRef}
            className={cx("md:col-span-4", pop(cdIn))}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="group relative h-48 md:h-full min-h-[200px] rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img
                src="14a041eb-442c-4aa1-990c-426a0f0a20c4.jpg"
                alt="Coding close-up"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
