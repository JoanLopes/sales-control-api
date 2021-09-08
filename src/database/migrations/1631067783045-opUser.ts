import {MigrationInterface, QueryRunner} from "typeorm";

export class opUser1631067783045 implements MigrationInterface {
    name = 'opUser1631067783045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "salesman_id" integer, CONSTRAINT "UQ_2df6e59f6095c0e6221044856ae" UNIQUE ("salesman_id"))`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password") SELECT "id", "name", "email", "password" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "salesman_id" integer, CONSTRAINT "UQ_2df6e59f6095c0e6221044856ae" UNIQUE ("salesman_id"), CONSTRAINT "FK_9ba69267ddf111edaeb8f1c8626" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "salesman_id") SELECT "id", "name", "email", "password", "salesman_id" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "salesman_id" integer, CONSTRAINT "UQ_2df6e59f6095c0e6221044856ae" UNIQUE ("salesman_id"))`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "salesman_id") SELECT "id", "name", "email", "password", "salesman_id" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password") SELECT "id", "name", "email", "password" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
