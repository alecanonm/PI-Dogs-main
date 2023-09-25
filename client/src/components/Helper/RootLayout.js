import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <body>
      <header style={{ position: "sticky", top: "0", zIndex: "50" }}>
        {pathname !== "/" && <NavBar />}
      </header>
      <main style={{ display: "block" }}>
        <Outlet />
      </main>
      <footer>
        {pathname !== "/" && <Footer name="Alejandro Canon" date="2023" />}
      </footer>
    </body>
  );
};

export default RootLayout;
