import React, { createContext, useContext, useState, useCallback } from "react";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
  VStack,
} from "@gluestack-ui/themed";

export type ToastStatus = "success" | "error" | "info" | "warning";

interface ToastContextType {
  openToast: (message: string, status: ToastStatus) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useToast();

  const openToast = useCallback(
    (message: string, status: ToastStatus = "info") => {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast action={status} variant="outline">
              <VStack space="xs">
                <ToastTitle>{status.toUpperCase()}</ToastTitle>
                <ToastDescription>{message}</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    },
    [toast],
  );

  return (
    <ToastContext.Provider value={{ openToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};
