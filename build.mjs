import { writeFileSync } from 'node:fs';

const pages = [
  ['index.html', 'El bar'],
  ['cerveceria.html', 'Cervecería'],
  ['cocteleria.html', 'Coctelería'],
  ['lounge.html', 'Lounge Bar'],
  ['contacto.html', 'Contacto'],
];

const nav = (active) => pages.map(([href, label]) =>
  `<a href="./${href}"${href === active ? ' aria-current="page"' : ''}>${label}</a>`
).join('');

const shell = ({ file, title, description, body, theme = 'dark' }) => `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#10151d">
  <meta name="description" content="${description}">
  <title>${title} · Bar Parlamento, Logroño</title>
  <link rel="icon" type="image/svg+xml" href="./assets/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles-v2.css">
  <script defer src="./script.js"></script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"BarOrPub","name":"Bar Parlamento","telephone":"+34633503814","address":{"@type":"PostalAddress","streetAddress":"Calle Barriocepo, 49","postalCode":"26001","addressLocality":"Logroño","addressRegion":"La Rioja","addressCountry":"ES"}}</script>
</head>
<body class="${theme}">
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <header class="site-header">
    <a class="brand" href="./index.html" aria-label="Bar Parlamento, inicio"><span>Bar</span><strong>Parlamento<span class="brand-dot">.</span></strong></a>
    <nav class="desktop-nav" aria-label="Navegación principal">${nav(file)}</nav>
    <a class="header-visit" href="./contacto.html">VEN A VERNOS <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú"><span></span><span></span></button>
  </header>
  <nav class="mobile-menu" id="mobile-menu" aria-label="Menú móvil" inert>${nav(file)}<a class="mobile-menu-meta" href="tel:+34633503814">633 503 814 ↗</a></nav>
  <main id="main">${body}</main>
  <footer class="site-footer">
    <div class="footer-top"><p>La siguiente ronda<br>empieza en Barriocepo.</p><a href="./contacto.html">NOS VEMOS ALLÍ <span aria-hidden="true">↗</span></a></div>
    <div class="footer-word">Parlamento<span>.</span></div>
    <div class="footer-bottom"><span>BAR PARLAMENTO · CALLE BARRIOCEPO 49 · LOGROÑO</span><div><a href="./cerveceria.html">CERVEZA</a><a href="./cocteleria.html">CÓCTELES</a><a href="./lounge.html">LOUNGE</a><a href="https://www.instagram.com/barparlamento/" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a></div><span>© <span id="year">2026</span></span></div>
  </footer>
</body>
</html>`;

