import { useRouter } from "next/router";
import { PointerEvent, ReactNode } from "react";

// Types
interface AnchorProps {
  children?: ReactNode;
  href: string;
  className?: string;
}

// Frontend
export default function Anchor({ children, href, className }: AnchorProps) {
  const router = useRouter();

  function handleClick(e: any) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
