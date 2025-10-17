import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Create contact endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Enviar email para Criarimp@gmail.com
      try {
        await sendContactEmail(validatedData);
      } catch (emailError) {
        console.error('Erro ao enviar email, mas contato foi salvo:', emailError);
        // Continua mesmo se o email falhar
      }
      
      res.status(201).json({
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        data: contact,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Erro ao processar sua mensagem. Tente novamente.",
        });
      }
    }
  });

  // Get all contacts endpoint (for admin/debugging)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar contatos",
      });
    }
  });

  // Get single contact endpoint
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const contact = await storage.getContact(req.params.id);
      
      if (!contact) {
        res.status(404).json({
          success: false,
          message: "Contato não encontrado",
        });
        return;
      }

      res.json({
        success: true,
        data: contact,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar contato",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
