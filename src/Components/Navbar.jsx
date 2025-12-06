import { clsName } from "@/lib/utills.js"
import { X, Menu } from "lucide-react";
import { use } from "react";
import { useEffect, useState } from "react";

const navItems = [
    { "name": "Home", "href": "#home" },
    { "name": "About", "href": "#about" },
    { "name": "Skills", "href": "#skills" },
    { "name": "Projects", "href": "#projects" },
    { "name": "Contact", "href": "#contact" },
];



export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={clsName("fixed w-full z-40 transition-all duration-300",
                scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}>
                <div className="container flex items-center justify-evenly">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Asmita{" "}</span> Portfolio
                        </span>
                    </a>
                    {/* Desktop version */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a className="text-foreground/80 hover:text-primary
                            transition-colors duration-300"
                                key={key} href={item.href}>{item.name}</a>
                        ))}
                    </div>

                    <button className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((val) => !val)}
                        aria-labelledby={isMenuOpen ? "Menu Opened" : "Menu Closed"}>
                        {isMenuOpen ? <X size={24} />
                            : <Menu size={24} />}
                    </button>


                    {/* Mobile version */}
                    <div className={clsName("fixed inset-0 bg-background/95 backdrop-blur-md",
                        " z-40 flex flex-col items-center justify-center",
                        " transition-transform duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none")}>
                        <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a className="text-foreground/80 hover:text-primary
                            transition-colors duration-300"
                                    key={key}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                >

                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}