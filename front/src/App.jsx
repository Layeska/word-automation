import { useState } from 'react';
import axios from 'axios';
// import Plantilla from './components/Plantilla';

import x from './x'

function App() {
  const [documentoGenerado, setDocumentoGenerado] = useState(null)

  const generarDocumento = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generarDocumento', {}, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      this.setState({ documentoGenerado: url });
    } catch (error) {
      console.error('Error al generar el documento:', error);
    }

    handleFileChange()
    x()
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const docxContent = event.target.result;
      
      // Ahora tienes el contenido del archivo DOCX en la variable docxContent
      // Puedes proceder a editarlo.
      console.log(docxContent)

    };
    
    reader.readAsArrayBuffer(file);
  };
  

    return (
      <div>
        <button onClick={generarDocumento}>Generar Documento</button>
        {documentoGenerado && (
          <a href={documentoGenerado} download="documento.docx">
            Descargar Documento
          </a>
        )}
    </div>
    );
}

export default App;

/*
 <div>
      <button onClick={generarDocumento}>Generar Documento</button>
      {documentoGenerado && (
        <a href={documentoGenerado} download="documento.docx">
          Descargar Documento
        </a>
      )}
    </div>

       
*/