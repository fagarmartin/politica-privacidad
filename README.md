# Política de Privacidad — GitHub Pages

Página de política de privacidad genérica, reutilizable y **bilingüe (español/inglés)** para todos tus videojuegos (librojuegos).

## Cómo usarla para otro juego

La página se reutiliza editando únicamente el archivo `config.js`:

```js
var PRIVACY_CONFIG = {
  gameName: "Fragmentos",            // nombre del juego actual
  lastUpdated: "2026-08-30",         // fecha de la última actualización
  contactEmail: "contacto@example.com",
  i18n: { es: { ... }, en: { ... } } // textos en ambos idiomas
};
```

- El `{Juego}` de `intro` se reemplaza automáticamente por el nombre del juego.
- Añade o modifica traducciones dentro de `i18n.es` y `i18n.en`.
- Cada sección del HTML se identifica por su `id` (`s1`–`s8`).

## Idioma

- Selector de idioma en la esquina superior derecha (Español / English).
- Elige idioma por defecto según el idioma del navegador (español si el navegador está en español).
- La preferencia elegida por el usuario se guarda en `localStorage` (`privacidad-lang`).

## Publicar con GitHub Pages

1. Sube estos archivos a un repositorio de GitHub:
   ```
   index.html
   style.css
   script.js
   config.js
   ```
2. Ve a **Settings → Pages** del repositorio.
3. En **Source**, selecciona la rama (`main`) y carpeta `/ (root)`.
4. Guarda. La página quedará publicada en:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

## Contenido de la política

Incluye secciones para: información recopilada (ninguna), datos locales (localStorage),
ausencia de cookies/analítica, enlaces a terceros, seguridad, menores, cambios y contacto.
