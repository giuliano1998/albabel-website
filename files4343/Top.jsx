import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Reveal, WaButton, VideoFeature, Icon, VIDEOS } from '../lib.jsx'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#top" aria-label="Albabel inicio" className="nav-wordmark">ALBABEL</a>
        <div className="nav-links">
          <a href="#problema">El problema</a>
          <a href="#servicios">Cómo trabajamos</a>
          <a href="#casos">Casos</a>
          <a href="#faq">Preguntas</a>
        </div>
        <WaButton msg="Hola Albabel, quiero asesorarme para importar desde China." className="btn btn-wa">WhatsApp</WaButton>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <header id="top" className="section dark" style={{ paddingTop: 'clamp(120px,18vw,180px)', overflow: 'hidden' }}>
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .22 }}>
        <source src="/assets/videos/hero-web.mp4" type="video/mp4" />
      </video>
      <div className="blob" style={{ width: 420, height: 420, background: 'var(--gold)', top: -120, right: -80, opacity: .25 }} />
      <div className="blob" style={{ width: 380, height: 380, background: 'var(--green)', bottom: -140, left: -100 }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 920 }}>
        <Reveal><span className="eyebrow light">Socio estratégico LATAM · China</span></Reveal>
        <motion.h1 className="h-xl" style={{ marginTop: 22 }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.21,.6,.21,1] }}>
          Importar desde China <span className="gradient-text">deja de ser una apuesta</span>
        </motion.h1>
        <motion.p className="lead" style={{ marginTop: 22, maxWidth: 680, marginInline: 'auto' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: .8 }}>
          Te acompañamos en cada paso —desde encontrar el proveedor correcto hasta que la mercadería llega a tu depósito— para que importes con la tranquilidad de tener un equipo propio en China y en Latinoamérica.
        </motion.p>
        <motion.div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34 }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .7 }}>
          <WaButton msg="Hola Albabel, quiero importar desde China y necesito asesoramiento." />
          <a className="btn btn-ghost on-dark" href="#servicios">Ver cómo funciona</a>
        </motion.div>
        <motion.div className="trust" style={{ justifyContent: 'center', marginTop: 46 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8, duration: .8 }}>
          <span className="t"><span className="dot" /> Presencia real en China</span>
          <span className="t"><span className="dot" /> Atención 24/7</span>
          <span className="t"><span className="dot" /> +10 años de experiencia</span>
          <span className="t"><span className="dot" /> Operaciones desde USD 3.000</span>
        </motion.div>
      </div>
    </header>
  )
}

export function Video1() {
  return (
    <VideoFeature
      eyebrow="La realidad de importar"
      title="Antes de hablar de servicios, hablemos con la verdad"
      video={VIDEOS.diari} name="Diari" role="Equipo Albabel"
      ctaMsg="Hola Albabel, vi el video de Diari y quiero asesorarme.">
      Diari, parte de nuestro equipo, cuenta sin filtros cómo es realmente importar desde China:
      lo bueno, lo difícil y por qué tener un socio que ya pasó por todo cambia las reglas del juego.
      No es un pitch de ventas, es la conversación que nos gustaría que escuches antes de poner un peso.
    </VideoFeature>
  )
}

const fears = [
  { ic: 'ghost', t: 'Proveedores fantasma', d: 'Pagaste, te mostraron fotos perfectas… y del otro lado nunca existió una fábrica real.' },
  { ic: 'file', t: 'Errores documentales', d: 'Un dato mal cargado y tu carga queda retenida en aduana sumando costos cada día.' },
  { ic: 'anchor', t: 'Problemas aduaneros', d: 'Clasificaciones incorrectas, faltantes de documentación y multas que nadie te anticipó.' },
  { ic: 'box', t: 'Productos defectuosos', d: 'Abrís el contenedor y la calidad no tiene nada que ver con la muestra que aprobaste.' },
  { ic: 'clock', t: 'Retrasos eternos', d: 'Semanas de demora sin información clara, con tu capital inmovilizado y clientes esperando.' },
  { ic: 'wallet', t: 'Plata que no vuelve', d: 'El miedo más grande: invertir miles de dólares y que la operación termine en pérdida.' },
]

export function Problema() {
  return (
    <section id="problema" className="section dark">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <span className="eyebrow light">Lo que nadie te cuenta</span>
            <h2 className="h-lg" style={{ marginTop: 18 }}>China es una oportunidad enorme. También es donde más gente pierde plata.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              No por falta de ganas, sino por hacerlo solos, sin alguien que conozca el terreno. Estos son los riesgos reales:
            </p>
          </div>
        </Reveal>
        <motion.div className="grid g-3 feat-grid" style={{ marginTop: 48 }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: .09 } } }}>
          {fears.map((f) => (
            <motion.div key={f.t} className="feat"
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } }}>
              <span className="feat-ic"><Icon name={f.ic} size={26} /></span>
              <h3 className="feat-t">{f.t}</h3>
              <p className="muted feat-d">{f.d}</p>
            </motion.div>
          ))}
        </motion.div>
        <Reveal delay={.1}>
          <p className="problema-punch">
            “Eso podría pasarme a mí.” <span>Exacto. Por eso existe Albabel.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Solucion() {
  return (
    <section className="section" style={{ background: 'var(--gold-soft)' }}>
      <div className="container grid g-2" style={{ alignItems: 'center', gap: 50 }}>
        <Reveal>
          <span className="eyebrow gold">La diferencia Albabel</span>
          <h2 className="h-lg" style={{ marginTop: 18 }}>No te vendemos logística. Te sacamos el riesgo de encima.</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Albabel no es un despachante, ni un agente de compras, ni una empresa de logística más.
            Somos tu <strong>socio estratégico</strong>: un equipo propio entre Latinoamérica y China que acompaña
            toda la operación, de punta a punta, para que cada decisión sea informada y cada paso esté cubierto.
          </p>
          <div style={{ marginTop: 28 }}>
            <WaButton msg="Hola Albabel, quiero importar reduciendo riesgos. ¿Cómo empezamos?" />
          </div>
        </Reveal>
        <Reveal delay={.15}>
          <div className="grid" style={{ gap: 14 }}>
            {[
              ['Verificamos', 'Cada proveedor es auditado antes de que pongas un dólar.'],
              ['Negociamos', 'Conseguimos condiciones de quien compra en China hace +10 años.'],
              ['Controlamos', 'Inspección de muestras y producción antes de embarcar.'],
              ['Acompañamos', 'Una sola persona responsable de tu operación, disponible 24/7.'],
            ].map(([t, d]) => (
              <div key={t} className="check-item">
                <span className="check-ic"><Icon name="check" size={18} /></span>
                <div><strong style={{ fontSize: '1.08rem' }}>{t}</strong><p className="muted" style={{ marginTop: 3 }}>{d}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
