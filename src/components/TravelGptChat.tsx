'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Compass, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'agent' | 'user';
  html: string;
  text?: string;
}

export default function TravelGptChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Load initial welcome message from backend when chat opens for the first time
  const handleOpenChat = async () => {
    setIsOpen(true);
    if (hasInitialized) return;

    setIsTyping(true);
    try {
      const response = await fetch('/travel-gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ val: '1' })
      });
      if (response.ok) {
        const dataHtml = await response.json();
        setMessages([{ id: 'init', sender: 'agent', html: dataHtml }]);
        setHasInitialized(true);
      }
    } catch (err) {
      console.error('Travel GPT initial message error:', err);
      // Fallback message if server fails
      setMessages([{ 
        id: 'init', 
        sender: 'agent', 
        html: '<div class="direct-chat-text">Hello! I am your FlyEz Assistant. How can I help you book your flights today?</div>' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Submit a chat message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setInputText('');
    
    // Add user message to UI
    const tempUserMsgId = `user-${Date.now()}`;
    const formattedUserHtml = `<div class="direct-chat-text">${userMsg}</div>`;
    setMessages(prev => [...prev, { id: tempUserMsgId, sender: 'user', html: formattedUserHtml, text: userMsg }]);

    setIsTyping(true);
    try {
      const response = await fetch('/travel-gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ 
          val: '2', 
          msg: userMsg 
        })
      });
      if (response.ok) {
        const agentHtml = await response.json();
        setMessages(prev => [...prev, { id: `agent-${Date.now()}`, sender: 'agent', html: agentHtml }]);
      }
    } catch (err) {
      console.error('Travel GPT response error:', err);
      setMessages(prev => [...prev, { 
        id: `err-${Date.now()}`, 
        sender: 'agent', 
        html: '<div class="direct-chat-text" style="color: #991b1b">Sorry, I had trouble reaching the server. Please call us at 1800-521-4263 for direct booking support.</div>' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Trigger special options (like confirm options or end conversation calls)
  const handleActionClick = async (actionVal: number, userText: string) => {
    setIsTyping(true);
    
    // Append action text to list
    setMessages(prev => [...prev, { 
      id: `user-act-${Date.now()}`, 
      sender: 'user', 
      html: `<div class="direct-chat-text">${userText}</div>` 
    }]);

    try {
      const response = await fetch('/travel-gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ val: String(actionVal) })
      });
      if (response.ok) {
        const agentHtml = await response.json();
        setMessages(prev => [...prev, { id: `agent-${Date.now()}`, sender: 'agent', html: agentHtml }]);
      }
    } catch (err) {
      console.error('Travel GPT action error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  // Custom click interceptor to catch any embedded button selectors in the returned HTML (like .cnf or .end classes)
  const handleMessageContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('cnf')) {
      handleActionClick(3, 'Thanks, I confirm this');
    } else if (target.classList.contains('end')) {
      handleActionClick(4, 'Thanks');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Floating Toggle Button */}
        {!isOpen && (
          <motion.button
            onClick={handleOpenChat}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -6, 0]
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 }
            }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary text-white flex items-center justify-center shadow-[0_8px_32px_rgba(37,99,235,0.35)] border border-white/10 cursor-pointer"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Chat Window Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-0 right-0 w-[350px] h-[480px] bg-white dark:bg-brand-primary-light rounded-2xl shadow-2xl border border-brand-border dark:border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-light dark:from-[#0d1b3e] dark:to-[#1e293b] text-white px-5 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                <div>
                  <h4 className="text-white text-sm font-extrabold leading-none mb-1">FlyEz Travel Agent</h4>
                  <span className="text-[10px] text-white/60 font-semibold">AI Assistant & Routing Support</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Wrapper Area */}
            <div 
              onClick={handleMessageContainerClick}
              className="flex-1 p-5 overflow-y-auto bg-slate-50 dark:bg-brand-primary flex flex-col gap-4 scrollbar-none"
            >
              {messages.map((msg) => {
                const isAgent = msg.sender === 'agent';
                return (
                  <div 
                    key={msg.id}
                    className={`flex items-end gap-2 max-w-[85%] ${isAgent ? 'self-start' : 'self-end'}`}
                  >
                    {isAgent && (
                      <div className="w-7 h-7 rounded-full bg-brand-accent text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Compass size={14} className="animate-spin-slow" />
                      </div>
                    )}
                    <div 
                      dangerouslySetInnerHTML={{ __html: msg.html }}
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm border ${
                        isAgent 
                          ? 'bg-white dark:bg-brand-primary-light text-brand-text-main dark:text-white/90 border-brand-border dark:border-gray-800 rounded-bl-sm' 
                          : 'bg-brand-accent text-white border-transparent rounded-br-sm'
                      }`}
                    />
                    {!isAgent && (
                      <div className="w-7 h-7 rounded-full bg-brand-primary dark:bg-brand-primary-light text-white flex items-center justify-center shrink-0 border dark:border-gray-800">
                        <User size={14} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator bubble */}
              {isTyping && (
                <div className="flex items-center gap-2 self-start">
                  <div className="w-7 h-7 rounded-full bg-brand-accent text-white flex items-center justify-center shrink-0">
                    <Compass size={14} />
                  </div>
                  <div className="px-4 py-3 bg-white dark:bg-brand-primary-light border border-brand-border dark:border-gray-800 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-brand-text-muted dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-brand-text-muted dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-brand-text-muted dark:bg-gray-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Form input footer */}
            <form 
              onSubmit={handleSendMessage}
              className="flex p-3 bg-white dark:bg-brand-primary-light border-t border-brand-border dark:border-gray-800 items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask a flight query..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 border-0 outline-none text-sm px-2 py-1.5 bg-transparent text-brand-primary dark:text-white placeholder-brand-text-muted dark:placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  inputText.trim() 
                    ? 'bg-brand-accent text-white cursor-pointer hover:scale-105' 
                    : 'bg-slate-100 dark:bg-brand-primary text-brand-text-muted dark:text-gray-400'
                }`}
              >
                <Send size={14} className={inputText.trim() ? "translate-x-0.5" : ""} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
