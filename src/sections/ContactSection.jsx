/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useInViewOnce(options) {
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

export default function ContactSection() {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const arm = () => {
      if (window.scrollY > 10) setArmed(true);
    };
    window.addEventListener("scroll", arm, { passive: true });
    arm();
    return () => window.removeEventListener("scroll", arm);
  }, []);

  const [hRef, hIn] = useInViewOnce({
    threshold: 0.55,
    rootMargin: "0px 0px -10% 0px",
  });

  const loaded = armed && hIn;

  const contactMethods = [
    {
      label: "Email",
      value: "chau.devin031602@gmail.com",
      href: "mailto:chau.devin031602@gmail.com",
      description: "Best for detailed inquiries",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/devin-chau-66b5b2208",
      href: "https://linkedin.com/in/devin-chau-66b5b2208",
      description: "Let's connect professionally",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/mynameisdevinchau",
      href: "https://github.com/mynameisdevinchau",
      description: "Check out my code",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-[#fbf6ea]"
      id="contact-section"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <div
          ref={hRef}
          className={cx(
            "text-center mb-16 md:mb-20 transition-all duration-700 ease-out",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-neutral-900 tracking-tight">
            LET&apos;S TALK
          </h2>

          {/* Line draws from center outward */}
          <div className="flex justify-center">
            <div className="relative mt-4 h-[3px] w-64 md:w-80 rounded-full overflow-hidden">
              <div
                className={cx(
                  "absolute inset-0 bg-neutral-900 rounded-full origin-center",
                  "transition-transform duration-700 ease-out",
                  loaded ? "scale-x-35" : "scale-x-0",
                )}
                style={{ transitionDelay: "150ms" }}
              />
            </div>
          </div>

          <p
            className={cx(
              "mt-8 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto transition-all duration-700 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Have a question or want to work together?
            <br />
            Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 md:gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                "group relative flex items-center gap-5 md:gap-6 p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white/50 backdrop-blur-sm",
                "transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-lg",
              )}
              style={{
                transitionDelay: loaded ? `${300 + index * 100}ms` : "0ms",
                transform: loaded ? "translateY(0px)" : "translateY(16px)",
                opacity: loaded ? 1 : 0,
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                {method.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    {method.label}
                  </p>
                  <span className="text-xs text-neutral-400">
                    — {method.description}
                  </span>
                </div>
                <p className="text-base md:text-lg font-medium text-neutral-900 truncate group-hover:text-neutral-700 transition-colors duration-300">
                  {method.value}
                </p>
              </div>

              {/* Arrow */}
              <span className="flex-shrink-0 text-2xl md:text-3xl text-neutral-300 transition-all duration-300 group-hover:text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p
          className={cx(
            "text-center mt-12 text-sm text-neutral-400 transition-all duration-700 ease-out",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
          style={{ transitionDelay: "650ms" }}
        >
          I typically respond within 24-48 hours
        </p>
      </div>
    </section>
  );
}
