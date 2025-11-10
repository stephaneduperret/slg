// menu.js

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.createElement("div")
    menu.style.width = "100%"
    menu.style.background = "#f2f2f2"
    menu.style.borderBottom = "1px solid #ccc"
    menu.style.padding = "10px"
    menu.style.display = "flex"
    menu.style.gap = "20px"
    menu.style.position = "fixed"
    menu.style.top = "0"
    menu.style.left = "0"
    menu.style.zIndex = "9999"
    menu.style.fontSize = "18px"

    menu.innerHTML = `
        <a href="https://stephaneduperret.github.io/slg/index.html">Accueil</a>
        <a href="https://stephaneduperret.github.io/slg/slg.html">Calcul</a>
    `

    document.body.appendChild(menu)

    document.body.style.paddingTop = "60px"
})
