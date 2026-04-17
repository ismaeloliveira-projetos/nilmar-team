"use client"

import { motion } from "framer-motion"
import {
  ClipboardCheck,
  FileText,
  Activity,
  Trophy,
  Video,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Avaliação Inicial",
    description:
      "Análise completa do seu perfil físico, análise postural e avaliação física objetiva para criar um plano sob medida.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Plano Personalizado",
    description:
      "Desenvolvimento de treino e orientação nutricional exclusivos para suas necessidades e metas.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramento constante da evolução com ajustes estratégicos para maximizar resultados.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Suporte 24h por whatsapp",
    description:
      "Suporte contínuo e personalizado através do whatsapp para esclarecer dúvidas e manter o acompanhamento.",
  },
]

const feedbackImages = [
  "/print.jpeg",
  "/print2.jpeg",
  "/print3.jpeg",
  "/print4.jpeg",
  "/print5.jpeg",
]

export function HowItWorks() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3)
      else if (window.innerWidth >= 768) setVisibleItems(2)
      else setVisibleItems(1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = feedbackImages.length - visibleItems

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium tracking-wider text-primary border border-primary/30 rounded-full">
            METODOLOGIA
          </span>

          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Como funciona a <span className="text-primary">consultoria</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado para garantir sua transformação de forma
            segura, eficiente e duradoura.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative p-5 md:p-6 bg-secondary/30 rounded-xl border border-border/50 h-full">
                <div className="absolute -top-3 -right-3 w-9 h-9 md:w-10 md:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-5">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BONUS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-14 md:mt-20"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-primary/10 border border-primary/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                BÔNUS EXCLUSIVO
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Benefícios adicionais da consultoria
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-4">
                <Video className="w-6 h-6 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Mentorias por videochamada sempre que precisar.
                </p>
              </div>

              <div className="flex gap-4">
                <Trophy className="w-6 h-6 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Treinos presenciais ou chamadas estratégicas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FEEDBACKS */}
        <motion.div className="mt-14 md:mt-20 relative overflow-hidden">
            <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Alguns feedbacks <span className="text-primary"> dos alunos</span>
          </h3>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 md:p-3 rounded-full disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 md:p-3 rounded-full disabled:opacity-30"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {feedbackImages.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(src)}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden border shadow-md">
                    <Image
                      src={src}
                      alt={`Feedback ${i + 1}`}
                      width={300}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage}
                alt="Feedback"
                width={400}
                height={700}
                className="max-h-[90vh] w-auto rounded-xl"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}