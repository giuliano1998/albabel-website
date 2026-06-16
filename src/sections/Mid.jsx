import { motion } from 'framer-motion'
import { Reveal, VideoFeature, Icon, VIDEOS } from '../lib.jsx'

const pillars = [
  { n: '01', ic: 'search', t: 'Encontramos', d: 'Definimos qué producto te conviene y buscamos al proveedor correcto.',
    items: ['Búsqueda de proveedores', 'Sourcing y cotizaciones', 'Solicitud de muestras'] },
  { n: '02', ic: 'shieldcheck', t: 'Verificamos', d: 'Confirmamos que la fábrica y el producto son reales antes de avanzar.',
    items: ['Auditoría de proveedores', 'Inspección de muestras', 'Negociación de condiciones'] },
  { n: '03', ic: 'sliders', t: 'Gestionamos', d: 'Coordinamos producción, pagos, papeles y consolidación de carga.',
    items: ['Consolidación de carga', 'Operaciones marítimas y aéreas', 'Gestión aduanera'] },
  { n: '04', ic: 'truck', t: 'Entregamos', d: 'Tu mercadería llega a destino y, si querés, hacemos crecer tu marca.',
    items: ['Logística internacional', 'Desarrollo de marca propia', 'Fotografía de catálogo'] },
]

export function Servicios() {
  return (
    <section id="servicios" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Todo lo que necesitás, en cuatro pasos claros</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              De la idea a tu depósito. Vos te ocupás de tu negocio; nosotros, de todo lo demás.
            </p>
          </div>
        </Reveal>
        <motion.div className="grid g-4 pillar-grid" style={{ marginTop: 52 }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: .12 } } }}>
          {pillars.map((p) => (
            <motion.div key={p.t} className="pillar"
              variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } }}>
              <span className="step-tag">{p.n}</span>
              <span className="pic"><Icon name={p.ic} size={26} /></span>
              <h3 className="pillar-t">{p.t}</h3>
              <p className="muted" style={{ marginTop: 8 }}>{p.d}</p>
              <ul className="pillar-list">
                {p.items.map((i) => (
                  <li key={i}><Icon name="check" size={15} />{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const diffs = [
  { ic: 'pin', t: 'Presencia real en China', d: 'Equipo y socio operativo (Yiwu Sunray Trading) donde ocurre el negocio. No dependemos de terceros.' },
  { ic: 'chat', t: 'Atención personalizada 24/7', d: 'Una persona responsable de tu operación, disponible cuando la necesitás —pese a la diferencia horaria.' },
  { ic: 'globe', t: 'Equipo internacional', d: 'Presencia en Argentina, Paraguay, Venezuela y China. Cobertura completa de la ruta.' },
  { ic: 'shield', t: 'Acompañamiento integral', d: 'Desde la idea del producto hasta la entrega final. Nunca quedás solo en una etapa.' },
  { ic: 'bolt', t: 'Respuesta rápida', d: 'Decisiones ágiles porque entendemos que en importación el tiempo es dinero.' },
  { ic: 'eye', t: 'Transparencia total', d: 'Sabés en todo momento dónde está tu plata, tu carga y tu operación.' },
]

export function Diferenciales() {
  return (
    <section className="section dark">
      <div className="blob" style={{ width: 340, height: 340, background: 'var(--green)', top: 40, left: -120 }} />
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <span className="eyebrow light">Por qué Albabel</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Lo que nos hace un socio, no un proveedor más</h2>
          </div>
        </Reveal>
        <motion.div className="grid g-3 feat-grid" style={{ marginTop: 48 }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }}>
          {diffs.map((d) => (
            <motion.div key={d.t} className="feat"
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } }}>
              <span className="feat-ic"><Icon name={d.ic} size={26} /></span>
              <h3 className="feat-t">{d.t}</h3>
              <p className="muted feat-d">{d.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Video2() {
  return (
    <VideoFeature dark
      eyebrow="Conocé quién está detrás" eyebrowVariant="light"
      title="“¿Y cómo sé que esto es real?”"
      video={VIDEOS.dara} name="Dara" role="Oficinas y equipo en China"
      ctaMsg="Hola Albabel, vi el video de Dara y quiero coordinar una llamada.">
      Dara te muestra las oficinas, el equipo y la ubicación real donde trabajamos en China.
      Antes de ayudar a otros a importar, los fundadores de Albabel desarrollaron sus propias operaciones
      —entre ellas <strong>Rey Blunt</strong>, marca reconocida en Argentina en parafernalia y accesorios.
      Negociación con fábricas, control de calidad y logística: lo aprendimos importando para nosotros mismos.
    </VideoFeature>
  )
}
