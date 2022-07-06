import React from "react";
import "./_navigation.scss";
import classNames from "classnames";

const Navigation = ({ className, title, items, checkboxOnChange, checked }) => {
  const classes = classNames("navigation", className);

  return (
    <div className={classes}>
      <div className="item">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <ul>
          {items.map((item, id) => (
            <label key={id} className="filter-checkbox">
              <input
                type="checkbox"
                value={item}
                onChange={checkboxOnChange}
                checked={checked}
              />
              {item}
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
