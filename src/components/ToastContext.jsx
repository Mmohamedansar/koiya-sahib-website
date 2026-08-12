import { createContext, useCallback, useContext, useRef, useState } from "react";
import Icon from "./Icon.jsx";

const ToastContext = createContext(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setMessage(msg);
    setShow(true);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShow(false);
    }, 2600);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      {show && (
        <div className="toast show">
          <Icon name="whatsapp" size={18} />
          <span>{message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}