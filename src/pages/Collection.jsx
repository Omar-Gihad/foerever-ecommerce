import React, { useContext, useEffect, useState } from "react";
import Title from "../includes/Title";
import { assets } from "../assets/frontend_assets/assets";
import { products } from "../assets/frontend_assets/assets";
import Card from "../includes/Card";
import Footer from "../includes/Footer";
import { searchContext } from "../App";

const Collection = () => {
  const { showSearch, setShowSearch } = useContext(searchContext);

  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("Relavent");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setData(products);
  }, []);

  useEffect(() => {
    let filteredProducts = [...products];

    // Apply category filter
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((el) =>
        category.includes(el.category)
      );
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((el) =>
        subCategory.includes(el.subCategory)
      );
    }

    // Apply search filter
    if (searchValue !== "") {
      filteredProducts = filteredProducts.filter((el) =>
        el.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
    }

    // Set the filtered and searched data
    setData(filteredProducts);
  }, [category, subCategory, searchValue]);

  // Handle category filter changes
  function handleCategoryClick(e) {
    if (category.includes(e.target.value)) {
      setCategory((curCategory) =>
        curCategory.filter((el) => el !== e.target.value)
      );
    } else {
      setCategory([...category, e.target.value]);
    }
  }

  // Handle subcategory filter changes
  function handleTypeClick(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((curSubCategory) =>
        curSubCategory.filter((el) => el !== e.target.value)
      );
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  }

  // Handle sorting option changes
  function handleChange(e) {
    setSortOption(e.target.value);
  }

  // Get sorted products based on the sortOption
  function getSortedProducts(products) {
    let sortedProducts = [...products];
    if (sortOption === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  }

  useEffect(() => {
    setData((prevData) => getSortedProducts(prevData));
  }, [sortOption, category, subCategory]);

  // Handle Search text changes
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  // useEffect(() => {
  //   setData((prevData) =>
  //     prevData.filter((el) =>
  //       el.title.toLowerCase().includes(searchValue.trim().toLowerCase())
  //     )
  //   );
  // }, [searchValue, category, subCategory]);

  return (
    <>
      <div
        className={`
          ${
            showSearch ? "" : "hidden"
          } border-t border-b bg-gray-50 text-center`}
      >
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            type="text"
            placeholder="Search"
            name="search"
            id=""
            value={searchValue}
            onChange={handleSearchChange}
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <img className="w-4" src={assets.search_icon} alt="" />
        </div>
        <img
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
          onClick={() => setShowSearch(false)}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p className="my-2 text-xl flex items-center gap-2">
            FILTERS
            <img
              src={assets.dropdown_icon}
              alt=""
              className="h-3 sm:hidden rotate-90 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </p>
          <div
            className={`${
              show ? "" : "hidden"
            } border border-gray-300 pl-5 py-3 mt-6  sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onClick={handleCategoryClick}
                  type="checkbox"
                  value="Men"
                  name="Men"
                  id=""
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  onClick={handleCategoryClick}
                  type="checkbox"
                  value="Women"
                  name="Women"
                  id=""
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  onClick={handleCategoryClick}
                  type="checkbox"
                  value="Kids"
                  name="Kids"
                  id=""
                />
                Kids
              </p>
            </div>
          </div>

          <div
            className={`${
              show ? "" : "hidden"
            } border border-gray-300 pl-5 py-3 mt-6 mb-6 sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onClick={handleTypeClick}
                  type="checkbox"
                  value="Topwear"
                  name="Topwear"
                  id=""
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  onClick={handleTypeClick}
                  type="checkbox"
                  value="Bottomwear"
                  name="Bottomwear"
                  id=""
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  onClick={handleTypeClick}
                  type="checkbox"
                  value="Winterwear"
                  name="Winterwear"
                  id=""
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                ALL
                <span className="text-gray-700 font-medium">COLLECTIONS</span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>

            <select
              className="h-11 border-2 border-gray-300 text-sm px-2"
              name=""
              id=""
              value={sortOption}
              onChange={handleChange}
            >
              <option value="relavent">Sort by: Relavent </option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {data.map((el) => {
              return <Card obj={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

// Filter products based on category and type
// useEffect(() => {
//   let productClone = [...products];
//   if (category.length > 0) {
//     let productsByCategory = productClone.filter((el) =>
//       category.includes(el.category)
//     );
//     if (subCategory.length > 0) {
//       setData(
//         productsByCategory.filter((el) =>
//           subCategory.includes(el.subCategory)
//         )
//       );
//     } else {
//       setData(productsByCategory);
//     }
//   } else {
//     if (subCategory.length > 0) {
//       setData(products.filter((el) => subCategory.includes(el.subCategory)));
//     } else {
//       setData(products);
//     }
//   }
// }, [category, subCategory]);
