import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaUpdate1638107248199 implements MigrationInterface {
    name = 'SchemaUpdate1638107248199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_favorite_interest_points_interest_point" ("userId" integer NOT NULL, "interestPointId" integer NOT NULL, CONSTRAINT "PK_f0008755b77d2748157be0c40bb" PRIMARY KEY ("userId", "interestPointId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73fcfc603c7f15dc1e9230c702" ON "user_favorite_interest_points_interest_point" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_edbbd0af8f9324d6d6d9aedf59" ON "user_favorite_interest_points_interest_point" ("interestPointId") `);
        await queryRunner.query(`ALTER TABLE "interest_point" ADD "likes" integer NOT NULL DEFAULT '2'`);
        await queryRunner.query(`ALTER TABLE "interest_point" DROP CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1"`);
        await queryRunner.query(`ALTER TABLE "interest_point" ADD CONSTRAINT "UQ_dca4bc5a907b738bec5b83322f1" UNIQUE ("itineraryOrderId")`);
        await queryRunner.query(`ALTER TABLE "interest_point" ADD CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1" FOREIGN KEY ("itineraryOrderId") REFERENCES "interest_point_itinerary_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_favorite_interest_points_interest_point" ADD CONSTRAINT "FK_73fcfc603c7f15dc1e9230c7024" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_favorite_interest_points_interest_point" ADD CONSTRAINT "FK_edbbd0af8f9324d6d6d9aedf598" FOREIGN KEY ("interestPointId") REFERENCES "interest_point"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_favorite_interest_points_interest_point" DROP CONSTRAINT "FK_edbbd0af8f9324d6d6d9aedf598"`);
        await queryRunner.query(`ALTER TABLE "user_favorite_interest_points_interest_point" DROP CONSTRAINT "FK_73fcfc603c7f15dc1e9230c7024"`);
        await queryRunner.query(`ALTER TABLE "interest_point" DROP CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1"`);
        await queryRunner.query(`ALTER TABLE "interest_point" DROP CONSTRAINT "UQ_dca4bc5a907b738bec5b83322f1"`);
        await queryRunner.query(`ALTER TABLE "interest_point" ADD CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1" FOREIGN KEY ("itineraryOrderId") REFERENCES "interest_point_itinerary_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "interest_point" DROP COLUMN "likes"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_edbbd0af8f9324d6d6d9aedf59"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_73fcfc603c7f15dc1e9230c702"`);
        await queryRunner.query(`DROP TABLE "user_favorite_interest_points_interest_point"`);
    }

}
