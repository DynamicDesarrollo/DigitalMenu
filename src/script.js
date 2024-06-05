document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var monto = document.getElementById('monto').value;

    var mensaje = `Nombre: ${nombre}\nDirección: ${direccion}\nTeléfono: ${telefono}\nMonto a pagar: $${monto}`;
    enviarMensajeWhatsapp(mensaje);
});

function enviarMensajeWhatsapp(mensaje) {
    const url = `https://api.whatsapp.com/send?phone=3102102203&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña del navegador
}
