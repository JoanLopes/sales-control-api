import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addDate1631087179122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("demand", new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'datetime()'
        }));
        await queryRunner.addColumn("demand", new TableColumn({
            name: 'Updated_at',
            type: 'timestamp',
            default: 'datetime()'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
