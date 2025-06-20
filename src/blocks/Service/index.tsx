import { Container } from "@components/Container";
import { Icon } from "@static/icons";
import { type FC } from "react";

export type ServiceProps = {
    data: {
        aboveTitle?: string;
        title: string;
        description: string;
        services: {
            icon: string;
            title: string;
            description: string;
        }[];
    };
};

export const Service: FC<ServiceProps> = ({
    data: { aboveTitle, title, description, services },
}) => {
    // Do not render if there are no elements
    if (!services.length) {
        return null;
    }

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
            </div>

            <Container>
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16 lg:mb-20">
                        {aboveTitle && (
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6 animate-fade-in-up">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <span className="text-blue-700 font-semibold text-sm">
                                    {aboveTitle}
                                </span>
                            </div>
                        )}
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
                            <span className="block">Tecnologia</span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Estratégica
                            </span>
                            <span className="block text-gray-700 text-2xl sm:text-3xl lg:text-4xl font-medium mt-2">
                                para Crescer com Segurança
                            </span>
                        </h2>
                        
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                            {description}
                        </p>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-8 animate-fade-in-up animation-delay-600"></div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-fade-in-up"
                                style={{ animationDelay: `${800 + index * 200}ms` }}
                            >
                                {/* Background Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/80 group-hover:to-purple-50/40 rounded-3xl transition-all duration-500"></div>
                                
                                {/* Icon Container */}
                                <div className="relative z-10 mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                                        <Icon name={service.icon as any} className="w-10 h-10 text-white" />
                                    </div>
                                    
                                    {/* Floating decoration */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75 transition-all duration-300"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    
                                    {/* Learn More Link */}
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <button
                                            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                                        >
                                            Saiba mais
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Corner Decorations */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Bottom CTA Section */}
                    <div className="text-center mt-16 lg:mt-20 animate-fade-in-up animation-delay-1500">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                {/* Left Content */}
                                <div className="text-left lg:text-left">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                        Pronto para Transformar sua TI?
                                    </h3>
                                    <p className="text-blue-100 text-lg mb-6 lg:mb-0">
                                        Nossos especialistas estão prontos para criar a solução perfeita para seu negócio. 
                                        Diagnóstico gratuito e sem compromisso.
                                    </p>
                                </div>
                                
                                {/* Right CTA */}
                                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                                    <button
                                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="group bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        Diagnóstico Gratuito
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    
                                    <a
                                        href="https://wa.me/5511989266354?text=Olá! Gostaria de saber mais sobre as soluções de TI da Devnic e como podem ajudar minha empresa."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
