import { Link, NavLink } from "react-router-dom";


function NavBar() {
    return (
        <>
            <nav className="navbar navbar bg-primary" data-bs-theme="dark">
                <div className="w-100 d-flex justify-content-center">
                    <ul className="d-flex gap-3 justify-content-center">
                        <li><Link to="/">Home Page</Link></li>
                        <li><NavLink to="/ChiSiamo">Chi siamo</NavLink></li>
                        <li><NavLink to="/ListaDeiPost">Lista dei post</NavLink></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default NavBar