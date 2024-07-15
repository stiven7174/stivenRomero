document.addEventListener('DOMContentLoaded', () => {
    const convertirADolaresBoton = document.getElementById('convertirADolares');
    const convertirAPesosBoton = document.getElementById('convertirAPesos');
    const resultado = document.getElementById('resultado');

    const tasaDeCambio = 0.00027; // Tasa de cambio aproximada COP a USD

    convertirADolaresBoton.addEventListener('click', () => {
        const pesoColombiano = parseFloat(document.getElementById('pesoColombiano').value);
        if (isNaN(pesoColombiano)) {
            resultado.textContent = 'Por favor, ingrese un valor válido en pesos colombianos.';
            return;
        }
        const dolares = pesoColombiano * tasaDeCambio;
        resultado.textContent = `El equivalente en dólares (USD) es: $${dolares.toFixed(2)}`;
    });

    convertirAPesosBoton.addEventListener('click', () => {
        const dolares = parseFloat(document.getElementById('dolares').value);
        if (isNaN(dolares)) {
            resultado.textContent = 'Por favor, ingrese un valor válido en dólares.';
            return;
        }
        const pesoColombiano = dolares / tasaDeCambio;
        resultado.textContent = `El equivalente en pesos colombianos (COP) es: $${pesoColombiano.toFixed(2)}`;
    });
});