import Link from "next/link";

const services = [
  "Full Product Builds",
  "Module / Feature Dev",
  "MVP Prototyping",
  "Maintenance & Handoff",
];

export function ServicesSection() {
  return (
    <section className="bg-black text-white px-6 py-8 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 leading-tight">
      Custom software that ships faster — and smarter.
      </h2>
      <hr className="border-white/70 mb-2" />
      {services.map((service, idx) => (
        <div key={service}>
          <Link
            href="#"
            className="flex items-center justify-between py-4 font-serif text-xl font-semibold hover:underline focus:underline transition-colors"
          >
            {service}
            <span className="text-2xl font-normal ml-2">&rarr;</span>
          </Link>
          {idx !== services.length - 1 && <hr className="border-white/70" />}
        </div>
      ))}
    </section>
  );
} 