const home = shell({
  file: 'index.html', title: 'El bar de siempre, otra vez',
  description: 'Bar Parlamento en Logroño: cerveza de la casa, coctelería, terraza y lounge bar en Calle Barriocepo 49.',
  body: `
  <section class="home-hero" aria-labelledby="home-title">
    <img class="cover-image" src="./assets/plaza-azul.webp" alt="Escena editorial de amigos brindando en una terraza de asientos azules" fetchpriority="high">
    <div class="hero-veil"></div>
    <div class="home-hero-inner"><p class="hero-location">LOGROÑO · CALLE BARRIOCEPO 49 <span>DESDE LA PRIMERA CAÑA</span></p><h1 id="home-title">Parlamento<span>.</span></h1><div class="home-hero-bottom"><p>El bar de siempre.<br><em>El plan que se alarga.</em></p><a class="circle-arrow" href="#descubre" aria-label="Descubrir Bar Parlamento">↓</a><span>BAJA LA PERSIANA DEL DÍA.<br>SUBE EL VOLUMEN.</span></div></div>
  </section>

  <section class="opening-statement" id="descubre" aria-labelledby="opening-title"><div class="section-index">01 / UN LUGAR, MUCHOS MOMENTOS</div><div class="statement-layout"><h2 id="opening-title">En la tierra del vino,<br>hay una barra que <em>va a su ritmo.</em></h2><div><p>Parlamento es café sin prisa, cerveza bien tirada, terraza con conversación y cócteles que hacen que subas a la primera planta. Un bar de toda la vida con un punto cañero y de rock&roll.</p><a class="text-link" href="./contacto.html">ENCUÉNTRANOS EN BARRIOCEPO <span>↗</span></a></div></div></section>

  <section class="worlds" aria-labelledby="worlds-title"><div class="worlds-heading"><span>02 / ELIGE TU MOMENTO</span><h2 id="worlds-title">Tres maneras de <em>quedarse.</em></h2></div><div class="worlds-grid">
    <a class="world world-beer" href="./cerveceria.html"><img src="./assets/tiradores.webp" alt="Cerveza recién servida desde un tirador" loading="lazy"><span class="world-no">01 / EN LA BARRA</span><div><h3>Cerveza.</h3><p>De la casa, de barril y del mundo.</p><span class="world-cta">ENTRA EN LA CERVECERÍA ↗</span></div></a>
    <a class="world world-cocktails" href="./cocteleria.html"><img src="./assets/cocteles.webp" alt="Dos cócteles sobre una barra de luz cálida" loading="lazy"><span class="world-no">02 / OTRA RONDA</span><div><h3>Cócteles.</h3><p>Los clásicos y los que llevan nuestra firma.</p><span class="world-cta">DESCUBRE LA CARTA ↗</span></div></a>
    <a class="world world-lounge" href="./lounge.html"><img src="./assets/lounge-azul.webp" alt="Escena editorial de un lounge azul al anochecer" loading="lazy"><span class="world-no">03 / PRIMERA PLANTA</span><div><h3>Lounge.</h3><p>Sobremesa, shishas y la noche por delante.</p><span class="world-cta">SUBE AL LOUNGE ↗</span></div></a>
  </div></section>

  <section class="home-hours" aria-labelledby="hours-title"><div class="home-hours-top"><span>DE LA PLAZA A LA PRIMERA PLANTA</span><span>EL RITMO LO PONES TÚ</span></div><h2 id="hours-title"><span>CAFÉ.</span><span>VERMÚ.</span><span>PINTA.</span><em>COPA.</em></h2><p>Empieza como quieras. Aquí nadie mira el reloj cuando la conversación va bien.</p></section>

  <section class="thursday-feature" aria-labelledby="thursday-title"><div class="thursday-copy"><span>UNA TRADICIÓN DE BARRIO</span><h2 id="thursday-title">Los jueves<br>se piden <em>en pinta.</em></h2><p>La Plaza del Parlamento se llena de gente, terrazas y jarras de cerveza a precio reducido. Hay semanas que empiezan el jueves.</p><a class="solid-link" href="./cerveceria.html#jueves">EL DÍA DE LA PINTA <span>↗</span></a></div><div class="thursday-photo"><img src="./assets/plaza-azul.webp" alt="Amigos brindando con cerveza y cócteles en una terraza" loading="lazy"></div></section>

  <section class="home-closing"><p>EL QUE VIENE, REPITE.</p><a href="./contacto.html">¿NOS VEMOS? <span>↗</span></a></section>`
});

