import PropTypes from 'prop-types'


const Knowledge = ({id}) => {
  return (
    <div id={id} className="grid p-2 gap-4 w-full">
      <h2 className="text-xl font-bold text-center">Conocimientos.</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="grid place-items-start p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Frontend</h3>
          <ul className="grid grid-cols-1 gap-4 text-n5 text-sm">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>SASS</li>
          </ul>
        </div>

        <div className="grid place-items-start p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Backend</h3>
          <ul className="grid grid-cols-1 gap-4 text-n5 text-sm">
            <li>PHP</li>
            <li>Python</li>
            <li>Django</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="grid place-items-start p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Otros</h3>
          <ul className="grid grid-cols-1 gap-4 text-n5 text-sm">
            <li>Linux</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VSCode</li>
            <li>Insomnia</li>
            <li>Inglés</li>
          </ul>
        </div>

        <div className="grid place-items-start p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Electrónica</h3>
          <ul className="grid grid-cols-1 gap-4 text-n5 text-sm">
            <li>Arduino</li>
            <li>Raspberry</li>
            <li>ESP32</li>
            <li>NodeMCU</li>
            <li>ESP8266</li>
          </ul>
        </div>
        
        <div className="grid col-span-2 md:col-span-3 lg:col-span-4 place-items-center p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Refrigeración</h3>
          <ul className="grid grid-cols-1 gap-4 text-n5 text-sm">
            <li>HVAC</li>
            <li>Chillers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Knowledge.propTypes = {
  id: PropTypes.string
}

export default Knowledge