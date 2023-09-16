import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
//import { fs } from 'fs'

const Plantilla = () => {
  const generateWordDocument = () => {
    // Cargar la plantilla de Word
    const template = fs.readFileSync('C:/Users/lisa1/Desktop/word_automation2/back/documentoPrueba10.docx', 'binary');
    const zip = new PizZip(template);
    const doc = new Docxtemplater(zip);

    // Datos para llenar la plantilla
    const data = {
      nombre: 'Nombre del Contratista',
      identificacion: '123456789',
      direccion: 'Dirección del Contratista',
      correo: 'correo@ejemplo.com',
      tipoContrato: 'Tipo de Contrato',
      valor: '1000.00',
    };

    // Aplicar los datos a la plantilla
    doc.setData(data);

    // Procesar la plantilla
    doc.render();

    // Obtener el documento generado
    const generatedDocument = doc.getZip().generate({ type: 'nodebuffer' });

    // Guardar el documento en el servidor
    //fs.writeFileSync('documento_generado.docx', generatedDocument);
  };

    return (
      <div>
        <button onClick={generateWordDocument}>Generar Documento de Word</button>
      </div>
    )
}

export default Plantilla;
