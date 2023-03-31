import Image from "next/image";
import ArtWorkShopImg from "../../../asset/images/ArtWorkShopImg.png";

const CategoryWorkshopMainContent = () => {
    return (
        <div className="w-full">
            <Image src={ArtWorkShopImg} alt="" className="w-full object-cover h-54 max-h-96" />
        </div>
    );
};

export default CategoryWorkshopMainContent;
