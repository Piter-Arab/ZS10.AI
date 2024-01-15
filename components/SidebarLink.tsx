import { SidebarLinkProps } from "@/types/SidebarLinkProps";


export default function SidebarLink({ children, href }: SidebarLinkProps) {
  return (
    <a href={`/${href}`} className="w-full group flex justify-between bg-sky-800 border-2 border-sky-900 rounded-lg p-2 h-min hover:scale-105 transition-all hover:border-sky-600 hover:shadow-2xl shadow-black">
      {children}
      <svg data-slot="icon" className="scale-0 group-hover:scale-100 w-5 h-5 transition-all opacity-0 group-hover:opacity-100" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}