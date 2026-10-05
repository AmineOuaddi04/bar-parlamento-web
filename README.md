# Bar Parlamento

An independent, static website concept for Bar Parlamento in Logroño.

## Run locally

Open `index.html` in a browser, or start the included local server from this directory:

```powershell
node server.mjs
```

Then visit `http://localhost:4173`.

The page uses plain HTML, CSS, and JavaScript. The two locally stored photographs in `assets/` are custom generated atmosphere imagery; they are not photographs of the actual premises. Replace them with Parlamento's own photography when available. Google Fonts are loaded online, with system fallbacks defined in the stylesheet.

## Notes

- Layout includes responsive desktop and mobile compositions.
- The cocktail selector and mobile menu are interactive.
- Scroll reveals respect `prefers-reduced-motion`.
- Address links to Google Maps search for Bar Parlamento, Logroño.
- Contact email is a placeholder (`hola@barparlamento.com`) and should be confirmed before launch.
- The opening animation draws a short beer stream over the hero; it is hidden for reduced-motion preferences.

