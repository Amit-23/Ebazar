import React from "react";
import eBazaar from "../assets/eBazaar.png";
import user from "../assets/user.png";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);


  return (
    <div className="w-full h-30 bg-white  border-b-[1px] border-b-gray-600 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between font-titleFont">
        <Link>
          <div>
            <img
              className="w-28 h-20 object-contain"
              src={eBazaar}
              alt="LOGO"
            />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline hover:underline-offset-2 decoration-[2px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[2px] cursor-pointer">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className=" relative w-7 h-12">
              <LiaShoppingBagSolid className="w-full h-full" />
              <span className="absolute w-6 top-4 left-0.5 right-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img className="w-8 h-8 rounded-full" src={
              userInfo?userInfo.image : user
            } alt="user" />
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
