import { InfoCircleIcon } from "@/components/icons/Icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <div className="flex h-5/6 w-1/2 justify-between items-center flex-col">
        <div className="flex flex-row">
          <Link href='blog/cluster-ai' className="flex flex-row">
            <h2 className="text-5xl font-mono text-neutral-700">Cluster AI</h2>
            <InfoCircleIcon className="size-5" />
          </Link>
          <a href="/about">
            <InfoCircleIcon className="size-7 text-neutral-700" />
          </a>
          <p className="text-sm"></p>
        </div>
        <div className="w-full">
          <div className="w-full bg-neutral-100 rounded-lg border-2 my-3 border-neutral-200 flex flex-row items-center">
            <input
              type="text"
              className="w-full bg-transparent text-neutral-900 p-3 focus:outline-none"
              placeholder="Napisz coś ..."
            />
            <button>
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
