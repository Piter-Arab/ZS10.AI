'use client'

import { answers } from "@/constants/Answers";
import React, { useState } from "react";

interface Message {
  sender: string;
  msg: string;
}

export default function Page() {
  const [userInput, setUserInput] = useState<string>('');
  const [chatLog, setChatLog] = useState<Message[]>([]);

  const handleUserInput = (e: any) => {
    setUserInput(e.target.value);
  }

  const handleSendMessage = () => {
    const lowerCaseInput: string = userInput.toLowerCase();
    let botResponse = "Przepraszam, nie rozumiem. Jak mogę ci pomóc?";

    // Check if user input contains any keyword from answers JSON
    for (const keyword in answers) {
      if (lowerCaseInput.includes(keyword.toLowerCase())) {
        botResponse = answers[keyword];
        break; // Stop the loop if a matching keyword is found
      }
    }

    setChatLog([
      ...chatLog,
      { sender: 'User - ', msg: userInput },
      { sender: 'Chatbot - ', msg: botResponse },

    ]);

    // Clear user input
    setUserInput('');
  };

  const renderChatLog = () => {
    return (
      <div className="w-full h-full flex flex-col justify-start">
        {chatLog.map((entry, index) => (
          <div key={index} className="w-full">
            {entry.sender}
            {entry.msg}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex h-5/6 w-1/2 justify-between items-center flex-col">
        <h2 className="text-5xl font-mono text-neutral-700">ZS10-AI</h2>
        {renderChatLog()}
        <div className="w-full">
          <div className="w-full bg-neutral-200 rounded-lg border-2 border-neutral-300 flex flex-row items-center">
            <input
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              type="text"
              className="w-full bg-transparent text-neutral-900 p-3 focus:outline-none"
              placeholder="Napisz"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button onClick={handleSendMessage}>
              <svg className="size-7 text-neutral-400 mr-3" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}