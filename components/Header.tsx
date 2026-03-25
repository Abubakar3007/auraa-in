"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      setScrolled(scrollY > vh * 0.8); // 80% of viewport height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Models",
      path: "/models",
      hasDropdown: true,
      dropdownItems: [
        { name: "Women", path: "/models/women" },
        { name: "Men", path: "/models/men" },
      ]
    },
    { name: "AuraaEdge", path: "/auraa-edge" },
    { name: "Contact Us", path: "/contact" },
    { name: "Join Us", path: "/join" },
  ];

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${pathname === "/"
          ? scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent text-white"
          : `bg-background/95 backdrop-blur-sm ${scrolled ? 'shadow-sm' : ''}`
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 md:py-6 py-3 md:block flex justify-between items-center">
        {/* Logo */}
        {
          !scrolled ? (
            <div className="flex justify-center md:pb-6 md:w-auto w-full">
              <Link href="/" className="flex flex-col items-center">
                <span
                  className={`${isTransparent ? "text-white" : "text-foreground"
                    } font-display text-2xl md:text-4xl tracking-[0.3em]`}
                >
                  AURAA
                </span>
                <span className={`${isTransparent ? "text-white" : "text-muted-foreground"} font-body text-[10px] tracking-[0.4em] md:mt-1`}>
                  TALENTS
                </span>
              </Link>
            </div>
          ) : (
            <div className="md:hidden w-full flex justify-center">
              <Link href="/" className="flex flex-col items-center w-fit">
                <span
                  className={`${isTransparent ? "text-white" : "text-foreground"
                    } font-display text-2xl tracking-[0.3em]`}
                >
                  AURAA
                </span>
                <span className={`${isTransparent ? "text-white" : "text-muted-foreground"} font-body text-[10px] tracking-[0.4em]`}>
                  TALENTS
                </span>
              </Link>
            </div>
          )
        }

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsModelsOpen(true)}
                  onMouseLeave={() => setIsModelsOpen(false)}
                >
                  <button
                    className={`after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 flex items-center gap-1 hover:after:w-full ${isActive(link.path) ? 'after:w-full' : ''} ${(pathname === "/" && scrolled) ? "text-foreground hover:text-foreground/80 after:bg-foreground" : isTransparent ? "text-white hover:text-white/80 after:bg-white" : "text-foreground hover:text-foreground/80 after:bg-foreground"}`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {isModelsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-background border border-border shadow-lg py-2 min-w-[120px]">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            className="block px-6 py-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.path}
                  className={`after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full ${isActive(link.path) ? 'after:w-full' : ''} ${isTransparent ? "text-white hover:text-white/80 after:bg-white" : "text-foreground hover:text-foreground/80 after:bg-foreground"}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[71px] bg-background z-40 animate-fade-in min-h-[calc(100vh-71px)]">
          <nav className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <div key={link.name} className="text-center">
                {link.hasDropdown ? (
                  <div>
                    <button
                      className="nav-link flex items-center gap-1 mb-4"
                      onClick={() => setIsModelsOpen(!isModelsOpen)}
                    >
                      {link.name}
                      <ChevronDown className={`w-3 h-3 transition-transform ${isModelsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isModelsOpen && (
                      <div className="flex flex-col gap-3">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
