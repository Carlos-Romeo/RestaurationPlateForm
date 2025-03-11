import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";



const Layout = () => {
    return (
        <div>
{/*             <div style={{height: "10vh", width : "100%"}}></div> */}
            <Headers />
            <Outlet />
            <Footer/>
        </div>
    );
}



export default Layout