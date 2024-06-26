
import styles from "./game.module.css";

const data = [
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
];

const CategoryGames = ({category}) => {
  return (
    <div className="flex flex-col gap-[64px] px-[40px] py-[24px] max-w-[1444px] m-auto max-[700px]:gap-9 w-full">
      {/* <div class="text-[18px] font-semibold text-[#FEFEFE]">
        Home/<span class="text-[#15AEE3]">Privacy Policy</span>
      </div> */}

      <div
        className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center  `}
      >
        <div className="flex flex-col justify-center items-center   ">
          <p className="text-[35px] font-bold  px-[2px] md:text-[40px] leading-[48px] text-[#333333] text-center ">
            {category} Games
          </p>
        </div>
      </div>

      <div className="grid-container-game">
        {data.map((data) => {
          return (
            <div //card
              className="flex flex-col gap-4 relative w-[calc(100%/4)] min-w-[300px] max-[800px]:min-w-[164px]"
            >
              <img
                src={data.image}
                alt={data.name}
                className="h-[180px] rounded-[30px] max-[800px]:h-[114px] max-[800px]:rounded-[8px] z-0"
              />
              <h2 className="font-montserrat font-medium text-lg leading-[21.94px] text-[#FFFFFF] max-[800px]:text-base max-[800px]:leading-[28.8px] max-[800px]:tracking-[5%]">
                {data.name}
              </h2>
              <div className="w-11 h-11 rounded-[100px] bg-[#5744B899] flex items-center justify-center gap-2 absolute top-4 right-4 max-[800px]:w-6 max-[800px]:h-6 max-[800px]:top-2 max-[800px]:right-2">
                <img
                  src={"/assets/Vector.png"}
                  alt="heart image"
                  className="max-[800px]:w-4 max-[800px]:h-4"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryGames;
