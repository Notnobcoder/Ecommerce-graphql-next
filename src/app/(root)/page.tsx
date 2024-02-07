import { NotificationBar } from "@/layout/NotificationBar";
import { CardSliderData, ProductGridValues } from "./data";
import { CardSlider } from "./_components/CardSlider";
import { Slider } from "./_components/Slider";
import { Banner } from "./_components/Banner";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ProductGrid } from "./_components/ProductGrid";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <NotificationBar />
      {/* slider */}
      <Slider />
      {/* card slider */}
      <CardSlider />
      {/* container */}
      <div className="px-4 py-6">
        {/* banner */}
        <Banner />
        {/* product grid */}
        <ProductGrid ProductGridValues={ProductGridValues} />
        {/* video */}
        <VideoPlayer />
      </div>
      {/* news letter */}
      <div>
        <div>
          <Image
            className="w-full"
            src={"/home/heading.svg"}
            width={200}
            height={300}
            alt="image height"
          />
        </div>
        <div>
          <h4>Join our newsletter. Enjoy big discounts.</h4>
        </div>
      </div>
    </div>
  );
}
