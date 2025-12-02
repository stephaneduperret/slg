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
        <a href="https://stephaneduperret.github.io/slg/Maillagesterrains.html">Maillage d'éclairement d'un terrain de sport</a>
        <a href="https://stephaneduperret.github.io/slg/pointsmesureroutier.html">pointsmesureroutier</a>
        <a href="https://stephaneduperret.github.io/slg/7points.html">Plan en 7 points</a>
      </div>
    </nav>
  `
  document.body.prepend(menu)

  document.body.style.paddingTop = "70px"

  const toggle = menu.querySelector(".menu-toggle")
  const links = menu.querySelector(".menu-links")

  // Ouverture / fermeture du menu
  toggle.addEventListener("click", () => {
    links.classList.toggle("show")
  })

  // Fermeture du menu après sélection d’un lien (mobile)
  const allLinks = links.querySelectorAll("a")
  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("show")
    })
  })
})
