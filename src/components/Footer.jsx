import React from "react";
import eBazaar from "../assets/eBazaar.png";
import upi from "../assets/upi.png";
import paytm from "../assets/paytm.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div>
          <img className="bg-white" src={eBazaar} alt="" />
          <p className="text-white text-sm tracking-wide mt-8">@ ReactAD.com</p>
          <div className="flex">
            <img className="mt-5 w-20 h-10" src={upi} alt="" />
            <img className="w-20" src={paytm} alt="" />
          </div>
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        {/* <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2> */}

        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <p>Amit, Jammu-India</p>
          <p>Mobile:97-0011223344</p>
          <p>Phone:97-0011223344</p>
          <p>E-Mail:amitsanghalsingh@gmail.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>

          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              help & support
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <input type="text"
          className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>

        </div>
      </div>
    </div>
  );
};

export default Footer;
