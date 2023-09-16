import React, { useEffect } from 'react';
import officegen from 'officegen';

const DocumentGenerator = () => {
  useEffect(() => {
    const docx = officegen('docx');

    const title = docx.createP();
    title.addText('Ejemplo de documento generado con Officegen', {
      bold: true,
      underline: true,
      fontSize: 16,
      color: '000088',
    });

    const paragraph = docx.createP();
    paragraph.addText('Este es un documento de prueba generado con Officegen en un microfrontend de React.');

    const stream = docx.generate();
    const fileName = 'documento_generado.docx';

    stream.pipe(res);

    docx.on('finalize', function() {
      console.log('Documento finalizado');
    });

    docx.on('error', function(err) {
      console.log(err);
    });

  }, []);

  return (
    <div>
      <p>Generador de Documentos</p>
    </div>
  );
};

export default DocumentGenerator;
