import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {}

    async hello() {
        return this.employees.findFirst();
    }

};
