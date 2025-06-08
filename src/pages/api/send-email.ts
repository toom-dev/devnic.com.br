import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { supabase } from "lib/supabase";

export const POST: APIRoute = async ({ request }) => {
    try {
        const form = await request.formData();
        const email = form.get("email")?.toString() || "";
        const name = form.get("name")?.toString() || "";
        const phone = form.get("phone")?.toString() || "";
        const message = form.get("message")?.toString() || "";

        // Validação básica
        if (!email || !name || !phone) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Todos os campos são obrigatórios" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Configuração do transporter do nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false, // true para 465, false para outras portas
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // E-mail para o cliente
        const clientMailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: "Obrigado pelo seu interesse - Devnic",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; color: white;">
                        <h1 style="margin: 0; font-size: 28px;">Devnic</h1>
                        <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Soluções Digitais Sob Medida</p>
                    </div>
                    
                    <div style="padding: 40px 30px; background: #f8f9fa;">
                        <h2 style="color: #333; margin-bottom: 20px;">Olá, ${name}!</h2>
                        
                        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                            Obrigado por demonstrar interesse em nossos serviços! Recebemos suas informações e nossa equipe entrará em contato em breve para discutir como podemos ajudar a transformar seu negócio.
                        </p>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                            <h3 style="color: #333; margin-top: 0;">O que você pode esperar:</h3>
                            <ul style="color: #666; line-height: 1.8;">
                                <li>Análise personalizada das suas necessidades</li>
                                <li>Proposta sob medida para seu projeto</li>
                                <li>Suporte especializado durante todo o processo</li>
                                <li>Soluções que geram resultados reais</li>
                            </ul>
                        </div>
                        
                        <p style="color: #666; line-height: 1.6;">
                            Enquanto isso, sinta-se à vontade para nos contatar diretamente via WhatsApp: 
                            <a href="https://wa.me/5511989266354" style="color: #667eea; text-decoration: none; font-weight: bold;">
                                (11) 98926-6354
                            </a>
                        </p>
                        
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://devnic.com.br" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                                Conheça Nossos Serviços
                            </a>
                        </div>
                    </div>
                    
                    <div style="background: #333; color: #ccc; padding: 20px; text-align: center; font-size: 14px;">
                        <p style="margin: 0;">© 2024 Devnic - Transformando ideias em soluções digitais</p>
                    </div>
                </div>
            `,
        };

        // E-mail para a empresa
        const companyMailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
            subject: `Novo Lead - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Novo lead recebido!</h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <h3 style="color: #667eea; margin-top: 0;">Informações do Cliente:</h3>
                        <p><strong>Nome:</strong> ${name}</p>
                        <p><strong>E-mail:</strong> ${email}</p>
                        <p><strong>Telefone:</strong> ${phone}</p>
                        ${message ? `<p><strong>Mensagem:</strong> ${message}</p>` : ''}
                        
                        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                        
                        <p style="color: #666; font-size: 14px;">
                            <strong>Ação recomendada:</strong> Entre em contato em até 24 horas para maximizar a conversão.
                        </p>
                        
                        <div style="text-align: center; margin-top: 20px;">
                            <a href="https://wa.me/55${phone.replace(/\D/g, '')}" 
                               style="background: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                                Contatar via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `,
        };

        // Salvar no Supabase
        const { error: supabaseError } = await supabase.from("leads").insert({
            email,
            name,
            phone,
            message,
            created_at: new Date().toISOString(),
        });

        if (supabaseError) {
            console.error("Erro ao salvar no Supabase:", supabaseError);
            // Continua mesmo com erro no banco
        }

        // Enviar e-mails
        await Promise.all([
            transporter.sendMail(clientMailOptions),
            transporter.sendMail(companyMailOptions),
        ]);

        return new Response(JSON.stringify({ 
            success: true, 
            message: "E-mails enviados com sucesso!" 
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: "Erro interno do servidor" 
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

export const prerender = false; 