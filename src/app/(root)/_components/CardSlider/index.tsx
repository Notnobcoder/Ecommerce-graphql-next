import { SliderCard } from "@/components/SliderCard";

type CardSliderDataProps = {
  id: string;
  heading: string;
};

type CardSliderProps = {
  data: CardSliderDataProps[];
};

export const CardSlider: React.FC<CardSliderProps> = ({ data }) => {
  return (
    <div className="flex w-[1200px] overflow-x-scroll">
      {data.map(() => (
        <SliderCard />
      ))}
    </div>
  );
};
