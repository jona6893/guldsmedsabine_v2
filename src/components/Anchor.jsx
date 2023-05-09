import { useRouter } from "next/router";

// Frontend
export default function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
