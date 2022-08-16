import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../context/apiContext";
import ProductsLayout from "../components/productsLayout/ProductsLayout";
import ProductCard from "../components/common/productCard/ProductCard";
import Loading from "../components/common/loading/Loading";
import Filters from "../components/filters/Filters";

import "./_accesories.scss";
import { getWetsuits } from "../service/getWetsuits";

const Wetsuits = () => {
  const [state, dispatch] = useContext(ApiContext);
  const [noResults, setNoResults] = useState(false);

  const { loading, wetsuits, searchParams } = state;
  useEffect(() => {
    const fetchWetsuits = async () => {
      const wetsuits = await getWetsuits();
      dispatch({ type: "GET_WETSUITS_SUCCESS", payload: wetsuits });
    };

    fetchWetsuits();
  }, []);

  console.log(wetsuits);
  return (
    <div className="accesories-page">
      <h1>Accesories</h1>
      <div className="wrapper">
        <Filters data={wetsuits} />
        <div className="products">
          <ProductsLayout>
            {/* {loading && <Loading />} */}
            {noResults && (
              <div>
                No results where found, try a diffrent search,{" "}
                <span className="go-back">go back</span>
              </div>
            )}
            {state &&
              wetsuits.map((data) => (
                <ProductCard
                  key={data._id}
                  title={data.name}
                  firstImage={data.firstImageUrl}
                  //   secondImage={data.secondImageUrl}
                  price={data.price}
                  brand={data.brand}
                  //   category={data.subcategory}
                />
              ))}
          </ProductsLayout>
        </div>
      </div>
    </div>
  );
};

export default Wetsuits;
