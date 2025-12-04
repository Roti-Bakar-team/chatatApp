"use client"

import { useState } from "react"

export type ToastType = {
  id: number
  title?: string
  description?: string
  duration?: number 
  action?: React.ReactNode 
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const addToast = (toast: Omit<ToastType, "id">) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, ...toast }])
    if (toast.duration) {
      setTimeout(() => removeToast(id), toast.duration)
    }
  }

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return { toasts, addToast, removeToast }
}
