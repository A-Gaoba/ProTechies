'use client';

import React, { useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // create this separately

export default function ChatToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 shadow-lg transition hover:bg-purple-700"
        aria-label="Open Chat"
      >
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 2v20l4-4h16V2H2zm2 2h16v12H5.17L4 17.17V4z" />
        </svg>
      </button>

      {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
    </>
  );
}
