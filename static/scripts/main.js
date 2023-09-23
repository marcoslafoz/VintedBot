document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#vinted-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const vintedLink = document.getElementById("vinted_link_input").value;
        if (vintedLink.includes('vinted')) {
            console.log("Añadiendo visitas")
            generator(vintedLink)
        } else {
            console.log("Formulario vacío")
        }
    });
});

function generator(vinted_link) {
    const threadsInput = '1';

    if (!vinted_link.includes('vinted')) {
        console.log('Invalid vinted link');
        return;
    }

    const threads = parseInt(threadsInput);

    if (isNaN(threads)) {
        console.log('Invalid threads number');
        return;
    }

    let ctr = 0;

    const safePrint = (thread_id, arg) => {
        console.log(`[Thread ${thread_id}] ${arg}`);
    };

    const main = async (thread_id) => {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
        };

        while (true) {
            try {
                const response = await fetch(vinted_link, { headers });

                if (response.status === 200) {
                    ctr++;
                    safePrint(thread_id, `Added 1 view to product ${vinted_link}. Total views added: ${ctr}`);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } else if (response.status === 429) {
                    safePrint(thread_id, `Ip address rate limited ${vinted_link}`);
                    await new Promise(resolve => setTimeout(resolve, 5000));
                } else {
                    safePrint(thread_id, `Error ${response.status}`);
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            } catch (e) {
                safePrint(thread_id, `Request failed, retrying ${e.message}`);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
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