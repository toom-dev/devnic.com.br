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
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50" data-animate>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-h2-md font-bold tracking-tight text-gray-900 mb-4">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="text-center">
                                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900 mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {stat.description}
                                    </div>
                                </div>
                                
                                {/* Decorative element */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Estes números representam a média dos resultados obtidos pelos nossos clientes nos últimos 12 meses. 
                        <span className="font-semibold text-gray-900"> Seu negócio pode ser o próximo!</span>
                    </p>
                </div>
            </Container>
        </section>
    );
};
