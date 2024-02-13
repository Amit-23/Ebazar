import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const [reset, setReset] = useState(false);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotalAmt(price);
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
        alt="imge"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        {reset === false ? (
          <>
            <CartItem reset={reset} setReset={setReset} />
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                  Subtotal{" "}
                  <span className="font-titleFont font-bold text-lg">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center gap-4 text-base">
                  Shipping{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt, architecto!
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-xl font-bold">${totalAmt}</span>
              </p>
              <button
                onClick={handleCheckOut}
                className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500"
              >
                proceed to checkout
              </button>

              {payNow && (
                <div className="w-full mt-6 flex items-center justify-center">
                  <StripeCheckout stripeKey="pk_test_51OjHFsSFYKn9X0Z7iqZWAjQtLHsdGlTj0wfyUsgUeggB0cdBGSILC6w9WXTW7bFJ2g4fJVfo4g6DMbJy3O8p2drm00EnNbLs4Q" 
                  name="ECOMMERCE ONLINE SHOPPING"
                  description={`Your Payment amount is $${totalAmt}`}
                  // token={payNow}
                  email={userInfo.email}
                  
                  
                  
                  />
                </div>
              )}
            </div>{" "}
          </>
        ) : (
          <div className="flex justify-center items-center h-full w-full">
            <h2 className="text-red-500 font-bold font-xl">
              Cart is empty. Please go back to Shopping and add products to
              Cart.
            </h2>
            <Link to="/">
              <div className="flex justify-center items-center">
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                  <span>
                    <HiOutlineArrowLeft />
                  </span>
                  go shopping
                </button>
              </div>
            </Link>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