const beer = shell({
  file: 'cerveceria.html', title: 'Cervecería',
  description: 'Conoce la cervecería de Bar Parlamento en Logroño: cerveza artesana propia, tres tiradores de la casa, selección de botellas y jueves de la pinta.',
  body: `
  <section class="inner-hero beer-hero" aria-labelledby="beer-title"><img class="cover-image" src="./assets/tiradores.webp" alt="Una cerveza artesana recién tirada en la barra" fetchpriority="high"><div class="hero-veil"></div><div class="inner-hero-content"><span>01 / CERVECERÍA</span><h1 id="beer-title">Cerveza<br><em>de la buena.</em></h1><p>En la tierra del vino, nosotros también brindamos con cerveza.</p></div><a class="hero-scroll" href="#nuestra-cerveza">DESCUBRE LA BARRA ↓</a></section>

  <section class="beer-intro" id="nuestra-cerveza"><div class="section-index">LA CASA / TRES TIRADORES</div><div class="beer-intro-grid"><h2>La primera<br><em>es nuestra.</em></h2><div><span class="giant-three">03</span><p>Elaboramos nuestra propia cerveza artesana. Tres tiradores están dedicados a ella: controlamos el proceso para conseguir el sabor, el aroma y el color que queremos servirte.</p></div></div></section>

  <section class="beer-range" aria-labelledby="beer-range-title"><div class="range-head"><span>EN LA NEVERA Y EN EL GRIFO</span><h2 id="beer-range-title">Hay una cerveza<br>para cada <em>ronda.</em></h2><p>La selección cambia. Estos son los estilos y orígenes que cuentan la historia cervecera de Parlamento.</p></div><div class="range-list">
    <article><span>01</span><h3>Artesanas y de la casa</h3><p>Desde ale rubias suaves hasta hazy IPA o las notas intensas y amargas de otras artesanas. Basqueland y Naparbier son habituales de la nevera.</p></article>
    <article><span>02</span><h3>Belgas</h3><p>Leffe, Chimay, Hoegaarden, Kwak o Delirium Tremens: una selección para explorar estilos con personalidad.</p></article>
    <article><span>03</span><h3>Alemanas</h3><p>Paulaner, Spaten, Franziskaner, Weihenstephaner o Bitburger. La tradición cervecera también tiene sitio aquí.</p></article>
    <article><span>04</span><h3>Del mundo</h3><p>Una Guinness de barril, una botella inesperada o la recomendación del día. La búsqueda de nuevas cervezas no se detiene.</p></article>
    <article><span>05</span><h3>Sin gluten</h3><p>Opciones como Daura, Mahou o Brunehaut para que nadie se quede fuera. Pregunta por la disponibilidad actual.</p></article>
  </div><p class="range-note">LAS MARCAS Y LOS TIRADORES PUEDEN VARIAR SEGÚN DISPONIBILIDAD.</p></section>

  <section class="beer-pour"><img src="./assets/pinta.webp" alt="Pinta de cerveza en una barra, fotografía editorial" loading="lazy"><div><span>UNA PINTA BIEN SERVIDA</span><h2>La mejor cerveza es la que se disfruta <em>en compañía.</em></h2><p>Una caña al salir del trabajo, una ronda entre amigos o una cerveza nueva que te sorprende. En Parlamento, la barra es el punto de encuentro.</p></div></section>

  <section class="pint-day" id="jueves"><div class="pint-day-inner"><span>CADA JUEVES · PLAZA DEL PARLAMENTO</span><h2>JUEVES<br><em>DE PINTA.</em></h2><p>La terraza y la plaza se llenan para celebrar el inicio del fin de semana con jarras de cerveza a precio reducido.</p><a class="outline-link" href="./contacto.html">VEN A LA PLAZA <span>↗</span></a></div></section>

  <section class="next-chapter"><span>DESPUÉS DE LA CERVEZA...</span><a href="./cocteleria.html">UNA COPA MÁS <span>↗</span></a></section>`
});

const cocktailItems = [
  ['01', 'Daiquiri Lime RB', 'Ron blanco · lima · azúcar líquido · Mixer Lime Royal Bliss'],
  ['02', 'Diablo', 'Tequila · cassis · lima · azúcar · ginger beer Royal Bliss'],
  ['03', 'Porn Star Martini', 'Vodka · fruta de la pasión · vainilla · lima · Naranja Royal Bliss'],
  ['04', 'Amaretto Sour', 'Ballantine’s o amaretto · lima · azúcar · bitter orange · Limón Royal Bliss'],
  ['05', 'Sex on the Beach', 'Vodka · melocotón · naranja · piña · granadina'],
  ['06', 'Gin Basil Bliss', 'Martin Miller’s · limón · albahaca · yuzu Royal Bliss'],
  ['07', 'Ruso Blanco', 'Kahlúa · vodka · leche'],
  ['08', 'Ruso Parlamento', 'Vodka de frambuesa de preparación propia · Royal Bliss al gusto'],
  ['09', 'Dark and Stormy', 'Kraken · lima · azúcar · ginger beer'],
  ['10', 'Thai', 'Sirope de castaña · ron · ron especiado · limón'],
  ['11', 'Mai Thai', 'Ron · ron especiado · limón · azúcar · siropes · piña'],
  ['12', 'Old Fashioned', 'Bourbon · azúcar moreno · bitters'],
];

