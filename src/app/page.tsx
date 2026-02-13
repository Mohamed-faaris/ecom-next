import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8 text-white">
      <h1 className="mb-12 text-6xl font-bold tracking-tighter">
        SELECT A <span className="text-zinc-500">EXPERIENCE</span>
      </h1>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Theme 1 */}
        <Link
          href="/1"
          className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-sm bg-stone-100 p-8 text-stone-900 transition-transform hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40" />
          <div className="relative z-10">
            <span className="mb-2 block font-serif text-stone-600 italic">
              01
            </span>
            <h2 className="font-serif text-3xl font-medium">Minimal Luxury</h2>
            <p className="mt-2 text-sm text-stone-600">
              Refined. Elegant. Timeless.
            </p>
          </div>
        </Link>

        {/* Theme 2 */}
        <Link
          href="/2"
          className="group relative flex h-96 flex-col justify-end overflow-hidden border-2 border-green-500 bg-black p-8 text-white transition-transform hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale transition-opacity group-hover:opacity-20" />
          <div className="relative z-10 font-mono">
            <span className="mb-2 block text-green-400">02</span>
            <h2 className="text-4xl font-black tracking-widest text-green-400 uppercase">
              STREET
            </h2>
            <p className="mt-2 text-xs tracking-widest text-zinc-400 uppercase">
              Bold. Raw. Chaotic.
            </p>
          </div>
        </Link>

        {/* Theme 3 */}
        <Link
          href="/3"
          className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl bg-blue-600 p-8 text-white transition-transform hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay transition-opacity group-hover:opacity-10" />
          <div className="relative z-10">
            <span className="mb-2 block font-medium opacity-70">03</span>
            <h2 className="text-3xl font-bold tracking-tight">Active Tech</h2>
            <p className="mt-2 text-sm font-medium opacity-80">
              Performance. Speed. Grid.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
