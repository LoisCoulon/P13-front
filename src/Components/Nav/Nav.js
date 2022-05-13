import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";

function Nav() {
  const [isLogged, setIsLogged] = useState(false);
  const userName = "Tony";

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            alt="Argent Bank Logo"
            src={logo}
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isLogged ? (
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              <p>{userName}</p>
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Nav;
