document.getElementById('calcular').addEventListener('click', function() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    
    if (!isNaN(subtotal) && !isNaN(porcentaje)) {
        const propina = subtotal * (porcentaje / 100);
        const total = subtotal + propina;
        
        document.getElementById('propina').textContent = 'Propina: $' + propina.toFixed(2);
        document.getElementById('total').textContent = 'Total a pagar: $' + total.toFixed(2);
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
});