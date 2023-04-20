import Navigation, { NavData } from "@/components/Navigation";

// Types
interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  navData: NavData[];
}

// Frontend
export default function Layout({ children, navData }: LayoutProps) {
  return (
    <>
      <Navigation navData={navData} />
      {children}
    </>
  );
}
