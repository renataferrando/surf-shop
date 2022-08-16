import React, { useState, useContext, useEffect } from "react";
import Checkmark from "../common/checkmark/Checkmark";
import { useSearchParams } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";

import "./_filters.scss";

const Filters = ({ data }) => {
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [gender, setGender] = useState(false);
  const [subcategory, setSubcategory] = useState(false);
  const [state, dispatch, searchParams, setSearchParams] =
    useContext(ApiContext);

  const isGender = data.map((item) => item.gender != undefined);
  const isSubcategory = data.map((item) => item.subcategory != undefined);

  useEffect(() => {
    setGender(isGender[0]);
    setSubcategory(isSubcategory[0]);
  }, [data]);

  const productBrands = data
    .map((item) => item.brand)
    .reduce((acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]), []);

  const productSubcategory = data
    .map((item) => item.subcategory)
    .reduce((acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]), []);

  const productGender = data
    .map((item) => item.gender)
    .reduce((acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]), []);

  const handlerFilter = (e) => {
    resetState();
    const { value, name } = e.target;

    const currentCategoryChecked = value;
    const allCategoriesChecked = [...categoriesChecked];
    const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

    let updatedCategories;
    if (indexFound === -1) {
      searchParams.append(name, value);
      setSearchParams(searchParams);
      updatedCategories = [...categoriesChecked, currentCategoryChecked];
      setCategoriesChecked(updatedCategories);
    } else {
      searchParams.delete(name, value);
      setSearchParams(searchParams);
      updatedCategories = [...categoriesChecked];
      updatedCategories.splice(indexFound, 1);
      setCategoriesChecked(updatedCategories);
    }
  };

  const resetState = () => {
    setCategoriesChecked([]);
  };

  return (
    <div className="filters">
      <h4>Filters</h4>
      {gender && (
        <>
          <p>Gender</p>
          {productGender.map((item) => (
            <Checkmark
              key={item}
              name="gender"
              label={item}
              value={item}
              onChange={handlerFilter}
              checked={categoriesChecked.includes(item)}
            />
          ))}
        </>
      )}
      <p>Brands</p>{" "}
      {productBrands.map((item) => (
        <Checkmark
          key={item}
          label={item}
          name="brand"
          value={item}
          checked={searchParams.getAll("brand").includes(item)}
          onChange={handlerFilter}
        />
      ))}
      {subcategory && (
        <>
          <p>Category</p>
          {productSubcategory.map((item) => (
            <Checkmark
              key={item}
              label={item}
              name="subcategory"
              value={item}
              checked={searchParams.getAll("subcategory").includes(item)}
              onChange={handlerFilter}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Filters;
