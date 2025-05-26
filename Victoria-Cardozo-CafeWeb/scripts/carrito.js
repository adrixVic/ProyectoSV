document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".productos input[type='number']");
    const totalSpan = document.getElementById("total");
    const detalleLista = document.getElementById("detalle-lista");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            actualizarTotal();
        });
    });

    function actualizarTotal() {
        let total = 0;
        detalleLista.innerHTML = ""; 

        inputs.forEach(input => {
            const cantidad = parseInt(input.value);
            const precio = parseFloat(input.dataset.precio);
            const producto = input.closest("li").querySelector("img").alt; 

            if (cantidad > 0) {
                const subtotal = cantidad * precio;
                total += subtotal;


                const li = document.createElement("li");
                li.textContent = `${producto}: ${cantidad} unidad(es) x Bs ${precio.toFixed(2)} = Bs ${subtotal.toFixed(2)}`;
                detalleLista.appendChild(li);
            }
        });

        totalSpan.textContent = total.toFixed(2);
    }
});