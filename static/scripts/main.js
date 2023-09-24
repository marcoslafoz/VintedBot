document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#vinted-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const vintedLink = document.getElementById("vinted_link_input").value;
        const vintedViews = document.getElementById("vinted_views_input").value;

        if (isValidLink(vintedLink) == true && vintedViews > 0 && vintedViews < 100) {
            generateVisits(vintedLink, vintedViews);
            alert("Adding " + vintedViews + " visits");
        } else {
            alert("The link is invalid or the number of visits is invalid (0-100)");
        }
    });

    function isValidLink(vintedLink) {
        return vintedLink.includes("https://www.vinted.es/items/");
    }

    async function generateVisits(vintedLink, views) {
        const threads = 1;
        let counter = 0;

        const main = async () => {
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
            };

            for (let i = 0; i < views; i++) {
                try {
                    const response = await fetch(vintedLink, { headers });

                    if (response.status === 200) {
                        counter++;
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    } else if (response.status === 429) {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 3000));
                    }
                } catch (e) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }

            alert("Added " + views + " visits");
        };

        const runThreads = () => {
            for (let i = 0; i < threads; i++) {
                try {
                    main(i);
                } catch (e) {
                    setTimeout(() => { }, 1000);
                }
            }
        };

        runThreads();
    }
});
