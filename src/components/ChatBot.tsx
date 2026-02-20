import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-500 ease-out hover:scale-110 ${
          isOpen
            ? "rotate-90 bg-primary"
            : "animate-bounce-gentle bg-secondary"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 8px 32px hsl(243 80% 20% / 0.4)"
            : "0 8px 32px hsl(168 100% 45% / 0.4)",
        }}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <X className="h-7 w-7 text-primary-foreground transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-7 w-7 text-primary-foreground transition-transform duration-300" />
        )}
      </button>

      {/* Pulse ring when closed */}
      {!isOpen && (
        <span className="fixed bottom-6 right-6 z-40 h-16 w-16 animate-ping rounded-full bg-secondary/30 pointer-events-none" />
      )}

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-500 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-8 scale-95 opacity-0"
        }`}
        style={{
          height: "min(580px, calc(100vh - 160px))",
          boxShadow: "0 24px 64px -16px hsl(243 80% 20% / 0.25)",
        }}
      >
        <div className="gradient-hero flex items-center gap-3 px-5 py-4">
          <div className="flex-1">
            <h3 className="font-display text-sm font-bold text-primary-foreground">
              Assistente Dr. Olho
            </h3>
            <p className="text-xs text-primary-foreground/70">
              Online agora • Responde em instantes
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 bg-muted/30">
          <iframe
            src="https://lpdn8n.duckdns.org/webhook/4fb7df65-c337-42fa-b303-6f9f20a6ac5d/chat"
            title="Assistente Dr. Olho"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
