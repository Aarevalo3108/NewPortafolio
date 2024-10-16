import PropTypes from 'prop-types'

const Icon = ({text, refTo}) => {
  return (
    <a className="text-center border-1 border-n6 text-sm md:text-lg md:px-4 py-2  transition-all duration-300 rounded-full hover:shadow-[inset_0px_0px_5px_1px_#f0b90b]" href={`#${refTo}`}>{text}</a>
  )
}


Icon.propTypes = {
  text: PropTypes.string,
  refTo: PropTypes.string
}


const NavBar = () => {
  return (
    <nav className="z-50 backdrop-blur-[2px] grid grid-cols-4 gap-2 px-8 justify-items-around items-center place-self-center rounded-full m-1 sticky top-0 bg-[#1c2940] w-full max-w-[600px]">
      <Icon refTo="home" text="Inicio"/>
      <Icon refTo="projects" text="Proyectos"/>
      <Icon refTo="whoami" text="Sobre Mi"/>
      <Icon refTo="contact" text="Contacto"/>
    </nav>
  )
}

export default NavBar