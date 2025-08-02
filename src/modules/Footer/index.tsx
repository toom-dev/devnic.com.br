import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Company Info */}
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    {/* Logo com fundo claro para melhor visibilidade */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                                        <div className="relative inline-block bg-gradient-to-br from-white via-blue-50 to-gray-50 rounded-2xl p-6 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                            <Logo />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                                    Desenvolvemos sistemas personalizados que <strong>automatizam seu negócio</strong>.
                                    Tecnologia moderna, metodologia ágil e suporte técnico especializado.
                                </p>
                                
                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
                                        <div className="text-2xl font-bold text-gray-900 mb-1">60 dias</div>
                                        <div className="text-gray-600 text-sm">Entrega Média</div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg">
                                        <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                                        <div className="text-gray-600 text-sm">Código Limpo</div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h4 className="text-gray-900 font-semibold mb-4">Siga-nos</h4>
                                    <div className="flex space-x-4">
                                        <a 
                                            href="#" 
                                            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://www.instagram.com/devnic_web/" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                            aria-label="Instagram"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://wa.me/5511989266354" 
                                            className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                            aria-label="WhatsApp"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-gray-900 font-semibold mb-6">Links Rápidos</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#home"
                                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                                            Início
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#servicos"
                                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                                            Serviços
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#sobre"
                                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                                            Sobre Nós
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#contato"
                                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact & Legal */}
                            <div>
                                <h4 className="text-gray-900 font-semibold mb-6">Contato & Legal</h4>
                                
                                {/* Contact Info */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <a href="tel:+5511989266354" className="hover:text-gray-900 transition-colors duration-200">
                                            (11) 98926-6354
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href="mailto:suporte.devnic@gmail.com" className="hover:text-gray-900 transition-colors duration-200">
                                            suporte.devnic@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Legal Links */}
                                <div>
                                    <h5 className="text-gray-900 font-medium mb-4">Informações Legais</h5>
                                    <ul className="space-y-3">
                                        <li>
                                            <a
                                                href="/politica-de-privacidade"
                                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                                            >
                                                Política de Privacidade
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/termos-de-uso"
                                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                                            >
                                                Termos de Uso
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 py-8">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                            <div className="text-gray-600 text-sm">
                                &copy; {new Date().getFullYear()} Devnic Web Solutions. Todos os direitos reservados.
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <span>CNPJ: 57.539.291/0001-08</span>
                                <span>•</span>
                                <span>Feito com ❤️ no Brasil</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    );
};
