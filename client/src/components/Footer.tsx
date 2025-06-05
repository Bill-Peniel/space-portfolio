export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/alexcosmos", color: "cyan" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/alexcosmos", color: "rose" },
    { icon: "fab fa-twitter", href: "https://twitter.com/alexcosmos", color: "green" },
    { icon: "fas fa-envelope", href: "mailto:alex@spacecosmos.dev", color: "cyan" }
  ];

  return (
    <footer className="py-12 bg-slate-900 border-t border-cyan-400/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-cyan-400 mb-2 glitch relative" data-text="SPACE.DEV">
              SPACE.DEV
            </div>
            <div className="text-slate-400 text-sm">© 2024 ALEX COSMOS. ALL.RIGHTS.RESERVED</div>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 hover:text-${link.color}-400 transition-colors duration-300`}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <div className="text-slate-500 text-xs">
            POWERED.BY.QUANTUM.COMPUTING | BUILT.WITH.REACT.&.LOVE | STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
