import { SchoolTalkzLogo } from "@/asset/images"
import { sidebarData } from "@/data"
import Link from "next/link"

function Sidebar() {
  
  return (
    <div className={`flex h-screen transition-all w-52 fixed`}>
      <nav className={`bg-gray-800 w-64 flex flex-col items-center  pt-4 pb-6 text-white  overflow-hidden`}>
        <div className=" uppercase mb-4 p-4">
          <SchoolTalkzLogo/>
        </div>
        <div className="flex flex-col items-center">
          {sidebarData.map(data => {
            return <Link href={data.link} className="flex items-center justify-start gap-3 py-5 pl-10 transition-all hover:bg-light-blue w-full px-4 rounded-l-full ml-5">
              {data.icon}
              <span>{data.name}</span>
            </Link>
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar

// https://www.npmjs.com/package/@szhsin/react-menu