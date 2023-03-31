import Head from "next/head";
import Link from "next/link";
import Select from "react-select";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Configuration/MyHeader";
import Sidebar from "@/components/Sidebar";
import { FormEvent, SyntheticEvent, useEffect } from "react";
import StaffHeaderAdd from "@/components/Configuration/StaffHeaderAdd";
import { authInstance } from "./api/axios";
import { useState } from "react";
import X from "@/asset/images/X";


const departmentOptions = [
  { value: "Tamil", label: "Tamil" },
  { value: "English", label: "English" },
  { value: "Science", label: "Science" },
  { value: "Maths", label: "Maths" },
  { value: "Computer", label: "Computer" },
  { value: "Maths", label: "Maths" },
  { value: "Hindi", label: "Hindi" },
  { value: "Social Science", label: "Social Science" },
  { value: "Sports", label: "Sports" },
];

const designationOptions = [
  { value: "Junior Staff", label: "Junior Staff" },
  { value: "Senior Staff", label: "Senior Staff" },
];

const maritalOptions = [
  { value: "Married", label: "Married" },
  { value: "Unmarried", label: "Unmarried" },
];

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export default function Form() {
  const [addStaff, setAddStaff] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setAddStaff(true)
  }

  function close() {
    setAddStaff(false);
  }
  return (
    <>
      <Head>
        <title>School Talkz</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../images/logo.png" />
      </Head>
      <main className="w-cover flex justify-around p-4 pl-10">
        <div className="w-1/12 flex flex-col items-center">
          <Sidebar />
        </div>
        <div className="w-5/6 rounded-5xl">
          <div>
            <StaffHeaderAdd />
            {/* <Studentheader/> */}
          </div>
          <div>
            <form className="relative rounded-b-3xl p-4 w-full flex-col bg-myBlue"
              onSubmit={handleSubmit(onSubmit)} >
              <div className="rounded-t-xl bg-myGray flex items-center justify-center h-16">
                <h1 className="text-xl flex items-center justify-center">
                  Staff Information
                </h1>
              </div>
              <div className="flex-col bg-white">
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Staff ID</p>
                    <input
                      type="number"
                      placeholder="Enter staff ID"
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      {...register('staff', { required: true })}
                    />
                    {errors.staff && <p className="text-red-600 text-sm">Please check the Staff</p>}
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>First Name</p>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"

                    />
                    {errors.firstName && <p className="text-red-600 text-sm">Please check the First Name</p>}
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Last Name</p>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      {...register('lastName', {
                        required: true,
                        maxLength: 15
                      })}
                    />
                    {errors.lastName && <p className="text-red-600 text-sm">Please check the Last Name</p>}
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Department</p>
                    <Select
                      name="colors"
                      options={departmentOptions}
                      className="basic-multi-select bg-[#fafafa] text-base"
                      classNamePrefix="select Department"
                    />

                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Designation</p>
                    <Select
                      className=" bg-[#fafafa] text-base"
                      options={designationOptions}
                      classNamePrefix="select"
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Gender</p>
                    <Select
                      className=" bg-[#fafafa] text-base"
                      name="colors"
                      options={genderOptions}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Email</p>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      {...register('email',
                        {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                    {errors.email && <p className="text-red-600 text-sm">Please check the Email</p>}
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Phone No.</p>
                    <input
                      type='number'
                      placeholder="Enter Phone No."
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      {...register('phone',
                        {
                          required: true,
                          maxLength: 10
                        })}
                    />
                    {errors.phone && <p className="text-red-600 text-sm">Please check the Phone Number</p>}
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Marital status</p>
                    <Select
                      className=" bg-[#fafafa] text-base"
                      options={maritalOptions}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Date of birth</p>
                    <input
                      type="date"
                      placeholder="Enter Date of birth"
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      {...register('dob', { required: true, })}
                    />
                    {errors.dob && <p className="text-red-600 text-sm">Please check Date of Birth</p>}


                  </div>

                </div>
              </div>
              <div className="block lg:flex py-4 px-12 w-full justify-end bg-white rounded-b-2xl">
                <button className="flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5">
                  <Link href="/Dashboard">Cancel</Link>
                </button>
                <button type="submit" className="flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5">
                  Submit
                </button>
              </div>
            </form>
            {addStaff && (
              <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
                <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay"></div>
                <div className="absolute top-1/3 left-1/3 ml-40 bg-white w-1/6 h-1/6 text-center  rounded-md">
                  <div className="flex mb-4 justify-end w-full bg-myGray rounded-t-md" onClick={close}><X /></div>
                  <div>
                    <p className="flex items-center justify-center cursor-pointer text-base ">
                      Added Staff Successfully
                    </p>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
