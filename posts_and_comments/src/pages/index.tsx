import Feed from "@/components/Feed";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Layout>
        <div>
          <Feed/>
        </div>
      </Layout>
    </div>
  );
}
