import React, { useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useParams } from "react-router-dom";
import RealtedProducts from "../components/RealtedProducts";
import { searchContext } from "../App";

const ProductInfo = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { product, setProduct } = useContext(searchContext);
  const { productSize, setProductSize } = useContext(searchContext);
  const { cartItems, setCartItems } = useContext(searchContext);
  const { cartNumber, setCartNumber } = useContext(searchContext);

  const { id } = useParams();
  useEffect(() => {
    const product = products.find((item) => item.id === id);
    if (product) setProduct(product);
  }, [id]);

  function handleImageClick(index) {
    setImageIndex(index);
  }

  function handleSizeClick(size) {
    setProductSize(size);
  }

  function handleAddToCart() {
    if (product && productSize) {
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === product.id && item.size === productSize
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update the count
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].count += 1;
        setCartItems(updatedCartItems);
      } else {
        // Otherwise, add a new item to the cart
        setCartItems([
          ...cartItems,
          { ...product, size: productSize, count: 1 },
        ]);
      }
    } else {
      alert("Please select a size");
    }
  }

  useEffect(() => {
    const cartCount = cartItems?.reduce((acc, el) => {
      return (acc += el.count);
    }, 0);

    setCartNumber(cartCount);
  }, [cartItems]);

  return (
    <>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product photo */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col sm:w-[20%] w-full">
              {product.image?.map((el, index) => {
                return (
                  <img
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                    src={el}
                    alt=""
                    key={index}
                    onClick={() => handleImageClick(index)}
                  />
                );
              })}
            </div>

            {/* product details */}
            <div className="w-full sm:w-[80%]">
              <img
                className="w-full h-auto"
                src={
                  product.image?.length
                    ? product.image[imageIndex]
                    : product.image
                }
                alt=""
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{product.title}</h1>
            <p className="mt-5 text-3xl font-medium">${product.price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>

            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {product.sizes?.map((el, index) => (
                  <button
                    className="border focus:border-orange-600 py-2 px-4 bg-gray-100 "
                    key={index}
                    // value={productSize}
                    onClick={() => handleSizeClick(el)}
                  >
                    {el}
                  </button>
                ))}
              </div>

              <button
                className="bg-black text-white px-8 py-3 font-medium text-sm active:bg-gray-700 w-40"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <hr className="mt-8 sm:w-4/5" />

              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Reviews */}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>

          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>
        <div className="my-24">
          <RealtedProducts />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
