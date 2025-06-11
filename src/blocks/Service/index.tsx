import { type FC } from "react";
import { Icon, type IconName } from "@static/icons";
import { Container } from "@components/Container";

type ServiceProps = {
    data: {
        aboveTitle?: string;
        title?: string;
        description?: string;
        services: {
            icon: IconName["name"];
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
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-800 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-800 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-800 rounded-full filter blur-3xl"></div>
            </div>

            <Container>
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-20" data-animate>
                        {aboveTitle && (
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-900/30 mb-6">
                                <span className="text-tertiary font-medium text-sm uppercase tracking-wide">
                                    {aboveTitle}
                                </span>
                            </div>
                        )}
                        
                        {title && (
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary leading-tight mb-8">
                                <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h2>
                        )}
                        
                        {description && (
                            <p className="text-xl text-secondary/80 max-w-3xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service, index) => (
                            <article className="group relative bg-primary/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105" key={service.title}>
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-purple-900/0 to-pink-900/0 group-hover:from-blue-900/30 group-hover:via-purple-900/20 group-hover:to-pink-900/30 rounded-3xl transition-all duration-500"></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                            <Icon
                                                name={service.icon}
                                                className="h-8 w-8 text-white"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 group-hover:text-tertiary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-secondary/80 text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    {/* Learn More Arrow */}
                                    <div className="flex items-center mt-6 text-tertiary font-medium group-hover:text-purple-300 transition-colors duration-300">
                                        <span className="mr-2">Saiba mais</span>
                                        <svg 
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Decorative corner element */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </article>
                        ))}
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="text-center mt-16" data-animate>
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <span className="font-semibold">Vamos conversar sobre seu projeto</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
