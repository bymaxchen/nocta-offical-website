import Image from "next/image";
import { CTASection } from "../components/CTASection";
export default function AboutPage() {

    return (
        <>
        <section className="bg-black text-white px-6 py-8 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 leading-tight">
                The tech team Swedish startups turn to for fast, reliable software.
            </h2>

            <div className="flex flex-col gap-8">
                <div className="flex justify-end">
                    <div className="w-1/2 h-48">
                        <Image
                            src="/about/read.png"
                            alt="About girl reading"
                            width={500}
                            height={192}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full h-48">
                        <Image
                            src="/about/pc.png"
                            alt="pc"
                            width={500}
                            height={192}
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="w-1/2 h-48">
                        <Image
                            src="/about/code.png"
                            alt="code"
                            width={500}
                            height={192}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 mt-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 leading-tight">
                    Leaderships.
                </h2>
                <p>
                    &quot;Nocta exists to help teams turn ideas into working software — faster.
                    Whether it&apos;s a full product build, a standalone feature, or an MVP, we care about making things real. Because when ambitious teams move quickly and launch boldly, great things happen — and progress doesn&apos;t have to wait.&quot;
                </p>
            </div>

            <div className="flex flex-col gap-8 mt-16">
                <h3 className="text-xl sm:text-4xl font-serif font-bold leading-tight">
                    XiaoBo Chen
                </h3>
                <Image src="/about/xiaobo-chen.png" alt="XiaoBo Chen" width={500} height={192} className="w-full h-full" />
                <p className="text-sm">Seniror Java Engineer</p>
            </div>
        </section>
        <CTASection />
        </>
    );
  } 