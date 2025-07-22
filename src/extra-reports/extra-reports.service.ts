import fs from 'fs';
import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { getHtmlContent } from 'src/helpers/html-to-pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';
import { footerSection } from 'src/reports/sections/footer.section';
import { getCommunityReport } from 'src/reports';

@Injectable()
export class ExtraReportsService {

    constructor( private readonly printerService:PrinterService ){}

    getHtmlReport(){
        const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf-8');
        
        const content = getHtmlContent(html, {
            client: 'Matias N Zamora',
            // title: ''
        });
        
        const docDefinition:TDocumentDefinitions = {
            pageMargins: [40,110,40,60],
            header: headerSection({
                title: 'HTML to Pdf',
                subTitle: 'Convertir HTML a PDFMake',
            }),
            footer: footerSection,
            content: content,
        };

        const doc = this.printerService.createPdf(docDefinition);
        return doc;
    };

    getCommunity(){
        const docDefinition = getCommunityReport()

        const doc = this.printerService.createPdf(docDefinition);
        return doc;
    };

    getCustomSize(){
        const doc = this.printerService.createPdf({
            pageSize: 'A4', 
            content: [
                {
                    qr: 'https://matiasnzamora.com.ar',
                    fit: 100,
                    alignment: 'center',
                },
                {
                    text: 'Reporte con tamaño',
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0,20],
                },
            ]
        });
        return doc;
    };
}
