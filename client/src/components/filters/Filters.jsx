import React, { useContext, useEffect, useState } from "react";
import Checkmark from "../common/checkmark/Checkmark";
import { ApiContext } from "../../context/apiContext";
import "./_filters.scss";

const Filters = ({ data }) => {
  const [state, dispatch, searchParams, setSearchParams] =
    useContext(ApiContext);

  const [gender, setGender] = useState(false);
  const [subcategory, setSubcategory] = useState(false);
  const [brands, setBrands] = useState([]);
  const [disabledBrands, setDisabledBrands] = useState([]);
  const [brandsChecked, setBrandsChecked] = useState([]);
  const [disabledSubcategories, setDisabledSubcategories] = useState([]);
  const [subcategoriesChecked, setSubcategoriesChecked] = useState([]);

  const isGender = data.map((item) => item.gender != undefined);
  const isSubcategory = data.map((item) => item.subcategory != undefined);

  useEffect(() => {
    setGender(isGender[0]);
    setSubcategory(isSubcategory[0]);
    setBrands(
      data
        .map((item) => item.brand)
        .reduce((acc, br) => (acc.includes(br) ? acc : [...acc, br]), [])
    );
  }, [data]);

  const subcategories = data
    .map((item) => item.subcategory)
    .reduce((acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]), []);

  const handleBrandFilter = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      searchParams.append("brand", value);
      setBrandsChecked(searchParams.getAll("brand"));
    } else if (!checked) {
      searchParams.delete("brand", value);
      setBrandsChecked(searchParams.getAll("brand"));
    }
  };

  const handleSubcategoryFilter = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      searchParams.append("subcategory", value);
      setSubcategoriesChecked(searchParams.getAll("subcategory"));
    } else if (!checked) {
      searchParams.delete("subcategory", value);
    }
  };

  useEffect(() => {
    setBrandsChecked(searchParams.getAll("brand"));
    setSubcategoriesChecked(searchParams.getAll("subcategory"));
    setDisabledBrands(searchParams.getAll("brand"));
    setDisabledSubcategories(searchParams.getAll("subcategory"));
  }, [searchParams]);

  const applyFilter = () => {
    setSearchParams(searchParams);
  };

  const clearBrandFilter = () => {
    searchParams.delete("brand");
    setSearchParams(searchParams);
  };
  const clearSubcategoryFilters = () => {
    searchParams.delete("subcategory");
    setSearchParams(searchParams);
  };

  return (
    <div className="filters">
      <h4>Filters</h4>
      <p>Sort by price</p>
      <Checkmark
        label="High to low"
        onChange={() =>
          dispatch({
            type: "HIGH_TO_LOW",
          })
        }
        checked={state.priceHighToLow}
      />
      <Checkmark
        label="Low to High"
        onChange={() =>
          dispatch({
            type: "LOW_TO_HIGH",
          })
        }
        checked={state.priceLowToHigh}
      />
      {gender && (
        <>
          <p>Gender</p>
          <Checkmark label="Man" />
          <Checkmark label="Woman" />
        </>
      )}
      <p>Brands</p>{" "}
      {brands.map((item) => (
        <Checkmark
          key={item}
          label={item}
          name="filter"
          value={item}
          checked={brandsChecked.includes(item)}
          onChange={handleBrandFilter}
          disabled={disabledBrands.includes(item)}
        />
      ))}
      {disabledBrands.length != 0 && (
        <span className="clear-btn" onClick={clearBrandFilter}>
          Clear
        </span>
      )}
      {subcategory && (
        <>
          <p>Subcategory</p>
          {subcategories.map((item) => (
            <Checkmark
              key={item}
              label={item}
              name="filter"
              value={item}
              checked={subcategoriesChecked.includes(item)}
              onChange={handleSubcategoryFilter}
              disabled={disabledSubcategories.includes(item)}
            />
          ))}
          {disabledSubcategories.length != 0 && (
            <span className="clear-btn" onClick={clearSubcategoryFilters}>
              Clear
            </span>
          )}
        </>
      )}
      <button onClick={applyFilter}> Apply filters</button>
    </div>
  );
};

export default Filters;
