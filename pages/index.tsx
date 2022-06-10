import type { NextPage } from 'next'
import Head from 'next/head'
import BioSection from '../components/BioSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import {useState} from 'react'
import ProjectPreview from '../components/ProjectPreview'

const Home: NextPage = () => {
  const [projectPreviewData, setProjectPreviewData] = useState({
    projectName: "Toko Online Komunitas Discord",
    projectImage: "",
    projectDesc: "Membuat toko online menggunakan NextJS + Tailwind dan Spring Boot",
    projectURL: "https://github.com/AdiCahyaSaputra"
  });
  const [projectPreview, setProjectPreview] = useState(false);


  return (
    <>
      <Head>
        <title>Adi Cahya Saputra</title>
      </Head>
      <div className='no-scrollbar'>
        { projectPreview && ( <ProjectPreview data={projectPreviewData}/> ) }
        <BioSection />
        <ProjectSection />
        <Footer />
      </div>
    </>
  )
}

export default Home;
