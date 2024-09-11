import PropTypes from 'prop-types'
const Contact = ({id}) => {

  return (
    <section id={id} className="grid place-items-center p-2">
      <h2 className="text-xl font-bold">Contacto</h2>
      <div className="grid grid-cols-2 place-items-center p-2 gap-4">
          <a href="angelarevalo480@gmail.com" target="_blank" rel="noreferrer">
            <img className="w-12 rounded-full bg-gradient-to-t from-n4 to-n3 p-1" src="/images/mail.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/%C3%A1ngel-arevalo-b62668261/" target="_blank" rel="noreferrer">
            <img className="w-12 rounded-full bg-gradient-to-t from-n4 to-n3 p-1" src="/images/linkedin.svg" alt="Linkedin" />
          </a>
      </div>
    </section>
  )
}

Contact.propTypes = {
  id: PropTypes.string
}

export default Contact