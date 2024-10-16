import PropTypes from 'prop-types'
import { Css3Original, Html5Original, JavascriptOriginal, ReactOriginal, TailwindcssOriginal, SassOriginal,
         PhpOriginal, PythonOriginal, DjangoPlain, NodejsOriginal, ExpressOriginal, MongodbOriginal,
         LinuxOriginal, GitOriginal, GithubOriginal, VscodeOriginal, InsomniaOriginal, NotionOriginal,
         ArduinoOriginal, CplusplusOriginal, RaspberrypiOriginal, JavaOriginal
        } from 'devicons-react'


const Knowledge = ({id}) => {
  return (
    <div id={id} className="grid p-2 gap-4 w-full">
      <h2 className="text-xl lg:text-2xl font-bold text-center">Conocimientos.</h2>

      <div className="bg-n150 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        <div className="grid place-items-start md:place-items-center p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3 text-center">Frontend</h3>
          <ul className="grid grid-cols-2 gap-8 text-n5 text-sm">
          <Html5Original size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          <Css3Original size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          <JavascriptOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          <ReactOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          <TailwindcssOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          <SassOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          </ul>
        </div>

        <div className="grid place-items-start md:place-items-center p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Backend</h3>
          <ul className="grid grid-cols-2 gap-8 text-n5 text-sm">
            <PhpOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <PythonOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <DjangoPlain size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <NodejsOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <ExpressOriginal size={50} className="bg-[#f2f2f2] rounded-lg p-1 animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <MongodbOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          </ul>
        </div>

        <div className="grid place-items-start md:place-items-center p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">Otras Habilidades</h3>
          <ul className="grid grid-cols-2 gap-8 text-n5 text-sm">
            <LinuxOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <GitOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <GithubOriginal size={50} className="bg-[#f2f2f2] rounded-lg p-1 animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <VscodeOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <InsomniaOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <NotionOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
          </ul>
        </div>

        <div className="grid md:col-span-3 place-items-start md:place-items-center lg:col-span-1 p-4 bg-n150 rounded-lg gap-4">
          <h3 className="text-lg font-bold text-n3">IOT</h3>
          <ul className="grid grid-cols-2 gap-8 text-n5 text-sm">
            <ArduinoOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <CplusplusOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <RaspberrypiOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
            <JavaOriginal size={50} className="animate__animated animate__pulse" style={{animationDuration: "5s", animationIterationCount: "infinite"}}/>
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