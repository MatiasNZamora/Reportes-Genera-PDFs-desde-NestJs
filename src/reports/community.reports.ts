import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { text } from 'stream/consumers';

export const getCommunityReport = ( ):TDocumentDefinitions => {
    
    const docDefinition:TDocumentDefinitions = { 
        defaultStyle: {
            fontSize: 10,
        }, 
        content:[ 
            {
                columns:[
                    {
                        image: 'src/assets/tucan-code-logo.png',
                        width: 50,
                    },
                    {
                        alignment: 'center',
                        text: 'Forestal Admin Community SAP\n RUT: 44.123.1233 \n Camino montaña km 16 \n Telefono: +24 23123 1313'
                    },
                    {
                        alignment: 'right',
                        width: 140,
                        layout: 'borderBlue', 
                        table: {
                            body: [
                                [{
                                    layout: 'noBorders',
                                    table: {
                                        body: [
                                            ['No.', '234-321'],
                                            ['Fecha', '11/11/2025'],
                                            ['Version', '20.1'],
                                        ]
                                    }
                                }]
                            ]
                        },
                    }
                ]
            },
            // linea horizontal
            {
                margin: [0,5],
                canvas: [
                    {
                        type: 'line',
                        x1: 0,
                        y1: 5,
                        x2: 515,
                        y2: 5,
                        lineWidth: 2,
                        lineColor: '#3A4546',
                    }
                ]
            },
            // detalles cel cliente
            {
                table: {
                    widths: ['auto', '*', 'auto', '*'],
                    body: [
                        [ 
                            {
                                text: 'Datos del Cliente',
                                fillColor: '#5775e1',
                                color: 'white',
                                colSpan: 4,
                                // border: [false, false, false, false],
                            },
                            {},
                            {},
                            {},
                        ],
                        // razon social 
                        [
                            {
                                text: 'Razon Social',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: 'Nombre de la Empresa',
                                fillColor: 'white',
                            },
                            {
                                text: 'Direccion',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: 'Calle falsa 123',
                                fillColor: 'white',
                            },
                        ],
                        [
                            {
                                text: 'RUT',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: '',
                                fillColor: 'white',
                            },
                            {
                                text: 'Telefono',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: '',
                                fillColor: 'white',
                            },
                        ],
                        [
                            {
                                text: 'Giro',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: '',
                                fillColor: 'white',
                            },
                            {
                                text: 'Condicion de Pago',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: '',
                                fillColor: 'white',
                            },
                        ]

                    ]
                }
            },
        ], 
    };
    return docDefinition;
};