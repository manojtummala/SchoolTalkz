import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Configheader from '@/components/Configuration/Configheader';
import Sidebar from '@/components/Sidebar';
import MagnifyingGlass from "@/asset/images/MagnifyingGlass";
import { useEffect, useState, SyntheticEvent } from "react";
import ConfigSorting from '@/components/Configuration/ConfigSorting';
import { Montserrat } from "next/font/google";
import { authInstance } from "./api/axios";

const montserrat = Montserrat({ subsets: ["latin"] });

type RenderLoginProp = {
    name: string;
    mapToClass: string;
    numberOfStudents: number | "NA";
};

export default function LoginLogs() {
    const [modal, setModal] = useState(false);
    const [loginData, setLoginData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await authInstance.post("/myAssociations", {
                    isClass: true,
                });
                console.log(response.data.message);
                setLoginData(response.data.message);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const RenderLogin = ({
        mapToClass,
        name,
        numberOfStudents,
    }: RenderLoginProp) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="font-medium">A-00004(Admin)</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span className="font-medium">Pravin</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span className="font-medium">Web</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span className="font-medium">Webkit/Chrome/Windows</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span className="font-medium">P</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span className="font-medium">03-Feb-2023 10:57:08</span>
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
            nameOfClass: { value: string };
            classOptions: { value: string };
        };
        const nameOfClass = target.nameOfClass.value;
        const mapOption = target.classOptions.value;
        try {
            const response = await authInstance.post("/createClass", {
                name: nameOfClass,
                mapped_to: mapOption,
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
                            <div className='w-full flex-col bg-myBlue p-4 pt-14 lg:w-full h-full pb-96'>
                                <ConfigSorting />


                                <div className='p-4'>
                                    <h4 className="font-bold ml-2">Login Logs List</h4> <br />

                                    <div className='lg:flex w-full block'>

                                        <div className='flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg'>
                                            <input type="text" placeholder='Search...' className='w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none' />
                                            <MagnifyingGlass />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                                    <div className="w-full lg:w-5/6">
                                        <div className="bg-white shadow-md rounded my-6">
                                            <div className="overscroll-contain">

                                                <table className="min-w-max table-auto w-full">
                                                    <thead>
                                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                            <th className="py-3 px-6 text-left">ID</th>
                                                            <th className="py-3 px-6 text-left">Name</th>
                                                            <th className="py-3 px-6 text-left">Type</th>
                                                            <th className="py-3 px-6 text-left">Device/Browser/Platform</th>
                                                            <th className="py-3 px-6 text-left">Status</th>
                                                            <th className="py-3 px-6 text-left">Created at</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-gray-600 text-sm font-light">
                                                        {loading
                                                            ? <></>
                                                            : loginData.length !== 0
                                                                ? loginData?.map((singleClasss, i) => {
                                                                    return (
                                                                        <RenderLogin key={i}
                                                                            mapToClass={singleClasss?.mapped_to ?? "NA"}
                                                                            name={singleClasss?.name ?? "NA"}
                                                                            numberOfStudents={
                                                                                singleClasss?._count.members ?? "NA"
                                                                            }
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
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}