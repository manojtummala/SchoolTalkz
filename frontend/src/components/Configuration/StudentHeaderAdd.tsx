import Image from 'next/image'
import Bell from "@/asset/images/Bell";
import Moon from "@/asset/images/Moon";
import Student from "@/asset/images/Student";
import Man from '@/asset/images/Man.jpg'



function StudentHeaderAdd() {
  return (
    <div className='relative rounded-t-3xl flex justify-between items-center w-full h-20 bg-myBlue px-4'>
      <div className='flex items-center justify-between py-2 px-4'>
       <Student/>
        <span className='font-bold ml-2'>Student</span>
        <p text-myGray>/Add Teacher</p>
      </div>
      <div className='flex justify-between items-center'>
        <Bell />
        <Moon/>

        <div className='w-10 h-10 rounded-full mr-4'>
<Image src={Man} alt="" className='w-full h-full rounded-full object-cover cursor-pointer' width={100} height={100}/>
        </div>
      </div>
    </div>
  )
}

export default StudentHeaderAdd