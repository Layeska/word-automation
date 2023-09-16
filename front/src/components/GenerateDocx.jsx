import React, { Component } from 'react';
import officegen from 'officegen';
import fs from 'fs';

class GenerateDocx extends Component {
  generateDocument = () => {
    // Crea un nuevo documento de Word
    const docx = officegen('docx');

    // Agrega contenido al documento
    const paragraph = docx.createP();
    paragraph.addText('¡Hola, mundo!');

    // Guarda el documento en un archivo
    const stream = docx.generate();
    stream.pipe(require('fs').createWriteStream('documento.docx'));

    // Puedes enviar el documento al usuario para descargarlo
    // window.location.href = 'documento.docx';
  }

  render() {
    return (
      <div>
        <button onClick={this.generateDocument}>Generar Documento</button>
      </div>
    );
  }
}

export default GenerateDocx;
