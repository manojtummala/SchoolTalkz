import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Sidebar from '@/components/Sidebar';
import X from "@/asset/images/X";
import SchoolInfoLabel from '@/asset/images/SchoolInfoLabel';
import EditIcon from '@/asset/images/EditIcon';
import Configheader from '@/components/Configuration/Configheader';
import { useEffect, useState, SyntheticEvent } from "react";
import ConfigSorting from "@/components/Configuration/ConfigSorting";
import { authInstance } from "./api/axios";
import { Montserrat } from "next/font/google";
import TrashIcon from '@/asset/images/TrashIcon';
import EditSchoolLogo from "@/asset/images/EditSchoolLogo.jpg";
import LocationIcon from '@/asset/images/LocationIcon';
import SchoolInfoDataLogo from '@/asset/images/SchoolInfoDataLogo.png';


const montserrat = Montserrat({ subsets: ["latin"] });

type RenderSchoolProp = {
    name: string;
    email: string;
    phone: number;
};

type schooltype = {
    id: string,
    name: string,
    location: string,
    img: any,
}

const SchoolData: schooltype[] = [
    { id: '1', name: 'Sparkling International School', location: 'Chennai', img: SchoolInfoDataLogo },
    // { id: '2', name: 'Global International School', location: 'Chennai', followers: '7.2k', creations: '2.3k', achievements: '1.2k', stars: '100' },

]

