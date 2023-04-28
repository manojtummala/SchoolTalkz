import ReportedLogo from "@/asset/images/ReportedLogo";

const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const ManageFeedContent1 = () => {
    return (
        <div className="relative">
            <div className="w-full">
                <img src={`https://i.pravatar.cc/900?img=${randomNumber}`} className="w-full object-cover min-h-10 " />

            </div>
            <div className="">
                <div className='absolute right-0 top-14 z-50 '>
                    <ReportedLogo />
                </div>
            </div>
        </div>
    );
};

export default ManageFeedContent1;
