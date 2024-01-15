import { SidebarProps } from "@/types/SidebarProps";

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className='w-72 p-3 h-screen bg-sky-800 flex flex-col justify-start gap-2'>
      {children}
    </div>
  )
}
