import { SidebarLinkProps } from "@/types/SidebarLinkProps";


export default function SidebarLink({ children, href }: SidebarLinkProps) {
  return (
    <a href={`/${href}`} className="w-full h-min group flex justify-between rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
      <div className="flex flex-row justify-start items-center gap-3">
        {children}
      </div>
      <svg data-slot="icon" className="scale-0 group-hover:scale-100 w-5 h-5 transition-all opacity-0 group-hover:opacity-100" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

// className="hover:cursor-pointer w-full group border-transparent flex justify-between bg-sky-300 dark:bg-sky-900 border-2 border-l-sky-400 dark:border-l-sky-950 p-2 h-min hover:scale-105 transition-all hover:border-l-sky-200 dark:hover:border-l-sky-600 hover:shadow-xl shadow-black"