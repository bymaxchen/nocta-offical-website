import Image from "next/image";

export function EfficiencySection() {
    return (
        <section className="text-left px-6 py-8 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Is your dev project stuck in slow, expensive cycles?
        </h2>
        <p className=" text-base sm:text-lg mb-10">
        Nocta helps Swedish startups and businesses build faster, better, and more affordably — without compromising quality.
        </p>
        <h3 className="text-center text-lg font-semibold uppercase tracking-wide mb-4">
        Nocta Efficiency Framework™
        </h3>
        <Image src="/efficiency-framework.png" width={200} height={200} alt="Efficiency Framework" className="mx-auto mt-8 w-full max-w-lg" />
        </section>
    );
}