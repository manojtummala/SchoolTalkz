import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import Man from "@/asset/images/Man.jpg";
import Balloon from "@/asset/images/Balloon.png";
import BirthdayBalloon from "@/asset/images/BirthdayBalloon.png";
import ArrowLeft from "@/asset/images/ArrowLeft";
import ArrowUpRight from "@/asset/images/ArrowUpRight";

import Orange from "@/asset/images/Orange";
import Add from "@/asset/images/Add";
import MagnifyingGlass from "@/asset/images/MagnifyingGlass";
import NotePencil from "@/asset/images/NotePencil";
import X from "@/asset/images/X";
import Msg from "@/asset/images/Msg";

import Camera from "@/asset/images/Camera";
import StudentHeader from "@/components/Configuration/StudentHeader";
import Green from "@/asset/images/Green";
import { authInstance } from "./api/axios";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const classOptions = [
  { value: "I Standard", label: "I standard" },
  { value: "II Standard", label: "II Standard" },
  { value: "III Standard", label: "III Standard" },
  { value: "IV Standard", label: "IV Standard" },
  { value: "V Standard", label: "V Standard" },
  { value: "VI Standard", label: "VI Standard" },
  { value: "VII Standard", label: "VII Standard" },
  { value: "VIII Standard", label: "VIII Standard" },
];

