import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import fs from'fs'

//import { Docxtemplater }  from 'docxtemplater'

const x = () => {



const content = fs.readFileSync('C:/Users/lisa1/Desktop/word_automation2/back/documentoPrueba1.docx', 'binary');
const zip = new PizZip(content);
const doc = new Docxtemplater();
doc.loadZip(zip);

const data = {
  firstName: 'John',
  lastName: 'Doe',
};

doc.setData(data);
doc.render();

const editedDocxContent = doc.getZip().generate({ type: 'nodebuffer' });

const handleDownload = () => {
    const editedDocxBlob = new Blob([editedDocxContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = window.URL.createObjectURL(editedDocxBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_document.docx';
    a.click();
    window.URL.revokeObjectURL(url);
  };
  
handleDownload()
}

export default x
