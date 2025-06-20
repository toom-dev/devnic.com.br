import { Button } from "@components/Button";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

export type ContentImageProps = {
    logo?: ImageProps["srcLocal"];
    label: string;
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
        variant: "primary" | "secondary" | "tertiary";
    };
    image?: ImageProps["srcLocal"];
};

export const ContentImage: FC<ContentImageProps> = ({
    title,
    description,
    button,
    image,
    label,
    logo,
}) => {
    // Do not render if there are no elements
    if (!title && !description) {
        return null;
    }

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 w-full min-h-screen overflow-hidden">
            {/* Modern Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>

            <div className="relative w-full min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 min-h-screen items-center py-12 lg:py-0">
                        
                        {/* Content Section */}
                        <div className="order-2 lg:order-1 space-y-8 max-w-2xl mx-auto lg:mx-0">
                            
                            {/* Trust Badge */}
                            {label && (
                                <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full shadow-sm">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-green-700 font-semibold text-sm">
                                            {label.replace('🚀', '').trim()}
                                        </span>
                                        <a
                                            href="https://wa.me/5511989266354?text=Olá! Gostaria de saber mais sobre o diagnóstico gratuito da Devnic."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 hover:text-green-800 font-semibold text-sm border-l border-green-300 pl-3 ml-3 transition-colors"
                                        >
                                            Falar com Especialista
                                            <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                            
                            {/* Headline */}
                            {title && (
                                <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                        <span className="block text-gray-900">Potencialize</span>
                                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                            Seu Negócio
                                        </span>
                                        <span className="block text-gray-700 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mt-2">
                                            com TI Estratégica
                                        </span>
                                    </h1>
                                </div>
                            )}
                            
                            {/* Description */}
                            {description && (
                                <div className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
                                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                                        {description}
                                    </p>
                                </div>
                            )}

                            {/* Key Benefits */}
                            <div className="animate-fade-in-up" style={{animationDelay: '700ms'}}>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700">Crescimento Garantido</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700">Segurança Total</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700">90 dias para ROI</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Section */}
                            {button && button.link && (
                                <div className="animate-fade-in-up" style={{animationDelay: '800ms'}}>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <button
                                            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-max"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {button.text}
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </button>
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-white shadow-sm flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">CS</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white shadow-sm flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">MS</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-white shadow-sm flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">RL</span>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                <div className="font-semibold">200+ empresas transformadas</div>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-gray-500 ml-1">4.9/5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Image Section */}
                        {image && (
                            <div className="order-1 lg:order-2 relative">
                                <div className="relative max-w-lg mx-auto lg:max-w-none">
                                    {/* Main Image Container */}
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            srcLocal={image}
                                            alt="TI Consultancy Results"
                                            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                                    </div>
                                    
                                    {/* Floating Stats Cards */}
                                    <div className="absolute -top-6 -left-6 hidden sm:block animate-float">
                                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-gray-200">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-gray-900">40%</div>
                                                    <div className="text-sm text-gray-600">Redução de Custos</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute -bottom-6 -right-6 hidden sm:block animate-float" style={{animationDelay: '1s'}}>
                                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-gray-200">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-gray-900">90</div>
                                                    <div className="text-sm text-gray-600">Dias para ROI</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};
