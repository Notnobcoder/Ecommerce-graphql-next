import Image from "next/image";

type SliderProps = {};

export const Slider: React.FC<SliderProps> = () => {
  return (
    <div className="relative">
      <Image
        alt="root image"
        src={"/home/phonePlaceholder.png"}
        width={199}
        height={600}
        className="w-full h-[456px] "
      />
      <div className="absolute top-10 px-6 left-0">
        <h4 className="text-3xl">AirNags®</h4>
        <p className="mt-5 text-sm text-grayNew">
          Keep your everyday style chic and on-trend with our selection 20+
          styles to choose from.
        </p>
        <div className="mt-4">
          <p className="">See collection</p>
        </div>
      </div>
    </div>
  );
};
