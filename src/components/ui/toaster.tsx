"use client" // harus paling atas

import React from "react"
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts, removeToast } = useToast()

  return (
    <ToastProvider>
<<<<<<< HEAD
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast
          key={id}
          open={true} // toast selalu muncul saat ada di array
          onOpenChange={(open) => {
            if (!open) removeToast(id)
          }}
          {...props}
        >
=======
      {toasts.map(({ id, title, description, ...props }) => (
        <Toast key={id} {...props}>
>>>>>>> dev
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
<<<<<<< HEAD
          {action}
=======
>>>>>>> dev
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
