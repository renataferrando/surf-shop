import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../context/apiContext";
import ProductsLayout from "../components/productsLayout/ProductsLayout";
import ProductCard from "../components/common/productCard/ProductCard";
import Loading from "../components/common/loading/Loading";
import Filters from "../components/filters/Filters";
import { useAccesories } from "../service/getAccesories";
import "./_accesories.scss";

const Accesories = () => {
  const [state, dispatch, searchParams, setSearchParams] =
    useContext(ApiContext);
  const { loading } = useAccesories();
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (state.products.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [state.products]);

  const handleDeleteSearch = () => {
    setSearchParams();
  };

  return (
    <div className="accesories-page">
      <h1>Accesories</h1>
      <div className="wrapper">
        <Filters data={state.products} />
        <div className="products">
          <ProductsLayout>
            {loading && <Loading />}
            {noResults && (
              <div>
                No results where found, try a diffrent search,{" "}
                <span className="go-back" onClick={handleDeleteSearch}>
                  go back
                </span>
              </div>
            )}
            {state.products.map((data) => (
              <ProductCard
                key={data._id}
                title={data.name}
                firstImage={data.firstImageUrl}
                secondImage={data.secondImageUrl}
                price={data.price}
                brand={data.brand}
                category={data.subcategory}
              />
            ))}
          </ProductsLayout>
        </div>
      </div>
    </div>
  );
};

export default Accesories;
