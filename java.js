const temaInput = document.getElementById('temaInput');
const agregarTemaBtn = document.getElementById('agregarTema');
const listaTareas = document.getElementById('listaTareas');

agregarTemaBtn.addEventListener('click', () => {
    const tema = temaInput.value.trim();
    if (tema) {
        // Obtener una imagen aleatoria de Lorem Picsum
        fetch('https://picsum.photos/200/200')
            .then(response => {
                const imagenUrl = response.url;
                agregarTemaALista(tema, imagenUrl);
                temaInput.value = '';
            })
            .catch(error => {
                console.error('Error al obtener la imagen:', error);
            });
    }
});

function agregarTemaALista(tema, imagenUrl) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${imagenUrl}" alt="${tema}">
        <span>${tema}</span>
        <button class="completar">Completar</button>
        <button class="eliminar">Eliminar</button>
    `;

    const completarBtn = listItem.querySelector('.completar');
    const eliminarBtn = listItem.querySelector('.eliminar');

    completarBtn.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    eliminarBtn.addEventListener('click', () => {
        listItem.remove();
    });

    listaTareas.appendChild(listItem);
}