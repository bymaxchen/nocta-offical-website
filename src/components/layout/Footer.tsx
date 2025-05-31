import { Link } from 'react-router-dom';
import { footerContent } from '../../data/homeContent';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6">{footerContent.navigation.services.title}</h3>
            <ul className="space-y-3">
              {footerContent.navigation.services.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6">{footerContent.navigation.company.title}</h3>
            <ul className="space-y-3">
              {footerContent.navigation.company.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6">{footerContent.navigation.resources.title}</h3>
            <ul className="space-y-3">
              {footerContent.navigation.resources.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">NEW BUSINESS</h4>
            <p className="text-sm text-white/70 mb-4">
              <a href={`mailto:${footerContent.contactInfo.business}`} className="hover:text-brand-orange transition-colors">
                {footerContent.contactInfo.business}
              </a>
            </p>

            <h4 className="text-sm font-bold text-white mb-3">SAY HELLO</h4>
            <p className="text-sm text-white/70 mb-6">
              <a href={`mailto:${footerContent.contactInfo.email}`} className="hover:text-brand-orange transition-colors">
                {footerContent.contactInfo.email}
              </a>
            </p>

            <div className="flex space-x-4">
              {footerContent.social.map((platform, index) => (
                <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-orange transition-colors">
                  {platform.icon === 'linkedin' ? <Linkedin size={20} /> : <Instagram size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-end gap-6 mb-10">
          {footerContent.certifications.map((cert, index) => (
            <div key={index} className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-xs text-white/70 text-center">{cert.name}</span>
            </div>
          ))}
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {footerContent.legal.map((item, index) => (
              <Link key={index} to={item.href} className="text-xs text-white/70 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="text-xs text-white/70">
            {footerContent.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}