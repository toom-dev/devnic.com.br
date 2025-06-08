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
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 w-full min-h-screen overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative w-full grid lg:grid-cols-2 grid-cols-1 min-h-screen">
                <div className="flex items-center justify-center py-16 px-6 lg:py-20 lg:px-12 xl:px-20">
                    <div className="mx-auto max-w-2xl lg:mx-0 space-y-8" data-animate>
                        {logo && (
                            <div className="animate-fadeInUp">
                                <Image
                                    srcLocal={logo}
                                    alt="logo"
                                    className="max-w-48 lg:max-w-60 filter drop-shadow-lg"
                                />
                            </div>
                        )}
                        
                        {label && (
                            <div className="animate-fadeInUp animation-delay-200">
                                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-sm border border-blue-200 px-6 py-3 text-sm leading-6 text-blue-800 shadow-lg">
                                    <span className="text-blue-600 mr-2">✨</span>
                                    {label}
                                    <a
                                        href="https://wa.me/5511989266354?text=Olá! Gostaria de saber mais sobre os serviços da Devnic."
                                        target="_blank"
                                        className="whitespace-nowrap font-semibold text-blue-700 ml-3 hover:text-blue-800 transition-colors duration-200"
                                    >
                                        Falar com Especialista
                                        <span aria-hidden="true" className="ml-1">
                                            →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        )}
                        
                        {title && (
                            <div className="animate-fadeInUp animation-delay-400">
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </h1>
                            </div>
                        )}
                        
                        {description && (
                            <p className="animate-fadeInUp animation-delay-600 text-lg lg:text-xl leading-relaxed text-gray-700 max-w-2xl">
                                {description}
                            </p>
                        )}
                        
                        {button && button.link && (
                            <div className="animate-fadeInUp animation-delay-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Button
                                    variant={button.variant}
                                    link={button.link}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                >
                                    {button.text}
                                </Button>
                                
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 border-2 border-white shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white shadow-sm"></div>
                                    </div>
                                    <span>+50 empresas confiam em nós</span>
                                </div>
                            </div>
                        )}
                        
                        {/* Trust indicators */}
                        <div className="animate-fadeInUp animation-delay-1000 flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-green-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-700 font-medium">Garantia de 90 dias</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-700 font-medium">100% Seguro</span>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm text-gray-700 font-medium">Avaliação 5.0 estrelas</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {image && (
                    <div className="relative w-full h-64 lg:h-full min-h-96 lg:min-h-screen">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-50/20 to-white/60"></div>
                        <Image
                            srcLocal={image}
                            alt={label}
                            className="relative inset-0 w-full h-full object-cover object-center"
                        />
                        
                        {/* Floating elements */}
                        <div className="absolute top-10 right-10 hidden lg:block">
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">300%</div>
                                    <div className="text-sm text-gray-600">Aumento médio</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-10 right-10 hidden lg:block">
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-green-100 shadow-xl">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">90 dias</div>
                                    <div className="text-sm text-gray-600">Para resultados</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};
