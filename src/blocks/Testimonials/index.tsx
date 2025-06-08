import { Container } from "@components/Container";
import { Icon } from "@static/icons";
import { type FC } from "react";

export type TestimonialsProps = {
    data: {
        aboveTitle?: string;
        title?: string;
        description?: string;
        authors: {
            authorName: string;
            authorRole: string;
            content: string;
        }[];
    };
};

export const Testimonials: FC<TestimonialsProps> = ({
    data: { authors, description, aboveTitle, title },
}) => {
    // Do not render if there are no elements
    if (!authors.length) {
        return null;
    }

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <Container>
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-20" data-animate>
                        {aboveTitle && (
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 mb-6">
                                <span className="text-blue-300 font-medium text-sm uppercase tracking-wide">
                                    {aboveTitle}
                                </span>
                            </div>
                        )}
                        
                        {title && (
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h2>
                        )}
                        
                        {description && (
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid gap-8 lg:grid-cols-3 items-start">
                        {authors.map((author, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                data-animate
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Quote icon */}
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <blockquote className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 grow">
                                    "{author.content}"
                                </blockquote>

                                {/* Author info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                        {author.authorName.charAt(0)}
                                    </div>
                                    
                                    {/* Name and role */}
                                    <div>
                                        <div className="text-white font-semibold text-lg">
                                            {author.authorName}
                                        </div>
                                        <div className="text-blue-300 text-sm font-medium">
                                            {author.authorRole}
                                        </div>
                                    </div>
                                </div>

                                {/* Rating stars */}
                                <div className="flex items-center gap-1 mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-gray-400 text-sm ml-2">5.0</span>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom section with trust indicators */}
                    <div className="text-center mt-16" data-animate>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                            <div className="flex items-center gap-2 text-white">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm">100% dos clientes recomendam</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-white">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-sm">Avaliação média: 5.0 estrelas</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-white">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm">Resultados em até 90 dias</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Estes são apenas alguns dos nossos clientes satisfeitos. Sua empresa pode ser a próxima a alcançar resultados extraordinários.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
