import { ReactNode } from "react";
import { Url } from "url";

export type ButtonProps = {
  className?: string;
  styled?: boolean;
  href?: string;
  children: ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
}