import { Inject } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        Inject: [ConfigService],
        useFactory:()=>{
            const dataSource= new DataSource({
                type:'postgres',
                host:'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'back_nest_angular'
            });

            return dataSource.initialize();
        }
    }
]