function showViews(views) {

    let realViews = views+1
    const viewsBox = document.getElementById("viewsText")
    viewsBox.textContent = ("+" + realViews + " 👁️")
}

function loadItemBox(vintedURL) {

    const divPrincipal = document.createElement("div")
    divPrincipal.className = "item-container"

    const divUrl = document.createElement("div")
    divUrl.className = "item-url"
    const parrafoUrl = document.createElement("p")
    parrafoUrl.textContent = vintedURL
    divUrl.appendChild(parrafoUrl)

    const divViews = document.createElement("div")
    divViews.className = "item-views"
    const parrafoViews = document.createElement("p")
    parrafoViews.id = "viewsText"

    parrafoViews.textContent = "+0 👁️"
    divViews.appendChild(parrafoViews)

    divPrincipal.appendChild(divUrl)
    divPrincipal.appendChild(divViews)

    document.body.appendChild(divPrincipal)
}