import React from "react";
import Icon from "../icon/Icon";
import "./_filter-on.scss";
const FilterOnBtn = ({ text, onClose }) => {
  return (
    <div className="filter-btn">
      <Icon name="close" onClick={onClose} />
      {text}
    </div>
  );
};

export default FilterOnBtn;
