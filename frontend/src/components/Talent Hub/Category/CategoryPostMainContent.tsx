import Image from "next/image";
import ArtPostFeedImg from "../../../asset/images/ArtPostFeedImg.png";

const CategoryPostMainContent = () => {
    return (
        <div className="w-full">
            <Image src={ArtPostFeedImg} alt="" className="w-full object-cover h-54 max-h-96" />
        </div>
    );
};

export default CategoryPostMainContent;