const cocktails = shell({
  file: 'cocteleria.html', title: 'Coctelería',
  description: 'Explora la carta de coctelería de Bar Parlamento en Logroño: doce cócteles, clásicos y mezclas de la casa como el Ruso Parlamento.',
  body: `
  <section class="cocktail-hero" aria-labelledby="cocktail-title"><div class="cocktail-hero-copy"><span>02 / COCTELERÍA</span><h1 id="cocktail-title">Otra ronda.<br><em>Otra historia.</em></h1><p>Clásicos, mezclas de la casa y ese momento en el que apetece dejarse sorprender.</p><a class="text-link light-link" href="#carta">ABRE LA CARTA <span>↓</span></a></div><div class="cocktail-hero-photo"><img src="./assets/cocteles.webp" alt="Cócteles sobre una barra de luz cálida, fotografía editorial" fetchpriority="high"></div></section>

  <section class="cocktail-intro"><div class="section-index">EL ARTE DE MEZCLAR</div><h2>Un buen cóctel empieza en la barra.<br><em>El resto lo pone la compañía.</em></h2><p>Nos gustan los que siempre funcionan y los que todavía no conoces. Elige uno de la carta o dinos qué te apetece: en Parlamento también sabemos improvisar.</p></section>

  <section class="cocktail-menu" id="carta" aria-labelledby="menu-title"><div class="menu-head"><span>CARTA / BAR PARLAMENTO</span><h2 id="menu-title">Doce motivos<br>para <em>quedarse.</em></h2><p>Una selección completa de la coctelería que publica Bar Parlamento. Ingredientes resumidos; disponibilidad y preparación pueden variar.</p></div><div class="menu-grid">${cocktailItems.map(([num,name,ingredients]) => `<article class="cocktail-item"><span>${num}</span><h3>${name}</h3><p>${ingredients}</p></article>`).join('')}</div></section>

  <section class="signature"><div class="signature-photo"><img src="./assets/sobremesa.webp" alt="Escena editorial de cócteles compartidos en un bar" loading="lazy"></div><div><span>DE LA CASA</span><h2>Ruso<br><em>Parlamento.</em></h2><p>Vodka de frambuesa de preparación propia y Royal Bliss al gusto. Uno de esos nombres que solo podían salir de aquí.</p><a class="outline-link" href="./lounge.html">SUBE AL LOUNGE <span>↗</span></a></div></section>

  <section class="next-chapter"><span>LA COPA PIDE OTRO AMBIENTE...</span><a href="./lounge.html">NOS VEMOS ARRIBA <span>↗</span></a></section>`
});

const lounge = shell({
  file: 'lounge.html', title: 'Lounge Bar',
  description: 'Descubre el Lounge Bar de Bar Parlamento en la primera planta: tardeo, cócteles, shishas y espacios para fiestas privadas en Logroño.',
  body: `
  <section class="inner-hero lounge-hero" aria-labelledby="lounge-title"><img class="cover-image" src="./assets/lounge-azul.webp" alt="Escena editorial de un lounge de sofás azules, cócteles y conversación" fetchpriority="high"><div class="hero-veil"></div><div class="inner-hero-content"><span>03 / PRIMERA PLANTA</span><h1 id="lounge-title">Sube.<br><em>Quédate.</em></h1><p>El Lounge Bar es la parte de Parlamento donde las horas se alargan.</p></div><a class="hero-scroll" href="#ambiente">DESCUBRE EL LOUNGE ↓</a></section>

  <section class="lounge-intro" id="ambiente"><div class="section-index">OTRO RITMO, MISMA CASA</div><div><h2>Del café torero<br>a la <em>última copa.</em></h2><p>Primera planta, luz más baja y un punto de rock&roll. Un espacio para el café sin mirar el reloj, el vermú, el tardeo y las conversaciones que terminan ya entrada la noche.</p></div></section>

  <section class="lounge-moments" aria-labelledby="moments-title"><div class="moments-heading"><span>LOS MOMENTOS DEL LOUNGE</span><h2 id="moments-title">Aquí arriba, <em>todo cambia.</em></h2></div><div class="moments-grid"><article><span>01 / TARDE</span><h3>Café & vermú</h3><p>El lugar para alargar la sobremesa y empezar el tardeo.</p></article><article><span>02 / NOCHE</span><h3>Cócteles</h3><p>Las mezclas de la carta en un ambiente más íntimo.</p></article><article><span>03 / SIN PRISA</span><h3>Shishas</h3><p>Sabores clásicos, un copazo y tiempo para conversar.</p></article></div></section>

  <section class="shisha-story"><div class="shisha-photo"><img src="./assets/shishas.webp" alt="Shisha y cóctel en un lounge nocturno, fotografía editorial" loading="lazy"></div><div class="shisha-story-copy"><span>LA CARTA DE SHISHAS</span><h2>Elige un sabor.<br><em>Nosotros ponemos el ambiente.</em></h2><p>Entre las opciones que presenta Parlamento están melocotón, menta, uva, chocolate y manzana. Pregunta por los sabores disponibles al llegar.</p><div class="flavors"><span>MELOCOTÓN</span><span>MENTA</span><span>UVA</span><span>CHOCOLATE</span><span>MANZANA</span></div></div></section>

  <section class="lounge-gallery"><div><img src="./assets/lounge-azul.webp" alt="Amigos conversando en un lounge azul, fotografía editorial" loading="lazy"></div><div><img src="./assets/sobremesa.webp" alt="Cócteles compartidos alrededor de una mesa, fotografía editorial" loading="lazy"></div><p>Un sitio para venir con alguien.<br><em>Y salir con un plan para volver.</em></p></section>

  <section class="lounge-events"><span>EL ESPACIO TAMBIÉN PUEDE SER VUESTRO</span><h2>Una mesa.<br>Una zona.<br><em>Todo el lounge.</em></h2><p>Fiestas privadas, cumpleaños, aniversarios y encuentros de empresa. Parlamento puede reservar zonas de la primera planta o el Lounge Bar completo.</p><a class="solid-link" href="./contacto.html#reservas">HABLEMOS DE TU EVENTO <span>↗</span></a></section>`
});

