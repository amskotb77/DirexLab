const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-lab flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-dim-2">
        <p className="h-display text-base text-dim">
          Dire<span className="text-accent">X</span> Lab
        </p>

        <nav className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              data-cursor="link"
              className="hover:text-paper transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a href="mailto:hello@direxlab.com" data-cursor="link" className="hover:text-paper transition-colors">
          hello@direxlab.com
        </a>

        <p>&copy; {new Date().getFullYear()} Direx Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
