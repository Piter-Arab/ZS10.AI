"use client";

import { CpuChipIcon, InfoCircleIcon, UserIcon } from "@/components/icons/Icons";
import { useChat } from "ai/react";
import Link from "next/link";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full p-3 mt-10">
        <div className="flex h-5/6 min-w-[55%] max-w-[60%] justify-between items-center flex-col">
          <Link href='blog/zs10-ai' className="flex flex-row">
            <h2 className="text-5xl font-mono text-gray-300 mb-8">Cluster-AI</h2>
            <InfoCircleIcon className="size-5 text-gray-300" />
          </Link>
          <div className="w-full max-h-[700px] h-[700px] flex flex-col gap-3 items-start overflow-x-scroll">
            {messages.map((message) => (
              <div
                key={message.id}
                className='w-full flex flex-col bg-gray-800/50 p-3 rounded-md'
              >
                <div className="w-full flex flex-row items-center gap-2 text-sm text-gray-300">
                  <div className="rounded-full bg-gray-600 text-white p-1">
                    {message.role != 'user'
                      ? <CpuChipIcon className="size-5" />
                      : <UserIcon className="size-5" />
                    }
                  </div>
                  <p className="capitalize">{message.role}</p>
                </div>
                <div className="text-gray-200">{message.content}</div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="w-full bg-gray-900 rounded-lg border my-3 border-white/20 flex flex-row items-center">
              <form onSubmit={handleSubmit} className="flex flex-row justify-between w-full">
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="w-full bg-transparent text-gray-300 p-3 focus:outline-none"
                  placeholder="Napisz"
                  value={input}
                />
                <button type="submit">
                  <svg className="size-7 text-neutral-300 mr-3" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}