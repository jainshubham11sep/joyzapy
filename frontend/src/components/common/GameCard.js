import Image from "next/image";
import { useRouter } from "next/navigation";

const GameCard = ({ data }) => {
  const router = useRouter()
  const fallbackImage = 'https://www.punogames.com/assets/test_game_party/featured_img/featured_img-1721440575527.jpg'

  console.log(data,"catdatadata")
  return (
    <div onClick={() => router.push(`/${data?.game_name}`)}
      className="flex flex-col gap-4 relative w-[calc(100%/4)] min-w-[300px] max-[800px]:min-w-[164px] cursor-pointer max-[400px]:min-w-[140px]"
    >
      <Image
        height={700}
        width={700}
        src={data?.featured_img ? `https://www.punogames.com/assets${data?.featured_img}` : fallbackImage}
        alt={data?.game_name}
        className="h-[180px] rounded-[30px] max-[800px]:h-[114px] max-[800px]:rounded-[8px] z-0"
      />
      <h2 className="font-montserrat font-medium text-lg leading-[21.94px] text-[#FFFFFF] max-[800px]:text-base max-[800px]:leading-[28.8px] max-[800px]:tracking-[5%]">
        {data?.game_name}
      </h2>
    </div>
  );
};
export default GameCard;
