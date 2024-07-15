document.addEventListener('DOMContentLoaded', () => {
    const agregarNotaBoton = document.getElementById('agregarNota');
    const contenedorNotas = document.getElementById('contenedorNotas');
    const buscarInput = document.getElementById('buscar');
    const mostrarIncompletasCheckbox = document.getElementById('mostrarIncompletas');

    agregarNotaBoton.addEventListener('click', agregarNota);
    buscarInput.addEventListener('input', filtrarNotas);
    mostrarIncompletasCheckbox.addEventListener('change', filtrarNotas);

    function agregarNota() {
        const titulo = document.getElementById('titulo').value;
        const contenido = document.getElementById('contenido').value;

        if (titulo && contenido) {
            const nota = document.createElement('div');
            nota.classList.add('nota');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                nota.classList.toggle('completada');
                filtrarNotas();
            });

            const notaContenido = document.createElement('div');
            notaContenido.innerHTML = `<strong>${titulo}</strong><p>${contenido}</p>`;

            const eliminarBoton = document.createElement('button');
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.addEventListener('click', () => {
                contenedorNotas.removeChild(nota);
            });

            nota.appendChild(checkbox);
            nota.appendChild(notaContenido);
            nota.appendChild(eliminarBoton);

            contenedorNotas.appendChild(nota);

            document.getElementById('titulo').value = '';
            document.getElementById('contenido').value = '';
        }
    }

    function filtrarNotas() {
        const terminoBusqueda = buscarInput.value.toLowerCase();
        const mostrarIncompletas = mostrarIncompletasCheckbox.checked;
        const notas = contenedorNotas.querySelectorAll('.nota');

        notas.forEach(nota => {
            const titulo = nota.querySelector('strong').textContent.toLowerCase();
            const contenido = nota.querySelector('p').textContent.toLowerCase();
            const coincideBusqueda = titulo.includes(terminoBusqueda) || contenido.includes(terminoBusqueda);
            const estaCompletada = nota.classList.contains('completada');

            if (coincideBusqueda && (!mostrarIncompletas || !estaCompletada)) {
                nota.style.display = '';
            } else {
                nota.style.display = 'none';
            }
        });
    }
});