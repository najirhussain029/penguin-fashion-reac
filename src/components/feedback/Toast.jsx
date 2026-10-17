import { useEffect, useState } from "react";

const icons = { success: "✓", info: "↑", remove: "🗑" };
const VISIBLE_MS = 2400;
const EXIT_MS = 300;

function Toast({ toast, onDismiss }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), VISIBLE_MS);
    const removeTimer = setTimeout(() => onDismiss(toast.id), VISIBLE_MS + EXIT_MS);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, [toast.id, onDismiss]);

  return (
    <div className={`toast toast--${toast.type}${leaving ? " is-leaving" : ""}`} role="status">
      <span className="toast__icon" aria-hidden="true">{icons[toast.type] ?? "ℹ"}</span>
      <span className="toast__text">{toast.message}</span>
    </div>
  );
}

export default function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
