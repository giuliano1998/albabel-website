# Cambios web Albabel

## Por qué te dio error el comando
Corriste `git am < albabel-cambios.patch` desde `~` (tu carpeta de usuario):
- `not a git repository` → no estabas dentro de la carpeta del repo.
- `no such file or directory: albabel-cambios.patch` → el .patch no estaba en `~`
  (seguramente está en `~/Downloads`).

Hay que pararse DENTRO del repo y apuntar al .patch con su ruta real.

## Pasos correctos

```bash
# 1) Encontrá la carpeta del repo
find ~ -name "albabel-website" -type d 2>/dev/null

# 2) Entrá a esa carpeta (ejemplo, usá la ruta que te devolvió el find)
cd ~/ruta/que/te/dio/albabel-website

# 3) Confirmá que estás en el repo (debe decir: On branch main)
git status

# 4) Aplicá el parche (ajustá la ruta si lo bajaste a otro lado)
git am < ~/Downloads/albabel-cambios.patch

# 5) Subí los cambios
git push origin main
```

Si `git am` da algún error de conflicto, usá esta variante (no crea commit propio):
```bash
git apply ~/Downloads/albabel-cambios.patch
git add -A
git commit -m "Actualizar secciones de la web"
git push origin main
```

## Alternativa sin parche (copiar archivos a mano)
Reemplazá en tu repo estos archivos por los de la carpeta `albabel-cambios/`:
- `src/App.jsx`, `src/lib.jsx`, `src/styles.css`
- `src/sections/Top.jsx`, `src/sections/Mid.jsx`, `src/sections/Bottom.jsx`
- `assets/images/world-map.svg` (nuevo)
- `public/assets/images/world-map.svg` (nuevo)
Después: `git add -A && git commit -m "..." && git push`.

## Videos — nombres ya coinciden ✅
El código ahora apunta a los nombres EXACTOS de tus archivos. No hace falta renombrar:

| Sección | Archivo |
|---|---|
| Diari | `Dlari-Video.MOV` (con respaldo por si es "Diari") |
| Conocé quién está detrás | `Dara-Video.MOV` |
| Si llegaste hasta acá | `Giuliano-Video.MOV` |
| Caso Yatif | `CasodeExito1.MOV` |
| Caso Le Tapis | `CasodeExito2.MP4` |

Tienen que estar en `public/assets/videos/` (la misma carpeta donde está `hero-web.mp4`).

Nota: los `.MOV` reproducen en Safari y Chrome, pero NO en Firefox. Si querés
soporte en todos los navegadores, exportalos a `.mp4` (H.264) y actualizá los
nombres en el objeto `VIDEOS` de `src/lib.jsx`.

## A confirmar
- Caso **Le Tapis**: escribiste "Referineria premium" (no es palabra). Quedó como
  **"Refinería premium"** en `src/sections/Bottom.jsx` (array `casos`). Si era otra
  (¿Perfumería?), cambiala ahí o avisame.
