import {MigrationInterface, QueryRunner} from "typeorm";

export class Seed1637712575151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into "profile" ("category", "id") values ('Historiador', 1);
        insert into "profile" ("category", "id") values ('Folclórico', 2);
        insert into "profile" ("category", "id") values ('Museus', 3);
        insert into "profile" ("category", "id") values ('Fortes', 4);
        insert into "profile" ("category", "id") values ('Jardins', 5);
        insert into "profile" ("category", "id") values ('Musical', 6);
        `)

        await queryRunner.query(`
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (1,'História do Recife','Um roteiro histórico da cidade do Recife!','https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2018/01/03/736682/20180103085248486138e.jpg',1);
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (2,'O Recife Assombrado','Um roteiro sobre algumas lendas urbanas da cidade mais assombrada em linha reta do Brasil!','https://www.portodorecife.pe.gov.br/images/galeria/noticias/cruz.jpg',2);
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (4,'O Recife Pouco Conhecido','Em um raio inferior a dois quilômetros é possível percorrer cinco séculos de história pelo Recife.','https://upload.wikimedia.org/wikipedia/commons/3/3d/Recife_Antigo%2C_Recife_%28PE%29.jpg',1);
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (5,'Fortes de Pernambuco','Com passado de lutas, Pernambuco recebeu diversos fortes ao longo da história. Alguns sobreviveram até hoje.','https://uploads.knightlab.com/storymapjs/d5cc53d28ab2db871c39e00a9bdd9e6c/fortes-de-pernambuco/_images/hui.JPG',4);
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (6,'O Recife de Burle Marx','Paisagista, arquiteto e artista plástico, Roberto Burle Marx é um dos profissionais com maior expressão no urbanismo nacional.','http://www.ccba.org.br/public/upload/noticias/images/ARTE_Kulturforum_Burle_Marx1.jpg',5);       
        INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (8,'A história por trás dos casarões da Rui Barbosa','Conheça a história desses imóveis antigos da capital pernambucana','https://jconlineimagem.ne10.uol.com.br/imagem/galeria/2016/09/30/6330_avulsa/normal/42d577941d42ba1de11e23427f6e5d4c.jpg',1);`);

        await queryRunner.query(`INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (1,1,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (2,2,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (3,3,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (4,4,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (5,5,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (6,6,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (7,7,1);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (8,1,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (9,2,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (10,3,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (11,4,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (12,5,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (13,6,2);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (22,1,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (23,2,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (24,3,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (25,4,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (26,5,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (27,6,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (28,7,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (29,8,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (30,9,4);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (31,1,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (32,2,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (33,3,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (34,4,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (35,5,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (36,6,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (37,7,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (38,8,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (39,9,5);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (40,1,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (41,2,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (42,3,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (43,4,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (44,5,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (45,6,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (46,7,6);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (65,1,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (66,2,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (67,3,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (68,4,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (69,5,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (70,6,8);
        INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (71,7,8);`)

        // await queryRunner.query(`
        // INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (3,'As 8 Obras Mais Antigas nos Museus da Região Metropolitana','Um bom roteiro para quem pretende ocupar o final de semana com visitas aos museus.','https://images.adsttc.com/media/images/5c11/967e/08a5/e54b/ad00/0941/newsletter/5MG_4293.jpg?1544656467',3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (14,1,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (15,2,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (16,3,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (17,4,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (18,5,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (19,6,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (20,7,3);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (21,8,3);`);

        // await queryRunner.query(`
        // INSERT INTO "itinerary"("id","title","description","imageUrl","profileId") VALUES (7,'Poesia sobre o Recife: os locais que inspiraram grandes poetas brasileiros','Os recantos da capital pernambucana presentes em obras de autores consagrados da literatura nacional.','https://lh3.googleusercontent.com/proxy/54-kmhYsqU_ckQ7GbYpr_WG1lTJDyjPHoxY1D8E1TpXV_h9v17QcecTeXClhyZJ23_bP30XD1MlOZAtBtqNqNiAEVUALBwaBoPPIPqyQdELRyaRVAht3CYC2RN6SOBmlwEAV4MjvWds_ldFTVxKzDBc2gRsI2KJ4n6dl6qo0gdmLL8gOBmG_PIWs5IjsFYlAs3QpkIWNKj9OmIbQ',6);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (47,1,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (48,2,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (49,3,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (50,4,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (51,5,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (52,6,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (53,7,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (54,8,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (55,9,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (56,10,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (57,11,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (58,12,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (59,13,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (60,14,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (61,15,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (62,16,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (63,17,7);
        // INSERT INTO "interest_point_itinerary_order"("id","order","itineraryId") VALUES (64,18,7);
        // `)

        await queryRunner.query(`
        INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (3, 'teste@email.com', 'senha123', null, null, 0, false, null);
        INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (4, 'milton@email.com', 'senha123', 'José', 'milton.jpg', 0, false, null);`);
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`DELETE FROM "interest_point_itinerary_order"`);
        await queryRunner.query(`DELETE FROM "itinerary"`);
        await queryRunner.query(`DELETE FROM "profile"`);
        await queryRunner.query(`DELETE FROM "user"`);
        }

}
