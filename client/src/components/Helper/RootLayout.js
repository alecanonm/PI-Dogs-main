import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header style={{ position: "sticky", top: "0", zIndex: "50" }}>
        {pathname !== "/" && <NavBar />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ position: "sticky", bottom: "0", zIndex: "50" }}>
        {pathname !== "/" && <Footer name="AlejandroDev" />}
      </footer>
    </>
  );
};

export default RootLayout;
