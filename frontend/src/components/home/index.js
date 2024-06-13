import FeaturedGames from "./featuredGames";
import SportGame from "./sportsGame";

const imageData = [
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
];

const sportGameData = [
  { image: "/assets/sportsgames/1.png", name: "Smash karts" },
  { image: "/assets/sportsgames/2.png", name: "Smash karts" },
  { image: "/assets/sportsgames/3.png", name: "Smash karts" },
  { image: "/assets/sportsgames/4.png", name: "Smash karts" },
  { image: "/assets/sportsgames/5.png", name: "Smash karts" },
  { image: "/assets/sportsgames/6.png", name: "Smash karts" },
];

function index() {
  return (
    <>
      <div
        className="bg-[#1F1F29] px-4 lg:px-16 py-6 w-[80%]"
        style={{ flex: 3 }}
      >
        <div>
          <div className="containerRight">
            <img
              src={"/assets/Frame 166.png"}
              alt="image"
              className="hidden min-[600px]:block"
            />
            <img
              src={"/assets/Frame 17.png"}
              alt="image"
              className="hidden max-[600px]:block w-full"
            />
          </div>
          <div className="flex flex-col gap-16 max-[600px]:gap-8 mt-16 mb-4 lg:mb-16">
            <FeaturedGames title={"Featured Games"} data={imageData} />

            <SportGame data={sportGameData} />
            <FeaturedGames title={"Featured Games"} data={imageData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
