document.addEventListener('DOMContentLoaded', () => {
    const inputsCantidad = document.querySelectorAll('.productos input[type="number"]');
    const detalleLista = document.getElementById('detalle-lista');
    const totalSpan = document.getElementById('total');
    const btnPagar = document.getElementById('ir-a-pagar');

    function actualizarDetalle() {
        detalleLista.innerHTML = '';
        let total = 0;

        inputsCantidad.forEach(input => {

            let cantidad = parseInt(input.value);
            if (isNaN(cantidad) || cantidad < 0) {
                cantidad = 0;
                input.value = 0;
            }
            if (cantidad > 0) {
                const precio = parseFloat(input.dataset.precio);
               
                const productoLi = input.closest('li');
                const nombreProducto = productoLi ? productoLi.querySelector('img').alt : 'Producto';

                const subtotal = cantidad * precio;
                total += subtotal;

                const li = document.createElement('li');
                li.textContent = `${nombreProducto}: ${cantidad} unidad(es) x Bs ${precio.toFixed(2)} = Bs ${subtotal.toFixed(2)}`;
                detalleLista.appendChild(li);
            }
        });

        totalSpan.textContent = total.toFixed(2);
    }

    inputsCantidad.forEach(input => {
        input.addEventListener('input', () => {
            actualizarDetalle();
        });
    });

    btnPagar.addEventListener('click', () => {
        const total = parseFloat(totalSpan.textContent);
        if (total === 0) {
            alert('No has seleccionado ningún producto para pagar.');
        } else {
            alert(`Gracias por tu compra. Total a pagar: Bs ${total.toFixed(2)}`);
          
        }
    });

 
    actualizarDetalle();
});