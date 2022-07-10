import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Loader from "../loader";

const Layout = () =>(<div>
    <Loader />
    <Header />
    <Outlet />
    <Footer />
    </div>
)

export default Layout;