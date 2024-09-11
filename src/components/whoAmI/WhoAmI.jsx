import PropTypes from 'prop-types'


const WhoAmI = ({id}) => {
  return (
    <div id={id} className="grid place-items-center gap-4 p-2 pt-16">
      <h2 className="text-xl lg:text-2xl font-bold">¿Quien soy?</h2>
      <span className="grid gap-4 text-justify text-md lg:text-lg p-2 ">

      <p>Mi nombre es
        <span className="text-n3"> Ángel Miguel Arévalo Cabello</span>
        , tengo
        <span className="text-n3"> 23 años </span>
        y soy de
        <span className="text-n3"> Venezuela.</span></p>
      <p>Soy
        <span className="text-n3"> Full Stack Developer</span>
        , me encanta la programación, la electrónica y la inteligencia artificial. </p>
      <p>Siempre me apasiona aprender y me encanta compartir mis experiencias con otros.</p>
      <p className="text-lg place-self-center text-center p-2">¡Gracias por visitar mi portafolio!</p>
      </span>
    </div>
  )
}

WhoAmI.propTypes = {
  id: PropTypes.string
}

export default WhoAmI