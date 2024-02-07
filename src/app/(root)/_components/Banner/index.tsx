import Image from "next/image";

type BannerProps = {};

export const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="py-6">
      <div className="py-8 px-4 bg-[#FAFAFB] ">
        <h4 className="text-2xl">RUN SMART+</h4>
        <p className="text-sm mt-2 ">
          Phosfluor escently engage worldwide with web-enabled technology.
        </p>
        <div className="mt-4">
          <h5>Shop Now</h5>
        </div>
      </div>
      <div>
        <Image
          src={"/home/Elements/PasteImage.png"}
          width={200}
          height={200}
          alt="bannner image"
          className="w-full"
        />
      </div>
    </div>
  );
};
