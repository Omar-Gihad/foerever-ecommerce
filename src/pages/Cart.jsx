import React from "react";
import Title from "../includes/Title";

const Cart = () => {
  return (
    <div className="border-t pt-5">
      <div className="flex justify-start">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div className="flex justify-end my-10">
        <div className="w-full sm:w-[450px]">
          <div className="w-full">
            <div className="flex mb-[-30px]">
              <Title text1="CART" text2="TOTALS" />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$ 0.00</p>
              </div>
              <div className="flex justify-between border-t">
                <p>Shipping Fee</p>
                <p>$ 10.00</p>
              </div>
              <div className="flex justify-between border-t">
                <b>Total</b>
                <b>$ 0.00</b>
              </div>
            </div>
          </div>

          <div className=" w-full text-end">
            <button className="bg-black text-white text-sm my-8 px-8 py-3">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
