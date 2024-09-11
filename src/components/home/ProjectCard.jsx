import PropTypes from 'prop-types'
import { useState } from 'react'
const ProjectCard = ({ project }) => {
  const [image, setImage] = useState(project.images[0])
  return (
    <div className="grid place-items-center p-4 bg-n150 rounded-lg gap-4">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <div className="grid place-items-center gap-4">
        <img className="max-h-[275px] object-cover rounded-lg shadow-lg p-1" src={`/projects/${image}`} alt={project.name} />
        {/* thumbnails */}
        <div className="flex justify-center gap-2 overflow-x-auto">
          {project.images.map((img) => (
            <img
              className={"w-16 rounded-xl hover:opacity-100 cursor-pointer " + (img === image ? " opacity-100" : "opacity-50")}
              src={`/projects/${img}`}
              alt={project.name}
              key={img}
              onClick={() => setImage(img)}
            />
          ))}
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
    images: PropTypes.array
  })
}

export default ProjectCard