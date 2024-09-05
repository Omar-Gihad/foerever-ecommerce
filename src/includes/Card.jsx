import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ obj }) => {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(`/products/${obj.id}`)}>
      <div className=" overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={obj.image[0]}
          alt=""
        />
      </div>
      <div>
        <p className="pt-3 pb-1 text-sm">{obj.title}</p>
        <p className=" text-sm font-medium">{obj.price} $</p>
      </div>
    </div>
  );
};

export default Card;
