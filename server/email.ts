import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

// Configuração do transporter de email
// Para usar em produção, configure as variáveis de ambiente com suas credenciais SMTP
console.log('Configurando email com:', {
  user: process.env.EMAIL_USER,
  hasPassword: !!process.env.EMAIL_PASS,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'seu-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'sua-senha-de-app',
  },
});

export async function sendContactEmail(contact: InsertContact): Promise<void> {
  const { name, email, phone, service, message } = contact;

  // Mapear o serviço para um nome legível
  const serviceNames: Record<string, string> = {
    automacao: 'Automações',
    video: 'Video Making',
    app: 'Criação de Apps',
    site: 'Sites Profissionais',
  };

  const serviceName = serviceNames[service] || service;

  // Email para a empresa
  const mailOptions = {
    from: process.env.EMAIL_USER || 'seu-email@gmail.com',
    to: 'Criartimp@gmail.com',
    subject: `Novo Contato - ${serviceName} - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          Novo Contato Recebido
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4F46E5; margin-top: 0;">Informações do Cliente</h3>
          
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
          <p><strong>Serviço de Interesse:</strong> ${serviceName}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Mensagem</h3>
          <p style="line-height: 1.6; color: #555;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>Este email foi enviado através do formulário de contato do site Criart.</p>
        </div>
      </div>
    `,
  };

  try {
    console.log('Tentando enviar email para:', mailOptions.to);
    console.log('De:', mailOptions.from);
    const result = await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso!', result);
  } catch (error) {
    console.error('ERRO DETALHADO ao enviar email:', error);
    if (error instanceof Error) {
      console.error('Mensagem:', error.message);
      console.error('Stack:', error.stack);
    }
    throw new Error('Falha ao enviar email: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
  }
}
