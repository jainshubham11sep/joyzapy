import React from "react";
import styles from "./about.module.css";

function AboutUS() {
  return (
    <>
      <div className="flex flex-col gap-[64px] px-5 min-[768px]:px-[20px] min-[1024px]:px-[64px] py-6 max-[550px]:px-4 max-[700px]:gap-9" style={{ flex: 3, marginRight: "auto", marginLeft: "auto", maxWidth: "1444px" }}>
        <div className="text-[18px] font-semibold text-[#FEFEFE]">
          Home/<span className="text-[#15AEE3]"> About Us </span>
        </div>

        <div
          className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center`}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold leading-[48px] text-[#333333]">
              About us{" "}
            </h1>
            <p className="text-[18px] font-normal leading-[32.4px] tracking-[0.8px]">
              Since 2020
            </p>
          </div>
        </div>
        <hr />
        <div className="pb-10">
          <p className=" text-white text-[16px] text-center font-normal leading-[28.8px] tracking-[0.8px]">
            Welcome to Quizango Media Private Limited, the proud creators of Puno Games, which can be found at <a className="font-bold text-blue-500" href="https://www.punogames.com/">punogames.com</a>. Puno Games is a product owned by Quizango Media Private Limited, and we specialize in developing cutting-edge HTML5 games. We are dedicated to creating exceptional gaming experiences by leveraging the latest technologies and industry trends.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Who We Are
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            Quizango Media Private Limited is home to a talented and experienced team of game developers and designers. Our team is passionate about crafting visually stunning and engaging HTML5 games for both mobile and web platforms. We aim to ensure an increased inflow of traffic and provide greater returns for our clients through top-quality gaming experiences.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Our Technology
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            We have chosen HTML5 as our primary game development technology because we believe it is the most suitable and widely used technology for web and mobile game development. The versatility and lightweight nature of HTML5 allow us to create games compatible across a broad range of devices. This cross-platform support ensures our games reach a wider audience and achieve optimal performance on various platforms, including Android, iOS, and the web.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Our Games
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            At Puno Games, we pride ourselves on our diverse portfolio of HTML5 games. Our offerings span multiple genres, including arcade, action, casual, sports, puzzles, and many more. Each game is meticulously crafted to provide an immersive and enjoyable experience for players of all ages. We focus on delivering games that are not only fun but also visually rich and engaging, ensuring players keep coming back for more.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Industries We Serve
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            Irrespective of the industry you are in, you can use our games for a variety of purposes. Whether you are searching for a user engagement tool or looking for ways to promote your brand uniquely, our games can be an ideal choice for you. Our games fulfill various business purposes, such as increasing brand awareness, boosting user engagement and conversion rates, increasing platform traffic, and above all, providing an amazing source of entertainment. With these benefits, we’ve successfully integrated our games on different platforms like eCommerce, real-money gaming apps, news platforms, wallet apps, and many more.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Our Mission
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            As an HTML5 game development company, we see the potential of HTML5 technology in bringing more revenue and user engagement to businesses. We want to help businesses like yours realize this potential by providing unparalleled HTML5 games for your platform. Our core mission is to integrate our games on various platforms such as eCommerce, telecom operators, and OTT platforms to enhance user engagement and drive higher revenues. Simultaneously, we focus on delivering an amazing experience to individuals who enjoy playing different games.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Partner with Us
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            If you are interested in licensing our HTML5 games for your business and making them available on your platform, we would love to hear from you. Partnering with Puno Games means gaining access to a wide range of high-quality games that can enhance your platform and attract more users.
          </p>
          <h2 className="text-white text-[24px] mt-10 text-left font-bold underline mb-4">
            Contact Us
          </h2>
          <p className=" text-white text-[16px] text-left font-normal leading-[28.8px] tracking-[0.8px]">
            For more information or to discuss licensing opportunities, please contact us at:<br />
            <span className="font-bold">Email:</span> <a className="text-blue-500" href="mailto:admin@quizangomedia.com">admin@quizangomedia.com</a><br />
            Thank you for considering Puno Games by Quizango Media Private Limited. <br />We look forward to the opportunity to work with you and bring exceptional gaming experiences to your audience.
          </p>
        </div>
      </div>
    </>
  );
}






export default AboutUS;