export default function SchoolInformation() {
    const [modal, setModal] = useState(false)
    const [schoolData, setSchoolData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [trash, setTrash] = useState(false);
    const [editlabel, setEditlabel] = useState(false);

    function showTrash() {
        setTrash(!trash)
    }

    function showEditlabel() {
        setEditlabel(!editlabel)
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await authInstance.post("/myAssociations", {
                    isClass: true,
                });
                console.log(response.data.message);
                setSchoolData(response.data.message);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const RenderSchool = ({
        name,
        email,
        phone,
    }: RenderSchoolProp) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="font-medium">{name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span>{email}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>{phone}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-left justify-left">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={showTrash}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    function toggleModal() {
        setModal(!modal);
    }

    const handleForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            nameofadmin: { value: string };
            emailofadmin: { value: string };
            phoneofadmin: { value: number };
        };
        const nameofadmin = target.nameofadmin.value;
        const emailofadmin = target.emailofadmin.value;
        const phoneofadmin = target.phoneofadmin.value;
        try {
            const response = await authInstance.post("/createadmin", {
                name: nameofadmin,
                email: emailofadmin,
                phone: phoneofadmin,
            });
        } catch (e) {
            console.log(e);
        }
        toggleModal();
    };
    return (
        <>
            <Head>
                <title>School Talkz</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../images/logo.png" />
            </Head>
            <main className='w-cover flex justify-around'>
                <div className='flex flex-col items-center'>
                    <Sidebar />
                </div>
                <div className='w-full pl-52 rounded-3xl'>
                    <div>
                        <Configheader />
                    </div>
                    <div>
                        <div className={montserrat.className}>
                            <div className='w-full flex-col bg-myBlue p-4 pt-14 lg:w-full h-full pb-80'>
                                <ConfigSorting />
                                <div className='px-12 py-6'>
                                    <div className='block bg-gradient-to-t from-[#03194D] to-[#0A1122] rounded-3xl py-2 my-2 px-4'>
                                        {SchoolData.map((data) => (
                                            <div key={data.id}>
                                                <div className='flex'>
                                                    <div className='lg:flex block text-white items-center w-full' >
                                                        <div className='px-3'>
                                                            <div className='w-40 h-40 rounded-full m-8'>
                                                                <Image src={data.img} width={200} height={200} alt="" className='w-full h-full rounded-full cursor-pointer' />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col pb-4'>
                                                            <div className='flex flex-col justify-around px-2 mt-6 mb-2'>
                                                                <div className='' >
                                                                    <h4 className='text-xl pb-6 font-semibold'>{data.name}</h4>
                                                                    <span className='flex items-center gap-2 text-lg text-gray-300'>
                                                                        <div className='-mt-2'><LocationIcon width='32' height='32' /></div>
                                                                        {data.location}
                                                                    </span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex jusitfy-end cursor-pointer p-10' onClick={showEditlabel}><EditIcon /></div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='p-4'>
                                    <h4 className="font-bold ml-2">Admin List</h4> <br />

                                    <div className='lg:flex w-full block'>


                                        <button className='w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg ' onClick={toggleModal}>Add Admin</button>
                                    </div>
                                </div>

                                <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                                    <div className="w-full lg:w-5/6">
                                        <div className="bg-white shadow-md rounded my-6">
                                            <div className="overscroll-contain">

                                                <table className="min-w-max table-auto w-full">
                                                    <thead>
                                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                            <th className="py-3 px-6 text-left">Name</th>
                                                            <th className="py-3 px-6 text-left">Email</th>
                                                            <th className="py-3 px-6 text-left">Phone No</th>
                                                            <th className="py-3 px-6 text-left">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-gray-600 text-sm font-light">
                                                        {loading
                                                            ? <></>
                                                            : schoolData.length !== 0
                                                                ? schoolData?.map((singleClasss, i) => {
                                                                    return (
                                                                        <RenderSchool key={i}
                                                                            name={singleClasss?.name ?? "NA"}
                                                                            email={singleClasss?.email ?? "NA"}
                                                                            phone={singleClasss?.phone ?? "NA"}
                                                                        />
                                                                    );
                                                                })
                                                                : "No data avaliable"}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {editlabel && (
                                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                    <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/3 h-2/5 text-center  rounded-md'>

                                        <div className='flex mb-4 justify-between w-full bg-myGray rounded-t-md'>
                                            <div></div>
                                            <h2 className='font-bold py-2 border-bottom-2 border-solid border-myGray justify-center'>Edit School info</h2>
                                            <div onClick={showEditlabel}> <X /></div>
                                        </div>
                                        <div className='block lg:flex lg:justify-between py-1 px-8 mt-6'>
                                            <div className='lg:flex-col lg:w-full w-full flex'>
                                                <Image src={EditSchoolLogo} alt="" width={50} height={100} className='relative mb-2 ' />
                                                <p className='text-left font-medium text-blue'>Change Logo</p>
                                            </div>
                                            <div className='lg:flex-col lg:w-full w-full mb-2 mt-6 flex'>
                                                <p className='text-left font-medium text-blue'>School Name</p>
                                                <input type="text" placeholder='St.Johns CBSE School ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                            </div>
                                        </div>
                                        <div className='block lg:flex lg:justify-between py-1 px-8 mt-2'>
                                            <div className='lg:flex-col lg:w-1/2 w-full mb-2 flex'>
                                                <p className='text-left font-medium text-blue'>Location</p>
                                                <input type="text" placeholder='Chennai ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                            </div>
                                        </div>

                                        <div className='block lg:flex py-4 px-12 w-full justify-center items-right bg-white rounded-b-2xl'>
                                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5' onClick={showEditlabel}>Cancel</button>
                                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Save</button>

                                        </div>

                                    </div>

                                </div>
                            )}

                            {trash && (
                                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                    <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/4 h-1/4 text-center  rounded-md'>

                                        <div className='flex absolute right-0'>
                                            <div onClick={showTrash}> <X /></div>
                                        </div>
                                        <div className='block lg:flex lg:justify-between py-1 px-8 mt-6'>
                                            <div className='lg:flex-col lg:w-full w-full mb-2 flex justify-center items-center'>
                                                <TrashIcon />
                                                <p className='float-left font-medium'>Are you Sure To delete this record</p>
                                            </div>

                                        </div>

                                        <div className='block lg:flex py-4 px-12 w-full justify-center bg-white rounded-b-2xl'>
                                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5' onClick={showTrash}>Cancel</button>
                                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Submit</button>

                                        </div>

                                    </div>

                                </div>
                            )}

                            {modal && (
                                <form
                                    className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'
                                    onSubmit={(e) => handleForm(e)}
                                >
                                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                    <div className='absolute top-1/4 left-1/4 ml-28 bg-white w-1/3 h-1/3 text-center  rounded-md'>

                                        <div className='flex mb-4 justify-between w-full bg-myGray rounded-t-md'>
                                            <div></div>
                                            <h2 className='font-bold py-2 border-bottom-2 border-solid border-myGray justify-center'>Add Admin</h2>
                                            <div onClick={toggleModal}> <X /></div>
                                        </div>
                                        <div className='block lg:flex lg:justify-between py-1 px-8'>
                                            <div className='lg:flex-col lg:w-full w-full mb-2'>
                                                <p className='float-left font-medium'>Admin Name</p>
                                                <input type="text" placeholder='Enter admin name ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                            </div>
                                            <div className='lg:flex-col lg:w-full w-full mb-2 ml-4'>
                                                <p className='float-left font-medium'>Email</p>
                                                <input type="text" placeholder='Enter email ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                            </div>
                                        </div>
                                        <div className='block lg:flex lg:justify-between py-1 px-8'>
                                            <div className='lg:flex-col lg:w-1/2 w-full mb-2'>
                                                <p className='float-left font-medium'>Phone Number</p>
                                                <input type="text" placeholder='Enter Phone number ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                            </div>
                                        </div>
                                        <div className='block lg:flex py-4 px-12 w-full justify-center bg-white rounded-b-2xl'>
                                            <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5' onClick={toggleModal}>Cancel</button>
                                            <button type='submit' className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Submit</button>

                                        </div>

                                    </div>

                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}
