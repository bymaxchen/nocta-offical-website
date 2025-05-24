import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 text-sm">
      {/* Top border to separate from above content */}
      <div className=" pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* SERVICES */}
          <div className="border-t border-white pt-4">
            <h3 className="uppercase font-semibold mb-4 tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Full Product Builds</Link></li>
              <li><Link href="#" className="hover:underline">Module / Feature Dev</Link></li>
              <li><Link href="#" className="hover:underline">MVP Prototyping</Link></li>
              <li><Link href="#" className="hover:underline">Maintenance & Handoff</Link></li>
            </ul>
          </div>
          {/* COMPANY */}
          <div className="border-t border-white pt-4">
            <h3 className="uppercase font-semibold mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          {/* RESOURCES */}
          <div className="border-t border-white pt-4">
            <h3 className="uppercase font-semibold mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Articles</Link></li>
              <li><Link href="#" className="hover:underline">Guides</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom contact info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="uppercase font-semibold mb-2 tracking-wide">New Business</h4>
            <Link href="mailto:opportunities@nocta.com" className="hover:underline">
              opportunities@nocta.com
            </Link>
          </div>
          <div>
            <h4 className="uppercase font-semibold mb-2 tracking-wide">Say Hello</h4>
            <Link href="mailto:hello@nocta.com" className="hover:underline">
              hello@nocta.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
