import Link from "next/link";

export function HomeCTASection() {
  return (
    <section className="px-6 py-12 text-left bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 max-w-xl mx-0">
        Let&apos;s build your next digital product — together.
      </h2>
      <Link href="/contact">
        <button className="inline-flex items-center text-black bg-yellow-500 hover:bg-orange-600 transition-colors pl-4 px-1 py-1 font-semibold border border-orange-500">
          Book a Free Consult
          <span className="ml-4 bg-black text-white px-3 py-2">→</span>
        </button>
      </Link>
    </section>
  );
}