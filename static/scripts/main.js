document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#vinted-form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const vintedLink = document.getElementById("vinted_link_input").value
        const vintedViews = document.getElementById("vinted_views_input").value

        if (vintedLink != "") {
            generator(vintedLink, vintedViews)
            alert("Añadiendo " + vintedViews + " visitas" )
        } else {
            alert("El enlace no es valido o la cantidad de visitas es invalida (0-100)")
        }
    });

    async function generator(vinted_link, views) {
        
        const threads = 1
        let ctr = 0

        const main = async (thread_id) => {
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
            };

            for (i = 0 ; i < views ; i++) {
                try {
                    const response = await fetch(vinted_link, { headers })

                    if (response.status === 200) {
                        ctr++;
                        await new Promise(resolve => setTimeout(resolve, 1000))
                    } else if (response.status === 429) {
                        await new Promise(resolve => setTimeout(resolve, 5000))
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 3000))
                    }
                } catch (e) {
                    await new Promise(resolve => setTimeout(resolve, 2000))
                }
            }

            alert("Se han añadido " + views + " visitas")
        };

        const runThreads = () => {
            for (let i = 0; i < threads; i++) {
                try {
                    main(i);
                } catch (e) {
                    setTimeout(() => { }, 1000)
                }
            }
        };

        runThreads()
    }
})
