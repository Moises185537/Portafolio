 function generarPDF() {
        // Obtener los valores del formulario
        const nombre = document.getElementById('Nombre').value;
        const ApPaterno = document.getElementById('ApPaterno').value;
        const ApMaterno = document.getElementById('ApMaterno').value;
        const pass = document.getElementById('pass').value;
        const fechareg = document.getElementById('fechareg').value;
        const zona = document.getElementById('zona').value
        const pago = document.getElementById('pago').value;
        const Calle = document.getElementById('Calle').value;
        const Nomsalon = document.getElementById('Nomsalon').value;
        const Colonia = document.getElementById('Colonia').value;
        const email = document.getElementById('email').value;

        // Crear una instancia de jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Agregar contenido al PDF
        doc.text(`Nombre: ${nombre}`, 10, 10);
        doc.text(`Apellido Paterno: ${ApPaterno}`, 10, 20);
        doc.text(`Apellido Materno: ${ApMaterno}`, 10, 30);
        doc.text(`Codigo de Seguridad: ${pass}`, 10, 40);
        doc.text(`Fecha de evento: ${fechareg}`, 10, 50);
        doc.text(`Zona del evento: ${zona}`, 10, 60);
        doc.text(`Forma del pago: ${pago}`, 10, 70);
        doc.text(`Calle: ${Calle}`, 10, 80);
        doc.text(`Nombre del salon: ${Nomsalon}`, 10, 90);
        doc.text(`Colonia: ${Colonia}`, 10, 100);
        doc.text(`E-mail: ${email}`, 10, 110);

        // Guardar el PDF
        doc.save('Ticket.pdf');
    }