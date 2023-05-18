import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowGallery from "./RowGallery";

const Gallery = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="">
          <p className="text-lg relative text-headingColor mx-2">
            Toys Gallery
          </p>
        </div>
        <div className="hidden md:flex gap-3 items-center justify-center">
          <div className="w-8 h-8 flex  items-center justify-center rounded-lg bg-orange-500 cursor-pointer">
            <MdChevronRight />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 cursor-pointer">
            <MdChevronLeft />
          </div>
        </div>
      </div>

      <RowGallery flag={true}></RowGallery>
    </div>
  );
};

export default Gallery;
