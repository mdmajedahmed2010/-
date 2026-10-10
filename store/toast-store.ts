/**
 * BIBAZ — Toast Store (Zustand)
 * Global animated notification queue for admin panel.
 * SOP-compliant: Zustand, TypeScript strict, no new deps.
 */

import { create } from "zustand";

export type ToastType = "order" | "alert" | "success" | "error" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration: number; // ms
  createdAt: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (type: ToastType, title: string, message: string, duration?: number) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],

  addToast: (type, title, message, duration = 5000) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const toast: Toast = { id, type, title, message, duration, createdAt: Date.now() };

    set((state) => ({
      // Max 4 visible; push newest, drop oldest if overflow
      toasts: [toast, ...state.toasts].slice(0, 4),
    }));

    // Auto-dismiss
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration);
    }
  },

  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));
