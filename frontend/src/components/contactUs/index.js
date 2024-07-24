import Form from "./form";
import styles from "./contact.module.css";

function index() {

  
  return (
    <>
      <div className="bg-[#1F1F29] flex flex-col gap-16 max-[700px]:gap-9  w-full max-w-[1440px] mx-auto px-5 min-[768px]:px-[20px] min-[1024px]:pl-[64px] min-[1024px]:pr-[69px] py-6 max-[550px]:px-4">
        <div className="text-[18px] font-semibold text-[#FEFEFE]">
          Home/<span className="text-[#15AEE3]"> Contact Us </span>
        </div>

        <div className="flex flex-col gap-16">
          <div
            className={`h-[152px] ${styles.background}  bg-center bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center`}
          >
            <h2 className="font-montserrat font-bold text-[40px] leading-[48px] text-[#333333]">
              Contact Us
            </h2>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}

export default index;
