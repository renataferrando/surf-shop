import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../context/apiContext";
import ProductsLayout from "../components/productsLayout/ProductsLayout";
import ProductCard from "../components/common/productCard/ProductCard";
import Loading from "../components/common/loading/Loading";
import Filters from "../components/filters/Filters";
import "./_accesories.scss";
import { getAccesories } from "../service/getAccesories";

const Accesories = () => {
  const [state, dispatch, searchParams] = useContext(ApiContext);
  const [noResults, setNoResults] = useState(false);

  const { loading, accesories } = state;
  useEffect(() => {
    const fetchAccesories = async () => {
      const accesories = await getAccesories(searchParams);
      dispatch({ type: "GET_ACCESORIES_SUCCESS", payload: accesories });
    };

    fetchAccesories();
  }, [searchParams]);

  console.log(accesories);
  return (
    <div className="accesories-page">
      <h1>Accesories</h1>
      <div className="wrapper">
        <Filters data={accesories} />
        <div className="products">
          <ProductsLayout>
            {loading && <Loading />}
            {noResults && (
              <div>
                No results where found, try a diffrent search,{" "}
                <span className="go-back">go back</span>
              </div>
            )}
            {state &&
              accesories.map((data) => (
                <ProductCard
                  key={data._id}
                  title={data.name}
                  firstImage={data.firstImage}
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
