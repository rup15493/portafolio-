import Header from "@/components/Header"
import Heroe from "@/components/Heroe"
import { NextPage } from "next"
import Head from "next/head"
import About from "@/components/About"
import Work from "@/components/Work"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"



const  Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0
    overflow-x-hidden scrollbar 
    scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
      <Head>
        <title> Roberto Portafolio</title>
      </Head>
      <Header />

      <section id ="heroe" className="snap-start">
      <Heroe />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="work" className="snap-center">
        <Work />
      </section>
      <section id="skilss" className="snap-center"> 
      <Skills />
      </section>
      <section id="Projects" className="snap-center"> 
      <Projects />
      </section>
      <section id="contact" className="snap-center">
      <Contact />
      </section>
    </div>
  )
}

export default Home;