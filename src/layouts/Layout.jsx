import Footer from "../components/Footer";
import GotoTop from "../components/GotoTop";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";

// Frontend
export default function Layout({ children, navData }) {
  const router = useRouter();
  const currentUrl = router.asPath;
  console.log(currentUrl);
  return (
    <>
      {currentUrl !== "/kontakt-feedback" && <Navigation navData={navData} />}

      {children}
      <GotoTop />
      {/* <Footer/> */}
    </>
  );
}
