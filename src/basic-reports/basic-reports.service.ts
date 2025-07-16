import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { PrinterService } from '../printer/printer.service';
import { getEmploymentLetterByIdReport, getEmploymentLetterReport, getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    [x: string]: any;
    async onModuleInit() {
        await this.$connect();
        // console.log('Database Conected !');
    };

    constructor( private readonly PrinterService:PrinterService ){
        super();
    };

    hello() {
        // llamo la funcion de reportes 
        const docDefinition = getHelloWorldReport({
            name:'matias n zamora'
        });

        // almaceno el documento generado a travez del servicio de printer.service en una variable doc
        const doc = this.PrinterService.createPdf(docDefinition);
        return doc;
    };

    employeesLetter(){
        // llamo la funcion de reportes 
        const docDefinition = getEmploymentLetterReport();
        // almaceno el documento generado a travez del servicio de printer.service en una variable doc
        const doc = this.PrinterService.createPdf(docDefinition);
        return doc;
    };

    async employeesLetterById( employeeId: number ){

        const employe = await this.employees.findUnique({
            where: {
                id: employeeId
            }
        });

        if(!employe) throw new NotFoundException(`Employe with Id: ${employeeId} not found.`)

        // llamo la funcion de reportes 
        const docDefinition = getEmploymentLetterByIdReport({
            employerName: 'matias n zamora',
            employerPosition: 'Gerente',
            employeeName: employe.name,
            employeePosition: employe.position,
            employeeStartDate: employe.start_date,
            employeeHours: employe.hours_per_day,
            employeeWorkSchedule: employe.work_schedule,
            employerCompany: 'Zimtech',
        });
        // almaceno el documento generado a travez del servicio de printer.service en una variable doc
        const doc = this.PrinterService.createPdf(docDefinition);
        return doc;
    };
};
