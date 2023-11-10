import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/poney">Nos Poneys</Link>
            </li>
            <li>
                <Link to="/contact">Nous Contacter</Link>
            </li>
            <li>
                <Link to="/about">A Propos</Link>
            </li>
        </ul>
    )
}

export default Nav;