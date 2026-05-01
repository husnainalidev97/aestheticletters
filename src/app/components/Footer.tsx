import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Services", href: "/terms-and-services" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full py-24 px-4 md:px-[150px] bg-[#fcf9f8] flex flex-col md:flex-row justify-between items-center gap-8 border-t border-outline-variant/30">
      <div className="flex flex-col gap-2">
        <span className="font-headline font-bold text-2xl text-zinc-900">
          Aesthetic Letters
        </span>
        <p className="font-['Manrope'] text-sm text-zinc-500 dark:text-zinc-400">
          © 2026 Aesthetic Letters. The Digital Curator.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-body text-sm text-zinc-500">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            className="hover:text-primary transition-colors opacity-100 hover:opacity-70"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
