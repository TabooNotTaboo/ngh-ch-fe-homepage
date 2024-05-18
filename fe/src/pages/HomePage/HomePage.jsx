import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="w-7 h-7">
        <h1><br /></h1>
      </div>
      <div className="pl-4 grid grid-cols-5 gap-4">
        <div className="pl-20 pt-9 col-span-3">
          <p className="font-manjari text-gray-500 text-20px leading-tight">Stunning bag by</p>
          <h1 className="font-manjari text-black  text-60px leading-tight">OUR DESIGN TEAM</h1>
        </div>
        <div className="pr-20 pt-9 text-black col-span-2">
          <p className="font-manjari text-50px leading-tight">Let's</p>
          <h1 className="font-manjari text-50px leading-tight">MAKE YOUR TOTE</h1>
        </div>
      </div>

      <div className="flex justify-center space-x-4 bg-customGreen h-20 border-2 border-customBlue">
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Tote bag by yourself
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Express yourself
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Customizable
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Unique design
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Oversize is key feature
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Colorful and trendy
        </button>
      </div>

      <div className="flex">
        <img
          className="relative h-full w-full object-cover"
          alt="19"
          src="/image 19.png"
        />
        <img
          className="relative h-full w-full object-cover"
          alt="20"
          src="/image 20.png"
        />
      </div>
      {/*phần bảng màu đen*/}
      <div className="bg-black">
        <div className="pl-10 pt-20 pb-5 border-b border-customBlue">
          <p className="font-manjari text-gray-500 text-40px leading-tight">About</p>
          <h1 className="font-manjari text-white text-50px leading-tight">OUR AMBITION</h1>
        </div>
        <div className=" flex">
          <img
            className="relative h-50 w-50 object-cover pt-10 pl-7 pb-20"
            alt="a"
            src="/image a.png"
          />
          <div className="mt-52 ml-7 mr-7 border border-customBlue rounded-lg w-50 h-fit">
            <div className="border-b border-customBlue p-4">
              <p className="font-manjari text-white text-40px leading-tight mb-2"><FontAwesomeIcon icon={faStar} className="mr-2" /> Who are we?</p>
              <h1 className="font-manjari mb-5 text-gray_2 text-16px leading-tight"> "nghịch" brings you a website platform where you have the creative freedom to design and customize your unique personal bag. Our website helps you choose from various options, allowing you to select colors, patterns, and styles that reflect your individuality.</h1>
            </div>
            <div className="pb-2 p-4">
              <p className="font-manjari text-white text-40px leading-tight mb-2"><FontAwesomeIcon icon={faStar} className="mr-2" /> Why are we different?</p>
              <h1 className="font-manjari text-gray_2 text-16px leading-tight"> Among countless products on the market, finding a place for yourself is really difficult. We understand that, if you don't really stand out at something, how can you become more stand out? We too, in a fierce market with millions of products, to become your choice we must become very unique. What is unique to us is unique to you.</h1>
              <h2 className="font-manjari text-gray_2 text-16px leading-tight mt-5"> nghịch team</h2>
            </div>
          </div>
        </div>
      </div>

      {/*phần bảng màu xanh*/}
      <div className="bg-customGreen px-60 py-10  ">
        <div className="border-b border-gray_2">
          <p className="font-manjari text-black_2 text-16px leading-tight mb-2">SERVICES</p>
          <h1 className="font-manjari mb-5 text-black text-40px leading-tight"> MY PHOTOGRAPHY SERVICES</h1>
        </div>
        <div className="flex">
          <div className="mt-20 mr-5 ">
            <p className="font-manjari text-black text-25px leading-tight mb-2"> DESIGN YOUR OWN BAGs</p>
            <br />
            <h1 className="font-manjari mb-5 text-gray_2 text-16px leading-tight"> The most special thing about Ngai is that it gives you the most comfort in designing your bag. If you don't have too much time, we are ready to help you.  This sleek and streamlined tote features a compartment with a secure zipper closure to keep your belongings safe. The interior divider helps you organize your essentials, while the external pocket is perfect for quick-access items like your phone or wallet. The sturdy cotton canvas construction ensures durability, making it your ideal everyday companion.</h1>
            <h2 className="font-manjari mb-5 text-gray_2 text-16px leading-tight">As I ladle this soup into bowls, I remember my dad’s hands, weathered and gentle. He’d sit by the fire, cradling his bowl, savoring each spoonful. No frills, no fuss—just warmth, memories, and love.
              So when winter knocks, and the wind rattles the shutters, I reach for the old recipe card. The potatoes yield, the onions soften, and I’m transported—to that farmhouse, to Dad’s smile, to the heart of simple old-fashioned potato soup.</h2>
          </div>
          <img
            className="relative h-50 w-50 object-cover m-20"
            alt="b"
            src="/image b.png"
          />
        </div>
        <div className="flex">
          <div className="flex-1 mr-4">
            <h1 className="font-manjari mb-5 text-black text-25px leading-tight">Service Highlights</h1>
            <p className="font-manjari text-black_2 text-16px leading-tight bg-white p-2 mb-2 inline-block w-full">CUSTOMIZE YOUR OWN TOTE</p>
            <br />
            <p className="font-manjari text-black_2 text-16px leading-tight bg-white p-2 mb-2 inline-block w-full">PRINT IN YOUR BAG</p>
            <br />
            <p className="font-manjari text-black_2 text-16px leading-tight bg-white p-2 mb-2 inline-block w-full">DESIGN WHAT YOU REALLY WANT FOR YOURSELF</p>
            <br />
            <p className="font-manjari text-black_2 text-16px leading-tight bg-white p-2 mb-2 inline-block w-full">SOMETHING BIG MIGHT GET ATTENTION!!!</p>
          </div>
          <div className="flex-1">
            <p className="font-manjari text-black_2 text-16px leading-tight bg-green_2 p-2 mb-2 inline-block w-full h-full">
              The most special thing about Ngai is that it gives you the most comfort in designing your bag. If you don't have too much time, we are ready to help you. This sleek and streamlined tote features a compartment with a secure zipper closure to keep your belongings safe. The interior divider helps you organize your essentials, while the external pocket is perfect for quick-access items like your phone or wallet. The sturdy cotton canvas construction ensures durability, making it your ideal everyday companion.
              <br /><br />
              As I ladle this soup into bowls, I remember my dad’s hands, weathered and gentle. He’d sit by the fire, cradling his bowl, savoring each spoonful. No frills, no fuss—just warmth, memories, and love. So when winter knocks, and the wind rattles the shutters, I reach for the old recipe card. The potatoes yield, the onions soften, and I’m transported—to that farmhouse, to Dad’s smile, to the heart of simple old-fashioned potato soup.
            </p>
          </div>
        </div>

        <div className="mt-20 mb-44">
          <div className="border-b border-gray_2 ">
            <p className="font-manjari text-gray_2 text-25px leading-tight mb-2">CUSTOM AS YOU LIKE</p>
            <h1 className="font-manjari mb-5 text-white text-40px leading-tight"> EXPLORE MY PHOTOGRAPHY WORK</h1>
          </div>
          <div>
            <div className="flex justify-between gap-4 p-4 mt-5">
              <div className="flex-1 text-center p-4 border border-black rounded-md">
                <img
                  className="relative h-50 w-50 object-cover rounded-md "
                  alt="c"
                  src="/image c.png"
                />
                <div className="flex justify-between p-4">
                  <div>
                    <p className="text-left text-black text-14px mb-0">Faces of Resilience</p>
                    <p className="text-left text-gray_2 text-12px mt-0">March 2022</p>

                  </div>
                  <Link to="/project" className="text-right text-14px underline text-black">VIEW PROJECT</Link>
                </div>
              </div>

              <div className="flex-1 text-center p-4 border border-black rounded-md">
                <img
                  className="relative h-50 w-50 object-cover rounded-md"
                  alt="d"
                  src="/image d.png"
                />
                <div className="flex justify-between p-4">
                  <div>
                    <p className="text-left text-black text-14px mb-0">A Wedding Tale</p>
                    <p className="text-left text-gray_2 text-12px mt-0">January 2020</p>

                  </div>
                  <Link to="/project" className="text-right text-14px underline text-black">VIEW PROJECT</Link>
                </div>
              </div>

              <div className="flex-1 text-center p-4 border border-black rounded-md">
                <img
                  className="relative h-50 w-50 object-cover rounded-md"
                  alt="e"
                  src="/image e.png"
                />
                <div className="flex justify-between p-4">
                  <div>
                    <p className="text-left text-black text-14px mb-0">Product Elegance</p>
                    <p className="text-left text-gray_2 text-12px mt-0">January 2020</p>

                  </div>
                  <Link to="/project" className="text-right text-14px underline text-black">VIEW PROJECT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*phần bảng màu trắng*/}
      <div className="bg-white px-60 py-10  ">
        <div className="mt-40 flex">
          <div className="flex-1 p-4 ">
            {/* Nội dung cột bên trái */}
            <div>
              <h1 className="text-25px text-pink_1">CUSTOM DESIGN OPTIONS:</h1>
              <br />
              <p className="text-14px text-black">PERSONALIZATION:</p>
              <p className="text-12px text-gray_2">Allow customers to add their own photos, artwork, or text to the tote bag. Personalized designs make the bag unique and meaningful.</p>
              <br />
              <p className="text-14px text-black">COLOR CHOICES:</p>
              <p className="text-12px text-gray_2">Offer a range of colors for the bag itself and any design elements.</p>
              <br />
              <p className="text-14px text-black">TYPOGRAPHY:</p>
              <p className="text-12px text-gray_2"> Let customers choose fonts and add custom text (names, quotes, slogans).</p>
              <br />
              <p className="text-14px text-black">GRAPHICS AND ICONS:</p>
              <p className="text-12px text-gray_2"> Durable Materials: Use high-quality materials like cotton canvas or eco-friendly fabrics.<br/>
                Sturdy Construction: Reinforce seams and handles to ensure the bag lasts.<br/>
                Print Quality: Ensure crisp and vibrant printing for the custom designs.</p>
            </div>
            <div>
              <h1 className="text-25px text-pink_1 mt-20">MAKETING AND BRANDING SERVICES:</h1>
              <br />
              <p className="text-14px text-black">CUSTOM PAINTING:</p>
              <p className="text-12px text-gray_2">Handle the printing process for customers. They provide the design, and you take care of the rest</p>
              <br />
              <p className="text-14px text-black">CUSTOM EMBROIDERY:</p>
              <p className="text-12px text-gray_2">Embroider logos, names, or intricate designs for a premium look2.</p>
              <br />
              <p className="text-14px text-black">PROMOTION PRODUCTS:</p>
              <p className="text-12px text-gray_2"> Create branded tote bags for businesses to use as giveaways or promotional items.</p>
              <br />
              <p className="text-14px text-black">PERSONALIZED GIFTS:</p>
              <p className="text-12px text-gray_2">Design custom tote bags for special occasions (birthdays, weddings, etc.).</p>
              <br />
              <p className="text-14px text-black">DELIVERY AND SATISFACTION GUARANTEE:</p>
              <p className="text-12px text-gray_2">Free Shipping: Offer free standard shipping to encourage orders.<br />
                Express Delivery: Provide faster shipping options for those in a hurry.<br/>
                Customer Happiness Guarantee: Assure customers that you’ll address any issues with their order.</p>
            </div>
          </div>
          <div className="flex-1 p-4 ml-10">
            {/* Nội dung cột bên phải */}
            <div>
              <h1 className="text-25px text-pink_1">MATERIAL AND QUALITY:</h1>
              <br />
              <p className="text-14px text-black">DURABLE MATERIALS:</p>
              <p className="text-12px text-gray_2">Use high-quality materials like cotton canvas or eco-friendly fabrics.</p>
              <br />
              <p className="text-14px text-black">STURDY CONSTRUCTION:</p>
              <p className="text-12px text-gray_2"> Reinforce seams and handles to ensure the bag lasts.</p>
              <br />
              <p className="text-14px text-black">PRINT QUALITY:</p>
              <p className="text-12px text-gray_2"> Ensure crisp and vibrant printing for the custom designs.</p>
            </div>
            <div>
              <h1 className="text-25px text-pink_1">ADDITIONAL FEATURE:</h1>
              <br />
              <p className="text-14px text-black">INNER POCKETS:</p>
              <p className="text-12px text-gray_2">Include pockets for organization.</p>
              <br />
              <p className="text-14px text-black">LINING:</p>
              <p className="text-12px text-gray_2"> Consider adding a lining for extra durability and style.</p>
              <br />
              <p className="text-14px text-black">CLOSURE OPTIONS:</p>
              <p className="text-12px text-gray_2"> Offer zippers, snaps, or open-top designs.</p>
            </div>
            <div className="mt-20">
            <p className="text-12px text-gray_2"> Remember, the key is to align your services with your brand’s identity and the preferences of your target audience. Whether it’s functional features, customization, or eco-conscious materials, make sure your tote bags stand out!</p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray_2">
        <div className="pt-20">
          <p className="font-manjari text-gray-500 text-14px leading-tight">TESTIMONIALS</p>
          <h1 className="font-manjari text-black  text-40px leading-tight">BELOVED CLIENTS SAID ABOUT US</h1>
        </div>
        <div className="pt-10 mb-20">
          <p className="font-manjari text-gray-500 text-12px leading-tight">Total Reviews</p>
          <h1 className="font-manjari text-black  text-25px leading-tight">323</h1>
        </div>
        <div>
        
        </div>
        </div>
        <div>
            <div className="flex justify-between gap-4 p-4 mt-5">
              <div className="flex-1 text-center p-4 ">
                <img
                  className="relative h-50 w-50 object-cover rounded-md "
                  alt="1"
                  src="/cmt 1.png"
                />
              </div>

              <div className="flex-1 text-center p-4 ">
                <img
                  className="relative h-50 w-50 object-cover rounded-md"
                  alt="2"
                  src="/cmt 2.png"
                />
              </div>

              <div className="flex-1 text-center p-4">
                <img
                  className="relative h-50 w-50 object-cover rounded-md"
                  alt="3"
                  src="/cmt 3.png"
                />
              </div>
            </div>
          </div>
      </div>

      <div className="flex justify-end pb-10 pt-10 pr-28 ">
        <img
          className="relative h-30 w-40 object-cover"
          alt="Logo copy"
          src="/logo_nghich.png"
        />
      </div>

      <div className="mb-8 flex justify-center space-x-4 bg-customGreen h-20 border-2 border-customBlue">
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Tote bag by yourself
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Express yourself
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Customizable
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Unique design
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Oversize is key feature
        </button>
        <button className="px-4 py-2 font-manjari text-customBlue rounded">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Colorful and trendy
        </button>
      </div>
    </div>
  );
};

export default HomePage;
