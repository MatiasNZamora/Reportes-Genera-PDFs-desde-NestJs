import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { getDonutChart } from "./charts/donut.chart";
import { headerSection } from "./sections/header.section";
import { getLineChart } from "./charts/line.chart";
import { getBarsChart } from "./charts/bars.chart";
import { footerSection } from "./sections/footer.section";

interface TopCountry {
    country: string;
    customers: number;
};

interface ReportOptions {
    title?: string;
    subTitle?: string;
    topCountries: TopCountry[];
};

export const getStatisticsdReport = async (options: ReportOptions): Promise<TDocumentDefinitions> => {

    const [ donutChart, lineChart, barchar1, barchar2 ] = await Promise.all([
        getDonutChart({
            entries: options.topCountries.map(country => ({
                label: country.country,
                value: country.customers
            })),
            positions: 'left',
        }),
        getLineChart(),
        getBarsChart(),
        getBarsChart(),
    ])

    const docDefinition: TDocumentDefinitions = {
        pageMargins:[40,100,40,60],
        header: headerSection({
            title: options.title ?? 'Estadisticas de Clientes',
            subTitle: options.subTitle ?? 'Top 10 paises con mas clientes',
        }),
        footer: footerSection,
        content: [
            {
                columns: [
                    {
                        stack: [
                            {
                                text: '10 paises con mas clientes',
                                alignment: 'center',
                                margin:[0,0,0,10],
                            },
                            {
                                image: donutChart,
                                width: 320,
                            },
                        ]
                    },
                    {
                        layout: 'lightHorizontalLines',
                        width: 'auto',
                        table: {
                            headerRows: 1,
                            widths: [100, 'auto'],
                            body: [
                                ['Pais', 'Clientes'],
                                ...options.topCountries.map( (c) => [ c.country, c.customers ] ),
                            ]
                        }
                    },
                ]
            },
            {
                image: lineChart,
                width: 500,
            },
            {
                columnGap: 10,
                columns:[
                    {
                        image: barchar1,
                        width: 250,
                    },
                    {
                        image: barchar2,
                        width: 250,
                    }
                ]
            },
        ]
    };
    return docDefinition;
};