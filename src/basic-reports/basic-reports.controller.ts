import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

    @Get()
    async hello( @Res() response: Response ){
      const pdfDoc = this.basicReportsService.hello();
      
      response.setHeader('Content-Type', 'application/pdf');
      pdfDoc.info.Title='Hola Mundo.pdf';
      pdfDoc.pipe(response);
      pdfDoc.end();
    };

    @Get('employment-letter')
    async employeesLetter( @Res() response:Response ){
      const pdfDoc = this.basicReportsService.employeesLetter();
      
      response.setHeader('Content-Type', 'application/pdf');
      pdfDoc.info.Title='Employees-Letter.pdf';
      pdfDoc.pipe(response);
      pdfDoc.end();
    };

    @Get('employment-letter/:employeeId')
    async employeesLetterById( 
      @Res() response:Response, 
      @Param('employeeId') employeeId: string 
    ){
      const pdfDoc = await this.basicReportsService.employeesLetterById(+employeeId);

      response.setHeader('Content-Type', 'application/pdf');
      pdfDoc.info.Title='Employees-Letter.pdf';
      pdfDoc.pipe(response);
      pdfDoc.end();
    };

};
