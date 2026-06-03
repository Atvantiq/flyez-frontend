import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Compass, User, AlertCircle } from 'lucide-react';

export default function TravelGptChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const chatBottomRef = useRef(null);

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
  const handleSendMessage = async (e) => {
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
  const handleActionClick = async (actionVal, userText) => {
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
  const handleMessageContainerClick = (e) => {
    if (e.target.classList.contains('cnf')) {
      handleActionClick(3, 'Thanks, I confirm this');
    } else if (e.target.classList.contains('end')) {
      handleActionClick(4, 'Thanks');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(37, 99, 235, 0.35)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            transition: 'var(--transition-normal)',
            animation: 'float 3s ease-in-out infinite'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '350px',
            height: '480px',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {/* Header */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)', 
              color: '#ffffff', 
              padding: '16px 20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700' }}>FlyEz Travel Agent</h4>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>AI Assistant & Routing Support</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#ffffff', opacity: 0.8 }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Wrapper Area */}
          <div 
            onClick={handleMessageContainerClick}
            style={{ 
              flex: 1, 
              padding: '20px', 
              overflowY: 'auto', 
              backgroundColor: '#f8fafc',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {messages.map((msg, index) => {
              const isAgent = msg.sender === 'agent';
              return (
                <div 
                  key={msg.id}
                  style={{
                    display: 'flex',
                    alignSelf: isAgent ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    gap: '8px',
                    alignItems: 'flex-end'
                  }}
                >
                  {isAgent && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ffffff', boxShadow: 'var(--shadow-sm)' }}>
                      <Compass size={14} />
                    </div>
                  )}
                  <div 
                    dangerouslySetInnerHTML={{ __html: msg.html }}
                    className={isAgent ? "chat-bubble-agent" : "chat-bubble-user"}
                    style={{
                      borderRadius: isAgent ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      lineHeight: '1.4',
                      boxShadow: 'var(--shadow-sm)',
                      background: isAgent ? '#ffffff' : 'var(--color-accent)',
                      color: isAgent ? 'var(--color-text-main)' : '#ffffff',
                      border: isAgent ? '1px solid var(--color-border)' : 'none',
                    }}
                  />
                  {!isAgent && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ffffff' }}>
                      <User size={14} />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div style={{ display: 'flex', alignSelf: 'flex-start', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                  <Compass size={14} />
                </div>
                <div style={{ padding: '10px 16px', background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '16px 16px 16px 4px', display: 'flex', gap: '4px' }}>
                  <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite alternate' }} />
                  <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite alternate 0.2s' }} />
                  <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite alternate 0.4s' }} />
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Form input footer */}
          <form 
            onSubmit={handleSendMessage}
            style={{ 
              display: 'flex', 
              padding: '12px 16px', 
              backgroundColor: '#ffffff', 
              borderTop: '1px solid var(--color-border)',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <input
              type="text"
              placeholder="Ask a flight query..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                padding: '8px 4px',
                color: 'var(--color-primary)'
              }}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: inputText.trim() ? 'var(--color-accent)' : '#f1f5f9',
                color: inputText.trim() ? '#ffffff' : 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Custom Styles for buttons embedded in TravelGPT HTML replies */}
      <style>{`
        .chat-bubble-agent .direct-chat-text {
          word-break: break-word;
        }
        .chat-bubble-agent button, .chat-bubble-agent .cnf, .chat-bubble-agent .end {
          display: inline-block;
          margin-top: 8px;
          margin-right: 6px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .chat-bubble-agent .cnf {
          background-color: var(--color-accent);
          color: #ffffff;
          border: 1px solid var(--color-accent);
        }
        .chat-bubble-agent .cnf:hover {
          background-color: var(--color-accent-hover);
        }
        .chat-bubble-agent .end {
          background-color: #f1f5f9;
          color: var(--color-text-main);
          border: 1px solid var(--color-border);
        }
        .chat-bubble-agent .end:hover {
          background-color: #e2e8f0;
        }
        
        @keyframes bounce {
          to { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
