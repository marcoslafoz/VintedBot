const mostrarDivBtn = document.getElementById('botonSubmit');
const divEmergente = document.getElementById('divEmergente');

function alertBox() {
    mostrarDivBtn.addEventListener('click', () => {
        divEmergente.style.display = 'block';

        setTimeout(() => {
            divEmergente.style.display = 'none';
        }, 3000);
    })
}