export default function Student() {
  const [searchItem, setSearchItem] = useState("");
  const [students, setStudents] = useState<any[]>([]);
  const [modal, setModal] = useState(false);
  const [birthdaypop, setBirthdaypop] = useState(true);
  const [calender, setCalender] = useState(false);
  const [loading, setLoading] = useState(true);

  function showBirthday() {
    setBirthdaypop(!birthdaypop);
  }

  function showModal() {
    setModal(!modal);
  }

  function showCalender() {
    setCalender(!calender);
    setBirthdaypop(!birthdaypop);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await authInstance.post("/findMyStudentStaffs", {
          isStudent: true,
        });
        console.log(response.data.message[0]);
        setStudents(response.data.message);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
            <StudentHeader />
          </div>
          <div>
            <div className={montserrat.className}>
              <div className="w-full flex-col bg-myBlue p-4 pt-28 lg:w-full h-full pb-96">

                <div className='block h-full lg:flex lg:justify-around text-white mt-4 lg:w-full'>
                  <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5'>
                    <div className='flex-col items-center justify-center text-center ml-9'>
                      <p className='uppercase tracking-widest'>Total Students</p>
                      <h1 className='text-4xl'>20</h1>
                    </div>
                    <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
                      <Orange />
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5 cursor-pointer' onClick={showBirthday} >
                    <div className='flex-col items-center justify-center text-center ml-9'>
                      <p className='uppercase tracking-widest'>Today&apos;s Birthday</p>
                      <h1 className='text-4xl'>01</h1>
                    </div>
                    <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
                      <Green />
                    </div>
                  </div>



                  <div className="">
                    <div
                      className="flex cursor-pointer border-2 border-myBlue rounded-3xl items-center mb-8 mt-4"
                      onClick={showModal}
                    >
                      <div className="border rounded-full p-2 bg-gradient-to-r from-[#0A1122] to-[#03194D]">
                        <Add />
                      </div>
                      <p className="text-myBlue px-1.5 font-bold">Add Students</p>
                    </div>
                    <Link href='/promotestudent'>
                      <div className="flex cursor-pointer border-2 border-myBlue rounded-3xl items-center">
                        <div className="border rounded-full p-2 bg-gradient-to-r from-[#0A1122] to-[#03194D]">
                          <Msg />
                        </div>
                        <p className="text-myBlue px-1.5 font-bold">
                          Promote Students
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="mb-2">Search Student</h4>

                  <div className="block lg:flex lg:w-full lg:justify-start">
                    <div className="lg:w-1/6 w-full mr-3">
                      <Select
                        isMulti
                        name="colors"
                        options={classOptions}
                        className="basic-multi-select text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1"
                        classNamePrefix="select"
                      />
                    </div>

                    <div className="flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border-none bg-none text-md outline-none w-full"
                        onChange={(event) => {
                          setSearchItem(event.target.value);
                        }}
                      />
                      <MagnifyingGlass />
                    </div>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="block mb-0 lg:flex lg:w-full lg:justify-between lg:mb-8 flex-wrap">
                    {loading
                      ? "Loading..."
                      : students.length === 0
                        ? "No data"
                        : students
                          .filter((val) => {
                            if (searchItem == "") {
                              return val;
                            } else if (
                              val.department
                                .toLowerCase()
                                .includes(searchItem.toLowerCase())
                            ) {
                              return val;
                            }
                          })
                          .map((student, i) => (
                            <div
                              key={i}
                              className="w-full mb-8 lg:w-80 bg-white p-2 rounded-xl"
                            >
                              <div className="flex w-full">
                                <div className="w-1/3 h-1/6 rounded-xl mr-2">
                                  <Image
                                    src={Man}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-xl"
                                  />
                                </div>
                                <div className="w-2/3">
                                  <div className="flex mt-3 justify-between">
                                    <h3 className="text-sm text-black mb-2">
                                      Name : {student.first_name}
                                    </h3>
                                    <Link href="/Form">
                                      <NotePencil />
                                    </Link>
                                  </div>
                                  <div>
                                    <p className="text-[#9a9a9a] text-xs mb-2">
                                      Student Id : {student.school_user.id_by_school}
                                    </p>
                                    <p className="text-[#9a9a9a] text-xs mb-2">
                                      Class : {student.school_user.association.name}
                                    </p>
                                    <p className="text-[#9a9a9a] text-xs mb-2">
                                      Email : {student.email}
                                    </p>
                                    <p className="text-[#9a9a9a] text-xs mb-2">
                                      Phone : {student.phone}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="w-3/4 flex items-center justify-center ">
                                <div className="mt-2 border-y-[#d3d3d3] text-center  text-[#061a6f]  flex ml-20 cursor-pointer items-center py-2 ">
                                  <p className="text-bold text-sm">
                                    <Link href="/User">View Details</Link>
                                  </p>
                                  <span>
                                    <ArrowUpRight />
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                  </div>
                </div>

                {modal && (
                  <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
                    <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay"></div>
                    <div className="absolute top-1/3 left-1/3 ml-28 bg-white w-1/4 h-1/4 text-center  rounded-md">
                      <div className="flex mb-4 justify-between w-full bg-myGray rounded-t-md">
                        <div></div>
                        <h2 className="font-bold py-2 border-bottom-2 border-solid border-myGray ml-8">
                          Add Student
                        </h2>
                        <div onClick={showModal}>
                          {" "}
                          <X />
                        </div>
                      </div>
                      <div>
                        <p className="mb-4 cursor-pointer text-base ">
                          <Link href="/StudentForm">Add 1 Student</Link>
                        </p>
                        <hr />
                        <p className="mt-4 cursor-pointer text-base">
                          <Link href="/BulkUpload">Bulk Upload</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {birthdaypop && (
                  <div className="w-full absolute top-0 left-0 right-0 bottom-0 flex-col items-center">
                    <div className="w-full absolute top-0 left-0 right-0 bottom-0 flex-col items-center bg-overlay"></div>

                    <div className="relative w-full lg:w-2/3 flex-col bg-[#eeeeee] rounded-3xl my-2 mx-auto left-1/12">
                      <div className="flex justify-between w-full h-max items-center pt-1">
                        <Image
                          src={BirthdayBalloon}
                          alt=""
                          width={50}
                          height={100}
                          className="relative"
                        />

                        <div className="text-center ">
                          <h2 className="text-base font-bold">
                            Today’s Birthdays
                          </h2>
                          <p className="text-base">
                            Wish Students and Staff a happy birthday!
                          </p>
                        </div>
                        <div
                          className="mr-1 cursor-pointer"
                          onClick={showBirthday}
                        >
                          <X />
                        </div>
                      </div>

                      <div className="flex-col bg-white">
                        <div className="block lg:flex w-full  py-1 px-4 justify-between">
                          <div className="flex lg:w-full mb-4 ">
                            <div className="w-24 h-20 rounded-md">
                              <Image
                                width={100}
                                height={100}
                                src={Man}
                                alt=""
                                className="w-full h-full rounded-md"
                              />
                            </div>

                            <div className="lg:block relative w-full ml-4">
                              <h3 className="text-sm mb-1">Dency</h3>

                              <div>
                                <p className="text-sm mb-1">14 Years Old</p>
                              </div>
                              <div className="lg:flex w-full justify-between  block ">
                                <div className="flex w-full lg:w-9/12 justify-between border border-solid border-[#d3d3d3]  rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Wish Dency a happy birthday!"
                                    className="w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none"
                                  />
                                  <Camera />
                                </div>
                                <button className="w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="block lg:flex w-full  py-1 px-4 justify-between">
                          <div className="flex lg:w-full mb-4">
                            <div className="w-24 h-20 rounded-md">
                              <Image
                                width={100}
                                height={100}
                                src={Man}
                                alt=""
                                className="w-full h-full rounded-md"
                              />
                            </div>

                            <div className="lg:block relative w-full ml-4">
                              <h3 className="text-sm mb-1">Dency</h3>

                              <div>
                                <p className="text-sm mb-1">14 Years Old</p>
                              </div>
                              <div className="lg:flex w-full justify-between  block ">
                                <div className="flex w-full lg:w-9/12 justify-between border border-solid border-[#d3d3d3]  rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Wish Dency a happy birthday!"
                                    className="w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none"
                                  />
                                  <Camera />
                                </div>
                                <button className="w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="block lg:flex w-full  py-1 px-4 justify-between">
                          <div className="flex lg:w-full mb-4">
                            <div className="w-24 h-20 rounded-md">
                              <Image
                                width={100}
                                height={100}
                                src={Man}
                                alt=""
                                className="w-full h-full rounded-md"
                              />
                            </div>

                            <div className="lg:block relative w-full ml-4">
                              <h3 className="text-sm mb-1">Dency</h3>

                              <div>
                                <p className="text-sm mb-1">14 Years Old</p>
                              </div>
                              <div className="lg:flex w-full justify-between  block ">
                                <div className="flex w-full lg:w-9/12 justify-between border border-solid border-[#d3d3d3]  rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Wish Dency a happy birthday!"
                                    className="w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none"
                                  />
                                  <Camera />
                                </div>
                                <button className="w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center cursor-pointer mt-2">
                        <h4 onClick={showCalender}>Set Upcoming Birthday</h4>
                      </div>
                    </div>
                  </div>
                )}

                {calender && (
                  <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
                    <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay"></div>
                    <div className="flex-col w-1/2 h-4/6 rounded-md relative bg-[#f2f6ff] left-1/4 ml-16 top-1/4">
                      <div className="flex w-full justify-between bg-myGray items-center rounded-t-lg">
                        <div className="ml-2" onClick={showCalender}>
                          <ArrowLeft />
                        </div>
                        <div className="text-center bg-[#eeeeee]">
                          <h2 className="text-base font-bold">
                            Upcoming Birthdays
                          </h2>
                          <p className="text-sm">
                            Wish Students and Staff a happy birthday!
                          </p>
                        </div>
                        <div>
                          <Image
                            src={Balloon}
                            alt=""
                            width={50}
                            height={100}
                            className="relative"
                          />
                        </div>
                      </div>
                      <div className="flex-col">
                        <div className="flex justify-between w-full mb-2 p-4">
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between w-full mb-2 p-4">
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between w-full mb-2 p-4">
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                          <div className="flex items-center w-1/4">
                            <div className="w-20 h-20 rounded-lg">
                              <Image
                                src={Man}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full rounded-lg cursor-pointer"
                              />
                            </div>
                            <div className="ml-2">
                              <h4 className="text-base cursor-pointer font-bold">
                                Dency
                              </h4>
                              <p className="text-xs cursor-pointer">January 28</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
