import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Navigation } from "@modules/Navigation";
import { type FC, useEffect, useRef, useState } from "react";
import * as S from "./styled";

export const Header: FC = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Smooth scroll function with header offset
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = 80; // Header height
            const offsetTop = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    /**
     * on scroll add blur & background to the header
     */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.HeaderStyled
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-primary/90 backdrop-blur-xl ${
                isScrolled
                    ? 'border-b border-secondary/20 shadow-lg'
                    : ''
            }`}
            ref={headerRef}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <nav className="flex items-center space-x-6">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="font-medium transition-colors duration-200 hover:text-tertiary cursor-pointer text-secondary"
                            >
                                Início
                            </button>
                            <button
                                onClick={() => scrollToSection('servicos')}
                                className="font-medium transition-colors duration-200 hover:text-tertiary cursor-pointer text-secondary"
                            >
                                Serviços
                            </button>
                            <button
                                onClick={() => scrollToSection('sobre')}
                                className="font-medium transition-colors duration-200 hover:text-tertiary cursor-pointer text-secondary"
                            >
                                Sobre
                            </button>
                            <button
                                onClick={() => scrollToSection('depoimentos')}
                                className="font-medium transition-colors duration-200 hover:text-tertiary cursor-pointer text-secondary"
                            >
                                Depoimentos
                            </button>
                        </nav>
                        
                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="tel:+551198926-6354"
                                className="text-sm font-medium transition-colors duration-200 hover:text-tertiary text-secondary/70"
                            >
                                📞 (11) 98926-6354
                            </a>
                            <button
                                onClick={() => scrollToSection('contato')}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Consulta Gratuita
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg transition-colors duration-200 text-secondary hover:bg-secondary/10"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-secondary/20 shadow-xl">
                        <div className="px-4 py-6 space-y-4">
                            <button 
                                onClick={() => scrollToSection('home')}
                                className="block w-full text-left text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary/10 hover:text-tertiary transition-colors duration-200"
                            >
                                Início
                            </button>
                            <button 
                                onClick={() => scrollToSection('servicos')}
                                className="block w-full text-left text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary/10 hover:text-tertiary transition-colors duration-200"
                            >
                                Serviços
                            </button>
                            <button 
                                onClick={() => scrollToSection('sobre')}
                                className="block w-full text-left text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary/10 hover:text-tertiary transition-colors duration-200"
                            >
                                Sobre
                            </button>
                            <button 
                                onClick={() => scrollToSection('depoimentos')}
                                className="block w-full text-left text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary/10 hover:text-tertiary transition-colors duration-200"
                            >
                                Depoimentos
                            </button>
                            
                            <div className="pt-4 border-t border-gray-200">
                                <a 
                                    href="tel:+551198926-6354" 
                                    className="block text-secondary/70 text-sm font-medium py-2 px-4 rounded-lg hover:bg-secondary/10 transition-colors duration-200"
                                >
                                    📞 (11) 98926-6354
                                </a>
                                <button
                                    onClick={() => scrollToSection('contato')}
                                    className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                                >
                                    Consulta Gratuita
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </S.HeaderStyled>
    );
};
