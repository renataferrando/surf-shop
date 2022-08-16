import "./header.scss";
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import logo from "../../images/logo-surf.png";
import SearchBar from "../common/searchBar/SearchBar";
import NavLinks from "./NavLinks";
import useWindowSize from "../common/hooks/useWindowSize";
import Drawer from "../common/drawer/Drawer";
import ModelessDialogBox from "../common/modelessDialogBox/ModelessDialogBox";
import Button from "../common/button/Button";
import { useNavigate } from "react-router-dom";
import Icon from "../common/icon/Icon";
import LogIn from "../../pages/LogIn";
import Cart from "../cart/Cart";
import HoverMenu from "../hoverMenu/HoverMenu";
const Header = ({ user, cart }) => {
  const [height, width] = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserModal, setShowUserModal] = useState();
  const [loginOpen, setLoginOpen] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartOpen, setCartOpen] = useState();
  const navigate = useNavigate();
  const [hoverMenuOpen, setHoverMenuOpen] = useState(false);

  const isMobile = width < 768;
  const headerClasses = classNames("header", {
    "--user": user,
    "--cart": cart,
    "--mobile": isMobile,
  });

  useEffect(() => {
    if (localStorage.getItem("userInfo") != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const userName = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      {" "}
      <nav className={headerClasses}>
        {isMobile && (
          <Icon
            onClick={() => setMenuOpen(true)}
            className="menu-icon"
            name="menu"
          />
        )}
        <Drawer
          position="left"
          width="mobile"
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          closeBtn={true}
        >
          <NavLinks mobile={true} />
        </Drawer>
        <img className="logo" src={logo} onClick={() => navigate("/")} />
        {!isMobile && <NavLinks />}
        <ul className="tools">
          <SearchBar iconName="search" isMobile={isMobile ? true : false} />
          <Icon
            name={!isLoggedIn ? "user" : "userLogged"}
            onClick={() => setShowUserModal(true)}
          />
          <Icon
            name="cart"
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          />
        </ul>
      </nav>
      {showUserModal && (
        <ModelessDialogBox
          isOpen={showUserModal}
          className="user-menu"
          onClose={() => setShowUserModal(false)}
        >
          <div className="log-in">
            {!isLoggedIn ? (
              <>
                <p>Who is there?</p>
                <Button
                  onClick={() => setLoginOpen(true) & setShowUserModal(false)}
                  className="user-btn"
                  label="Log In"
                ></Button>
                <p>Don't have an account?</p>
                <Button
                  onClick={() => navigate("/signup") & setShowUserModal(false)}
                  className="user-btn"
                  label="Sign Up"
                ></Button>
              </>
            ) : (
              <>
                <p className="hello">Hi {userName.name}</p>
                <a
                  className="myaccount"
                  onClick={() =>
                    navigate("/myaccount") & setShowUserModal(false)
                  }
                >
                  {" "}
                  My account
                </a>
                <a
                  className="logout"
                  onClick={() =>
                    localStorage.removeItem("userInfo") &
                    setShowUserModal(false)
                  }
                >
                  Log out
                </a>
              </>
            )}
          </div>
        </ModelessDialogBox>
      )}
      <LogIn loginOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <Cart cartOpen={cartOpen} cartClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
