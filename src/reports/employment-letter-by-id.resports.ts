import  type { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { DateFormater } from "src/helpers";


interface ReportValues {
    employerName: string;
    employerPosition: string;
    employeeName: string;
    employeePosition: string;
    employeeStartDate: Date;
    employeeHours: number;
    employeeWorkSchedule: string;
    employerCompany: string;
};

const style:StyleDictionary = {
    header: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        margin: [0,60,0,20],
    },
    body: {
        margin: [0,0,0,50],
        alignment: 'justify',
    },
    signature: {
        fontSize: 14,
        bold: true,
    },
    footer:{
        fontSize: 10,
        italics: true,
        bold: true,
        alignment: 'center',
        margin: [0,0,0,20],
    },

};

export const getEmploymentLetterByIdReport = ( values: ReportValues ):TDocumentDefinitions => {

    const { 
        employerName, 
        employerPosition, 
        employeeName, 
        employeePosition,
        employeeStartDate,
        employeeHours,
        employeeWorkSchedule,
        employerCompany
    } = values;


    const docDefinition:TDocumentDefinitions = {
        styles: style,
        pageMargins: [40,40,40,60],

        header: headerSection({ showLogo:true, showDate:true, }),
        content: [
            {
                text: 'Constancia de Empleo',
                style: 'header'
            },  
            {
                text: 
                ` 
                    Yo, ${employerName}, en mi calidad de ${employeePosition} de ${employerCompany},
                    por medio de la presente certifco que ${employeeName} ha sido empleado en nuestra
                    empresa desde el ${DateFormater.getDDMMMYYYY(employeeStartDate)}.\n\n
                    Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, 
                    demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n
                    La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas semanales, con un horario de 
                    ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos 
                    por la empresa.\n\n
                    Esta constancia se expide a solicitud del interesado para los fnes que considere conveniente.
                `,
                style: 'body'
            },
            { text:'Atentamente', style: 'signature', },
            { text: employerName, style: 'signature', },
            { text: employerPosition, style: 'signature', },
            { text: employerCompany, style: 'signature', },
            { text: DateFormater.getDDMMMYYYY(new Date()), style: 'signature' }
        ],
        footer: {
            text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
            style: 'footer'
        }
    };
    return docDefinition;
};