import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    text: "Olá! 👋 Sou a assistente virtual da Dr. Olho. Como posso ajudar você hoje?\n\nPosso auxiliar com:\n• Agendamento de consultas\n• Informações sobre exames\n• Dúvidas sobre cirurgias\n• Confirmação de horários",
    sender: "bot",
    timestamp: new Date(),
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handler = (ev: Event) => {
      const ce = ev as CustomEvent<{ message?: string }>;
      setIsOpen(true);
      if (ce.detail?.message) {
        const text = ce.detail.message.trim();
        if (text.length) {
          const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, userMsg]);
          simulateBotReply(text);
        }
      }
    };
    window.addEventListener("chatbot:open", handler as EventListener);
    return () => {
      window.removeEventListener("chatbot:open", handler as EventListener);
    };
  }, []);

  const simulateBotReply = (userText: string) => {
    setIsTyping(true);
    const lower = userText.toLowerCase();
    let reply = "Entendi! Vou encaminhar sua solicitação para nossa equipe. Em breve entraremos em contato. 😊";

    if (lower.includes("agendar") || lower.includes("consulta") || lower.includes("marcar")) {
      reply = "Ótimo! Para agendar sua consulta, preciso de algumas informações:\n\n1️⃣ Nome completo\n2️⃣ Telefone para contato\n3️⃣ Preferência de data e horário\n\nPode me informar?";
    } else if (lower.includes("exame") || lower.includes("marketplace")) {
      reply = "Temos diversos exames disponíveis com preços acessíveis! 🔬\n\nOs mais procurados são:\n• Mapeamento de Retina\n• Tomografia (OCT)\n• Campimetria\n• Topografia\n\nGostaria de saber mais sobre algum deles?";
    } else if (lower.includes("cirurgia") || lower.includes("catarata") || lower.includes("laser")) {
      reply = "Realizamos diversas cirurgias oftalmológicas com equipe especializada! 👁️\n\n• Catarata\n• Refrativa (LASIK/PRK)\n• Glaucoma\n• Pterígio\n\nQual procedimento te interessa?";
    } else if (lower.includes("horário") || lower.includes("funciona") || lower.includes("endereço")) {
      reply = "📍 Nosso horário de funcionamento:\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h\n\nEstamos localizados em diversas unidades no Rio de Janeiro. Acesse nosso site para ver a unidade mais próxima!";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: reply,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: trimmed,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    simulateBotReply(trimmed);
  };

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
        {/* Header */}
        <div className="gradient-hero flex items-center gap-3 px-5 py-4">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <Bot className="h-5 w-5 text-primary" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-secondary" />
          </div>
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

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-muted/30">
          {messages.map((msg, i) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              style={{
                animation: `chatSlideIn 0.4s ease-out ${i === messages.length - 1 ? "0s" : "0s"} both`,
              }}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  msg.sender === "bot"
                    ? "bg-secondary text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {msg.sender === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "bot"
                    ? "rounded-tl-md bg-background text-foreground card-shadow"
                    : "rounded-tr-md bg-primary text-primary-foreground"
                }`}
              >
                {msg.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
                <span
                  className={`mt-1.5 block text-[10px] ${
                    msg.sender === "bot" ? "text-muted-foreground" : "text-primary-foreground/60"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2.5" style={{ animation: "chatSlideIn 0.3s ease-out both" }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex gap-1.5 rounded-2xl rounded-tl-md bg-background px-5 py-4 card-shadow">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border bg-background px-4 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-body"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-200 hover:bg-secondary/90 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 btn-shadow"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">
            Powered by Dr. Olho IA • Respostas automáticas
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes chatSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
