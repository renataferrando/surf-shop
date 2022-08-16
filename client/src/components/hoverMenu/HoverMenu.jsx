import React, { useRef } from "react";
import DinamicPortal from "../dinamicPortal/DinamicPortal";
import useClickOutside from "../common/hooks/useClickOutside";
import "./_hover-menu.scss";
const HoverMenu = ({ onMouseEnter, onMouseLeave, close, children }) => {
  const ref = useRef();
  useClickOutside(ref, () => close());

  return (
    <DinamicPortal id="layout">
      <div className="background">
        <div
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="menu"
        >
          {children}
        </div>
      </div>
    </DinamicPortal>
  );
};

export default HoverMenu;
