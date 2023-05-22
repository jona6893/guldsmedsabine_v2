import { useRouter } from "next/router";

// Frontend
export default function Anchor({ children, href, className, target }) {
  const router = useRouter();

  function handleClick(e) {
    if (!target) {
      e.preventDefault();
      router.push(href);
    }
  }

  return (
    <a href={href} className={className} target={target} onClick={handleClick}>
      {children}
    </a>
  );
}
