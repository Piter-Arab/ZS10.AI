import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className='z-50 min-w-[300px] min-h-full fixed max-w-[300px] p-5 h-screen bg-gray-900 flex flex-col justify-start gap-1'>
      {children}
    </div>
  )
}