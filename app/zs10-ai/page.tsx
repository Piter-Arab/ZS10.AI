'use client'

import React, { useState, useRef, useEffect } from "react";

import { answers } from "@/constants/Answers";
import { UserIcon, CpuChipIcon, InfoCircleIcon } from "@/components/icons/Icons";
import Link from "next/link";

interface Message {
  sender: string;
  msg: string;
}

export default function Page() {
  const [userInput, setUserInput] = useState<string>('');
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }


  const simulateBotTyping = () => {
    setChatLog(prevChatLog => [
      ...prevChatLog,
      {
        sender: 'ZS10-AI', msg: 'Typing...'
      },
    ]);

    setTimeout(() => {
      const botResponse = generateBotResponse();
      setChatLog(prevChatLog => [
        ...prevChatLog.slice(0, -1), // Remove the typing indicator
        { sender: 'ZS10-AI', msg: botResponse },
      ]);
    }, 1000); // Adjust the delay according to your preference
  };


  const generateBotResponse = (): string => {
    const lowerCaseInput: string = userInput.toLowerCase();
    let botResponse = "Przepraszam, nie rozumiem. Jak mogę ci pomóc?";

    // Check if user input contains any keyword from answers JSON
    for (const keyword in answers) {
      if (lowerCaseInput.includes(keyword.toLowerCase())) {
        botResponse = answers[keyword];
        break; // Stop the loop if a matching keyword is found
      }
    }

    return botResponse;
  };

  const handleSendMessage = () => {
    const userMessage = { sender: 'You', msg: userInput };
    setChatLog(prevChatLog => [...prevChatLog, userMessage]);

    simulateBotTyping();
    setUserInput('');
  };

  // UseEffect to scroll to the bottom when chatLog changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  const renderChatLog = () => {
    return (
      <div
        ref={chatContainerRef}
        className="w-full max-h-[700px] h-[700px] flex flex-col gap-3 items-start overflow-x-scroll"
      >
        {chatLog.map((entry, index) => (
          <div
            key={index}
            className='w-full flex flex-col bg-gray-800/50 p-3 rounded-md'
          >
            <div className="w-full flex flex-row items-center gap-2 text-sm text-gray-300">
              <div className="rounded-full bg-gray-600 text-white p-1">
                {entry.sender == 'ZS10-AI'
                  ? <CpuChipIcon className="size-5" />
                  : <UserIcon className="size-5" />
                }
              </div>
              {entry.sender}
            </div>
            <div className="text-gray-200" dangerouslySetInnerHTML={{ __html: entry.msg }}></div>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="flex flex-col justify-center items-center w-full p-3 mt-10">
      <div className="flex h-5/6 min-w-[55%] justify-between items-center flex-col">
        <Link href='blog/zs10-ai' className="flex flex-row">
          <h2 className="text-5xl font-mono text-gray-300 mb-8">ZS10-AI</h2>
          <InfoCircleIcon className="size-5 text-gray-300" />
        </Link>
        {renderChatLog()}
        <div className="w-full">
          <div className="w-full bg-gray-900 rounded-lg border my-3 border-white/20 flex flex-row items-center">
            <input
              onChange={handleUserInput}
              value={userInput}
              type="text"
              className="w-full bg-transparent text-gray-300 p-3 focus:outline-none"
              placeholder="Napisz"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button onClick={handleSendMessage}>
              <svg className="size-7 text-neutral-300 mr-3" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
