import docx from "officegen"

const GenerateDocx = () => {
    // const docx = officegen('docx')

    const generando = () => {
        docx.setTitle('Hola este es el titulo')
        docx.setDescription("bla bla")
        
        try {
            const pObj = docx.createP();
            pObj.addText('¡Hola, mundo!', { bold: true, underline: true, color: '0000FF' });
            const stream = docx.generate();
            stream.pipe(200);
        } catch(error) {
            console.log(error)
        }


    }


    return (
        <>
        <div>
            <button onClick={generando}>Generar Documento de Word</button>
        </div>
        </>
    )
}

export default GenerateDocx
