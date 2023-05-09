import Navigation from "../components/Navigation";

// Frontend
export default function Layout({ children, navData }) {
  return (
    <>
      <Navigation navData={navData} />
      {children}
    </>
  );
}
