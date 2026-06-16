import { Nav, Hero, Video1, Problema, Solucion } from './sections/Top.jsx'
import { Servicios, Diferenciales, Video2 } from './sections/Mid.jsx'
import { PresenciaChina, Carrusel, FAQ, VideoFinal, CTAFinal, Footer } from './sections/Bottom.jsx'
import { WaIcon, waLink } from './lib.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Video1 />
        <Problema />
        <Solucion />
        <Servicios />
        <Diferenciales />
        <Video2 />
        <PresenciaChina />
        <Carrusel />
        <FAQ />
        <VideoFinal />
        <CTAFinal />
      </main>
      <Footer />
      <a className="fab" href={waLink('Hola Albabel, quiero importar desde China.')} target="_blank" rel="noopener noreferrer" aria-label="Hablar por WhatsApp">
        <WaIcon /><span className="fab-txt">Hablar por WhatsApp</span>
      </a>
    </>
  )
}
