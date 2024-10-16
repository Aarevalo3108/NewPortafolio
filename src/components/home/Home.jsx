import Projects from "./Projects"
import WhoAmI from "../whoAmI/WhoAmI"
import Knowledge from "../knowledge/Knowledge"
import Contact from "../contact/Contact"
import url from "../../url"

import 'animate.css';


const Home = () => {
  return (
  <section className=" relative grid place-items-center py-8 px-4 gap-16">
    <div id="home" className="rounded-xl p-4 relative flex gap-4 items-center justify-center">
      <h1 className="text-2xl lg:text-3xl font-bold p-2">¡Hola!<br /> Bienvenido a mi portafolio, soy <span className="text-n3 text-3xl lg:text-4xl">Ángel Arévalo</span></h1>
      <img className="animate__animated animate__rotateInDownLeft w-20 md:w-24 lg:w-28 rounded-full bg-gradient-to-t from-n4 to-n3 p-1" src={`${url}/images/angel.webp`} alt="Angel" />
    </div>
    <p className=" text-md lg:text-lg"><span className="text-n3">Desarrollador Full Stack</span> en constante aprendizaje, técnico en <span className="text-n3">Refrigeración</span> y <span className="text-n3">Electrónica</span>.</p>
    <Projects id="projects" />
    <WhoAmI id="whoami" />
    <Knowledge id="knowledge" />
    <Contact id="contact" />
  </section>
  )
}

export default Home