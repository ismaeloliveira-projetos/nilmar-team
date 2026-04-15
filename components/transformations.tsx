"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

const transformations = [
  { image: "/evo1.jpeg" },
  { image: "/evo2.jpeg" },
  { image: "/evo3.jpeg" },
  { image: "/evo4.jpeg" },
  { image: "/evo5.jpeg" },
  { image: "/evo6.jpeg" },
]

export function Transformations() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // 🔥 LOOP INFINITO REAL
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [controls])

  // 🔥 SCROLL MANUAL COM SETAS
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const scrollAmount = 300

    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

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

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Evolução dos <span className="text-primary">Alunos</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das transformações incríveis alcançadas com dedicação,
            treino inteligente e acompanhamento personalizado.
          </p>
        </motion.div>

        {/* CARROSSEL */}
        <div className="relative">

          {/* BOTÃO ESQUERDA */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
          >
            <ChevronLeft />
          </button>

          {/* BOTÃO DIREITA */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
          >
            <ChevronRight />
          </button>

          {/* TRACK */}
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <motion.div
              className="flex gap-6 w-max"
              animate={controls}
            >
              {[...transformations, ...transformations, ...transformations].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px]"
                >
                  <Card className="overflow-hidden rounded-2xl">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.image}
                        alt="Transformação de aluno"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}