import React, { useEffect, useState } from "react";
import Title from "../includes/Title";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import Card from "../includes/Card";

const BestSellers = () => {
  const [data, setData] = useState([]);
  // const nav = useNavigate();
  useEffect(() => {
    setData(products.slice(24, 29));
  }, []);

  return (
    <>
      <div>
        <Title
          text1="BEST"
          text2="SELLERS"
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {data.map((el) => {
          return <Card obj={el} key={el.id} />;
        })}
      </div>
    </>
  );
};

export default BestSellers;
