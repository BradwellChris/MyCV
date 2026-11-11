import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Work Experience" },
  { href: "#qualification", label: "Qualifications" },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:sticky md:top-0 md:flex md:h-screen z-50 flex-col glass-strong px-4 py-6">
        <a className="text-xl font-bold tracking-tight whitespace-nowrap hover:text-primary" href="#">ChrisB<span className="text-primary">.</span></a>

        <nav className="mt-10 flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <a
              href={link.href}
              key={idx}
              className="whitespace-nowrap px-3 py-2 text-sm leading-snug text-muted-foreground hover:text-primary rounded-lg hover:bg-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="mt-auto block whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Contact Me
        </a>
      </aside>

      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass py-3" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <a className="text-xl font-bold tracking-tight hover:text-primary" href="#">ChrisB<span className="text-primary">.</span></a>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  href={link.href}
                  key={idx}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-background"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}


export default Navbar;
