import Image from "next/image";
import { useRouter } from "next/navigation";

const GameCard = ({ data }) => {
  const router = useRouter()
  
  return (
    <div onClick={() => router.push('/game-details')}
      className="flex flex-col gap-4 relative w-[calc(100%/4)] min-w-[300px] max-[800px]:min-w-[164px] cursor-pointer"
    >
      <Image
      height={700}
      width={700}
        src={data.image}
        alt={data.name}
        className="h-[180px] rounded-[30px] max-[800px]:h-[114px] max-[800px]:rounded-[8px] z-0"
      />
      <h2 className="font-montserrat font-medium text-lg leading-[21.94px] text-[#FFFFFF] max-[800px]:text-base max-[800px]:leading-[28.8px] max-[800px]:tracking-[5%]">
        {data.name}
      </h2>
      <div className="w-11 h-11 rounded-[100px] bg-[#5744B899] flex items-center justify-center gap-2 absolute top-4 right-4 max-[800px]:w-6 max-[800px]:h-6 max-[800px]:top-2 max-[800px]:right-2">
        <Image
        width={25}
        height={25}
          src={"/assets/Vector.png"}
          alt="heart image"
          className="max-[800px]:w-4 max-[800px]:h-4"
        />
      </div>
    </div>
  );
};
export default GameCard;
