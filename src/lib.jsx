import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export const WA_NUMBER = '5491135635778'
export const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || 'Hola Albabel, quiero importar desde China y me gustaría que me asesoren.')}`

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.21, 0.6, 0.21, 1] } }
}
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: .12 } }
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: .7, delay, ease: [0.21, 0.6, 0.21, 1] } }
      }}
    >
      {children}
    </M>
  )
}

export function WaButton({ msg, children = 'Hablar por WhatsApp', className = 'btn btn-wa' }) {
  return (
    <a className={className} href={waLink(msg)} target="_blank" rel="noopener noreferrer">
      <WaIcon /> {children}
    </a>
  )
}

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  )
}

// ---- Line icons (reemplazan a los emojis) ----
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/>',
  shieldcheck: '<path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-4.5"/>',
  sliders: '<line x1="4" y1="8" x2="20" y2="8"/><circle cx="9" cy="8" r="2.4"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="15" cy="16" r="2.4"/>',
  truck: '<rect x="2.5" y="6.5" width="11" height="9" rx="1"/><path d="M13.5 9.5h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/>',
  pin: '<path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.4"/>',
  chat: '<path d="M21 11.5a8 8 0 0 1-11.5 7.2L4 20.5l1.8-5A8 8 0 1 1 21 11.5z"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/><ellipse cx="12" cy="12" rx="4" ry="8.5"/>',
  shield: '<path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>',
  bolt: '<path d="M13 2L5 13.5h5.5L9.5 22 19 10h-5.5z"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  ghost: '<path d="M5 21V11a7 7 0 0 1 14 0v10l-2.5-1.8L14 21l-2-1.8L10 21l-2.5-1.8z"/><circle cx="9.5" cy="11" r="1"/><circle cx="14.5" cy="11" r="1"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="16.5" x2="13" y2="16.5"/>',
  anchor: '<circle cx="12" cy="5" r="2.3"/><line x1="12" y1="7.3" x2="12" y2="21"/><path d="M5 13a7 7 0 0 0 14 0"/><line x1="3.5" y1="13" x2="6" y2="13"/><line x1="18" y1="13" x2="20.5" y2="13"/>',
  box: '<path d="M21 8l-9-5-9 5z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.3 2"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9.5h13a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H3"/><circle cx="16.5" cy="12.5" r="1.1"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<line x1="4" y1="12" x2="19" y2="12"/><path d="M13 6l6 6-6 6"/>',
}
export function Icon({ name, size = 24, className = '' }) {
  const p = ICONS[name]
  if (!p) return null
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" dangerouslySetInnerHTML={{ __html: p }} />
  )
}

// ---- Sección de video centrada (título arriba · video grande · descripción + CTA abajo) ----
export function VideoFeature({ id, dark = false, eyebrow, eyebrowVariant = '', title, children, video, name, role, ctaMsg, ctaLabel = 'Hablar por WhatsApp' }) {
  return (
    <section id={id} className={`section video-feature${dark ? ' dark' : ''}`}>
      <div className="container vf-inner">
        <Reveal>
          {eyebrow && <span className={`eyebrow ${eyebrowVariant}`}>{eyebrow}</span>}
          <h2 className="h-lg vf-title">{title}</h2>
        </Reveal>
        <Reveal delay={.1} className="vf-video">
          <VideoPlayer src={video} name={name} role={role} />
        </Reveal>
        <Reveal delay={.15}>
          <div className="vf-desc lead">{children}</div>
          {ctaMsg && <div className="vf-cta"><WaButton msg={ctaMsg}>{ctaLabel}</WaButton></div>}
        </Reveal>
      </div>
    </section>
  )
}
// Los archivos deben estar en: public/assets/videos/
// OJO: en Netlify (Linux) las mayúsculas/minúsculas importan; estos nombres
// coinciden EXACTAMENTE con los archivos. Un valor puede ser un string o un
// array (el navegador usa el primero que exista; sirve de respaldo).
export const VIDEOS = {
  diari: ['/assets/videos/Dlari-Video.mp4', '/assets/videos/Diari-Video.mp4', '/assets/videos/DIari-Video.mp4'],
  dara: '/assets/videos/Dara-Video.mp4',
  giuliano: '/assets/videos/Giuliano-Video.mp4',
  casoYatif: '/assets/videos/CasodeExito1.mp4',
  casoLeTapis: '/assets/videos/letapis.mp4',
  casoDifanDeco: '/assets/videos/defandeco.mp4',
}

function videoType(src = '') {
  const s = src.toLowerCase()
  if (s.endsWith('.webm')) return 'video/webm'
  if (s.endsWith('.ogv') || s.endsWith('.ogg')) return 'video/ogg'
  if (s.endsWith('.mov')) return 'video/quicktime'
  return 'video/mp4'
}

export function VideoPlayer({ src, poster, name, role, vertical = false }) {
  const sources = Array.isArray(src) ? src : [src]
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true // requerido por los navegadores para autoplay
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      }
    }, { threshold: 0.5 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <motion.div
      className={`video-ph is-video${vertical ? ' vertical' : ''}`}
      initial={{ opacity: 0, scale: .96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
    >
      <video ref={ref} controls playsInline muted preload="metadata" poster={poster}>
        {sources.map((s) => <source key={s} src={s} type={videoType(s)} />)}
        Tu navegador no puede reproducir este video.
      </video>
      {name && <span className="vid-label">{name}{role && <small>{role}</small>}</span>}
    </motion.div>
  )
}

export function VideoPlaceholder({ tag = 'Video', name, role, vertical = false }) {
  return (
    <motion.div
      className={`video-ph${vertical ? ' vertical' : ''}`}
      initial={{ opacity: 0, scale: .96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
    >
      <span className="ph-tag">{tag} · placeholder</span>
      <div className="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      {name && <div className="ph-name">{name}<small>{role}</small></div>}
    </motion.div>
  )
}
