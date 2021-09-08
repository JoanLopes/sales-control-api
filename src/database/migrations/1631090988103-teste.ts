import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1631090988103 implements MigrationInterface {
    name = 'teste1631090988103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`CREATE TABLE "temporary_demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" timestamp NOT NULL DEFAULT (datetime()), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at" FROM "demand"`);
        await queryRunner.query(`DROP TABLE "demand"`);
        await queryRunner.query(`ALTER TABLE "temporary_demand" RENAME TO "demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`CREATE TABLE "temporary_demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" timestamp NOT NULL DEFAULT (datetime()), "Update_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at" FROM "demand"`);
        await queryRunner.query(`DROP TABLE "demand"`);
        await queryRunner.query(`ALTER TABLE "temporary_demand" RENAME TO "demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`CREATE TABLE "temporary_demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "Update_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at", "Update_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at", "Update_at" FROM "demand"`);
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
        await queryRunner.query(`CREATE TABLE "demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" timestamp NOT NULL DEFAULT (datetime()), "Update_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at", "Update_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at", "Update_at" FROM "temporary_demand"`);
        await queryRunner.query(`DROP TABLE "temporary_demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`ALTER TABLE "demand" RENAME TO "temporary_demand"`);
        await queryRunner.query(`CREATE TABLE "demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" timestamp NOT NULL DEFAULT (datetime()), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at" FROM "temporary_demand"`);
        await queryRunner.query(`DROP TABLE "temporary_demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
        await queryRunner.query(`DROP INDEX "IDX_9e08ee1f29ac4609887121e1ce"`);
        await queryRunner.query(`DROP INDEX "IDX_aa33f48d444780725d44c3c919"`);
        await queryRunner.query(`DROP INDEX "IDX_8f4fb474beb4852baef28b7a28"`);
        await queryRunner.query(`ALTER TABLE "demand" RENAME TO "temporary_demand"`);
        await queryRunner.query(`CREATE TABLE "demand" ("code_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer, "person_id" integer, "salesman_id" integer, "product_id" integer, "created_at" timestamp NOT NULL DEFAULT (datetime()), "Updated_at" timestamp NOT NULL DEFAULT (datetime()), CONSTRAINT "FK_8f4fb474beb4852baef28b7a282" FOREIGN KEY ("person_id") REFERENCES "person" ("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_aa33f48d444780725d44c3c9192" FOREIGN KEY ("salesman_id") REFERENCES "salesman" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9e08ee1f29ac4609887121e1ceb" FOREIGN KEY ("product_id") REFERENCES "product" ("code_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "demand"("code_id", "value", "person_id", "salesman_id", "product_id", "created_at") SELECT "code_id", "value", "person_id", "salesman_id", "product_id", "created_at" FROM "temporary_demand"`);
        await queryRunner.query(`DROP TABLE "temporary_demand"`);
        await queryRunner.query(`CREATE INDEX "IDX_9e08ee1f29ac4609887121e1ce" ON "demand" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa33f48d444780725d44c3c919" ON "demand" ("salesman_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f4fb474beb4852baef28b7a28" ON "demand" ("person_id") `);
    }

}
