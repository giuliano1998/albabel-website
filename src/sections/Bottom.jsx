import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, WaButton, VideoPlaceholder, waLink } from '../lib.jsx'

export function PresenciaChina() {
  const dots = [
    { city: 'China', top: '34%', left: '78%' },
    { city: 'Argentina', top: '82%', left: '32%' },
    { city: 'Paraguay', top: '72%', left: '34%' },
    { city: 'Venezuela', top: '52%', left: '28%' },
  ]
  return (
    <section className="section dark">
      <div className="container grid g-2" style={{ alignItems: 'center', gap: 50 }}>
        <Reveal>
          <span className="eyebrow light">Presencia operativa</span>
          <h2 className="h-lg" style={{ marginTop: 18 }}>Estamos donde ocurre el negocio</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Mientras otros dependen de terceros a miles de kilómetros, nosotros contamos con presencia operativa
            real en China y en Latinoamérica. Eso significa ojos propios en la fábrica y manos propias en destino.
          </p>
          <div className="trust" style={{ marginTop: 26 }}>
            {['China', 'Argentina', 'Paraguay', 'Venezuela'].map((c) => (
              <span key={c} className="t"><span className="dot" /> {c}</span>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 18 }}>Socio operativo en China: <strong style={{ color: '#fff' }}>Yiwu Sunray Trading Co., Ltd.</strong></p>
        </Reveal>
        <Reveal delay={.15}>
          <div className="map-wrap card" style={{ padding: 0, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <span className="ph-tag" style={{ position: 'absolute', top: 16, left: 16, color: 'rgba(255,255,255,.55)', border: '1px dashed rgba(255,255,255,.3)', padding: '5px 10px', borderRadius: 8, fontSize: '.66rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>Mapa interactivo · placeholder + fotos reales</span>
            <span style={{ fontSize: '4rem', opacity: .25 }}>🗺️</span>
            {dots.map((d) => (
              <span key={d.city} className="map-dot" style={{ top: d.top, left: d.left }} title={d.city} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const casos = [
  ['Importador de deco', 'No sabía si su proveedor era confiable', 'Auditamos y validamos muestras', 'Primer contenedor sin defectos'],
  ['Marca de cosmética', 'Miedo a problemas aduaneros', 'Gestión documental y aduana completa', 'Llegada en tiempo y forma'],
  ['Tienda de electrónica', 'Cotizaciones poco claras', 'Negociación directa en China', 'Mejor margen y precio cerrado'],
  ['Emprendedor textil', 'No sabía qué producto importar', 'Diagnóstico y sourcing a medida', 'Producto ganador en su nicho'],
  ['Distribuidora', 'Retrasos con su agente anterior', 'Coordinación logística integral', 'Operación predecible y a tiempo'],
  ['Marca propia', 'Quería diferenciarse', 'Desarrollo de marca + fotografía', 'Catálogo profesional listo'],
]

export function Carrusel() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
            <span className="eyebrow">Más historias</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Importadores que dejaron de apostar</h2>
          </div>
        </Reveal>
        <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 18, scrollSnapType: 'x mandatory' }}>
          {casos.map((c, i) => (
            <motion.div key={i} style={{ flex: '0 0 auto', width: 250, scrollSnapAlign: 'center' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: (i % 3) * .08 }}>
              <VideoPlaceholder tag={`Reel ${i + 1}`} vertical />
              <div className="card" style={{ padding: '18px 18px', marginTop: 12 }}>
                <strong>{c[0]}</strong>
                <p style={{ fontSize: '.84rem', marginTop: 8 }}><b style={{ color: 'var(--green)' }}>Problema:</b> {c[1]}</p>
                <p style={{ fontSize: '.84rem', marginTop: 4 }}><b style={{ color: 'var(--green)' }}>Solución:</b> {c[2]}</p>
                <p style={{ fontSize: '.84rem', marginTop: 4 }}><b style={{ color: 'var(--gold)' }}>Resultado:</b> {c[3]}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="muted" style={{ textAlign: 'center', marginTop: 10, fontSize: '.85rem' }}>Deslizá para ver más casos →</p>
      </div>
    </section>
  )
}

const faqs = [
  ['¿Cuál es el monto mínimo para importar con Albabel?', 'Trabajamos con operaciones desde USD 3.000. Por debajo de ese monto la importación rara vez es conveniente, por eso preferimos ser claros desde el inicio.'],
  ['No tengo experiencia importando, ¿igual pueden ayudarme?', 'Sí. La mayoría de nuestros clientes no son expertos. Te guiamos paso a paso, desde definir qué producto conviene hasta que la mercadería llega a tu depósito.'],
  ['¿Cómo sé que el proveedor es confiable?', 'Auditamos cada proveedor antes de que pongas un dólar: verificamos que la fábrica sea real, pedimos muestras e inspeccionamos la calidad y la producción.'],
  ['Tengo miedo de perder dinero. ¿Cómo lo evitan?', 'Reducimos el riesgo en cada etapa: validación de proveedores, control de muestras, coordinación de pagos e inspección antes de embarcar. No eliminamos el riesgo, lo gestionamos como lo haría alguien con +10 años en el terreno.'],
  ['¿Puedo hacerlo solo sin un intermediario?', 'Podés, pero cada error —un proveedor falso, un papel mal cargado, una clasificación aduanera incorrecta— cuesta tiempo y plata. Nosotros ya cometimos y resolvimos esos errores importando para nuestras propias marcas.'],
  ['¿Cuánto dinero necesito en total?', 'Depende del producto, volumen y logística. En el diagnóstico inicial te damos un estimado claro de la inversión total para que no haya sorpresas.'],
  ['¿Cuánto tarda una importación?', 'Varía según producto y vía (marítima o aérea). Te damos un cronograma realista desde el inicio y te mantenemos informado en cada etapa.'],
  ['No sé qué producto importar. ¿Me asesoran?', 'Sí. En el diagnóstico analizamos tu negocio y objetivo para recomendarte qué producto tiene sentido importar y con qué proveedor.'],
  ['¿Cómo funciona la aduana?', 'Nos ocupamos de la gestión aduanera y la documentación. Te explicamos lo que necesitás saber sin tecnicismos y nos encargamos de que todo esté en regla.'],
  ['¿Qué pasa si el producto llega defectuoso?', 'Justamente para evitar eso inspeccionamos muestras y producción antes de embarcar. El control de calidad previo es parte central de nuestro trabajo.'],
  ['¿Trabajan con envíos marítimos y aéreos?', 'Sí, ambos. Recomendamos la vía según urgencia, volumen y costo, y coordinamos la consolidación de carga.'],
  ['¿En qué países tienen presencia?', 'Argentina, Paraguay, Venezuela y China, con socio operativo en China (Yiwu Sunray Trading Co., Ltd.).'],
  ['¿Puedo viajar a China con ustedes?', 'Sí. Coordinamos viajes a China para que conozcas fábricas y proveedores de primera mano, con nuestro equipo acompañándote.'],
  ['¿Pueden ayudarme a desarrollar mi propia marca?', 'Sí. Ofrecemos desarrollo de marca propia y fotografía de catálogo para que no importes un commodity, sino un producto con identidad.'],
  ['¿Qué los diferencia de un despachante o agente de compras?', 'Un despachante hace aduana; un agente de compras hace una parte. Nosotros somos un socio estratégico que acompaña toda la operación de punta a punta, con equipo propio en China y LATAM.'],
  ['¿Cómo empiezo?', 'Escribinos por WhatsApp. Coordinamos una primera conversación de diagnóstico sin compromiso y te decimos con honestidad si podemos ayudarte.'],
]

function FaqRow({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen(!open)}>
        {q}<span className="faq-ic">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }}>
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>Las dudas que todo importador tiene</h2>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <div>{faqs.map(([q, a]) => <FaqRow key={q} q={q} a={a} />)}</div>
        </Reveal>
      </div>
    </section>
  )
}

export function VideoFinal() {
  return (
    <section className="section dark">
      <div className="container grid g-2" style={{ alignItems: 'center', gap: 48 }}>
        <Reveal>
          <span className="eyebrow light">Una invitación</span>
          <h2 className="h-lg" style={{ marginTop: 18 }}>Si llegaste hasta acá, ya sabés que no querés hacerlo solo</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Dara te cuenta, de persona a persona, por qué vale la pena dar el paso con un equipo que ya lo recorrió.
            Sin libretos de vendedor. Solo una invitación honesta a empezar la conversación.
          </p>
          <div style={{ marginTop: 26 }}>
            <WaButton msg="Hola Albabel, quiero empezar a importar desde China con ustedes." />
          </div>
        </Reveal>
        <Reveal delay={.15}>
          <VideoPlaceholder tag="Video final" name="Dara" role="La invitación · cierre humano" />
        </Reveal>
      </div>
    </section>
  )
}

export function CTAFinal() {
  return (
    <section id="contacto" className="section" style={{ background: 'var(--gold-soft)' }}>
      <div className="container grid g-2" style={{ alignItems: 'center', gap: 50 }}>
        <Reveal>
          <span className="eyebrow gold">Próximo paso</span>
          <h2 className="h-xl" style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)', marginTop: 18 }}>
            Importá con un socio, no con un proveedor más
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            La forma más rápida de empezar es por WhatsApp. Te respondemos personalmente y coordinamos
            un diagnóstico sin compromiso. Operaciones desde USD 3.000.
          </p>
          <div style={{ marginTop: 28 }}>
            <WaButton msg="Hola Albabel, quiero coordinar un diagnóstico para importar desde China." className="btn btn-wa" />
          </div>
          <p className="muted" style={{ marginTop: 16, fontSize: '.86rem' }}>Atención personalizada 24/7 · Argentina · Paraguay · Venezuela · China</p>
        </Reveal>
        <Reveal delay={.15}>
          <form className="card" style={{ padding: 30 }} onSubmit={(e) => {
            e.preventDefault()
            const f = e.target
            const msg = `Hola Albabel, soy ${f.nombre.value}. Quiero importar: ${f.producto.value}. Inversión estimada: ${f.monto.value}.`
            window.open(waLink(msg), '_blank')
          }}>
            <h3 className="h-md" style={{ fontSize: '1.3rem', marginBottom: 18 }}>Dejanos tus datos</h3>
            <div className="field"><label>Nombre</label><input name="nombre" required placeholder="Tu nombre" /></div>
            <div className="field"><label>¿Qué querés importar?</label><input name="producto" required placeholder="Ej: artículos de deco, electrónica…" /></div>
            <div className="field"><label>Inversión estimada</label>
              <select name="monto" required defaultValue="">
                <option value="" disabled>Seleccioná un rango</option>
                <option>USD 3.000 – 10.000</option>
                <option>USD 10.000 – 30.000</option>
                <option>USD 30.000 – 100.000</option>
                <option>Más de USD 100.000</option>
              </select>
            </div>
            <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>Enviar y abrir WhatsApp</button>
            <p className="muted" style={{ fontSize: '.76rem', marginTop: 12, textAlign: 'center' }}>Importación mínima USD 3.000. Te contactamos a la brevedad.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding: '56px 22px 30px' }}>
        <div className="grid g-3" style={{ gap: 30 }}>
          <div>
            <img src="/assets/images/logos/Albabel-letrasblancas.png" alt="Albabel" style={{ height: 36 }} />
            <p style={{ marginTop: 16, maxWidth: 320, fontSize: '.92rem' }}>
              Socio estratégico para importar desde China hacia Latinoamérica. Reducimos el riesgo y te acompañamos en toda la operación.
            </p>
          </div>
          <div>
            <strong style={{ color: '#fff' }}>Navegación</strong>
            <ul style={{ listStyle: 'none', marginTop: 14, display: 'grid', gap: 10, fontSize: '.92rem' }}>
              <li><a href="#problema">El problema</a></li>
              <li><a href="#servicios">Cómo trabajamos</a></li>
              <li><a href="#casos">Casos de éxito</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <strong style={{ color: '#fff' }}>Presencia</strong>
            <ul style={{ listStyle: 'none', marginTop: 14, display: 'grid', gap: 10, fontSize: '.92rem' }}>
              <li>Argentina · Paraguay</li>
              <li>Venezuela · China</li>
              <li>Socio: Yiwu Sunray Trading Co., Ltd.</li>
              <li style={{ marginTop: 6 }}><WaButton className="btn btn-wa" msg="Hola Albabel, quiero más información.">WhatsApp</WaButton></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', marginTop: 40, paddingTop: 22, fontSize: '.82rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>© {new Date().getFullYear()} Albabel. Todos los derechos reservados.</span>
          <span>Importar desde China, sin que se sienta una apuesta.</span>
        </div>
      </div>
    </footer>
  )
}
