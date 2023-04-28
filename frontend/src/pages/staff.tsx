import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Select from 'react-select';
import Man from '@/asset/images/Man.jpg'
import Balloon from '@/asset/images/Balloon.png'
import BirthdayBalloon from '@/asset/images/BirthdayBalloon.png'
import Header from '@/components/Configuration/MyHeader';
import Sidebar from '@/components/Sidebar';
import ArrowLeft from "@/asset/images/ArrowLeft";
import ArrowUpRight from "@/asset/images/ArrowUpRight";
import Orange from "@/asset/images/Orange";
import Add from "@/asset/images/Add";
import MagnifyingGlass from "@/asset/images/MagnifyingGlass";
import NotePencil from "@/asset/images/NotePencil";
import X from "@/asset/images/X";
import Camera from "@/asset/images/Camera";
import { useState } from "react";
import Green from "@/asset/images/Green";
import { Montserrat } from "next/font/google";
import StaffHeader from '@/components/Configuration/MyHeader';

const montserrat = Montserrat({ subsets: ["latin"] });

const departmentOptions = [
  { value: 'Tamil', label: 'Tamil', },
  { value: 'English', label: 'English' },
  { value: 'Science', label: 'Science' },
  { value: 'Maths', label: 'Maths', },
  { value: 'Computer', label: 'Computer' },
  { value: 'Maths', label: 'Maths' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Social Science', label: 'Social Science' },
  { value: 'Sports', label: 'Sports' },
]

const designationOptions = [
  { value: 'Junior Staff', label: 'Junior Staff' },
  { value: 'Senior Staff', label: 'Senior Staff' },
]


export default function Staff() {

  const [modal, setModal] = useState(false)
  const [birthdaypop, setBirthdaypop] = useState(false);
  const [calender, setCalender] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  function showCalender() {
    setCalender(!calender);
    setBirthdaypop(!birthdaypop);
  }

  function showBirthday() {
    setBirthdaypop(!birthdaypop);

  }

  const teacher = {
    number: '',
    birthday: '',
  }

  const [birthdays] = useState([
    {
      name: '',
      age: '',
      image: ''
    },


  ])

  const [calenders] = useState([
    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },
    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },
    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    },

    {
      name: 'Dency',
      age: '14 Years old',
      date: '28 January',
      image: '@/assets/images/Man.jpg'
    }

  ])
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  function showModal() {
    setModal(!modal);
  }
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
            <StaffHeader />
          </div>
          <div>
            <div className={montserrat.className}>
              <div className="w-full flex-col bg-myBlue p-4 pt-24 pt-28 lg:w-full h-full pb-96">

                <div className='block h-full lg:flex lg:justify-around text-white mt-4 lg:w-full'>
                  <div className='bg-gradient-blue rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5 overflow-hidden'>
                    <div className='flex-col items-center justify-center text-center ml-9 '>
                      <p className='uppercase tracking-widest'>Number of teachers</p>
                      <h1 className='text-4xl'>{teacher.number}</h1>
                    </div>
                    <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl object-cover '>

                      <Orange />

                    </div>
                  </div>

                  <div className='bg-gradient-blue rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5 overflow-hidden'>
                    <div className='flex-col items-center justify-center text-center ml-9 cursor-pointer ' onClick={showBirthday}>
                      <p className='uppercase tracking-widest'>Toda&apos;s Birthday</p>
                      <h1 className='text-4xl'>{teacher.birthday}</h1>
                    </div>
                    <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl object-cover '>
                      <Green />
                    </div>
                  </div>


                  <div className='border border-[#061A6F] rounded-2xl  flex flex-col items-center justify-center   w-full 
      lg:w-1/6 cursor-pointer h-40 
      ' onClick={showModal}>

                    <div className="border rounded-full p-2 bg-[#061A6F]">
                      <Add />
                    </div>
                    <p className='font-bold text-[#061A6F]'>Add Teacher</p>

                  </div>

                </div>

                <div className='p-4'>
                  <h4 className='mb-2'>Search Teacher</h4>

                  <div className='block lg:flex lg:w-full lg:justify-start'>
                    <div className='lg:w-1/6 w-full mr-3'>
                      <Select
                        isMulti
                        name="colors"
                        options={departmentOptions}
                        className="basic-multi-select text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1"
                        classNamePrefix="select"
                      />

                    </div>

                    <div className='lg:w-1/6 w-full mr-3'>
                      <Select
                        className='text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1'
                        options={designationOptions}

                        classNamePrefix="select"
                      />

                    </div>

                    <div className='flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg'>
                      <input
                        type="text"
                        placeholder='Search' className='border-none bg-none text-md outline-none w-full'
                        onChange={event => {
                          setSearchItem(event.target.value)
                        }}

                      />
                      <MagnifyingGlass />
                    </div>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="block mb-0 lg:flex lg:w-full lg:justify-between lg:mb-8 flex-wrap">
                    {employeeData.length !== 0 ? employeeData
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
                      .map((card, i) => (
                        <div
                          key={i}
                          className="w-full mb-8 lg:w-80 bg-white p-2 rounded-xl"
                        >
                          <div className="flex w-full">
                            <div className="w-1/3 h-1/4 rounded-xl mr-2">
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
                                  Name : {card.name}
                                </h3>
                                <Link href="/Form">
                                  <NotePencil />
                                </Link>
                              </div>
                              <div>
                                <p className="text-[#9a9a9a] text-xs mb-2">
                                  Staff Id : {card.id}
                                </p>
                                <p className="text-[#9a9a9a] text-xs mb-2">
                                  Designation : {card.designation}
                                </p>
                                <p className="text-[#9a9a9a] text-xs mb-2">
                                  Department : {card.department}
                                </p>
                                <p className="text-[#9a9a9a] text-xs mb-2">
                                  Contact : {card.contact}
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
                      )) : "Loading..."}
                  </div>
                </div>

              </div>

              {modal && (
                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                  <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                  <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/4 h-1/4 text-center  rounded-md'>

                    <div className='flex mb-4 justify-between w-full bg-myGray rounded-t-md'>
                      <div></div>
                      <h2 className='font-bold py-2 border-bottom-2 border-solid border-myGray  ml-8'>Add Teacher</h2>
                      <div onClick={showModal}> <X /></div>
                    </div>
                    <div>
                      <p className='mb-4 cursor-pointer text-base '><Link href='/Form'>Add 1 staff</Link></p>
                      <hr />
                      <p className='mt-4 cursor-pointer text-base'><Link href='/BulkUpload'>Bulk Upload</Link></p>
                    </div>

                  </div>
                </div>
              )}
              {birthdaypop && (
                <div className='w-full absolute top-0 left-0 right-0 bottom-0 flex-col items-center'>
                  <div className='w-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center bg-overlay'></div>

                  <div className='relative w-full lg:w-2/3 flex-col bg-[#eeeeee] rounded-3xl my-2 mx-auto left-20 top-16 '>

                    <div className='flex justify-between w-full h-max items-center pt-1'>

                      <Image src={BirthdayBalloon} alt="" width={50} height={100} className='relative' />

                      <div className='text-center '>
                        <h2 className='text-base font-bold'>Today’s Birthdays</h2>
                        <p className='text-base'>Wish Students and Staff a happy birthday!</p>
                      </div>
                      <div className='mr-1 cursor-pointer' onClick={showBirthday}>
                        <X />
                      </div>

                    </div>

                    <div className='flex-col bg-white'>
                      {
                        birthdays.map((birthday, i) => (
                          <div key={i} className='block lg:flex w-full  py-1 px-4 justify-between'>

                            <div className='flex lg:w-full mb-4 '>
                              <div className='w-24 h-20 rounded-md'>
                                <Image width={100} height={100} src={Man} alt="" className='w-full h-full rounded-md' />
                              </div>

                              <div className='lg:block relative w-full ml-4'>

                                <h3 className='text-sm mb-1'>{birthday.name}</h3>

                                <div>
                                  <p className='text-sm mb-1'>{birthday.age}</p>
                                </div>
                                <div className='lg:flex w-full justify-between  block '>
                                  <div className="flex w-full lg:w-9/12 justify-between border border-solid border-[#d3d3d3]  rounded-md">
                                    <form action="">
                                      <input type="text" placeholder='Wish Dency a happy birthday!' className='w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none' />
                                    </form>
                                    <Camera />
                                  </div>
                                  <form action="" className='w-full mt-1 lg:w-2/12'>
                                    <button className='w-full mt-1 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg'>Post</button>
                                  </form>

                                </div>



                              </div>


                            </div>

                          </div>
                        ))
                      }
                    </div>

                    <div className='text-center cursor-pointer mt-2'>
                      <h4 onClick={showCalender}>Set Upcoming Birthday</h4>
                    </div>
                  </div>

                </div>
              )}

              {calender && (
                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                  <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                  <div className='flex-col w-1/2 h-4/6 rounded-md relative bg-[#f2f6ff] left-1/4 ml-16 top-1/4'>
                    <div className='flex w-full justify-between bg-myGray items-center rounded-t-lg'>
                      <div className='ml-2' onClick={showCalender}>
                        <ArrowLeft />
                      </div>
                      <div className='text-center bg-[#eeeeee]'>
                        <h2 className='text-base font-bold'>Upcoming Birthdays</h2>
                        <p className='text-sm'>Wish Students and Staff a happy birthday!</p>
                      </div>
                      <div >
                        <Image src={Balloon} alt="" width={50} height={100} className='relative' />
                      </div>

                    </div>
                    <div className='flex-col'>
                      <div className='flex justify-between lg:w-full mb-2 p-4 flex-wrap'>
                        {
                          calenders.map((birthday, i) => (
                            <div className='flex items-center w-full lg:w-1/3 mb-8 justify-center' key={i}>
                              <div className='w-20 h-20 rounded-lg'>
                                <Image src={Man} width={100} height={100} alt="" className='w-full h-full rounded-lg cursor-pointer' />
                              </div>
                              <div className='ml-2'>
                                <h4 className='text-base cursor-pointer font-bold'>{birthday.name}</h4>
                                <p className='text-xs cursor-pointer'>{birthday.date}</p>
                              </div>


                            </div>
                          ))
                        }

                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}