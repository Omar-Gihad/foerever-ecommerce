import React, { useContext, useEffect } from "react";
import Title from "../includes/Title";
import { searchContext } from "../App";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(searchContext);
  const { cartNumber, setCartNumber } = useContext(searchContext);

  // Calculate subtotal based on count
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  // Handle remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove item at index
    setCartItems(updatedCartItems); // Update cartItems state
  };

  // Handle item count change
  const handleCountChange = (index, newCount) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count = newCount;
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const cartCount = cartItems?.reduce((acc, el) => {
      return (acc += el.count);
    }, 0);

    setCartNumber(cartCount);
  }, [cartItems]);

  // Shipping fee
  const shippingFee = 10.0;

  // Calculate total
  const total = subtotal + shippingFee;

  return (
    <div className="border-t pt-5">
      <div className="flex justify-start">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Items */}
      {cartItems?.length > 0 ? (
        cartItems.map((el, index) => (
          <div
            className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            key={index}
          >
            <div className=" flex items-start gap-6">
              <img className="w-16 sm:w-20" src={el.image[0]} alt="" />

              <div>
                <p className="text-xs sm:text-lg font-medium">{el.title}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>${el.price}</p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    {el.size}
                  </p>
                </div>
              </div>
            </div>

            {/* Input field for item count */}
            <input
              type="number"
              min="1"
              value={el.count}
              onChange={(e) =>
                handleCountChange(index, parseInt(e.target.value))
              }
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
            />
            <img
              src={assets.bin_icon}
              alt=""
              className="w-5 cursor-pointer ml-auto"
              onClick={() => handleRemoveItem(index)}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {/* Cart Totals */}
      {cartItems?.length > 0 && (
        <div className="flex justify-end my-10">
          <div className="w-full sm:w-[450px]">
            <div className="w-full">
              <div className="flex mb-[-30px]">
                <Title text1="CART" text2="TOTALS" />
              </div>
              <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between border-t">
                  <p>Shipping Fee</p>
                  <p>${shippingFee.toFixed(2)}</p>
                </div>
                <div className="flex justify-between border-t">
                  <b>Total</b>
                  <b>${total.toFixed(2)}</b>
                </div>
              </div>
            </div>

            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
