import React, { useEffect } from 'react';
import ProductsLayout from '../components/productsLayout/ProductsLayout';
import ProductCard from '../components/common/productCard/ProductCard';
import './_accesories.scss'
import useAxiosFetch from "../components/common/hooks/useAxiosFetch"
import Loading from '../components/common/loading/Loading'

const Accesories = () => {


    const { data, fetchError, isLoading } = useAxiosFetch('/api/products/accesories/leashes');
    useEffect(() => {
        console.log(data)
      }, [data])
    
      const filters = [
        {
            id:1,
            name: "brand",
        },
        {
            id:2,
            name: "size",
        },
        {
            name: "color",
            id:3,
            items: [
                { item: "black" },
                { item: "red" }
            ]
        }
    ]
    
    return (
        <div className='accesories-page'>
            <h1>Accesories</h1>
            <ProductsLayout filters={filters}  >
                {isLoading && <Loading/>}
                {
                    data.map(data => (
                        <ProductCard
                            key={data._id}
                            title={data.name}
                            firstImage={data.firstImageUrl}
                            secondImage={data.secondImageUrl}
                            price={data.price}
                            description={data.description}
                        />
                    ))
                }
            </ProductsLayout>
        </div>
    );
};

export default Accesories;