"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
  <div className="absolute inset-0 z-0 overflow-hidden">
<Image
  src="/nilmar.jpeg"
  alt="Personal Trainer Nilteam"
  fill
  priority
  sizes="100vw"
  className="object-cover object-[50%_20%] scale-100"
/>
  {/* Gradientes */}
  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
</div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary border border-primary/30 rounded-full">
              PERSONAL TRAINER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-primary">NIL</span>TEAM
          </motion.h1>

      <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light text-pretty"
>
  +500 vidas transformadas.{" "}
  <span className="text-white font-medium"></span>
</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-semibold"
              asChild
            >
            
            </Button>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="space-y-2 max-w-xl"
>
  <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
    Cansado de treinar e não ver resultado?
  </p>

  <p className="text-lg sm:text-xl md:text-2xl text-white/80">
    Aqui você tem{" "}
    <span className="text-primary font-semibold">
      acompanhamento de verdade
    </span>{" "}
    pra finalmente evoluir.
  </p>
</motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#sobre"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Saiba mais </span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      <a
  href="https://wa.me/5551999999999?text=Oi%20vim%20pelo%20site%20e%20quero%20saber%20mais"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 h-6 fill-white"
  >
    <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.8.8 5.4 2.2 7.7L.4 31.6l8.6-2.2c2.2 1.2 4.6 1.8 7 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.6c-2.2 0-4.4-.6-6.2-1.8l-.4-.2-5.2 1.4 1.4-5-.2-.4c-1.4-2-2.2-4.2-2.2-6.6 0-6.8 5.6-12.4 12.4-12.4S28.4 8.8 28.4 15.6 22.8 28 16 28zm6.8-9.2c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.6-.2-.8.2s-1 1.4-1.2 1.6c-.2.2-.4.2-.8 0-2.2-1-3.6-2.8-4-3.2-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.4-.6.2-.2 0-.4 0-.6s-.8-2-1-2.6c-.2-.6-.4-.6-.8-.6h-.6c-.2 0-.6.2-.8.4-.2.2-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3 5 4.2.8.4 1.4.6 2 .8.8.2 1.6.2 2.2.2.6 0 2-.8 2.2-1.6.2-.8.2-1.4.2-1.6 0-.2-.2-.4-.4-.6z" />
  </svg>
</a>
    </section>
  )
}
