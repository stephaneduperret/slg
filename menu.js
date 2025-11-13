// menu.js

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.createElement("div")
  menu.innerHTML = `
    <nav class="top-menu">
      <div class="menu-logo">⚡ SLG Calculs</div>
      <button class="menu-toggle" aria-label="Menu">&#9776;</button>
      <div class="menu-links">
        <a href="https://stephaneduperret.github.io/slg/index.html">Classification d'une route</a>
        <a href="https://stephaneduperret.github.io/slg/slg.html">Hauteur mâts et espacement</a>
        <a href="https://stephaneduperret.github.io/slg/calculsdesflux.html">Calculs des Flux</a>
        <a href="https://stephaneduperret.github.io/slg/tunnel.html">Flux dans les tunnels</a>
        <a href="https://stephaneduperret.github.io/slg/calculdistancedefreinage.html">Calcul distance de freinage</a>
        <a href="https://stephaneduperret.github.io/slg/tableaudesluminosites.html">Tableau des luminosités</a>
        
      </div>
    </nav>
  `
  document.body.prepend(menu)

  document.body.style.paddingTop = "70px"

  // Fonction du menu burger
  const toggle = menu.querySelector(".menu-toggle")
  const links = menu.querySelector(".menu-links")
  toggle.addEventListener("click", () => {
    links.classList.toggle("show")
  })
})





