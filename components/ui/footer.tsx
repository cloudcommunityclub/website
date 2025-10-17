import type { ReactElement } from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

type SocialLink = {
  platform: string;
  href: string;
};

interface FooterProps {
  logo?: string;
  brandName?: string;
  year?: number;
  email?: string;
  sections: FooterSection[];
  socials: SocialLink[];
}

export default function Footer({
  logo,
  brandName,
  year = new Date().getFullYear(),
  email,
  sections,
  socials,
}: FooterProps) {
  const iconMap: Record<string, ReactElement> = {
    twitter: <IconBrandTwitter size={20} />,
    linkedin: <IconBrandLinkedin size={20} />,
    instagram: <IconBrandInstagram size={20} />,
    youtube: <IconBrandYoutube size={20} />,
    github: <IconBrandGithub size={20} />,
    discord: <IconBrandDiscord size={20} />,
    telegram: <IconBrandTelegram size={20} />,
    whatsapp: <IconBrandWhatsapp size={20} />,
  };

  return (
    <footer className="bg-[#0B1622] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3 underline underline-offset-4 decoration-gray-400">
              {section.title}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {email && (
          <div>
            <h3 className="font-semibold mb-3 underline underline-offset-4 decoration-gray-400">
              Contact
            </h3>
            <p className="text-gray-300">{email}</p>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 gap-6">
        <div className="flex items-center gap-2">
          {logo && (
            <Image
              src={logo}
              alt={brandName || "Brand"}
              width={32}
              height={32}
            />
          )}
          <span className="font-semibold text-lg">{brandName}</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400 text-xl">
          {socials.map((s, i) => {
            const key = s.platform?.toLowerCase?.() ?? "";
            const icon = iconMap[key];
            return (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {icon ?? <span className="text-sm text-gray-300">{s.platform}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {year} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
