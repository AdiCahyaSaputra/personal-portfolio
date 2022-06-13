import type { NextPage } from 'next'
import Head from 'next/head'
import BioSection from '../components/BioSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import {useState} from 'react'
import ProjectPreview from '../components/ProjectPreview'
import { ProjectContext, ProjectContextInterface } from '../context/ProjectContext'
import { GetServerSideProps } from 'next'
import project from '../public/json/project.json'
  
export const getServerSideProps: GetServerSideProps = async () => {
  const data = project;

  return {
    props: {
      data
    }
  }
}

const Home: NextPage = () => {
  const [projectPreviewData, setProjectPreviewData] = useState({
    projectName: "Toko Online Komunitas Discord",
    projectImage: "",
    projectDesc: "Membuat toko online menggunakan NextJS + Tailwind dan Spring Boot",
    projectURL: "https://github.com/AdiCahyaSaputra"
  });
  const [isOnPreview, setIsOnPreview] = useState(false);
  
  const ProjectCTX: ProjectContextInterface = {
    data: projectPreviewData,
    onPreview: isOnPreview,
    setOnPreview: (onPreview: ProjectContextInterface['onPreview']): void => {
      setIsOnPreview(onPreview);
    },
    setProjectPreviewData: (data: ProjectContextInterface['data']) => {
      setProjectPreviewData(data);
    }
  }

  return (
    <>
      <Head>
        <title>Adi Cahya Saputra</title>
      </Head>
      <div className='no-scrollbar'>
        <BioSection />
        <ProjectContext.Provider value={ProjectCTX}>
          { isOnPreview && ( <ProjectPreview/> ) }
          <ProjectSection />
        </ProjectContext.Provider>
        <Footer />
      </div>
    </>
  )
}

export default Home;
