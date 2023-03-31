import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select';
import { useState } from 'react';
// import ClassLeaderboard from "@/asset/images/ClassLeaderboard.png"
import Link from 'next/link';
import QuestionMark from "@/asset/images/QuestionMark.png"

interface OptionType {
    label: string;
    value: string;
}


const classOptions: OptionType[] = [
    { value: 'Class I', label: 'Class I', },
    { value: 'Class II', label: 'Class II', },
    { value: 'Class III', label: 'Class III', },
    { value: 'Class IV', label: 'Class IV', },
    { value: 'Class V', label: 'Class V', },
    { value: 'Class VI', label: 'Class VI', },
    { value: 'Class VII', label: 'Class VII', },
    { value: 'Class VIII', label: 'Class VIII', },

]

const monthOptions: OptionType[] = [
    { value: 'Overall', label: 'Overall', },
    { value: 'January', label: 'January', },
    { value: 'February', label: 'February', },
    { value: 'March', label: 'March', },
    { value: 'April', label: 'April', },
    { value: 'May', label: 'May', },
    { value: 'June', label: 'June', },
    { value: 'July', label: 'July', },
    { value: 'August', label: 'August', },
    { value: 'September', label: 'September', },
    { value: 'October', label: 'October', },
    { value: 'November', label: 'November', },
    { value: 'Decemeber', label: 'Decemeber', },

]

const ClassLeaderboardBody = () => {

    const [empty, hideEmpty] = useState(true)

    const [selectedclass, setSelectedClass] = useState<OptionType | null>(null);
    const [selectedmonth, setSelectedMonth] = useState<OptionType | null>(null);

    const isBothSelected = selectedclass && selectedmonth;

    function showModal() {
        hideEmpty(!empty)
    }

    // if (isBothSelected) {
    //     showModal()
    // }


    { isBothSelected && { showModal } }

    return (
        <div className='relative rounded-b-3xl w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
            <div className='p-4'>
                <h4 className="font-bold ml-2">Class Leaderboard</h4> <br />
                <div className='grid grid-cols-2 gap-4'>
                    <div className='block lg:flex lg: justify-between py-1 px-4'>
                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6'>
                            <Select
                                name="colors"
                                options={classOptions}
                                className="basic-multi-select"
                                placeholder='Select Class'
                                value={selectedclass}
                                onChange={(option) => setSelectedClass(option)}
                            />
                        </div>

                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6 ml-4'>
                            <Select
                                name="colors"
                                options={monthOptions}
                                className="basic-multi-select"
                                placeholder='Select Month'
                                value={selectedmonth}
                                onChange={(option) => setSelectedMonth(option)}
                            />
                        </div>
                    </div>
                    {isBothSelected && <div>Both Selects are selected</div>}

                </div>

                {/* <button onClick={showModal}>HI</button> */}
            </div>

            {empty && (
                <div className='relative p-12 mt-64 pb-64'>
                    <div className='lg: flex flex-col rounded-3xl w-full shadow-xl bg-white pb-9'>
                        <div className='grid grid-row-3 items-center justify-center mt-20 text-lg pr-32'>
                            <span>Kindly Select</span>
                            <span className='text-green-600 font-semibold'>Class and Month</span>
                            <span>to view class leaderboard report</span>
                        </div>
                    </div>
                    <div className='absolute inset-0 object-cover z-10 pl-52'>
                        <div className=''>
                            <Image src={QuestionMark} alt="" height='250' className='relative' />
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ClassLeaderboardBody;