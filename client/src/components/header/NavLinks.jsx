import React, { useState, useContext } from "react";
import "./_nav-links.scss";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import HoverMenu from "../hoverMenu/HoverMenu";
import { ApiContext } from "../../context/apiContext";
import { useEffect } from "react";

const NavLinks = ({ className, mobile }) => {
  const classes = classNames("nav-items", className, {
    "--mobile": mobile,
  });

  const navigate = useNavigate();
  const [state, dispatch] = useContext(ApiContext);
  const { accesoriesBrands, accesoriesSubcategories } = state;

  const [hoverMenuOpen, setHoverMenuOpen] = useState(false);
  const [itemActive, setItemActive] = useState();
  const [delayHandler, setDelayHandler] = useState(null);

  const handleHover = (e) => {
    setHoverMenuOpen(false);
    setDelayHandler(
      setTimeout(() => {
        setHoverMenuOpen(true);
        setItemActive(e.target.dataset.value);
        document.body.style.overflow = "hidden";
      }, 500)
    );
  };

  const handleNavLinkMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  const handleMouseLeave = () => {
    setHoverMenuOpen(false);
    setItemActive("");
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <li className={classes}>
        <a
          className={itemActive === "wetsuits" ? "--active" : ""}
          onMouseEnter={handleHover}
          onMouseLeave={handleNavLinkMouseLeave}
          data-value="wetsuits"
          href=""
          onClick={() => navigate("/wetsuits")}
        >
          Wetsuits
        </a>
        <a
          className={itemActive === "boards" ? "--active" : ""}
          onMouseEnter={handleHover}
          onMouseLeave={handleNavLinkMouseLeave}
          data-value="boards"
        >
          Boards
        </a>
        <a
          href=""
          className={itemActive === "accesories" ? "--active" : ""}
          onMouseEnter={handleHover}
          onMouseLeave={handleNavLinkMouseLeave}
          data-value="accesories"
          onClick={() => navigate("/accesories")}
        >
          Accesories
        </a>
        <a href="">Brands</a>
      </li>
      {hoverMenuOpen && (
        <HoverMenu
          onMouseLeave={handleMouseLeave}
          isOpen={hoverMenuOpen}
          close={handleMouseLeave}
        >
          <div className="nav-content">
            {itemActive === "accesories" && (
              <>
                <div>
                  <p>Brands </p>
                  <ul>
                    {accesoriesBrands.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p>Categories </p>
                  <ul>
                    {accesoriesSubcategories.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </HoverMenu>
      )}
    </>
  );
};

export default NavLinks;
