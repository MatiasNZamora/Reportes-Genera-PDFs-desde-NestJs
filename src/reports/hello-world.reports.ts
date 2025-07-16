import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name:string;
};

export const getHelloWorldReport = ( options:ReportOptions ):TDocumentDefinitions => {
    
    const {name} = options;
    
    // defino el contenido del pdf y lo retorno.
    const docDefinition:TDocumentDefinitions = { content:[ `Hola ${name}`], };
    return docDefinition;
};