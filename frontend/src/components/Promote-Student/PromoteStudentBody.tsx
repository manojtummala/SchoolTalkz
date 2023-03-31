import Head from 'next/head'
import Link from 'next/link';
import Select from 'react-select';
import { SyntheticEvent, useState } from 'react';
import { authInstance } from "../../pages/api/axios";
import React, { useEffect } from 'react';

import SelectStudent from '@/pages/selectstudents';
// import { useHistory } from 'react-router-dom';


type RenderClassProp = {
    rollno: string;
    name: string;
    standard: string;
    section: string;
};

interface OptionType {
    label: string;
    value: string;
}



const acedamicyearOptions = [
    { value: '2022', label: '2022', },
    { value: '2023', label: '2023', },
    { value: '2024', label: '2024', },
]

const standardOptions = [
    { value: 'I Standard', label: 'I Standard' },
    { value: 'II Standard', label: 'II Standard' },
    { value: 'III Standard', label: 'III Standard' },
    { value: 'IV Standard', label: 'IV Standard' },
    { value: 'V Standard', label: 'V Standard' },
    { value: 'VI Standard', label: 'VI Standard' },
    { value: 'VII Standard', label: 'VII Standard' },
]

const sectionOptions = [
    { value: 'Section A', label: 'Section A' },
    { value: 'Section B', label: 'Section B' },
    { value: 'Section C', label: 'Section C' },
    { value: 'Section D', label: 'Section D' },
    { value: 'Section E', label: 'Section E' },
    { value: 'Section F', label: 'Section F' },
    { value: 'Section G', label: 'Section G' },
    { value: 'Section H', label: 'Section H' },
]

const assigntoOptions = [
    { value: 'All Students', label: 'All Students', },
    { value: 'Selected Students', label: 'Selected Students', },
]


