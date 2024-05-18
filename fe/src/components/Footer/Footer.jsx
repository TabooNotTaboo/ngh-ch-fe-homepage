import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
    <div className=" bg-white_1 px-60 py-4 text-black !font-poppins ">
      <div className="flex justify-between items-center py-7 px-4  bg-white">
        <div className="flex flex-col items-start p-6  border-l border-gray_2 w-2/5">
          <p className="font-medium ml-0 text-gray-500 pb-8 text-16px">A more meaningful home for photography</p>
          <div className="text-black ml-0">
            <p className="font-manjari text-40px leading-tight">Let's</p>
            <h1 className="font-manjari text-40px leading-tight">MAKE YOUR TOTE</h1>
          </div>
        </div>

        <div className="flex gap-12 font-semibold w-3/5 justify-center ml-0 border-l border-r border-gray_2">
          <div className="flex flex-col items-start">
            <Link className="text-left pb-3 text-gray-500">Home</Link>
            <div className="flex flex-col gap-2 mt-2">
              <button className="btn text-left underline">About</button>
              <button className="btn text-left underline">Services</button>
              <button className="btn text-left underline">Testimonials</button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Link className="text-left pb-3 text-gray-500">Product</Link>
            <div className="flex flex-col gap-2 mt-2">
              <button className="btn text-left underline">Form</button>
              <button className="btn text-left underline">Artwork</button>
              <button className="btn text-left underline">Text</button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Link className="text-left pb-3 text-gray-500">Custom</Link>
            <div className="flex flex-col gap-2 mt-2">
              <button className="btn text-left underline">Just in</button>
              <button className="btn text-left underline">Collection</button>
              <button className="btn text-left underline">Classify</button>
              <button className="btn text-left underline">Best seller</button>
              <button className="btn text-left underline">Latest articles</button>
              <button className="btn text-left underline">Newspeed</button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Link className="text-left pb-3 text-gray-500">Contact Us</Link>
            <div className="flex flex-col gap-2 mt-2">
              <button className="btn text-left underline">Store</button>
              <button className="btn text-left underline">Phone</button>
              <button className="btn text-left underline">Email</button>
              <button className="btn text-left underline">Message</button>
            </div>
          </div>
        </div>

      </div>
      

    </div>
    <div className="flex justify-between items-center px-60 py-10 border-t border-gray_2 bg-pink_1">
        <div className="flex gap-6">
          <Link className="font-bold">Privacy Policy</Link>
          <p>|</p>
          <Link className="font-bold">Terms of Use</Link>
        </div>
        <p className="text-green_1">
          Copyright © 2023 nghịch. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
