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
