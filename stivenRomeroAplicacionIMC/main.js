document.addEventListener('DOMContentLoaded', () => {
    const calcularIMCBoton = document.getElementById('calcularIMC');
    const resultadoIMC = document.getElementById('resultadoIMC');

    calcularIMCBoton.addEventListener('click', calcularIMC);

    function calcularIMC() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir cm a metros

        if (isNaN(peso) || isNaN(altura)) {
            resultadoIMC.textContent = 'Por favor, ingrese valores válidos.';
            return;
        }

        const imc = peso / (altura * altura);
        resultadoIMC.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
    }
});