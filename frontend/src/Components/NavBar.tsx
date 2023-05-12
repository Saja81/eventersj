import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="NavBar-list">
          <li>
            <Link className="NavBar-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="NavBar-links" to="/eventlist">
              Evenemang
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
