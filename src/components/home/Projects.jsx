import { useState } from "react"
import PropTypes from 'prop-types'
import ProjectCard from "./ProjectCard"
import data from "../../data/projects.json"


const Projects = ({id}) => {
  const [type, setType] = useState("web")
  return (
    <div id={id} className="grid place-items-center p-2 pt-16">
      <h2 className="text-xl font-bold">Proyectos Realizados.</h2>
      <div className="grid p-4 grid-cols-2 gap-4">
        <button className={"px-4 py-1 rounded-full hover:bg-n3 hover:text-n1 hover:scale-105 transition-all duration-300 " + (type === "web" ? "bg-n3 text-n1" : "bg-n2 text-n6")} onClick={() => setType("web")}>FullStack</button>
        <button className={"px-4 py-1 rounded-full hover:bg-n3 hover:text-n1 hover:scale-105 transition-all duration-300 " + (type === "ref" ? "bg-n3 text-n1" : "bg-n2 text-n6")} onClick={() => setType("ref")}>Refrigeración</button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {data.docs
          .filter((project) => project.type === type)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  id: PropTypes.string
}

export default Projects