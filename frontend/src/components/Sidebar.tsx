import { SchoolTalkzLogo } from "@/asset/images"
import { sidebarData } from "@/data"
import Link from "next/link"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Sidebar() {

  return (
    <div className={montserrat.className}>
      <div className={`flex h-screen transition-all w-52 fixed`}>
        <nav className={`bg-gradient-blue w-64 flex flex-col items-center  pt-4 pb-6 text-white  overflow-hidden`}>
          <div className=" uppercase mb-4 p-4">
            <SchoolTalkzLogo />
          </div>
          <div className="flex flex-col items-center">
            {sidebarData.map((data, i) => {
              return <Link key={i} href={data.link} className="flex items-center justify-start gap-3 py-5 pl-10 transition-all hover:bg-light-blue w-full px-4 rounded-l-full ml-5">
                {data.icon}
                <span>{data.name}</span>
              </Link>
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar

// https://www.npmjs.com/package/@szhsin/react-menu