import { SliderCard } from "@/components/SliderCard";

type CardSliderDataProps = {
  id: string;
  heading: string;
};

export const CardSlider = () => {
  return (
    <div className="flex w-[1200px] overflow-x-scroll">
      <SliderCard />
    </div>
  );
};
