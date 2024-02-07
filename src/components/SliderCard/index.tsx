import Image from "next/image";

type CardProps = {};

export const SliderCard: React.FC<CardProps> = () => {
  return (
    <div className="relative w-[300px]">
      <Image
        src={"/home/phonePlaceholder.png"}
        width={282}
        height={330}
        alt="card component"
        className="w-[282px] h-[330px]"
      />
      <div className="absolute bottom-3 left-24">
        <h4>Aero Drive</h4>
      </div>
    </div>
  );
};
