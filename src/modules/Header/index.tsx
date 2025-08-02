import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Navigation } from "@modules/Navigation";
import { type FC, useEffect, useRef, useState } from "react";
import * as S from "./styled";

export const Header: FC = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Navigation function that works for all routes
    const navigateToSection = (sectionId: string) => {
        // Close menus
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        
        // Check if we're on the home page
        if (window.location.pathname === '/') {
            // We're on home page, scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
                const headerHeight = 80;
            const offsetTop = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        } else {
            // We're on another page, navigate to home with hash
            window.location.href = `/#${sectionId}`;
        }
    };

    // Navigate to service pages
    const navigateToService = (servicePath: string) => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        window.location.href = servicePath;
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

    /**
     * Close dropdowns when clicking outside
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <S.HeaderStyled
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-xl ${
                isScrolled
                    ? 'border-b border-gray-200 shadow-lg'
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
                                onClick={() => navigateToSection('home')}
                                className="font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700"
                            >
                                Início
                            </button>
                            
                            {/* Services Dropdown */}
                            <div className="relative">
                            <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700 flex items-center gap-1"
                            >
                                Desenvolvimento
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {isServicesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                        <button
                                            onClick={() => navigateToService('/sistemas-web')}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                        >
                                            Sistemas Web
                                        </button>
                                        <button 
                                            onClick={() => navigateToService('/apps-mobile')}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                        >
                                            Apps Mobile
                                        </button>
                                        <button
                                            onClick={() => navigateToService('/sistemas-desktop')}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                        >
                                            Sistemas Desktop
                                        </button>
                                        <button
                                            onClick={() => navigateToService('/apis-integracao')}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                        >
                                            APIs e Integrações
                                        </button>
                                    </div>
                                )}
                            </div>
                            
                            <button
                                onClick={() => navigateToSection('sobre')}
                                className="font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700"
                            >
                                Sobre
                            </button>
                        </nav>
                        
                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="tel:+551198926-6354"
                                className="text-sm font-medium transition-colors duration-200 hover:text-blue-600 text-gray-600"
                            >
                                📞 (11) 98926-6354
                            </a>
                            <button
                                onClick={() => navigateToSection('contato')}
                                data-track="contact"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Orçamento Gratuito
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100"
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
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl">
                        <div className="px-4 py-6 space-y-4">
                            <button 
                                onClick={() => navigateToSection('home')}
                                className="block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                            >
                                Início
                            </button>
                            
                            {/* Mobile Services Section */}
                            <div className="space-y-2">
                                <div className="text-gray-500 text-sm font-medium px-4">Desenvolvimento</div>
                                <button 
                                    onClick={() => navigateToService('/sistemas-web')}
                                    className="block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Sistemas Web
                                </button>
                                <button 
                                    onClick={() => navigateToService('/apps-mobile')}
                                    className="block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Apps Mobile
                                </button>
                                <button 
                                    onClick={() => navigateToService('/sistemas-desktop')}
                                    className="block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Sistemas Desktop
                                </button>
                                <button 
                                    onClick={() => navigateToService('/apis-integracao')}
                                    className="block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                >
                                    APIs e Integrações
                                </button>
                            </div>
                            
                            <button 
                                onClick={() => navigateToSection('sobre')}
                                className="block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                            >
                                Sobre
                            </button>
                            <button 
                                onClick={() => navigateToSection('sobre')}
                                className="block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                            >
                                Sobre
                            </button>
                            
                            <div className="pt-4 border-t border-gray-200">
                                <a 
                                    href="tel:+551198926-6354" 
                                    className="block text-gray-600 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    📞 (11) 98926-6354
                                </a>
                                <button
                                    onClick={() => navigateToSection('contato')}
                                    data-track="contact"
                                    className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                                >
                                    Orçamento Gratuito
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </S.HeaderStyled>
    );
};
