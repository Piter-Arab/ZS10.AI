'use client'

import React, { useState, useRef, useEffect } from "react";


import LessonInfo from "@/components/LessonInfo";
import LessonRender from "@/components/LessonRender";
import { answers } from "@/constants/Answers";

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
        sender: 'Chatbot', msg: 'Typing...'
      },
    ]);

    setTimeout(() => {
      const botResponse = generateBotResponse();
      setChatLog(prevChatLog => [
        ...prevChatLog.slice(0, -1), // Remove the typing indicator
        { sender: 'Chatbot', msg: botResponse },
      ]);
    }, 3000); // Adjust the delay according to your preference
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
    const userMessage = { sender: 'User', msg: userInput };
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
        className="w-full max-h-[700px] min-h-[700px] flex flex-col gap-3 justify-start overflow-y-hidden overflow-x-scroll"
      >
        {chatLog.map((entry, index) => (
          <div
            key={index}
            className='w-full flex flex-col bg-neutral-200 p-3 rounded-md'
          >
            <div className="w-full text-sm text-neutral-700">{entry.sender}</div>
            <div dangerouslySetInnerHTML={{ __html: entry.msg }}></div>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="flex flex-col justify-center items-center w-full">
      <LessonInfo />
      <LessonRender />

      <div className="flex h-5/6 w-1/2 justify-between items-center flex-col">
        <h2 className="text-5xl font-mono text-neutral-700">ZS10-AI</h2>
        {renderChatLog()}
        <div className="w-full">
          <div className="w-full bg-neutral-200 rounded-lg border-2 mt-3 border-neutral-300 flex flex-row items-center">
            <input
              onChange={handleUserInput}
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
