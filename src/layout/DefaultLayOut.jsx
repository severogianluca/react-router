import { Outlet } from "react-router-dom";
import Header from "../component/Header"

function DefaultLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>


        </div>
    );
}

export default DefaultLayout