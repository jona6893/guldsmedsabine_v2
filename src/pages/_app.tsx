import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Types
export type Page = "Forside" | "Kontakt";

// Frontend
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
