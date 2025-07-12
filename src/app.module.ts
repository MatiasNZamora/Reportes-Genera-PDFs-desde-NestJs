import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';

@Module({
  imports: [BasicReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


// modulo 3 continuar el proyecto