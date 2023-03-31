import { PostData } from "@/data";
import CategoryPostHeader from "./CategoryPostHeader";
import CategoryPostMainContent from "./CategoryPostMainContent";
import CategoryPostFooter from "./CategoryPostFooter";

const CategoryPostCard = () => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-lg shadow-large-bottom">
            <CategoryPostHeader />
            <CategoryPostMainContent />
            <CategoryPostFooter data={PostData[0]} />
        </div>
    );
};

export default CategoryPostCard;
