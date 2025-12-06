import { createContext, useContext, useState } from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (title, description) => {
    setToast({ title, description, open: true });
  };

  return (
    <ToastContext.Provider value={showToast}>
      <Toast.Provider swipeDirection="right">
        {children}

        {toast && (
          <Toast.Root
            open={toast.open}
            onOpenChange={(o) => setToast((t) => ({ ...t, open: o }))}
            duration={3000}
            className="bg-black text-white p-4 rounded shadow-lg"
          >
            <Toast.Title className="font-semibold">{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Root>
        )}

        <Toast.Viewport className="fixed bottom-4 right-4 w-[300px]" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
