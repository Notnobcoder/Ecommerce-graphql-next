import Image from "next/image";

export const Navbar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Image
        fill
        objectFit="contain"
        src={"/vercel.svg"}
        alt="logo image"
        loading="lazy"
        sizes="(max-width:300px) 100%"
      />
      <div>
        <h3>middle</h3>
      </div>
      <div>
        <h3>last</h3>
      </div>
    </div>
  );
};
