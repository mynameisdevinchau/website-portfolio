import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setTimeout(() => setStatus(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      label: "Email",
      value: "chau.devin031602@gmail.com",
      href: "mailto:chau.devin031602@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/devin-chau-66b5b2208",
      href: "https://linkedin.com/in/devin-chau-66b5b2208",
    },
    {
      label: "GitHub",
      value: "github.com/mynameisdevinchau",
      href: "https://github.com/mynameisdevinchau",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-[#fbf6ea]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-8xl font-bold text-neutral-900 tracking-tight">
            LET&apos;S TALK
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neutral-900" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* Left: Contact Form */}
          <div>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10">
              Want to know more about my work or me? <br />
              Drop a message below!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-neutral-300 bg-transparent px-1 py-3 text-neutral-900 transition-colors duration-200 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-neutral-300 bg-transparent px-1 py-3 text-neutral-900 transition-colors duration-200 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-b-2 border-neutral-300 bg-transparent px-1 py-3 text-neutral-900 transition-colors duration-200 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none resize-none"
                  placeholder="Ask me anything"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-full bg-neutral-900 px-10 py-4 font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:px-12"
                >
                  <span className="relative z-10">Send</span>
                </button>

                {status && (
                  <p className="text-sm font-medium text-neutral-600 animate-in fade-in duration-300">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Right: Contact Links */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              Reach out directly
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-neutral-200 pb-5 transition-all duration-300 hover:border-neutral-900"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        {method.label}
                      </p>
                      <p className="text-base md:text-lg font-medium text-neutral-900 group-hover:translate-x-1 transition-transform duration-300">
                        {method.value}
                      </p>
                    </div>
                    <span className="text-2xl text-neutral-300 transition-all duration-300 group-hover:text-neutral-900 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
