const express = require('express');
const app = express();
const fs = require('fs');
const officegen = require('officegen');
const cors = require('cors')

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.post('/generarDocumento', (req, res) => {
  // Crear un nuevo documento de Word
  const docx = officegen('docx');

  // Agregar contenido al documento
  const paragraph = docx.createP();
  paragraph.addText('Hola, esto es un documento de Word generado con officegen.');

  // Guardar el documento en un archivo
  const outputPath = 'documentoPrueba7.docx';
  const outputStream = fs.createWriteStream(outputPath);
  docx.generate(outputStream);

  // Enviar el archivo generado como respuesta
  res.sendFile(outputPath, { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
