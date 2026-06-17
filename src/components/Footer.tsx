import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com/sandjar", label: "Twitter" },
  { href: "https://www.linkedin.com/in/sandjar/", label: "LinkedIn" },
  { href: "https://mastodon.online/deck/@Sandjar", label: "Mastodon" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#a0a0a0]">
          &copy; {new Date().getFullYear()} Sandjar Kozubaev
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
