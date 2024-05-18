import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "./Header.css";
import { mdiTicket } from '@mdi/js';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="relative w-full">
      <div className="w-full bg-pink_1 text-center py-[8px]">
        <span className="text-sm text-white font-medium flex items-center justify-center">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d={mdiTicket} />
          </svg>
          30% off storewide — Limited time!
          <Link to="/shop" className="text-white underline flex items-center p-2">
            Shop Now!!
            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        </span>
      </div>
      <div className="flex w-full items-center justify-between px-[160px] py-[16px] bg-pink_1">
        <Link to="/">
          <img
            className="relative w-[98px] h-[37px] object-cover"
            alt="Logo copy"
            src="/logo_nghich.png"
          />
        </Link>

        <div className="flex gap-20">
          <Link to="/" className="text-gray_2 font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gray_2 font-medium">
            Product
          </Link>
          <Link to="/custom" className="text-gray_2 font-medium">
            Custom
          </Link>
          <Link to="/contact" className="text-gray_2 font-medium">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link className="h-5 w-5">
            <img
              alt="search"
              className="w-full h-full"
              src="images/search_icon.png"
            />
          </Link>
          {isLogin ? (
            <>
              <Link className="h-6 w-6 flex items-center justify-center border border-black rounded-full">
                <FontAwesomeIcon
                  size="1x"
                  className="text-black"
                  icon={faUser}
                />
              </Link>
              <Link className="h-6 flex items-center">
                <img
                  alt="cart"
                  className="inline-block w-6 h-full mr-1"
                  src="images/cart_icon.png"
                />
                <span className="text-xs border border-black rounded-full bg-black text-white w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </Link>
            </>
          ) : (
            <Link to="/login" className="text-gray_2 font-medium">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
