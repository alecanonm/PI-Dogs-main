import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <NavBar />}
      {/* <main> */}{" "}
      <div style={{ display: "block" }}>
        <Outlet />
      </div>
      <Footer name="Alejandro Canon" date="2023" />
    </>
  );
};

export default RootLayout;
