import React, { useEffect, useState } from "react";
import Title from "../includes/Title";
import { products } from "../assets/frontend_assets/assets";
import Card from "../includes/Card";
import { useParams } from "react-router-dom";

const RealtedProducts = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const product = products.find((item) => item.id === id);
    const relatedProducts = products.filter(
      (el) =>
        el.subCategory === product.subCategory &&
        el.category === product.category
    );
    relatedProducts.splice(relatedProducts.indexOf(product), 1);
    setData(relatedProducts.slice(0, 5));
  }, [id]);

  return (
    <>
      <div>
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {data.map((el) => {
          return <Card obj={el} key={el.id} />;
        })}
      </div>
    </>
  );
};

export default RealtedProducts;
