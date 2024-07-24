import Link from "next/link";
import Image from "next/image";
import console from "../../../public/nextAssets/console_icon.svg";

const Footer = () => {
  
  let main_links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="bg-[#11101D] flex flex-col items-center gap-[5px] text-[#FFF] w-full">
      <div className="flex flex-col items-start justify-start gap-[27px] py-14 max-w-[1440px] mx-auto">
        

        <div>
          <Image
            height={150}
            width={150}
            className="self-center pt-1"
            src={"/nextAssets/Full logo White.png"}
            alt="header-console"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-9 md:flex-row gap-[80px] md:gap-[77px] lg:gap-[180px] ">
          <div className="flex flex-col items-start justify-center gap-[39px]">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[25px] font-bold">Contact Us</div>
              <div className="leading-[29px] text-[18px] font-normal">
                You can contact Us
                <br />
                by sending an email
                <br /> to us on
              </div>
            </div>

            <div className="relative">
              <input
                className="py-[7px] pl-4 pr-2 rounded-full w-[250px] md:w-[300px] h-[46px] text-[#000]"
                type="text"
                placeholder="contact@punogames.com"
                disabled
              />

              <svg
                className="absolute bg-[#0088DC] rounded-full bottom-[10px] right-[9px]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.64011 18.3004L5.58011 11.5904L3.64011 4.88037C3.40011 4.06037 4.24011 3.33037 5.02011 3.70037L20.1201 10.6904C20.8901 11.0504 20.8901 12.1504 20.1201 12.5004L5.02011 19.4904C4.24011 19.8504 3.40011 19.1304 3.64011 18.3004Z"
                  stroke="#F5F5F5"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.58008 11.5908H10.3701"
                  stroke="#F5F5F5"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col items-start gap-[3px]">
              <div className="text-[14px] font-normal">Follow us on:</div>
              <div className="flex items-center justify-center gap-6">
                <Link href="#">
                  <Image
                    height={10}
                    width={10}
                    src={"/nextAssets/facebook.svg"}
                    alt="facebook"
                  />
                </Link>
                <Link href="#">
                  <Image
                    height={20}
                    width={20}
                    src={"/nextAssets/Twitter.svg"}
                    alt="twitter"
                  />
                </Link>
                <Link href="#">
                  <Image
                    height={20}
                    width={20}
                    src={"/nextAssets/linkedin.svg"}
                    alt="linkedin"
                  />
                </Link>
                <Link href="#">
                  <Image
                    height={20}
                    width={20}
                    src={"/nextAssets/instagram.svg"}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* footer part 2 */}
          <div className="flex flex-col items-start justify-center gap-[17px] px-[1px] py-[2px]">
            <h1 className="text-[25px] font-bold">Categories</h1>
            
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={"/game/featured"}  
              >
                Featured
              </Link>
      
      {/* link: "/game/adventure",
      categoryId:"66987d17dec4bed4fb6bf8e0" */}

      {/* link: "/game/action",
      categoryId:"66965fc66845f70cb600d44c" */}
    
      {/* link: "/game/thriller",
      categoryId:"6698a1ea673e42caf98382ce" */}
    
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={"/game/adventure/"}  
              >
                Adventure
              </Link>
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={"/game/action"}  
              >
                Action
              </Link>
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={"/game/thriller"}  
              >
                Thriller
              </Link>
            
          </div>

          {/* footer part 3 */}
          <div className="flex flex-col items-start justify-center gap-[17px] px-[1px] py-[2px]">
            <h1 className="text-[25px] font-bold">
              Main
            </h1>
            {main_links?.map((main, id) => (
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={main?.link}
                key={id.toString()}
              >
                {main?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-[18px] font-normal py-[17px]">
        Game store/ All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
