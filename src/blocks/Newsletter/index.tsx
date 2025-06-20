import type { FC } from "react";
import { Container } from "@components/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";

// Schema de validação com Zod
const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(100, "Nome muito longo")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
    email: z
        .string()
        .min(1, "Email é obrigatório")
        .email("Email inválido")
        .toLowerCase(),
    phone: z
        .string()
        .min(1, "Telefone é obrigatório")
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Formato de telefone inválido")
        .transform((phone) => phone.replace(/\D/g, "")), // Remove formatação para salvar
    message: z
        .string()
        .max(1000, "Mensagem muito longa")
        .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

type NewsletterProps = {
    data: {
        title: string;
        button: {
            label: string;
            link: string;
        };
    };
};

export const Newsletter: FC<NewsletterProps> = ({
    data: { button, title },
}) => {
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur", // Valida quando o campo perde o foco
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        setMessage(null);

        try {
            // Formatar dados para envio
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message || "");

            const response = await fetch("/api/send-email", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setMessage({
                    type: 'success',
                    text: '🎉 Mensagem enviada! Abrindo conversa no WhatsApp...'
                });

                const waText = encodeURIComponent(
                    `Olá, meu nome é ${data.name}.\nE-mail: ${data.email}\nTelefone: ${data.phone}${data.message ? `\nMensagem: ${data.message}` : ''}`
                );
                window.open(`https://wa.me/5511989266354?text=${waText}`, '_blank');
                reset(); // Limpa o formulário
            } else {
                setMessage({
                    type: 'error',
                    text: result.error || 'Erro ao enviar mensagem. Tente novamente.'
                });
            }
        } catch (error) {
            console.error("Erro:", error);
            setMessage({
                type: 'error',
                text: 'Erro de conexão. Verifique sua internet e tente novamente.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Do not render if there are no elements
    if (!title) {
        return null;
    }

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 relative overflow-hidden" data-animate id="contato">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <Container>
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Section */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20">
                                    <span className="text-blue-300 font-medium text-sm uppercase tracking-wide">
                                        🎯 Consulta Gratuita
                                    </span>
                                </div>
                                
                                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </h2>
                                
                                <div className="flex items-center gap-3 text-yellow-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-lg font-medium">Resposta em até 2 horas • Consulta 100% gratuita • Sem compromisso</span>
                                </div>
                            </div>
                            
                            {/* Benefits list */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200 text-lg">Análise gratuita do seu negócio</span>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200 text-lg">Proposta personalizada sem custo</span>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200 text-lg">Demonstração do potencial de crescimento</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        {button && (
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl">
                                <form
                                    className="space-y-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="text-center mb-8">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Consulta Gratuita
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Preencha seus dados abaixo
                                        </p>
                                    </div>

                                    <div className="space-y-5">
                                        {/* Nome */}
                                        <div>
                                            <label htmlFor="name" className="block text-white font-medium mb-3 text-lg">
                                                Nome Completo *
                                            </label>
                                            <input
                                                {...register("name")}
                                                id="name"
                                                type="text"
                                                className={`w-full rounded-xl border-0 bg-white/20 backdrop-blur-sm px-6 py-5 text-white placeholder-white/70 shadow-lg ring-2 transition-all duration-300 text-lg ${
                                                    errors.name 
                                                        ? 'ring-red-400 focus:ring-red-400' 
                                                        : 'ring-white/20 focus:ring-4 focus:ring-yellow-400/50'
                                                }`}
                                                placeholder="Digite seu nome completo"
                                            />
                                            {errors.name && (
                                                <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                        
                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-white font-medium mb-3 text-lg">
                                                E-mail Profissional *
                                            </label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                type="email"
                                                autoComplete="email"
                                                className={`w-full rounded-xl border-0 bg-white/20 backdrop-blur-sm px-6 py-5 text-white placeholder-white/70 shadow-lg ring-2 transition-all duration-300 text-lg ${
                                                    errors.email 
                                                        ? 'ring-red-400 focus:ring-red-400' 
                                                        : 'ring-white/20 focus:ring-4 focus:ring-yellow-400/50'
                                                }`}
                                                placeholder="seu.email@empresa.com.br"
                                            />
                                            {errors.email && (
                                                <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                        
                                        {/* Telefone com máscara */}
                                        <div>
                                            <label htmlFor="phone" className="block text-white font-medium mb-3 text-lg">
                                                WhatsApp *
                                            </label>
                                            <InputMask
                                                {...register("phone")}
                                                mask="(99) 99999-9999"
                                                id="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                className={`w-full rounded-xl border-0 bg-white/20 backdrop-blur-sm px-6 py-5 text-white placeholder-white/70 shadow-lg ring-2 transition-all duration-300 text-lg ${
                                                    errors.phone 
                                                        ? 'ring-red-400 focus:ring-red-400' 
                                                        : 'ring-white/20 focus:ring-4 focus:ring-yellow-400/50'
                                                }`}
                                                placeholder="(11) 98926-6354"
                                            />
                                            {errors.phone && (
                                                <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Mensagem */}
                                        <div>
                                            <label htmlFor="message" className="block text-white font-medium mb-3 text-lg">
                                                Conte-nos sobre seu projeto
                                            </label>
                                            <textarea
                                                {...register("message")}
                                                id="message"
                                                rows={4}
                                                className={`w-full rounded-xl border-0 bg-white/20 backdrop-blur-sm px-6 py-5 text-white placeholder-white/70 shadow-lg ring-2 transition-all duration-300 resize-none text-lg ${
                                                    errors.message 
                                                        ? 'ring-red-400 focus:ring-red-400' 
                                                        : 'ring-white/20 focus:ring-4 focus:ring-yellow-400/50'
                                                }`}
                                                placeholder="Descreva brevemente seu negócio e quais desafios você gostaria de resolver..."
                                            />
                                            {errors.message && (
                                                <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {message && (
                                        <div className={`p-6 rounded-xl ${
                                            message.type === 'success' 
                                                ? 'bg-green-500/20 border-2 border-green-400 text-green-100' 
                                                : 'bg-red-500/20 border-2 border-red-400 text-red-100'
                                        }`}>
                                            <p className="text-lg font-medium">{message.text}</p>
                                        </div>
                                    )}
                                    
                                                        <button
                        type="submit"
                        disabled={isLoading}
                        data-track="contact"
                        className={`w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-8 rounded-xl shadow-2xl transform transition-all duration-300 text-xl ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:-translate-y-1 hover:shadow-3xl'
                        }`}
                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center gap-3">
                                                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                                </svg>
                                                <span className="text-lg">Enviando...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-3">
                                                <span>{button.label}</span>
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                    
                                    <div className="text-center">
                                        <p className="text-white/60 text-sm">
                                            🔒 Seus dados estão seguros • Resposta garantida em até 2 horas
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};
