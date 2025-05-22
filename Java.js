 function generarPDF() {
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const Nomsalon = document.getElementById('Nomsalon').value;

        // Crear una instancia de jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Agregar contenido al PDF
        doc.text(`Nombre: ${nombre}`, 10, 10);
        doc.text(`Email: ${email}`, 10, 20);
        doc.text(`Nombre del salon: ${Nomsalon}`, 10, 30);

        // Guardar el PDF
        doc.save('Ticket.pdf');
    }