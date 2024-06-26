import Link from 'next/link'
import Image from 'next/image'
import console from "../../../public/assets/console_icon.svg"

const Footer = () => {
  return (
    <div className='bg-[#11101D] flex flex-col items-center gap-[5px] text-[#FFF] w-full'>

        <div className='flex flex-col items-start justify-start gap-[27px] py-14 max-w-[1440px] mx-auto'>

            <div className='flex items-center justify-start gap-4'>
                <Image src={console} alt="footer_icon" />

                <h1 className='text-[30px] font-bold'>Game store</h1>
            </div>

            {/* container of three parts of footer */}
            <div className='flex flex-col items-start justify-center gap-9 md:flex-row gap-[80px] md:gap-[77px] lg:gap-[180px] '>
                {/* footer part 1 */}
                <div className='flex flex-col items-start justify-center gap-[39px]'>

                    <div className='flex flex-col items-start gap-2'>
                        <div className='text-[25px] font-bold'>Contact Us</div>
                        <div className='leading-[29px] text-[18px] font-normal'>You can contact Us<br/>to send email<br/> to us</div>
                    </div>

                    <div className='relative'>

                        <input className='py-[7px] pl-4 pr-2 rounded-full w-[250px] md:w-[300px] h-[46px]' type="text" placeholder='Your email' />

                        <svg className='absolute bg-[#0088DC] rounded-full bottom-[10px] right-[9px]' xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M3.64011 18.3004L5.58011 11.5904L3.64011 4.88037C3.40011 4.06037 4.24011 3.33037 5.02011 3.70037L20.1201 10.6904C20.8901 11.0504 20.8901 12.1504 20.1201 12.5004L5.02011 19.4904C4.24011 19.8504 3.40011 19.1304 3.64011 18.3004Z" stroke="#F5F5F5" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.58008 11.5908H10.3701" stroke="#F5F5F5" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                    <div className='flex flex-col items-start gap-[3px]'>
                        <div className='text-[14px] font-normal'>Follow us on:</div>
                        <div className='flex items-center justify-center gap-6'>
                            <Link href="">
                                <Image height={10} width={10} src={"/assets/facebook.svg"} alt="facebook" />
                            </Link>
                            <Link href="">
                                <Image height={20} width={20} src={"/assets/Twitter.svg"} alt="twitter" />
                            </Link>
                            <Link href="">
                                <Image height={20} width={20} src={"/assets/linkedin.svg"} alt="linkedin" />
                            </Link>
                            <Link href="">
                                <Image height={20} width={20} src={"/assets/instagram.svg"} alt="instagram" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* footer part 2 */}
                <div className='flex flex-col items-start justify-center gap-[17px] px-[1px] py-[2px]'>
                    <h1 className='text-[25px] font-bold'>Categories</h1>
                    <Link className='text-[18px] font-normal' href="/games/Featured">Featured</Link>
                    <Link className='text-[18px] font-normal' href="/games/Adventure">Adventure</Link>
                    <Link className='text-[18px] font-normal' href="/games/Sports">Sports</Link>
                    <Link className='text-[18px] font-normal' href="/games/Puzzle">Puzzle</Link>
                </div>

                {/* footer part 3 */}
                <div className='flex flex-col items-start justify-center gap-[17px] px-[1px] py-[2px]'>
                    <h1 className='text-[25px] font-bold'>Main</h1>
                    <Link className='text-[18px] font-normal' href="/">Home</Link>
                    <Link className='text-[18px] font-normal' href="/about-us">About Us</Link>
                    <Link className='text-[18px] font-normal' href="/privacy-policy">Privacy Policy</Link>
                    <Link className='text-[18px] font-normal' href="/contact-us">Contact Us</Link>
                </div>
            </div>

            {/* 3 parts end */}

        </div>

        <div className='text-[18px] font-normal py-[17px]'>
            Game store/ All rights reserved.
        </div>

    </div>
  );
};

export default Footer;