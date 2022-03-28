
import React, { useState, useRef } from 'react';
import './_product-card.scss'

const ProductCard = ({ title, price, firstImage, description, secondImage }) => {

    const onHoverRef = useRef()
    const [image, setImage] = useState(false)
    const [ isHover, setIsHover ] = useState()

    const handleMouseEnter = (e) => {
        if (onHoverRef.current) {
            setImage(!image)
            setIsHover(!isHover)
        }
    };
    return (
        <div 
            ref={onHoverRef}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseEnter}
            className='product-card'>
            <h4 className="title">{title}</h4>
            <img className="image" src={!image ? firstImage : secondImage}/>
            <div className={!isHover ? "description-box" : "description-box --active"}>
                <p className='description'>{description}</p>
            </div>
            <span className='price'>$ {price}</span>
        </div>
    );
};

export default ProductCard;