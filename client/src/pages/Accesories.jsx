import React from 'react';
import ProductsLayout from '../components/productsLayout/ProductsLayout';
import './_accesories.scss'

const Accesories = () => {
    return (
        <div className='accesories-page'>
            <h1>Accesories</h1>
            <ProductsLayout navTitle="Leashes">
                
            </ProductsLayout>
        </div>
    );
};

export default Accesories;