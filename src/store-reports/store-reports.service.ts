import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { orederByIdReport } from 'src/reports';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
    [x: string]: any;
    async onModuleInit() {
        await this.$connect();
        // console.log('Database Conected !');
    }

    constructor( private readonly PrinterService:PrinterService ){super();}

    async getOrderByIdReport(orderId: number) {

        const order = await this.orders.findUnique({ 
            where: { order_id: orderId },
            include: {
                customers: true,
                order_details: {
                    include:{
                        products: true,
                    }
                },
            }
        });
        // console.log(JSON.stringify(order, null, 2));
        if (!order) throw new NotFoundException(`Order with Id: ${orderId} not found.`);

        const docDefinition = orederByIdReport({ data: order as any });
        const doc = this.PrinterService.createPdf(docDefinition);    
        return doc;
    };

};
