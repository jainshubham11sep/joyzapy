import Link from "next/link";
import Image from "next/image";
import console from "../../../public/nextAssets/console_icon.svg";

const Footer = ({ gameCategories }) => {


  let main_links = [
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms and Conditions",
      link: "/terms-and-conditions",
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
          <div className="flex flex-col items-start justify-center gap-[25px]">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[25px] font-bold">Contact Us</div>
              <div className="leading-[29px] text-[18px] font-normal">
                You can contact Us
                <br />
                by sending an email
                <br /> to us on :
              </div>
            </div>

            <div className="relative">
              <p className="text-xl">admin@quizangomedia.com</p>
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
            <h1 className="text-[25px] font-bold">Main</h1>
            <Link
              className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
              href={"/"}
            >Home</Link>
            <Link
              className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
              href={"/about-us"}
            >About Us</Link>
            <Link
              className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
              href={"https://www.joyzapy.com/blog/"}
            >Blogs</Link>
            {/* {
              gameCategories
              .filter((category)=>category?.description)
              .slice(0,4)
              .map((category) => (
                <Link
                key={category?._id}
                  className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                  href={`/game/${category?.cat_name}`}
                >
                  {category?.cat_name}
                </Link>
              ))
            } */}



          </div>

          {/* footer part 3 */}
          <div className="flex flex-col items-start justify-center gap-[17px] px-[1px] py-[2px]">
            <h1 className="text-[25px] font-bold">
              Explore
            </h1>
            {main_links?.map((main, id) => (
              <Link
                className="text-[18px] font-normal transition-colors duration-300 hover:text-blue-500"
                href={main?.link}
                key={id.toString()}
                target={main?.title === "Blogs" ? "_blank" : ''}
              >
                {main?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-[18px] font-normal py-[17px] text-center">
        © 2024 Joyzapy Games. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
