document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#vinted-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const vintedLink = document.getElementById("vinted_link_input").value;
        const vintedViews = document.getElementById("vinted_views_input").value;

        if (isValidLink(vintedLink) == true && vintedViews > 0 && vintedViews < 100) {
            generateVisits(vintedLink, vintedViews);
        } else {
            alert("The link is invalid or the number of visits is invalid (0-100)");
        }
    });

    const isValidLink = (vintedURL) => vintedURL.includes("https://www.vinted.es/items/");    
});
