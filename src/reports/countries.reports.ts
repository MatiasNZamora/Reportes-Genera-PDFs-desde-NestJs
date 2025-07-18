import { TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { countries as Country } from "generated/prisma";
import { footerSection } from "./sections/footer.section";

interface ReportOptions {
    title?: string;
    subTitle?: string;
    data: Country[];
};

export const getCountriesReports = (options :ReportOptions): TDocumentDefinitions => {

    const { title, subTitle, data }: ReportOptions = options;
    
    return {
        pageOrientation: 'landscape',
        header: headerSection({
            title: title ?? 'Countries Report',
            subTitle: subTitle ?? 'List of countries',
        }),
        footer: footerSection,
        pageMargins: [40,110,40,60],
        content: [
            {
                layout: 'customLayout01', //'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: [50, 50, 50, '*', 'auto', '*'],
                    body: [
                        ['ID', 'ISO 2', 'ISO 3', 'Name', 'Continent', 'Local Name'],
                        ...data.map(country => [
                            country.id?.toString() ?? '',
                            country?.iso2 ?? '',
                            country?.iso3 ?? '',
                            country?.name ?? '',
                            country?.continent ?? '',
                            country?.local_name ?? ''
                        ])
                    ]
                }
            },
            {
                text: 'Totales',
                style: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 40, 0, 0]
                }
            },
            {
                layout: 'noBorders',
                table: {
                    headerRows: 1,
                    widths: [50, 50, 70, '*', 'auto', '*'],
                    body: [
                        [
                            { text: 'Total de países:', colSpan:3, bold: true },
                            {},
                            { text: `${data.length} Paises`, bold: true },
                            {},
                            {},
                            {},
                        ]
                    ]
                }
            }
        ],
    }
};