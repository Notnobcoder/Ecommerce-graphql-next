import Image from "next/image";

type ProductGridProps = {
  ProductGridValues: any;
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  ProductGridValues,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        {ProductGridValues.map((item) => (
          <div>
            <p>{item.heading}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div>
            <Image
              src={`/home/Elements/ImagePlaceholder${item}.png`}
              width={200}
              height={300}
              alt="home"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
