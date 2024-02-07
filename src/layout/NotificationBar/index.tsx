// ----------- imports
import { RxCross2 } from "react-icons/rx";

// ----------- imports
export const NotificationBar = () => {
  return (
    <div className="bg-black relative p-2">
      <h4 className="text-white text-center  text-sm font-space_grotesk ">
        70% discount - Free shipping worldwide
      </h4>
      <div className="absolute right-3 top-3">
        <RxCross2 className="text-white cursor-pointer" />
      </div>
    </div>
  );
};
