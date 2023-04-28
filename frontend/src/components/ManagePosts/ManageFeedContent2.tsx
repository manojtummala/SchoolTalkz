import ReportedLogo from "@/asset/images/ReportedLogo";

const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const ManageFeedContent2 = () => {
    return (
        <div className="relative">
            <div className="w-full">
                <div className='h-20 p-4'>
                    <div className='flex items-center'>
                        <input type="radio" name="same" id="" className='mr-4' />
                        <p>Running</p>
                    </div>
                    <div className='flex items-center'>
                        <input type="radio" name="same" id="" className='mr-4' />
                        <p>Activites</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='absolute right-0 top-0 z-50 '>
                    <ReportedLogo />
                </div>
            </div>
        </div>
    );
};

export default ManageFeedContent2;
