import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className='z-50 min-w-[300px] min-h-full fixed max-w-[300px] p-3 h-screen bg-sky-300 dark:bg-sky-800 flex flex-col justify-start gap-2'>
      {children}
    </div>
  )
}
