import { s } from "framer-motion/client"
import * as React from "react"

export type Toast = {
  id: string
  title?: string
  description?: string
}

type ToastContextType = {
  toasts: Toast[]
  toast: (t: Omit<Toast, "id">) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  function toast(t: Omit<Toast, "id">) {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, ...t }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 4000)
  }

  return (
    <ToastContext.Provider value={{ toasts, toast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used inside ToastProvider")
  return ctx
}s