
import FeaturedGames from "./featuredGames";
import SportGame from "./sportsGame";

function index() {
  return (
    <>
      <div className="bg-[#1F1F29] max-w-[1440px] mx-auto px-4 lg:px-16 py-6" >
        <div>
          <img
            src={"/assets/Frame16.png"}
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
          <FeaturedGames title={"Featured Games"} />

          <SportGame />
          <FeaturedGames title={"Featured Games"} />
        </div>
      </div>
    </>
  );
}

export default index;
