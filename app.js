const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const path = require('path');

const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/procesar_link', (req, res) => {
    const vintedLink = req.body.vinted_link;

    const scriptPath = path.join(__dirname, 'static', 'scripts');

    const options = {
        scriptPath: scriptPath,
    };

    // Crear una nueva instancia de PythonShell para cada solicitud
    const pyShell = new PythonShell('procesar_enlace.py', options);

    pyShell.send({ vintedLink }); // Envía los datos al script Python

    pyShell.on('message', (message) => {
        try {
            const resultadoPython = JSON.parse(message);
            res.send(resultadoPython); // Envía la respuesta al cliente
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al procesar el enlace.');
        }
    });

    pyShell.end((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al procesar el enlace.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
