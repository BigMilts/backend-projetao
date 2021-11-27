import {MigrationInterface, QueryRunner} from "typeorm";

export class Seed1637712575151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.profile (id, category) VALUES (1, 'Historiador');
        INSERT INTO public.profile (id, category) VALUES (2, 'Folclórico');`);

        await queryRunner.query(`insert into "itinerary" ("description", "id", "imageUrl", "profileId", "title") 
        values ('Um roteiro histórico da cidade do Recife!', 1, 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif', 1, 'Placeholder title');
        insert into "itinerary" ("description", "id", "imageUrl", "profileId", "title") 
        values ('Um roteiro sobre algumas lendas urbanas da cidade mais assombrada em linha reta do Brasil!', 2, 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif', 2, 'Placeholder title');`);

        await queryRunner.query(`insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 1);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 2);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 3);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 4);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 5);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 6);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 7);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 1);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 2);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 3);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 4);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 5);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 6);`)

        await queryRunner.query(`INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (3, 'teste@email.com', 'senha123', null, null, 0, false, null);
        INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (4, 'milton@email.com', 'senha123', 'José', 'milton.jpg', 0, false, null);`);
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`DELETE FROM "interest_point_itinerary_order"`);
        await queryRunner.query(`DELETE FROM "itinerary"`);
        await queryRunner.query(`DELETE FROM "profile"`);
        await queryRunner.query(`DELETE FROM "user"`);
        }

}
