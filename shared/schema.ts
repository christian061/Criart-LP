import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  service: z.enum(["automacao", "video", "app", "site"], {
    errorMap: () => ({ message: "Selecione um serviço válido" }),
  }),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  phone: z.string().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Service data structure
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Theme data structure for hero rotation
export interface HeroTheme {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  gradientFrom: string;
  gradientTo: string;
}
