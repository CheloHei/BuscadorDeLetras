import { API } from "./api.js";
import * as UI from "./interfaz.js";

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    //Datos del form
    const artista = document.getElementById('artista').value,
        cancion = document.getElementById('cancion').value;

    if (artista === '' || cancion === '') {
        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.className = 'error';
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.className.remove('error');
        }, 3000);
    } else {
        const api = new API(artista, cancion);
        api.consultarAPI()
            .then(data => {
                if (data.respuesta.lyrics) {
                    const letra = data.respuesta.lyrics;
                    UI.divResultados.textContent = letra;

                } else {
                    UI.divMensajes.innerHTML = 'La cancion no existe';
                    UI.divMensajes.className = 'error';
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.className.remove('error');
                        UI.formularioBuscar.reset();
                    }, 3000);
                }
            })
    }




})