"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Users, Dumbbell, Target } from "lucide-react"

const stats = [
  { icon: Users, value: "+500", label: "Vidas transformadas" },
  { icon: Trophy, value: "10+", label: "Anos de experiência" },
  { icon: Dumbbell, value: "5000+", label: "Treinos realizados" },
  { icon: Target, value: "100%", label: "Foco em resultados" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-card">
      
      {/* 🔥 CONTAINER CORRIGIDO */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/nil.jpg"
                alt="Personal Trainer Nilteam"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Orange accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-1 bg-primary rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary border border-primary/30 rounded-full">
              SOBRE
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-balance">
              Sua transformação{" "}
              <span className="text-primary">começa aqui</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Me chamo Nilmar Souza, personal trainer especializado em transformação física e mental.
              Com mais de 10 anos de experiência no mundo fitness e competições de fisiculturismo,
              desenvolvi uma metodologia única que combina treino intenso, nutrição estratégica
              e mentalidade vencedora.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha missão é ajudar você a alcançar o corpo dos seus sonhos,
              superando limites e construindo hábitos que duram a vida toda.
              Cada treino é personalizado, cada resultado é celebrado.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="font-heading text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}