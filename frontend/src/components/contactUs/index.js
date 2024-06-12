import Form from "./form";
import styles from "./contact.module.css"

function index() {
  return (
    <>
      <div className="bg-[#1F1F29] flex flex-col gap-16 max-[700px]:gap-9 mt-[90px] max-w-[1440px] mx-auto" >
        <div className="flex flex-col gap-16">
          <div className={`h-[152px] ${styles.background}  bg-center bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center`}>
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

