import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav >
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><NavLink to="/ChiSiamo">Chi siamo</NavLink></li>
                    <li><NavLink to="/ListaDeiPost">Lista Dei Post</NavLink></li>
                </ul>

            </nav>

        </>
    )
}

export default NavBar