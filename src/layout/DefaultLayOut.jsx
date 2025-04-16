import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";


function DefaultLayout() {
    return (
        <div>
            <NavBar/>
            <Outlet />

        </div>
    );
}

export default DefaultLayout