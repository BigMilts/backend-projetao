import { DocumentBuilder } from "@nestjs/swagger";

export const config = new DocumentBuilder().setTitle('Projetão').setDescription('Open API para os endpoints de projetão').setVersion('1.0').build();
