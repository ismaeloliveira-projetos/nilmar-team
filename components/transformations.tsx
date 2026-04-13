"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const transformations = [
  { image: "/evo1.jpeg" },
  { image: "/evo2.jpeg" },
  { image: "/evo3.jpeg" },
  { image: "/evo4.jpeg" },
  { image: "/evo5.jpeg" },
  { image: "/evo6.jpeg" },
]

export function Transformations() {
  return (
    <section id="evolucao" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary border border-primary/30 rounded-full">
            RESULTADOS
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-balance">
            Evolução dos <span className="text-primary">Alunos</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das transformações incríveis alcançadas com dedicação,
            treino inteligente e acompanhamento personalizado.
          </p>
        </motion.div>

        {/* CARROSSEL */}
        <div className="overflow-hidden relative before:absolute before:left-0 before:top-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
          
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 18, // 🔥 mais rápido
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...transformations, ...transformations, ...transformations].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px]"
              >
                <Card className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt="Transformação de aluno"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}