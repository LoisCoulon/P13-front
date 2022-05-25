import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken, saveProfile } from "../../store";
import { getProfile } from "../../services/service";

function Nav() {
  const token = useSelector((state) => state.token);
  const userDatas = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserDatas() {
      const response = await getProfile();
      const userDatas = response.data.body;
      dispatch(saveProfile(userDatas));
    }
    if (token) {
      getUserDatas();
    }
  }, [dispatch, token]);

  function signOut() {
    dispatch(deleteToken());
  }

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
        {token ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userDatas.firstName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={signOut}>
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
