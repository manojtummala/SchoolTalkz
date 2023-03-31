import Feed from "@/components/Feed";
import Head from 'next/head';
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";



export default function Home() {
  return (
    <div className={montserrat.className}>
      <Layout>
        <div>
          <Feed />
        </div>
      </Layout>
    </div>
  );
}