const contact = shell({
  file: 'contacto.html', title: 'Contacto y reservas', theme: 'light',
  description: 'Visita Bar Parlamento en Calle Barriocepo 49, Logroño. Contacta para reservas, eventos privados y consultas.',
  body: `
  <section class="contact-hero" aria-labelledby="contact-title"><span>04 / NOS VEMOS EN EL BAR</span><h1 id="contact-title">La próxima ronda<br>empieza <em>aquí.</em></h1><p>Calle Barriocepo, 49 · 26001 Logroño, La Rioja</p><a class="solid-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Parlamento+Calle+Barriocepo+49+Logro%C3%B1o" target="_blank" rel="noopener noreferrer">CÓMO LLEGAR <span>↗</span></a></section>

  <section class="contact-details"><div><span>01 / DIRECCIÓN</span><h2>Barriocepo, 49.</h2><p>En el centro de Logroño, junto a la Plaza del Parlamento.</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Parlamento+Calle+Barriocepo+49+Logro%C3%B1o" target="_blank" rel="noopener noreferrer">ABRIR MAPA <span>↗</span></a></div><div><span>02 / HABLEMOS</span><h2>633 503 814.</h2><p>Para venir, preguntar por la carta o contarnos un plan.</p><a class="text-link" href="tel:+34633503814">LLAMAR AHORA <span>↗</span></a></div><div><span>03 / TAMBIÉN ONLINE</span><h2>Nos vemos<br>en Instagram.</h2><p>La actualidad del bar, en su propio perfil.</p><a class="text-link" href="https://www.instagram.com/barparlamento/" target="_blank" rel="noopener noreferrer">@BARPARLAMENTO <span>↗</span></a></div></section>

  <section class="reservations" id="reservas"><div class="reservations-title"><span>RESERVAS Y EVENTOS</span><h2>Reúne a los tuyos.<br><em>Del resto nos ocupamos.</em></h2><p>Cumpleaños, aniversarios, reuniones de amigos o familia y eventos de empresa. Cuéntale a Miguel qué tienes en mente.</p></div><div class="reservation-choices"><div><span>01</span><strong>Una zona de terraza</strong></div><div><span>02</span><strong>Una zona de la primera planta</strong></div><div><span>03</span><strong>El Lounge Bar completo</strong></div></div><a class="solid-link" href="tel:+34633503814">HABLAR CON MIGUEL · 633 503 814 <span>↗</span></a></section>

  <section class="contact-note"><p>¿Quieres confirmar el horario, las cervezas de hoy o los sabores disponibles? Llámanos antes de venir.</p><a href="https://barparlamento.com/" target="_blank" rel="noopener noreferrer">VISITA TAMBIÉN LA WEB ORIGINAL ↗</a></section>`
});

for (const [name, contents] of Object.entries({ 'index.html': home, 'cerveceria.html': beer, 'cocteleria.html': cocktails, 'lounge.html': lounge, 'contacto.html': contact })) {
  writeFileSync(new URL(name, import.meta.url), contents, 'utf8');
}
