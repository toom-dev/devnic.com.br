import { Container } from "@components/Container";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

type LogosProps = {
    data: {
        title: string;
        logos: ImageProps["srcLocal"][];
    };
};

export const Logos: FC<LogosProps> = ({ data: { logos, title } }) => {
    // Do not render if there are no elements
    if (!logos.length) {
        return null;
    }

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100 via-white to-blue-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-300 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-300 rounded-full filter blur-3xl"></div>
            </div>

            <Container>
                <div className="relative z-10 text-center">
                    {title && (
                        <div className="mb-16" data-animate>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        </div>
                    )}
                    
                    {/* Trust indicators */}
                    <div className="mb-12" data-animate>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">Clientes desde 2020</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">100% Satisfação</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">Suporte 24/7</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Logos grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto" data-animate>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-2xl transition-all duration-500"></div>
                                
                                {/* Logo container */}
                                <div className="relative z-10 flex items-center justify-center h-24">
                                    <Image
                                        srcLocal={logo}
                                        alt="company logo"
                                        className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Decorative corner */}
                                <div className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Bottom testimonial */}
                    <div className="mt-16 max-w-3xl mx-auto" data-animate>
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-lg text-gray-700 italic mb-4">
                                "A Devnic transformou completamente nossos processos. Em menos de 6 meses, conseguimos automatizar 80% das nossas tarefas manuais e aumentar a produtividade da equipe significativamente."
                            </blockquote>
                            <div className="text-gray-600 font-medium">
                                — CEO de uma das empresas parceiras
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
