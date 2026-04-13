"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    icon: MessageCircle,
    href: "https://instagram.com/nilteam",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5511999999999",
  },
]

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Resultados", href: "#evolucao" },
  { name: "Metodologia", href: "#como-funciona" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      
      {/* 🔥 CONTAINER CORRIGIDO */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="font-heading text-3xl font-bold">
              <span className="text-primary">NIL</span>TEAM
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm text-center"
          >
            © {new Date().getFullYear()} NILTEAM. Todos os direitos reservados.
          </motion.p>

        </div>
      </div>
    </footer>
  )
}