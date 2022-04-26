import React, { useEffect, useState } from "react";
import ProductsLayout from "../components/productsLayout/ProductsLayout";
import ProductCard from "../components/common/productCard/ProductCard";
import "./_accesories.scss";
import useAxiosFetch from "../components/common/hooks/useAxiosFetch";
import Loading from "../components/common/loading/Loading";
import Navigation from "../components/common/navigation/Navigation";

const Accesories = () => {
  const { data, fetchError, isLoading } =
    useAxiosFetch(`/api/categories/accesories
  `);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const [subcat, setSubcat] = useState("");
  const filters = data.map((item) => item.subcategory);

  // const subcategory = filters.map((item) => set);

  // const leashes = data.filter((item) => item.category === "leashes");
  // const brands = leashes.map((item) => item.brand);
  const subcats = filters.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  console.log(subcats);

  return (
    <div className="accesories-page">
      <h1>Accesories</h1>
      <div>
        <p>{subcats}</p>
        <Navigation filters={subcats} />
        <ProductsLayout>
          {isLoading && <Loading />}
          {data.map((data) => (
            <ProductCard
              key={data._id}
              title={data.name}
              firstImage={data.firstImageUrl}
              secondImage={data.secondImageUrl}
              price={data.price}
              description={data.description}
            />
          ))}
        </ProductsLayout>
      </div>
      {data.map(({ brand }) => (
        <p>{brand}</p>
      ))}
    </div>
  );
};

export default Accesories;
