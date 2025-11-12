// menu.js

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.createElement("div")
  menu.innerHTML = `
    <nav class="top-menu">
      <a href="https://stephaneduperret.github.io/slg/index.html">Classification d'une route</a>
      <a href="https://stephaneduperret.github.io/slg/slg.html">Hauteur mâts et espacement</a>
      <a href="https://stephaneduperret.github.io/slg/calculsdesflux.html">Calculs des Flux</a>
    </nav>
  `
  document.body.prepend(menu)

  const style = document.createElement("style")
  style.textContent = `
    .top-menu {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 14px 20px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      background: rgba(20, 25, 40, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-family: "Inter", system-ui, sans-serif;
      font-size: 17px;
      transition: all 0.3s ease;
    }

    .top-menu a {
      color: #e8ecf1;
      text-decoration: none;
      padding: 8px 14px;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .top-menu a:hover {
      background: rgba(124, 196, 255, 0.2);
      color: #7cc4ff;
      transform: translateY(-2px);
    }

    @media (max-width: 600px) {
      .top-menu {
        flex-direction: column;
        gap: 10px;
        padding: 12px;
        font-size: 15px;
      }
    }
  `
  document.head.appendChild(style)

  document.body.style.paddingTop = "70px"
})
