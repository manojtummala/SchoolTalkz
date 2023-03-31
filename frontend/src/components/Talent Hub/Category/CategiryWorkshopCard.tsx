import { PostData } from "@/data";
import CategoryPostHeader from "./CategoryPostHeader";
import CategoryWorkshopMainContent from "./CategoryWorkshopMainContent";
import CategoryWorkshopCardFooter from "./CategoryWorkshopCardFooter";

const CategoryWorkshopCard = () => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-lg shadow-large-bottom">
            <CategoryPostHeader />
            <CategoryWorkshopMainContent />
            <CategoryWorkshopCardFooter data={PostData[0]} />
        </div>
    );
};

export default CategoryWorkshopCard;
