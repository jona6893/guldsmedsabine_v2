import Footer from "../components/Footer";
import GotoTop from "../components/GotoTop";
import Navigation from "../components/Navigation";

// Frontend
export default function Layout({ children, navData }) {
  return (
    <>
      <Navigation navData={navData} />
      {children}
      <GotoTop />
      {/* <Footer/> */}
    </>
  );
}
