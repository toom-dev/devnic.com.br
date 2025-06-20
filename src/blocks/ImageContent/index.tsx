import { Container } from "@components/Container";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

export type ImageContentProps = {
    data: {
        imagePosition: "left" | "right";
        aboveTitle: string;
        title: string;
        description: string;
        image: ImageProps["srcLocal"];
    };
};

export const ImageContent: FC<ImageContentProps> = ({
    data: { aboveTitle, title, description, imagePosition, image },
}) => {
    /**
     * Do not render if there are no elements
     */
    if (!image && !title) {
        return null;
    }

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl"></div>
            </div>

            <Container>
                <div className="relative z-10">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        data-animate
                    >
                        {/* Image Section */}
                        <div
                            className={`relative ${
                                imagePosition === "left"
                                    ? "lg:order-1"
                                    : "lg:order-2"
                            }`}
                        >
                            <div className="relative group">
                                {/* Decorative background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                                
                                {/* Main image container */}
                                <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-200 group-hover:shadow-3xl transition-all duration-500">
                                    <div className="rounded-2xl overflow-hidden">
                                        {image && (
                                            <Image
                                                srcLocal={image}
                                                alt={`${title} - Devnic Web Solutions`}
                                                className="relative w-full h-full object-cover object-center rounded-2xl shadow-xl border-4 border-gray-100"
                                            />
                                        )}
                                    </div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div
                            className={`space-y-8 ${
                                imagePosition === "left"
                                    ? "lg:order-2"
                                    : "lg:order-1"
                            }`}
                        >
                            {/* Above title */}
                            {aboveTitle && (
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                                    <span className="text-blue-700 font-medium text-sm uppercase tracking-wide">
                                        {aboveTitle}
                                    </span>
                                </div>
                            )}
                            
                            {/* Title */}
                            {title && (
                                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </h2>
                            )}
                            
                            {/* Description */}
                            {description && (
                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    {description}
                                </p>
                            )}
                            
                            {/* Features list */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Soluções personalizadas para seu negócio</span>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Implementação rápida e eficiente</span>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Suporte contínuo e treinamento</span>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="pt-4">
                                <a 
                                    href="#contato"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
                                >
                                    <span>Começar Agora</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
