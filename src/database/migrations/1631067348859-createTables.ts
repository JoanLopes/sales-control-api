import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1631067348859 implements MigrationInterface {
    name = 'createTables1631067348859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" int auto_increment, "name" varchar(255) NOT NULL, "code" int(10) PRIMARY KEY NOT NULL, "lot_number" int NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "code", "lot_number", "color", "description", "value") SELECT "id", "name", "code", "lot_number", "color", "description", "value" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "person" ("cpf" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "birth_date" date NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "lot" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "manufacturing_date" date NOT NULL, "amount" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "salesman" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "person_id" integer, CONSTRAINT "REL_dfc3d7a5c14114021d92233d7d" UNIQUE ("person_id"))`);
        await queryRunner.query(`CREATE TABLE "demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer)`);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("name" varchar(255) NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("name", "color", "description", "value") SELECT "name", "color", "description", "value" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("name" varchar(255) NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL, "code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lot_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("name", "color", "description", "value") SELECT "name", "color", "description", "value" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("name" varchar NOT NULL, "color" varchar NOT NULL, "description" varchar, "value" integer, "code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lot_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("name", "color", "description", "value", "code_id", "lot_id") SELECT "name", "color", "description", "value", "code_id", "lot_id" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE INDEX "IDX_14893e5442dc14b68dc3b2919a" ON "product" ("lot_id") `);
        await queryRunner.query(`DROP INDEX "IDX_14893e5442dc14b68dc3b2919a"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("name" varchar NOT NULL, "color" varchar NOT NULL, "description" varchar, "value" integer, "code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lot_id" integer, CONSTRAINT "FK_14893e5442dc14b68dc3b2919ae" FOREIGN KEY ("lot_id") REFERENCES "lot" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("name", "color", "description", "value", "code_id", "lot_id") SELECT "name", "color", "description", "value", "code_id", "lot_id" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE INDEX "IDX_14893e5442dc14b68dc3b2919a" ON "product" ("lot_id") `);
        await queryRunner.query(`CREATE TABLE "temporary_salesman" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "person_id" integer, CONSTRAINT "REL_dfc3d7a5c14114021d92233d7d" UNIQUE ("person_id"), CONSTRAINT "FK_dfc3d7a5c14114021d92233d7d6" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_salesman"("code_id", "person_id") SELECT "code_id", "person_id" FROM "salesman"`);
        await queryRunner.query(`DROP TABLE "salesman"`);
        await queryRunner.query(`ALTER TABLE "temporary_salesman" RENAME TO "salesman"`);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`CREATE TABLE "temporary_demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_demand"("code_id", "value", "person_id", "salesman_id", "product_id") SELECT "code_id", "value", "person_id", "salesman_id", "product_id" FROM "demand"`);
        await queryRunner.query(`DROP TABLE "demand"`);
        await queryRunner.query(`ALTER TABLE "temporary_demand" RENAME TO "demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`ALTER TABLE "demand" RENAME TO "temporary_demand"`);
        await queryRunner.query(`CREATE TABLE "demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer)`);
        await queryRunner.query(`INSERT INTO "demand"("code_id", "value", "person_id", "salesman_id", "product_id") SELECT "code_id", "value", "person_id", "salesman_id", "product_id" FROM "temporary_demand"`);
        await queryRunner.query(`DROP TABLE "temporary_demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`ALTER TABLE "salesman" RENAME TO "temporary_salesman"`);
        await queryRunner.query(`CREATE TABLE "salesman" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "person_id" integer, CONSTRAINT "REL_dfc3d7a5c14114021d92233d7d" UNIQUE ("person_id"))`);
        await queryRunner.query(`INSERT INTO "salesman"("code_id", "person_id") SELECT "code_id", "person_id" FROM "temporary_salesman"`);
        await queryRunner.query(`DROP TABLE "temporary_salesman"`);
        await queryRunner.query(`DROP INDEX "IDX_14893e5442dc14b68dc3b2919a"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("name" varchar NOT NULL, "color" varchar NOT NULL, "description" varchar, "value" integer, "code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lot_id" integer)`);
        await queryRunner.query(`INSERT INTO "product"("name", "color", "description", "value", "code_id", "lot_id") SELECT "name", "color", "description", "value", "code_id", "lot_id" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`CREATE INDEX "IDX_14893e5442dc14b68dc3b2919a" ON "product" ("lot_id") `);
        await queryRunner.query(`DROP INDEX "IDX_14893e5442dc14b68dc3b2919a"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("name" varchar(255) NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL, "code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lot_id" integer)`);
        await queryRunner.query(`INSERT INTO "product"("name", "color", "description", "value", "code_id", "lot_id") SELECT "name", "color", "description", "value", "code_id", "lot_id" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("name" varchar(255) NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL)`);
        await queryRunner.query(`INSERT INTO "product"("name", "color", "description", "value") SELECT "name", "color", "description", "value" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" int auto_increment, "name" varchar(255) NOT NULL, "code" int(10) PRIMARY KEY NOT NULL, "lot_number" int NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL)`);
        await queryRunner.query(`INSERT INTO "product"("name", "color", "description", "value") SELECT "name", "color", "description", "value" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`DROP TABLE "demand"`);
        await queryRunner.query(`DROP TABLE "salesman"`);
        await queryRunner.query(`DROP TABLE "lot"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" int auto_increment, "name" varchar(255) NOT NULL, "code" int(10) PRIMARY KEY NOT NULL, "lot_number" int NOT NULL, "color" varchar(50) NOT NULL, "description" varchar(255), "value" double NOT NULL, CONSTRAINT "FK_6c9ade5aa917163cefe8b12ab31" FOREIGN KEY ("lot_number") REFERENCES "lot" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "code", "lot_number", "color", "description", "value") SELECT "id", "name", "code", "lot_number", "color", "description", "value" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
    }

}