export default function PromoteStudentBody() {

    const [from, setFrom] = useState(true);
    const [select, setSelect] = useState(false);
    const [to, setTo] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [studentList, setStudentList] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [studentData, setStudentData] = useState<any[]>([]);

    const isSelected = selectedOption;

    function showFrom() {
        setFrom(!from)
        setSelect(!select)
    }

    function showTo() {
        setSelect(!select)
        setTo(!to)
    }

    function showConfirm() {
        setTo(!to)
        setConfirm(!confirm)
    }

    function showSuccess() {
        setSuccess(!success)
    }

    function showStudentList() {
        setStudentList(!studentList)
    }

    const handleForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            fromAcademicYear: { value: string };
            fromStandard: { value: string };
            fromSection: { value: string };
            toAcademicYear: { value: string };
            toStandard: { value: string };
            toSection: { value: string };
        };
        const academicYear1 = target.fromAcademicYear.value;
        const standard1 = target.fromStandard.value;
        const section1 = target.fromSection.value;
        // const academicYear2 = target.toAcademicYear.value;
        // const standard2 = target.toStandard.value;
        // const section2 = target.toSection.value;

        // try {
        //     const response = await authInstance.post("/promotefrom", {
        //         fromYear: academicYear1,
        //         fromStandard: standard1,
        //         fromSection: section1,

        //     });
        // } catch (e) {
        //     console.log(e)
        // }

        // try {
        //     const response = await authInstance.post("/promoteto", {
        //         toYear: academicYear2,
        //         toStandard: standard2,
        //         toSection: section2,

        //     });
        // } catch (e) {
        //     console.log(e)
        // }

        console.log(academicYear1)
        console.log(standard1)
        console.log(section1)

        // useEffect(() => {
        //     // enable form submission only after the component is mounted
        //     const form = document.querySelector('form');
        //     if (form) {
        //         form.addEventListener('submit', handle);
        //     }

        //     return () => {
        //         if (form) {
        //             form.removeEventListener('submit', handle);
        //         }
        //     };
        // }, []);

    };
    const RenderClass = ({
        rollno,
        name,
        standard,
        section,
    }: RenderClassProp) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="font-medium">{rollno}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span>{name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>{standard} Standard</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>Section {section}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-left justify-left">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="Red"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <>
            {from && (

                <div>
                    <form
                        onSubmit={(e) => handleForm(e)}
                    >
                        <div className='relative rounded-b-3xl p-4 w-full pb-96 flex-col bg-myBlue'>
                            <div className='rounded-xl ml-6 mr-6 h-full shadow-xl'>
                                <div className='rounded-t-xl bg-myGray flex items-center justify-center h-16 mt-4'>
                                    <h1 className='text-lg font-bold flex items-center justify-center'>Promote From</h1>
                                    <h1 className='text-lg flex absolute right-0 mr-16'>1/4</h1>
                                </div>
                                <div className='flex-col bg-white pt-10'>
                                    <div className='block lg:flex lg:justify-between py-1 px-36'>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Acedamic Year</p>
                                            <Select
                                                name="fromAcademicYear"
                                                options={acedamicyearOptions}
                                                className="basic-multi-select bg-[#fafafa] text-base"
                                                placeholder="Select an academic year"
                                            />
                                        </div>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Standard</p>
                                            <Select
                                                name='fromStandard'
                                                className=" bg-[#fafafa] text-base"
                                                options={standardOptions}
                                                classNamePrefix="select"
                                                placeholder="Select a standard"
                                            />
                                        </div>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Section</p>
                                            <Select
                                                className=" bg-[#fafafa] text-base"
                                                name="fromSection"
                                                options={sectionOptions}
                                                classNamePrefix="select"
                                                placeholder="Select a section"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='block lg:flex pt-12 pb-4 px-32 w-full justify-end bg-white rounded-b-2xl'>
                                    <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'><Link href='/Studentprofile'>Cancel</Link></button>
                                    <button type="submit" onClick={showFrom} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {select && (
                <div>

                    <div className='relative rounded-b-3xl p-4 w-full pb-96 flex-col bg-myBlue'>
                        <div className='rounded-xl ml-6 mr-6 h-full shadow-xl'>
                            <div className='rounded-t-xl bg-myGray flex items-center justify-center h-16 mt-4'>
                                <h1 className='text-lg font-bold flex items-center justify-center'>Select Students</h1>
                                <h1 className='text-lg flex absolute right-0 mr-16'>2/4</h1>
                            </div>
                            <div className='flex-col bg-white pt-10'>
                                <div className='block lg:flex lg:justify-between py-1 px-36'>
                                    <div className='lg:flex-col lg:w-1/2 w-full mb-2'>
                                        <p className='font-semibold mb-2'>Assign To</p>
                                        <Select
                                            name="colors"
                                            options={assigntoOptions}
                                            className="basic-multi-select bg-[#fafafa] text-base"
                                            classNamePrefix="select"
                                            placeholder="Select Acedamic year"
                                            onChange={showStudentList}
                                        />
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='block lg:flex pt-12 pb-4 px-32 w-full justify-end bg-white rounded-b-2xl'>
                                <button onClick={showFrom} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'>Previous</button>
                                <button onClick={showTo} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {to && (
                <div>
                    <form
                        onSubmit={(e) => handleForm(e)}
                    >
                        <div className='relative rounded-b-3xl p-4 w-full pb-96 flex-col bg-myBlue'>
                            <div className='rounded-xl ml-6 mr-6 h-full shadow-xl'>
                                <div className='rounded-t-xl bg-myGray flex items-center justify-center h-16 mt-4'>
                                    <h1 className='text-lg font-bold flex items-center justify-center'>Promote To</h1>
                                    <h1 className='text-lg flex absolute right-0 mr-16'>3/4</h1>
                                </div>
                                <div className='flex-col bg-white pt-10'>
                                    <div className='block lg:flex lg:justify-between py-1 px-36'>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Acedamic Year</p>
                                            <Select
                                                name="toAcademicYear"
                                                options={acedamicyearOptions}
                                                className="basic-multi-select bg-[#fafafa] text-base"
                                                classNamePrefix="select"
                                                placeholder="Select an academic year"
                                            />
                                        </div>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Standard</p>
                                            <Select
                                                name='toStandard'
                                                className=" bg-[#fafafa] text-base"
                                                options={standardOptions}
                                                classNamePrefix="select"
                                                placeholder="Select a standard"
                                            />
                                        </div>
                                        <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
                                            <p className='font-semibold mb-2'>Section</p>
                                            <Select
                                                name="toSection"
                                                className=" bg-[#fafafa] text-base"
                                                options={sectionOptions}
                                                classNamePrefix="select"
                                                placeholder="Select a section"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='block lg:flex pt-12 pb-4 px-32 w-full justify-end bg-white rounded-b-2xl'>
                                    <button onClick={showTo} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'>Previous</button>
                                    <button onClick={showConfirm} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {confirm && (
                <div>
                    <div className='relative rounded-b-3xl p-4 w-full pb-96 flex-col bg-myBlue'>
                        <div className='rounded-xl ml-6 mr-6 h-full shadow-xl'>
                            <div className='rounded-t-xl bg-myGray flex items-center justify-center h-16 mt-4'>
                                <h1 className='text-lg font-bold flex items-center justify-center'>Confirmation</h1>
                                <h1 className='text-lg flex absolute right-0 mr-16'>4/4</h1>
                            </div>
                            <div className='flex-col bg-white pt-10'>
                                <div className='block lg:flex lg:justify-between py-1 px-28'>
                                    <div className='lg:flex-col lg:w-1/2 w-full mb-2'>
                                        <p className='font-semibold mb-2'>Promoted from </p>
                                        <div className="block max-w-sm p-6 bg-myBlue border border-gray-200 rounded-xl shadow">
                                            <div className='font-normal mb-6'>
                                                <span className="text-gray-400">Acedamic Year: </span>
                                                {/* <Report data={PromoteConfirmSelectedData[0]} /> */}
                                                <span className="text-gray-700 ml-4">2023 </span>

                                            </div>
                                            <div className='grid gap-2 grid-cols-2 font-normal'>
                                                <div>
                                                    <span className="text-gray-400">Standard: </span>
                                                    <span className="text-gray-700 ml-4">5 </span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-400">Section: </span>
                                                    <span className="text-gray-700 ml-4">A </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lg:flex-col lg:w-1/2 w-full mb-2'>
                                        <p className='font-semibold mb-2'>Promoted To </p>
                                        <div className="block max-w-sm p-6 bg-myBlue border border-gray-200 rounded-xl shadow">
                                            <div className='font-normal mb-6'>
                                                <span className="text-gray-400">Acedamic Year: </span>
                                                <span className="text-gray-700 ml-4">2024 </span>
                                            </div>
                                            <div className='grid gap-2 grid-cols-2 font-normal'>
                                                <div>
                                                    <span className="text-gray-400">Standard: </span>
                                                    <span className="text-gray-700 ml-4">6 </span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-400">Section: </span>
                                                    <span className="text-gray-700 ml-4">B </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='block lg:flex lg:justify-between py-1 pt-3 px-28'>
                                    <div className='lg:flex-col lg:w-1/2 w-full'>
                                        <div className="block max-w-sm p-6 bg-myBlue border border-gray-200 rounded-xl shadow">
                                            <div className='font-normal'>
                                                <span className="text-gray-400">Selected Students: </span>
                                                <span className="text-gray-700 ml-2">06 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='block lg:flex pt-12 pb-8 px-32 w-full justify-end bg-white rounded-b-2xl'>
                                <button onClick={showConfirm} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'>Previous</button>
                                <button onClick={showSuccess} className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {success && (
                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                    <div className='absolute top-1/3 right-1/3 ml-10 bg-white w-1/4 h-1/4 text-center  rounded-xl'>

                        <div className='block lg:flex lg:justify-between py-10 pt-16 px-8'>
                            <div className='lg:flex-col lg:w-full w-full mb-2'>
                                <p className='items-center justify-center'>Student Promoted Successfully !!!</p>
                            </div>
                        </div>
                        <div className='block lg:flex px-12 w-full justify-center bg-white rounded-b-2xl'>
                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/2'><Link href='/Studentprofile'>Continue</Link></button>

                        </div>

                    </div>

                </div>
            )}

            {studentList && (
                <div className="bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <div className="overscroll-contain">
                                <table className="min-w-max table-auto w-full">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-left">Class Name</th>
                                            <th className="py-3 px-6 text-left">
                                                Map to Class
                                            </th>
                                            <th className="py-3 px-6 text-left">
                                                Number of Students
                                            </th>
                                            <th className="py-3 px-6 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm font-light">
                                        {studentData.length !== 0
                                            ? studentData.map((singleClasss) => {
                                                return (
                                                    <RenderClass
                                                        rollno={singleClasss?.rollno ?? "NA"}
                                                        name={singleClasss?.name ?? "NA"}
                                                        standard={singleClasss?.standard ?? "NA"}
                                                        section={singleClasss?.section ?? "NA"}
                                                    />
                                                );
                                            })
                                            : "Loading..."}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}



