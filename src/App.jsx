export default function MowboticsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-black/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <img
            src="/logo.png"
            alt="Mowbotics Logo"
            className="h-10 sm:h-14 w-auto"
            />
            <div className="flex flex-col justify-center">
            <div className="font-black tracking-tight text-xl sm:text-2xl leading-none text-white">
            Mowbotics
            </div>

            <div className="hidden sm:block text-sm text-zinc-500 mt-1 leading-none">
            Autonomous Lawn Maintenance
            </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 sm:px-5 py-2 rounded-xl bg-lime-400 text-sm sm:text-base font-semibold text-black shadow-[0_0_30px_rgba(163,230,53,0.4)]"
          >
            Get A Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-lime-400/20 text-sm font-medium text-zinc-300 mb-6">
              <div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.4)]" />
              Serving Southwest Michigan
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
              Your lawn.
              <br />
              <span className="text-lime-500">Fully autonomous.</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-8 max-w-xl">
              Mowbotics installs and manages robotic lawn mowers that keep your lawn perfectly maintained week after week — without the noise, scheduling, or hassle of traditional mowing.
            </p>

            <p className="text-zinc-500 text-sm mb-8">
            Quiet • Autonomous • Professionally Managed
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl bg-lime-400 text-black hover:bg-lime-300 transition duration-300 font-bold shadow-[0_0_30px_rgba(163,230,53,0.35)]"
              >
                Request A Quote
              </a>

              <a
                href="#how-it-works"
                className="px-7 py-4 rounded-2xl border border-lime-400/30 text-lime-300 hover:border-lime-400 hover:bg-lime-400/10 transition duration-300 font-semibold"
              >
                How It Works
              </a>
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl p-5 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime-200 rounded-full blur-3xl opacity-40" />

              <div className="relative space-y-6">
                <img
                  src="/luba.jpg"
                  alt="Mammotion LUBA mower"
                  className="aspect-video w-full object-cover rounded-2xl border border-zinc-800"
                  />

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-zinc-800 p-5">
                    <div className="text-3xl font-black text-lime-500 mb-1">24/7</div>
                    <div className="text-sm text-zinc-400">Automated maintenance</div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 p-5">
                    <div className="text-3xl font-black text-lime-500 mb-1">Quiet</div>
                    <div className="text-sm text-zinc-400">Low-noise operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-lime-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Why Mowbotics
            </div>

            <h2 className="text-4xl font-black tracking-tight mb-4">
              Modern lawn care without the weekly hassle.
            </h2>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We install, configure, and maintain robotic mowing systems so your lawn stays consistently clean and healthy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Always Maintained',
                text: 'Frequent autonomous mowing keeps grass looking cleaner and healthier than traditional weekly cuts.',
              },
              {
                title: 'No Scheduling',
                text: 'No waiting for mowing crews, reschedules, or weather delays. Your system works automatically.',
              },
              {
                title: 'Managed Service',
                text: 'Mowbotics handles setup, monitoring, adjustments, and support so you do not have to.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-8 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] hover:-translate-y-1 transition duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-lime-100 flex items-center justify-center mb-6">
                  <div className="w-5 h-5 rounded-full bg-lime-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-lime-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              How It Works
            </div>

            <h2 className="text-4xl font-black tracking-tight">
              Simple setup. Fully automated results.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Property Evaluation',
                text: 'We evaluate your lawn layout, obstacles, slopes, and mowing requirements.',
              },
              {
                step: '02',
                title: 'Professional Installation',
                text: 'Your robotic mower is installed, mapped, tested, and optimized for your property.',
              },
              {
                step: '03',
                title: 'Ongoing Maintenance',
                text: 'The mower maintains your lawn automatically while we handle support and upkeep.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 shadow-sm"
              >
                <div className="text-lime-500 text-5xl font-black mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.06),transparent_45%)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-lime-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              FAQ
            </div>

            <h2 className="text-4xl font-black tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do robotic mowers actually work well?',
                a: 'Yes. Modern robotic mowers maintain lawns by cutting frequently and lightly, resulting in a consistently clean appearance.',
              },
              {
                q: 'Do I need to do anything after installation?',
                a: 'Very little. Mowbotics handles setup, optimization, and ongoing support.',
              },
              {
                q: 'What happens with rain or obstacles?',
                a: 'The mowing systems are designed to navigate mapped boundaries and can adapt to changing conditions.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900"
              >
                <h3 className="font-bold text-xl mb-3">{faq.q}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-lime-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Contact
          </div>

          <h2 className="text-5xl font-black tracking-tight mb-6">
            Ready for autonomous lawn care?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Request a quote and see whether robotic mowing is a good fit for your property.
          </p>

          <form
  name="quote"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="grid gap-5 text-left"
>
  {/* Hidden input required by Netlify */}
  <input type="hidden" name="form-name" value="quote" />

  {/* Spam protection */}
  <p className="hidden">
    <label>
      Don’t fill this out if you're human:
      <input name="bot-field" />
    </label>
  </p>

  <div className="grid md:grid-cols-2 gap-5">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      className="w-full rounded-2xl bg-zinc-900 border border-zinc-700 px-5 py-4 outline-none focus:border-lime-400"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      className="w-full rounded-2xl bg-zinc-900 border border-zinc-700 px-5 py-4 outline-none focus:border-lime-400"
      required
    />
  </div>

  <textarea
    name="message"
    placeholder="Tell us about your lawn or property"
    rows="6"
    className="w-full rounded-2xl bg-zinc-900 border border-zinc-700 px-5 py-4 outline-none focus:border-lime-400"
    required
  />

  <button
    type="submit"
    className="px-7 py-4 rounded-2xl bg-lime-400 text-black font-bold shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:bg-lime-300 transition duration-300"
  >
    Request Quote
  </button>
</form>
        <footer className="border-t border-zinc-900 py-8">
  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
    <div>
      © 2026 Mowbotics LLC. All rights reserved.
    </div>

    <div>
      Southwest Michigan Autonomous Lawn Maintenance
    </div>
  </div>
</footer>
      </section>
    </div>
  )
}
