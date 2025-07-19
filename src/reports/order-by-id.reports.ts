import type { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces"
import { DateFormater, CurrencyFormatter } from 'src/helpers';
import { footerSection } from "./sections/footer.section";


const logo: Content = {
    image: 'src/assets/tucan-banner.png',
    width: 100,
    height: 30,
    margin:[10,20],
};

const style:StyleDictionary = {
    header: {
        fontSize: 20,
        bold: true,
        margin:[0,30,0,0],
    },
    subHeader: {
        fontSize: 16,
        bold: true,
        margin:[0,20,0,0],
    }
};


export interface CompleteOrder {
    order_id:      number;
    customer_id:   number;
    order_date:    Date;
    customers:     Customers;
    order_details: OrderDetail[];
}

export interface Customers {
    customer_id:   number;
    customer_name: string;
    contact_name:  string;
    address:       string;
    city:          string;
    postal_code:   string;
    country:       string;
}

export interface OrderDetail {
    order_detail_id: number;
    order_id:        number;
    product_id:      number;
    quantity:        number;
    products:        Products;
}

export interface Products {
    product_id:   number;
    product_name: string;
    category_id:  number;
    unit:         string;
    price:        string;
}


interface ReportsValues {
    title?: string;
    subTitle?: string;
    data: CompleteOrder;
};

export const orederByIdReport = ( value: ReportsValues ):TDocumentDefinitions =>{

    const { data } = value;
    const { order_details, customers } = data;
    // console.log('orederByIdReport', data);

    const subTotal = order_details.reduce((acc, detail) => {
        return acc + (+detail.products.price * detail.quantity);
    },0);

    const total = subTotal * 1.21;

    return {
        header:logo,
        styles: style,
        pageMargins: [40,60,40,40],
        footer: footerSection,
        content: [
            // headers 
            {
                text: 'Tucan Code',
                style: 'header',
            },
            // address and order info
            {
                columns: [
                    {
                        text: 'chubut 690, barrio san martin, la rioja, capital',
                    },
                    {
                        text: [
                            { text: `Recibo No#: ${data.order_id} \n`, bold: true },
                            ` Fecha de recibo: ${ DateFormater.getDDMMMYYYY( data.order_date ) } \n `,
                            ` Pagar antes de: ${ DateFormater.getDDMMMYYYY( new Date() ) } \n `,
                        ],
                        alignment: 'right',
                    }
                ]
            },
            // Qr code
            {
                qr: 'https://matiasnzamora.com.ar',
                fit: 75,
                alignment: 'right',
                margin: [0, 20, 0, 20],
            },
            // direccion del cliente
            {
                text: [
                    {
                        text: 'Cobrar a: \n',
                        style: 'subheader',
                        bold: true,
                    },
                `
                    Razón Social: ${customers.customer_name},
                    Nombre de contacto: ${customers.contact_name},
                    Dirección: ${customers.address},
                    Ciudad: ${customers.city},
                `
                ]
            },
            // tabla de detalle de la orden
            {
                layout: 'headerLineOnly',
                margin: [0, 20],
                table: {
                    headerRows: 1,
                    widths: [50,'*','auto', 'auto', 'auto'],
                    body:[
                        ['ID', 'Descripción', 'Cantidad', 'Precio Unitario', 'Total'],

                        ...order_details.map((detail) => [
                            detail.order_detail_id.toString(),
                            detail.products.product_name,
                            detail.quantity.toString(),
                            {
                                text: CurrencyFormatter.formatCurrency(+detail.products.price),
                                alignment: 'right',
                            },
                            {
                                text: CurrencyFormatter.formatCurrency(+detail.products.price * detail.quantity),
                                alignment: 'right',
                            }
                        ])
                    ],       
                },
            },
            // salto de linea 
            '\n\n',
            // totales
            {
                columns: [
                    {
                        width: '*',
                        text: '',
                    },
                    {
                        width: 'auto',
                        layout: 'noBorders',
                        table: {
                            body: [
                                ['Subtotal', {text: CurrencyFormatter.formatCurrency(subTotal), alignment: 'right'}],
                                [{ text: 'Total', bold: true, fontSize: 14 }, { text: CurrencyFormatter.formatCurrency(total), alignment: 'right', bold: true, fontSize: 14 }],
                            ]
                        }
                    }
                ]
            }
        ],
    }
};