# Configuração de Email para Formulário de Contato

## 📧 Destino dos Emails

Todos os emails enviados através do formulário "Vamos Conversar" serão enviados para: **Criarimp@gmail.com**

## 🔧 Como Configurar

### 1. Criar Senha de App no Gmail

Para enviar emails através do Gmail, você precisa criar uma "Senha de App":

1. Acesse: https://myaccount.google.com/apppasswords
2. Faça login com a conta do Gmail que você quer usar para enviar os emails
3. Crie uma nova senha de app (escolha "Outro" e dê um nome como "Site Criart")
4. Copie a senha gerada (16 caracteres)

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-aqui
PORT=5000
```

**Importante:**
- `EMAIL_USER`: O email que vai **enviar** as mensagens (pode ser qualquer Gmail seu)
- `EMAIL_PASS`: A senha de app que você criou no passo 1
- Os emails sempre serão enviados para `Criartimp@gmail.com` (isso está fixo no código)

### 3. Reiniciar o Servidor

Após configurar o `.env`, reinicie o servidor:

```bash
npm run dev
```

## 📋 Formato do Email

Quando alguém preencher o formulário, o email enviado para `Criartimp@gmail.com` conterá:

- Nome do cliente
- Email do cliente
- Telefone (se fornecido)
- Serviço de interesse
- Mensagem completa

## 🔒 Segurança

- Nunca compartilhe seu arquivo `.env`
- O arquivo `.env` já está no `.gitignore` para não ser enviado ao Git
- Use sempre senhas de app, nunca sua senha real do Gmail

## ⚠️ Solução de Problemas

Se os emails não estiverem sendo enviados:

1. Verifique se as credenciais no `.env` estão corretas
2. Certifique-se de que está usando uma senha de app, não a senha normal
3. Verifique os logs do servidor para mensagens de erro
4. Confirme que a conta Gmail permite "Apps menos seguros" ou está usando senha de app

## 🧪 Testando

Para testar se está funcionando:

1. Acesse o site
2. Preencha o formulário "Vamos Conversar"
3. Envie a mensagem
4. Verifique a caixa de entrada de `Criartimp@gmail.com`
