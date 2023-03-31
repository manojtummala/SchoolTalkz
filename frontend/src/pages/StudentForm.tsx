import Head from "next/head";
import Link from "next/link";
import Select from "react-select";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Configuration/MyHeader";
import Sidebar from "@/components/Sidebar";
import { FormEvent, useEffect, useState } from "react";
import StudentHeaderAdd from "@/components/Configuration/StudentHeaderAdd";
import { authInstance } from "./api/axios";

// const classOptions = [
//   { value: "I Standard", label: "I standard" },
//   { value: "II Standard", label: "II Standard" },
//   { value: "III Standard", label: "III Standard" },
//   { value: "IV Standard", label: "IV Standard" },
//   { value: "V Standard", label: "V Standard" },
//   { value: "VI Standard", label: "VI Standard" },
//   { value: "VII Standard", label: "VII Standard" },
//   { value: "VIII Standard", label: "VIII Standard" },
// ];

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export default function Studentform() {
  const [addStaff, setAddStaff] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    try {
      const response = await authInstance.post("/createOneStudent", data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

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
      <main className='w-cover flex p-4 justify-around pl-10'>
        <div className='w-1/12 flex flex-col items-center'>
          <Sidebar />
        </div>
        <div className='w-full pl-10 rounded-3xl'>
          <div>
            <StudentHeaderAdd />
            {/* <Studentheader/> */}
          </div>
          <div>
            <form
              className="relative rounded-b-3xl p-4 w-full flex-col bg-myBlue"
              onSubmit={(e) => handleForm(e)}
            >
              <div className="rounded-t-xl bg-myGray flex items-center justify-center h-16">
                <h1 className="text-xl flex items-center justify-center">
                  Student Information
                </h1>
              </div>
              <div className="flex-col bg-white">
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Roll No.</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter Student ID"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          id_by_school: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>First Name</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter First Name"
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Last Name</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Standard</p>
                    <Select
                      name="association"
                      options={classData}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) =>
                        setFormData({ ...formData, associationId: e.value })
                      }
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>School Name</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter School Name"
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Gender</p>
                    <Select
                      name="colors"
                      options={genderOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e?.value || "" })
                      }
                    />
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Email</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Phone no.</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter Phone no."
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Father's Name</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="text"
                      placeholder="Enter Father's Name"
                    />
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between py-1 px-8">
                  <div className="lg:flex-col lg:w-1/4 w-full mb-2">
                    <p>Date of Birth</p>
                    <input
                      className="py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full"
                      type="date"
                      placeholder="Enter Date of Birth"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dob: String(new Date(e.target.value)),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="block lg:flex py-4 px-12 w-full justify-end bg-white rounded-b-2xl">
                <button className="flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5">
                  <Link href="/Studentprofile">Cancel</Link>
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
