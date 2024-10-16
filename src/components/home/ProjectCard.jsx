import PropTypes from 'prop-types'
import { useState } from 'react'
import url from '../../url'

const ProjectCard = ({ project }) => {
  const [image, setImage] = useState(project.images[0])
  return (
    <div className="grid place-items-center p-4 bg-n150  rounded-lg gap-4 transition-all duration-300 hover:shadow-[0px_0px_10px_1px_#f0b90b]">
      <h3 className="text-lg lg:text-2xl font-bold">{project.name}</h3>
      <div className="grid place-items-center gap-4">
        <img id={image} data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="max-h-[275px] object-cover rounded-lg shadow-lg p-1" src={`${url}/projects/${image}`} alt={project.name} />
        {/* thumbnails */}
        <div className="flex justify-center gap-2 overflow-x-auto">
          {project.images.map((img) => (
            <img
              className={"w-16 rounded-xl hover:opacity-100 cursor-pointer object-cover transition-all duration-300 " + (img === image ? " opacity-100" : "opacity-50")}
              src={`${url}/projects/${img}`}
              alt={project.name}
              key={img}
              onClick={() => setImage(img)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a href={project.code} target="_blank" className="w-full bg-n3 rounded-full px-2 py-1 text-center">Ver código</a>
          <a href={project.demo} target="_blank" className="w-full bg-n2 rounded-full px-2 py-1 text-center">Ver demo</a>
        </div>
      </div>
      <p className="text-sm text-justify">{project.description}</p>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array,
    code: PropTypes.string,
    demo: PropTypes.string
  })
}

export default ProjectCard