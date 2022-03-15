import React from 'react';
import './_products-layout.scss'
import Navigation from '../common/navigation/Navigation';

const ProductsLayout = ({ navTitle, children }) => {
    return (
        <div className='product-layout'>
            <Navigation title={navTitle}/>
            <div className='products'>
                { children }
            </div>
        </div>
    );
};

export default ProductsLayout;