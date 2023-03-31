import { useState, Fragment } from 'react';
import SliderHorizontal from "@/asset/images/SliderHorizontal";
import CaretDown from '@/asset/images/CaretDown';


const ManageOptions = [
    { value: 'All Posts', label: 'All Posts' },
    { value: 'Reported Posts', label: 'Reported Posts' },
    { value: 'Requested posts', label: 'Requested Posts' }

]


const ManagePostOptions = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [reported, setReported] = useState(false);

    const toggleOptions = () => setShowOptions(!showOptions);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    const first = ManageOptions[1];
    const firstlabel = first.label;

    function showReported() {
        setReported(!reported)
    }

    return (

        <div className=''>
            <div
                className="flex p-2 bg-gray-200 rounded-3xl rounded cursor-pointer"

            >
                <SliderHorizontal />
                <div className='text-blue-900 text-lg font-semibold px-3' onClick={toggleOptions}>
                    {selectedOption || firstlabel}
                </div>
                <div className='pt-2'><CaretDown /></div>
            </div>
            {showOptions && (
                <div className='flex justify-end'>
                    <div className="absolute z-20 w-56 border rounded-lg bg-white shadow">
                        <div className=''>
                            {ManageOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className="px-6 py-2 cursor-pointer border-b-2 border-gray-200 hover:bg-gray-100"
                                    onClick={() => handleOptionClick(option.label)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManagePostOptions;