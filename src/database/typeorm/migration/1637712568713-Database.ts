import {MigrationInterface, QueryRunner} from "typeorm";

export class Database1637712568713 implements MigrationInterface {
    name = 'Database1637712568713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "interest_point" ("id" SERIAL NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "category" character varying NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "badge" character varying NOT NULL, "badgeUrl" character varying NOT NULL, "imageUrl" character varying NOT NULL DEFAULT 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif', "itineraryOrderId" integer, CONSTRAINT "PK_7c470e3cb613c12abc59bf2e3d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "itinerary" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT 'Placeholder title', "description" character varying(140), "imageUrl" character varying NOT NULL DEFAULT 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif', "profileId" integer, CONSTRAINT "PK_515a9607ae33d4536f40d60f85e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "interest_point_itinerary_order" ("id" SERIAL NOT NULL, "order" integer NOT NULL, "itineraryId" integer, CONSTRAINT "PK_c6fb5bbb95642829737b31ccbc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying, "profilePicture" character varying, "experience" integer NOT NULL DEFAULT '0', "historian" boolean NOT NULL DEFAULT false, "profileId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_interest_points_interest_point" ("userId" integer NOT NULL, "interestPointId" integer NOT NULL, CONSTRAINT "PK_1e8d7d0e4aecd692a16cf34c96b" PRIMARY KEY ("userId", "interestPointId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_39fe0a62a1b839008ec15054ac" ON "user_interest_points_interest_point" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c61aafd2a26b3e13392ed30126" ON "user_interest_points_interest_point" ("interestPointId") `);
        await queryRunner.query(`ALTER TABLE "interest_point" ADD CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1" FOREIGN KEY ("itineraryOrderId") REFERENCES "interest_point_itinerary_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itinerary" ADD CONSTRAINT "FK_ada265c432ccaeec085999bde33" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "interest_point_itinerary_order" ADD CONSTRAINT "FK_bfef9e659bfbb69e0d51afd9087" FOREIGN KEY ("itineraryId") REFERENCES "itinerary"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_interest_points_interest_point" ADD CONSTRAINT "FK_39fe0a62a1b839008ec15054ac4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_interest_points_interest_point" ADD CONSTRAINT "FK_c61aafd2a26b3e13392ed301263" FOREIGN KEY ("interestPointId") REFERENCES "interest_point"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_interest_points_interest_point" DROP CONSTRAINT "FK_c61aafd2a26b3e13392ed301263"`);
        await queryRunner.query(`ALTER TABLE "user_interest_points_interest_point" DROP CONSTRAINT "FK_39fe0a62a1b839008ec15054ac4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "interest_point_itinerary_order" DROP CONSTRAINT "FK_bfef9e659bfbb69e0d51afd9087"`);
        await queryRunner.query(`ALTER TABLE "itinerary" DROP CONSTRAINT "FK_ada265c432ccaeec085999bde33"`);
        await queryRunner.query(`ALTER TABLE "interest_point" DROP CONSTRAINT "FK_dca4bc5a907b738bec5b83322f1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c61aafd2a26b3e13392ed30126"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_39fe0a62a1b839008ec15054ac"`);
        await queryRunner.query(`DROP TABLE "user_interest_points_interest_point"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "interest_point_itinerary_order"`);
        await queryRunner.query(`DROP TABLE "itinerary"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "interest_point"`);
    }

}
