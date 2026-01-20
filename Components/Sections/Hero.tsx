import Link from "next/link";

// Hero.jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-800 to-black">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-800/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Live • Breaking • Trusted
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-400 md:text-5xl">
              Stay ahead with{" "}
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Articler
              </span>{" "}
              — breaking news, analysis, and exclusives.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              Your trusted source for breaking news, in-depth analysis, exclusive
              interviews, headlines, and videos — all in one place.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/explore"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 active:scale-[0.98]"
              >
                Explore Top Stories
              </Link>

              <Link
                href="/explore"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 active:scale-[0.98]"
              >
                Browse Categories
              </Link>
            </div>

            {/* Quick stats / trust chips */}
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-200">
              <span className="rounded-full border bg-slate-900 px-3 py-1">
                🔥 Breaking updates
              </span>
              <span className="rounded-full border bg-slate-900 px-3 py-1">
                🎥 Video coverage
              </span>
              <span className="rounded-full border bg-slate-900 px-3 py-1">
                🧠 Smart analysis
              </span>
              <span className="rounded-full border bg-slate-900 px-3 py-1">
                🇺🇸 US & Global
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-3xl border bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Top Headlines</p>
                <span className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                  Updated now
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-linear-to-br from-blue-200 to-indigo-200" />
                    <div className="w-full">
                      <div className="h-3 w-3/4 rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />
                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-xs text-slate-500">
                          Live update • 2m ago
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-sm font-semibold">Get daily briefings</p>
                <p className="mt-1 text-sm text-white/80">
                  Subscribe for headlines in your inbox.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-6 -top-6 hidden rounded-2xl border bg-white px-4 py-3 shadow-lg md:block">
              <p className="text-xs text-slate-500">Trusted Source</p>
              <p className="text-sm font-semibold text-slate-900">Articler</p>
              <p className="text-xs text-slate-500">EN • US • General</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
