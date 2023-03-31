import Image from 'next/image'
import Bell from "@/asset/images/Bell";
import Moon from "@/asset/images/Moon";
import Staff from "@/asset/images/Staff";
import Man from '@/asset/images/Man.jpg'
import Link from 'next/link';
import { Title } from "@/types/ui";


const titles: Title[] = [
    {
        name: "Student",
        link: "/Studentprofile",
    },
    {
        name: "Promote Student",
        link: "/promotestudent",
    },
];

const RenderBreadcrumb = () => {
    return (
        <div className="text-md">
            {titles.map((title, i) => {
                return (
                    <span key={i} className={`${i === 0 ? "font-bold" : ""}`}>
                        {i === 0 ? "" : "/"}
                        <Link href={title.link} className={`px-2 pt-2 ${i === 0 ? "pl-2" : ""}`}>
                            {title.name}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

function PromoteStudentHeader() {
    return (
        <div className='relative rounded-t-3xl flex justify-between items-center w-full h-20 bg-myBlue px-4'>
            <div className='flex items-center justify-between py-2 px-4'>
                <Staff />
                {/* <span className='font-bold ml-2 mr-2'>Students / </span> */}
                {/* <span>Promote Student</span> */}
                <RenderBreadcrumb />
            </div>
            <div className='flex justify-between items-center'>
                <Bell />
                <Moon />

                <div className='w-10 h-10 rounded-full mr-4'>
                    <Image src={Man} alt="" className='w-full h-full rounded-full object-cover cursor-pointer' width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default PromoteStudentHeader;