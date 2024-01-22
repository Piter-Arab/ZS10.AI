import { MouseEventHandler, ReactNode } from "react"

export type SidebarLinkProps = {
  children: ReactNode;
  href?: string;
  titleCont?: string;
  onClick?: MouseEventHandler;
  className?: string;
}