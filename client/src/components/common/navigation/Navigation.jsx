import React, { useState } from "react";
import "./_navigation.scss";
import classNames from "classnames";
import Icon from "../icon/Icon";

const Navigation = ({ className, filters, items }) => {
  const classes = classNames("navigation", className);
  const [listOpen, setListOpen] = useState();

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className={classes}>
      {filters.map((index, name) => (
        <div key={index} className="item">
          <div className="title">
            <h4>{name}</h4>
            <Icon
              name={listOpen && items ? "minus" : "plus"}
              className={!items && "--disabled"}
              onClick={items && handleClick}
            />
          </div>
          {items && (
            <ul className={listOpen ? "list --open" : "list"}>
              {items.map(({ item, i }) => (
                <li key={i}> {[item]} </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
