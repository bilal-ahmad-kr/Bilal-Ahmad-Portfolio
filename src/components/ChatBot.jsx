import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaXmark, FaPaperPlane } from "react-icons/fa6";
import {
  findAnswer,
  defaultSuggestions,
  welcomeMessage,
} from "../data/aboutMe";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [activeSuggestions, setActiveSuggestions] =
    useState(defaultSuggestions);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: welcomeMessage },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  // Formatter for markdown bold text (**text**) inside messages
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const send = (rawText) => {
    const text = (rawText ?? input).trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const result = findAnswer(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: result.answer },
      ]);
      setActiveSuggestions(result.suggestions || defaultSuggestions);
      setTyping(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <FaXmark size={22} /> : <FaRobot size={24} />}
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <FaRobot size={17} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                    Bilal's AI Assistant
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-slate-400 hover:text-slate-700 transition-colors p-1"
              >
                <FaXmark size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50/60">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-end gap-2 ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white mb-0.5">
                      <FaRobot size={13} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-6 whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-blue-600 text-white rounded-2xl rounded-br-sm"
                        : "bg-white text-slate-700 border border-slate-200 rounded-2xl rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {typing && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <FaRobot size={13} />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 shadow-sm">
                    {[0, 0.15, 0.3].map((delay) => (
                      <motion.span
                        key={delay}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Contextual Suggestion Chips */}
              {!typing && activeSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeSuggestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-blue-700 hover:bg-blue-100 font-medium transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <div className="border-t border-slate-200 p-3 bg-white">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-100 text-slate-800 placeholder-slate-400 text-sm rounded-full px-4 py-2.5 outline-none border border-transparent focus:border-blue-500 focus:bg-white transition-all"
                />
                <motion.button
                  onClick={() => send()}
                  disabled={!input.trim() || typing}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Send message"
                  className="w-10 h-10 shrink-0 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
                >
                  <FaPaperPlane size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
