import { type FC } from "react";
import { Container } from "@components/Container";

type StatsProps = {
    data: {
        title: string;
        stats: Array<{
            value: string;
            label: string;
            description: string;
        }>;
    };
};

export const Stats: FC<StatsProps> = ({ data: { title, stats } }) => {
    if (!stats || stats.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" data-animate>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-h2-md font-bold tracking-tight text-secondary mb-4">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-700 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="bg-primary/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary/20">
                                <div className="text-center">
                                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg font-semibold text-secondary mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-secondary/80">
                                        {stat.description}
                                    </div>
                                </div>
                                
                                {/* Decorative element */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-secondary/80 max-w-2xl mx-auto">
                        Estes números representam a média dos resultados obtidos pelos nossos clientes nos últimos 12 meses. 
                        <span className="font-semibold text-secondary"> Seu negócio pode ser o próximo!</span>
                    </p>
                </div>
            </Container>
        </section>
    );
};
