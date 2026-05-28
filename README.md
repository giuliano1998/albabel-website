# ALBABEL SRL — Website

Sitio corporativo de **Albabel SRL**, importadora y gestora aduanera especializada en comercio exterior China-Argentina.

---

## Estado actual (27 mayo 2026)

### Stack técnico
- **Un solo archivo:** `index.html` (808 líneas) — sin framework, sin build tool, sin package.json
- **CSS:** Tailwind v3 vía CDN (`https://cdn.tailwindcss.com`)
- **Fuentes:** Montserrat + Material Symbols (Google Fonts, CDN)
- **JS:** vanilla inline, sin dependencias externas
- **Deploy:** Netlify — siteId `3f4605b6-1151-4308-91b2-28798078ee8c`

### Paleta de colores
| Token | Hex |
|---|---|
| `sapphire` | `#0F2C59` (azul primario) |
| `sapphire-dark` | `#0A1E3D` |
| `sand` | `#F8F9FA` (fondo claro) |
| `emerald` | `#1C6758` (verde) |
| `gold` | `#D6AD60` |

### Secciones del sitio (en orden)
1. **Navbar** — fijo, mobile menu con aria-expanded
2. **Hero** — video background (`hero-web.mp4`), overlay doble capa
3. **Stats Bar** — 4 KPIs en barra gold (+500 importaciones, 10+ años, 2 oficinas, 24/7)
4. **Nosotros** — descripción empresa + grid de tarjetas 100% / 2 Países / Socios
5. **Servicios** — 3 cards (Gestión Aduanera, Auditoría de Proveedores, Logística Integral)
6. **Proceso** — 4 pasos (Evaluación → Sourcing → Embarque → Entrega)
7. **¿Por Qué Albabel?** — split layout, 4 ventajas competitivas
8. **Alianzas** — sección Yiwu Sunray Trading Co., Ltd.
9. **Contacto** — formulario → abre WhatsApp con mensaje pre-cargado (sin backend)
10. **Footer** — 4 columnas, CUIT, links
11. **WhatsApp flotante** — fixed bottom-right con badge tooltip

### Assets
```
assets/
  videos/
    hero-web.mp4      ✅ commiteado (versión comprimida para web)
    hero.mp4          ❌ gitignoreado (original pesado)
  images/
    logos/            ⚠️  DIRECTORIO VACÍO — imágenes NO commiteadas
      logo-white.png    (referenciado en navbar y footer)
      logo-full.png     (referenciado en hero)
      isotipo-gold.png  (referenciado en sección "¿Por qué Albabel?")
  screenshots/        capturas de pantalla del diseño (referencia visual)
```

> El sitio usa `onerror` fallbacks en todos los `<img>` de logo: si no encuentra el archivo, muestra texto "ALBABEL SRL" en su lugar. El site funciona sin logos pero se ve incompleto.

### Formulario de contacto
- **Sin backend ni email service** — al hacer submit abre WhatsApp con datos pre-cargados
- WhatsApp destino: `+54 9 11 3563-5778`
- Validación: campos `nombre`, `email` y `tipo` son required (HTML5 nativo)

### Datos de la empresa
| Campo | Valor |
|---|---|
| Razón social | Albabel SRL |
| CUIT | 30-71536298-4 |
| Dirección ARG | Valentín Gómez 2615, Piso 4, CP 1046, CABA |
| Tel 1 | +54 9 11 3563-5778 |
| Tel 2 | +54 9 11 6097-6727 |
| Email | contacto@albabel.com |
| Socio China | Yiwu Sunray Trading Co., Ltd. |
| Dirección China | Flat 301, 3F, No.265 ChouZhou North Road, Yiwu City, Zhejiang |
| Tel China 1 | +86 152 6794 6998 |
| Tel China 2 | +86 158 5791 7023 |
| Email China | info@sunray-enterprises.com |

---

## Pendientes conocidos

- [ ] **Logos faltantes** — agregar `logo-white.png`, `logo-full.png`, `isotipo-gold.png` al repo bajo `assets/images/logos/`
- [ ] **Año en footer** — dice `© 2024`, actualizar a `© 2025` o dinámico con JS
- [ ] **Formulario sin backend** — considerar Netlify Forms o Formspree si se quiere capturar leads sin pasar por WhatsApp
- [ ] **OG Image** — `<meta property="og:image">` no está definida (impacta previews en redes sociales)
- [ ] **Favicon** — no hay `<link rel="icon">` definido
- [ ] **Netlify.toml** — está en `.netlify/` (carpeta interna de CLI), no en la raíz del proyecto. Si se necesita configurar redirects/headers, crear `/netlify.toml` en la raíz

---

## Cómo trabajar en el proyecto

**Editar el sitio:**
```bash
# Todo está en un solo archivo
open index.html   # previsualizar en browser
# o levantar servidor local:
npx serve .
```

**Deploy a Netlify:**
```bash
# Requiere Netlify CLI instalado
netlify deploy --prod
```

**Git workflow:**
```bash
git add index.html
git commit -m "feat/fix: descripción del cambio"
```

---

## Historial de commits
| Hash | Descripción |
|---|---|
| `e744a35` | fix: apply 26 web-design-guidelines accessibility and performance fixes |
| `4a66aac` | feat: add compressed video background to hero section |
| `c9eb5d1` | feat: add full corporate website for Albabel SRL |
| `84d017b` | Initial commit |
