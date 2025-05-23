import Image from "next/image";

export function AdvantagesSection() {
  return (
    <section className="bg-black text-white px-6 py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
        Why fast-moving Swedish teams choose Nocta.
      </h2>
      <p className="text-base sm:text-lg mb-8 leading-relaxed">
      Maybe you’ve worked with teams that were too slow or too expensive.
Or tried building in-house — only to hit delays and roadblocks.

At Nocta, we help you move faster without cutting corners.
From MVPs to full products, we build high-quality software — fast, affordable, and built for Sweden.
      </p>
      <hr className="border-white/70 mb-8" />
      <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
      Built by engineers from top internet companies.
      </h3>
      <div className="mb-4">
        <Image
          src="/senior-engineer.png"
          alt="Senior software engineer"
          width={500}
          height={300}
          className="w-3/4 h-auto object-cover rounded" 
        />
      </div>
      <p className="text-base sm:text-lg leading-relaxed">
      Our team brings years of experience from leading tech firms in China and Europe.We know how to build systems that scale, and how to move fast without breaking things.
      </p>

      <hr className="border-white/70 mb-8 mt-8" />
      <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
      We move fast — and stay flexible.
      </h3>
      <div className="mb-4">
        <Image
          src="/delivery.png"
          alt="Fast delivery"
          width={500}
          height={300}
          className="w-3/4 h-auto object-cover rounded" 
        />
      </div>
      <p className="text-base sm:text-lg leading-relaxed">
      Need a full product? Just one feature? An MVP in two weeks? Nocta is built for modular, focused development. You get exactly what you need, when you need it.
      </p>

      <hr className="border-white/70 mb-8 mt-8" />
      <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
      High quality doesn’t have to mean high cost.
      </h3>
      <div className="mb-4">
        <Image
          src="/factory.png"
          alt="cheap price"
          width={500}
          height={300}
          className="w-3/4 h-auto object-cover rounded" 
        />
      </div>
      <p className="text-base sm:text-lg leading-relaxed">
         We’re based in Sweden, but we operate lean. With our streamlined team and low overhead, we deliver top-tier results at a price that makes sense — especially compared to traditional Swedish dev shops.
      </p>

    </section>
  );
}