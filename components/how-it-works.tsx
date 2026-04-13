"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, FileText, Activity, Trophy, Video, Star } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Avaliação Inicial",
    description:
      "Análise completa do seu perfil físico, objetivos e histórico para criar um plano sob medida.",
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

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary border border-primary/30 rounded-full">
            METODOLOGIA
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Como funciona a <span className="text-primary">consultoria</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado para garantir sua transformação de forma
            segura, eficiente e duradoura.
          </p>
        </motion.div>

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
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border group-hover:bg-primary/30 transition-colors" />
              )}

              <div className="relative p-6 bg-secondary/30 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-sm">
                  {item.step}
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-primary/10 border border-primary/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider">
                BÔNUS EXCLUSIVO
              </span>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Benefícios adicionais da consultoria
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-4">
                <Video className="w-6 h-6 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Mentorias por videochamada sempre que precisar, com agendamento prévio.
                </p>
              </div>

              <div className="flex gap-4">
                <Trophy className="w-6 h-6 text-primary mt-1" />
                <p className="text-muted-foreground">
                  4 treinos presenciais no ano ou, caso more longe, 4 chamadas de vídeo em formato hora-aula.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}