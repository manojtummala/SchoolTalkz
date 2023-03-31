import { PostData } from "@/data";
import CategoryPostHeader2 from "./CategoryPostHeader2";
import CategoryPostMainContent2 from "./CategoryPostMainContent2";
import CategoryPostFooter from "./CategoryPostFooter";

const CategoryPostCard2 = () => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-lg shadow-large-bottom">
            <CategoryPostHeader2 />
            <CategoryPostMainContent2 />
            <CategoryPostFooter data={PostData[0]} />
        </div>
    );
};

export default CategoryPostCard2;
