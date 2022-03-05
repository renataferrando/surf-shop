import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import mapper from "./mapper.icon";
import './_icon.scss'

const propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
};

const defaultProps = {
  width: "24px",
};

const Icon = ({name, text, href, title, className, width, onClick, onMouseEnter, link, ...r}) => {
    const classes = classNames('icon', className)
    return (
        <> 
        {link ? (
				<a href={href} className="icon-link">
                   <i width={width} onClick={onClick} onMouseEnter={onMouseEnter} className={classes}>
                        {mapper[name]}
                   </i>
				</a>
			) : (
				<i width={width} onClick={onClick} onMouseEnter={onMouseEnter} className={classes}>
                    {mapper[name]}
                </i>
			)}
        </>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;