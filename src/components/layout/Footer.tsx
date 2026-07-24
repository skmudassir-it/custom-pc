import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white">
              <FontAwesomeIcon icon={faMicrochip} className="size-5 text-primary" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">{siteConfig.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><FontAwesomeIcon icon={faDiscord} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><FontAwesomeIcon icon={faYoutube} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><FontAwesomeIcon icon={faGithub} className="size-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Gaming PCs", "Workstations", "Upgrades & Repairs", "Water Cooling", "Cable Management", "Consultation"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <FontAwesomeIcon icon={faLocationDot} className="size-4 mt-0.5 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <FontAwesomeIcon icon={faPhone} className="size-4 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
