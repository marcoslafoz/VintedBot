async function generateVisits(vintedLink, views) {
  const threads = 1;
  let counter = 0;

  const main = async () => {
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    };

    loadItemBox(vintedLink);

    for (let i = 0; i < views; i++) {
      try {
        const response = await fetch(vintedLink, { headers });

        if (response.status === 200) {
          counter++;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else if (response.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
        } else {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }

        loadItemBox(vintedLink)

        for (let i = 0; i < views; i++) {
            try {
                const response = await fetch(vintedLink, { headers })

                if (response.status === 200) {
                    counter++
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                } else if (response.status === 429) {
                    await new Promise(resolve => setTimeout(resolve, 5000))
                } else {
                    await new Promise(resolve => setTimeout(resolve, 3000))
                }
            } catch (e) {
                await new Promise(resolve => setTimeout(resolve, 2000))
            }
            showViews(i)
        }

        //TODO: LLAMAR A FUNCION DESTRUIR ITEM BOX
        alert("Added " + views + " visits")
    }

    alert("Added " + views + " visits");
  };

  const runThreads = () => {
    for (let i = 0; i < threads; i++) {
      try {
        main(i);
      } catch (e) {
        setTimeout(() => {}, 1000);
      }
    }
  };

  runThreads();
}
