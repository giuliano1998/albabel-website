import { motion } from 'framer-motion'
import { Reveal, WaButton, VideoPlaceholder } from '../lib.jsx'

const pillars = [
  { n: '01', ic: '🔎', t: 'Encontramos', d: 'Definimos qué producto te conviene y buscamos al proveedor correcto.',
    items: ['Búsqueda de proveedores', 'Sourcing y cotizaciones', 'Solicitud de muestras'] },
  { n: '02', ic: '✅', t: 'Verificamos', d: 'Confirmamos que la fábrica y el producto son reales antes de avanzar.',
    items: ['Auditoría de proveedores', 'Inspección de muestras', 'Negociación de condiciones'] },
  { n: '03', ic: '⚙️', t: 'Gestionamos', d: 'Coordinamos producción, pagos, papeles y consolidación de carga.',
    items: ['Consolidación de carga', 'Operaciones marítimas y aéreas', 'Gestión aduanera'] },
  { n: '04', ic: '📦', t: 'Entregamos', d: 'Tu mercadería llega a destino y, si querés, hacemos crecer tu marca.',
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
              Más de una docena de servicios, agrupados en un proceso simple. Vos te ocupás de tu negocio; nosotros, de todo lo demás.
            </p>
          </div>
        </Reveal>
        <motion.div className="grid g-4" style={{ marginTop: 48 }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: .12 } } }}>
          {pillars.map((p) => (
            <motion.div key={p.t} className="card pillar"
              variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } }}>
              <span className="step-tag">{p.n}</span>
              <div className="pic">{p.ic}</div>
              <h3 className="h-md" style={{ fontSize: '1.4rem' }}>{p.t}</h3>
              <p className="muted" style={{ marginTop: 10 }}>{p.d}</p>
              <ul style={{ listStyle: 'none', marginTop: 16, display: 'grid', gap: 8 }}>
                {p.items.map((i) => (
                  <li key={i} style={{ fontSize: '.9rem', fontWeight: 600, display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--green)' }}>•</span>{i}
                  </li>
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
  { ic: '🇨🇳', t: 'Presencia real en China', d: 'Equipo y socio operativo (Yiwu Sunray Trading) donde ocurre el negocio. No dependemos de terceros.' },
  { ic: '🤝', t: 'Atención personalizada 24/7', d: 'Una persona responsable de tu operación, disponible cuando la necesitás —pese a la diferencia horaria.' },
  { ic: '🌎', t: 'Equipo internacional', d: 'Presencia en Argentina, Paraguay, Venezuela y China. Cobertura completa de la ruta.' },
  { ic: '🛡️', t: 'Acompañamiento integral', d: 'Desde la idea del producto hasta la entrega final. Nunca quedás solo en una etapa.' },
  { ic: '⚡', t: 'Respuesta rápida', d: 'Decisiones ágiles porque entendemos que en importación el tiempo es dinero.' },
  { ic: '🔍', t: 'Transparencia total', d: 'Sabés en todo momento dónde está tu plata, tu carga y tu operación.' },
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
        <motion.div className="grid g-3" style={{ marginTop: 48 }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }}>
          {diffs.map((d) => (
            <motion.div key={d.t} className="card" style={{ padding: 28 }}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } }}>
              <div style={{ fontSize: '2rem' }}>{d.ic}</div>
              <h3 style={{ fontSize: '1.22rem', marginTop: 14 }}>{d.t}</h3>
              <p className="muted" style={{ marginTop: 10 }}>{d.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function CasoLeTapis() {
  return (
    <section id="casos" className="section" style={{ background: 'var(--gold-soft)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
            <span className="eyebrow gold">Caso de éxito</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Le Tapis: de una idea a una marca importando bien</h2>
          </div>
        </Reveal>
        <div className="grid g-2" style={{ alignItems: 'center', gap: 48 }}>
          <Reveal><VideoPlaceholder tag="Caso Le Tapis" name="Le Tapis" role="Historia completa del cliente" /></Reveal>
          <Reveal delay={.15}>
            <div className="grid" style={{ gap: 22 }}>
              {[
                ['El problema', 'Querían importar producto de calidad desde China pero no sabían por dónde empezar, ni cómo evitar quedar a merced de un proveedor desconocido.'],
                ['El proceso', 'Definimos el producto, auditamos fábricas, validamos muestras, negociamos condiciones y coordinamos toda la logística y aduana de punta a punta.'],
                ['El resultado', 'Una operación exitosa, sin sorpresas, que les permitió construir y escalar su marca con márgenes sanos y stock confiable.'],
              ].map(([t, d]) => (
                <div key={t} className="card" style={{ padding: '22px 26px' }}>
                  <strong style={{ color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: '.78rem' }}>{t}</strong>
                  <p style={{ marginTop: 8 }}>{d}</p>
                </div>
              ))}
              <WaButton msg="Hola Albabel, vi el caso de Le Tapis y quiero algo similar para mi marca." />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Video2() {
  return (
    <section className="section dark">
      <div className="container grid g-2" style={{ alignItems: 'center', gap: 48 }}>
        <Reveal delay={.15}>
          <VideoPlaceholder tag="Video 2" name="Giuliano Raschetti" role="Oficinas, equipo y proceso real en China" />
        </Reveal>
        <Reveal>
          <span className="eyebrow light">Conocé quién está detrás</span>
          <h2 className="h-lg" style={{ marginTop: 18 }}>“¿Y cómo sé que esto es real?”</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Giuliano Raschetti te muestra las oficinas, el equipo y la ubicación real donde trabajamos en China.
            Antes de ayudar a otros a importar, los fundadores de Albabel desarrollaron sus propias operaciones
            —entre ellas <strong>Rey Blunt</strong>, marca reconocida en Argentina en parafernalia y accesorios.
          </p>
          <p className="muted" style={{ marginTop: 14 }}>
            Negociación con fábricas, control de calidad, logística internacional y posicionamiento de marca: lo aprendimos importando para nosotros mismos. Por eso sabemos lo que está en juego.
          </p>
          <div style={{ marginTop: 26 }}>
            <WaButton msg="Hola Albabel, vi el video de Giuliano y quiero coordinar una llamada." />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const steps = [
  ['Diagnóstico', 'Entendemos tu producto, tu objetivo y tu presupuesto. Definimos si conviene importar y cómo.'],
  ['Búsqueda', 'Buscamos y preseleccionamos proveedores reales que cumplan tus requisitos.'],
  ['Validación', 'Auditamos la fábrica, pedimos muestras e inspeccionamos calidad antes de comprometer dinero.'],
  ['Compra', 'Negociamos condiciones, coordinamos el pago seguro y la producción.'],
  ['Logística', 'Consolidamos la carga, gestionamos el embarque marítimo o aéreo y la aduana.'],
  ['Entrega', 'Tu mercadería llega a destino. Acompañamos también el desarrollo de tu marca si lo necesitás.'],
]

export function Proceso() {
  return (
    <section id="proceso" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <span className="eyebrow">El proceso</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Seis pasos. Cero zonas grises.</h2>
            <p className="lead" style={{ marginTop: 18 }}>Así de simple se siente importar cuando lo hacés con un socio que ya recorrió el camino.</p>
          </div>
        </Reveal>
        <div className="grid g-2" style={{ marginTop: 48, gap: '20px 56px' }}>
          {steps.map((s, i) => (
            <Reveal key={s[0]} delay={i * .05}>
              <div className="step-line" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>{s[0]}</h3>
                  <p className="muted" style={{ marginTop: 6 }}>{s[1]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.1}>
          <div style={{ textAlign: 'center', marginTop: 46 }}>
            <WaButton msg="Hola Albabel, quiero empezar por el diagnóstico de mi importación." />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
