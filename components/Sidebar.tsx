import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className='focus:outline-0 focus:ring-0 bg-gray-900/85 backdrop-blur-lg border-r border-white/20 z-50 min-w-[300px] min-h-full absolute max-w-[300px] p-5 h-screen bg-gray-900 flex flex-col justify-start gap-1'>
      {children}
    </div>
  )
}