import type { Content } from "pdfmake/interfaces";

export const footerSection = (currentPage:number, pageCount:number):Content => {
    return {
        text: `Pagina ${currentPage} de ${pageCount}`,
        style: 'footer',
        alignment: 'right',
        bold: true,
        fontSize: 10,
        margin: [0, 10, 35, 0],
    };
};
