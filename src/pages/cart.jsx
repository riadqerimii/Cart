import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);
  console.log(cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="max-w-3xl mx-auto">
      {cart && cart.length ? (
        <div className="flex flex-row">
          <div className="  grid-cols-2 mx-10">
            <div className="">
              {cart.map((carItem) => (
                <CartTile cartItem={carItem} />
              ))}
            </div>
          </div>
          <div className=" w-50 mx-auto justify-end   items-end h-15 bg-slate-200  p-5 ">
            <div className="flex flex-col justify-center items-center p-5  space-y-5 mt-14">
              <h1 className=" font-bold text-lg text-red-500 ">
                Your Cart Summary
              </h1>
              <p>
                <span className=" text-gray-400 font-bold"> Total Item</span>
                <span> {cart.length}</span>
              </p>
              <p>
                <span className=" text-gray-400 font-bold">Total Amount </span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h[80vh] flex flex-col items-center  justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-900 cursor:pointer hover:bg-red-600 duration-500 text-white border-2 rounded-lg font-bold p-3">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
