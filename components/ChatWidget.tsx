'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-mistral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: `⚠️ Assistant error: ${errorData?.error?.message || 'An error occurred.'}`,
          },
        ]);
      } else {
        const data = await res.json();
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: data?.response || '⚠️ No response received from assistant.',
          },
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: '⚠️ Network error. Please check your connection and try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 w-[360px] max-h-[500px] rounded-xl bg-white dark:bg-[#1e1e1e] shadow-xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#075e54] to-[#128c7e] text-white p-3 font-bold flex justify-between items-center">
        <span>ProTechies Assistant</span>
        <button onClick={onClose} className="text-white text-lg hover:opacity-80">
          &times;
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3 bg-[#f7f7f7] dark:bg-gray-800 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-xl whitespace-pre-wrap leading-relaxed ${msg.role === 'user'
                ? 'bg-[#dcf8c6] text-black self-end ml-auto rounded-br-none'
                : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start mr-auto rounded-bl-none'
              } shadow-sm`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-xs italic text-gray-500">Typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-2 py-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-[#128c7e] hover:bg-[#0f766e] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}
