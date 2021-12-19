import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedInterestPoints1638030227811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (1,-8.0639,-34.87531,'HISTORICO','Ponte Maurício de Nassau','A história oficial ajuda a referendar um evento ocorrido, mas nem sempre é componente indispensável para a formação da memória de um povo. Isso é explicado pelo conceito de lugar de memória que, em linhas gerais, reflete eventos que acabam no imaginário popular, sem necessidade de comprovação histórica. “A história do boi voador, na época de Maurício de Nassau é um exemplo. São experiências de diferentes indivíduos que formam uma experiência histórica. O período holandês em Pernambuco tem muito disso, inclusive a figura do próprio Maurício de Nassau”, explica Cibele Barbosa, pesquisadora da Fundação Joaquim Nabuco (Fundaj).','ponteMauricioNassau','https://i.imgur.com/5lcaghS.png',3,'TRUE','https://mapio.net/images-p/46301737.jpg',1);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (2,-8.0472,-34.86995,'FOLCLORE','Cruz do Patrão','À noite, o local é dominado por uma quietude solene e misteriosa, quebrada apenas pelo vento quando assovia sua canção tristonha. No Porto do Recife, às margens do Rio Beberibe, reina a Cruz do Patrão – lembrança concreta do passado imponente da capital pernambucana. Mas o monumento é mais do que uma testemunha silenciosa de épocas remotas. Através de gerações e gerações, foi considerado um ponto de encontro com almas penadas, um sítio tomado aparições espectrais, sons de gemidos e arrastar de correntes: o lugar mais mal-assombrado da cidade. A Cruz do Patrão é na verdade uma coluna de alvenaria construída em estilo dórico, com seis metros de altura e dois de diâmetro. No topo tem uma pequena cruz de pedra, o que a torna semelhante ao “bispo” do jogo de xadrez. Em séculos passados, era usada como referência para os navios que precisavam atracar. Alinhado à cruz da velha igreja de Santo Amaro das Salinas, o marco orientava o patrão da embarcação no canal de acesso do ancoradouro interno do porto recifense. E “patrão da embarcação” era um termo náutico para designar o chefe da guarnição de um barco pequeno. Não há como dizer em que ano ela foi erguida no deserto istmo (uma estreita faixa de terra) que antigamente ligava o Recife a Olinda. Mas a Cruz do Patrão já estava registrada em um mapa confeccionado no ano de 1759. Com o passar das décadas, a coluna feita para viabilizar a navegação transformou-se em sinônimo de fantasmagoria. Os recifenses acreditavam que naquelas imediações eram enterrados negros pagãos mortos durante as jornadas dos navios chegados da África. A areia da maré facilitaria os sepultamentos realizados sem os devidos ritos religiosos. E por isso aquele canto se tornou amaldiçoado. No livro “Assombrações do Recife Velho”, Gilberto Freyre nos fala sobre essa crença popular: todo aquele que passasse pelas imediações da Cruz nas chamadas “horas mortas” veria fantasmas ou seria perseguido por terríveis espíritos. E muitos dos que caminharam por lá em meio às trevas noturnas teriam desaparecido sem deixar vestígios. E é certo que ocorreram fatos trágicos aos pés da Cruz do Patrão. No começo do século XX, por exemplo, um estudante foi assassinado naqueles ermos e um soldado foi preso acusado pelo crime. Tempos depois se descobriu que o culpado seria outro sujeito – ele teria confessado que praticou o crime motivado por um “espírito infernal”. A revelação, no entanto, chegou tarde demais, pois o soldado acabou morrendo na cadeia. Na obra “Folk-lore Pernambucano”, o historiador F. A. Pereira da Costa esclarece que a fama macabra do lugar acabou se tornando muito forte do imaginário recifense: dizia-se que quem estava “em busca de venturas” poderia ir à Cruz do Patrão e, à meia-noite em ponto, firmar com o Demônio “um pacto solene com sangue de suas próprias veias” para alcançar sorte e riqueza. Cruz Credo! Pesquisas arqueológicas recentes não demonstraram nenhum indício de qualquer cemitério clandestino no entorno da Cruz. Entretanto é difícil negar a existência de alguma relação do monumento com o sobrenatural. Como explicar que tenha resistido por séculos às investidas da maresia, às constantes reformas no terreno e principalmente à falta de cuidado das autoridades com muitas das construções históricas? Mesmo quase esquecida pela população, a coluna gigante jaz impávida, adornado com a sua beleza austera o cenário retilíneo e acinzentado do Porto do Recife. Se você sentir impulso de chegar mais perto, a recomendação é que o faça durante o dia, no máximo até o porto do sol, para ver como o crepúsculo pinta de tons belos e sinistros aquela região na cidade. Quando cai a penumbra, a Cruz do Patrão se torna domínio de todo tipo de fantasma e assombração. Pelo menos é o que ainda garantem alguns…melhor não arriscar, não é?','cruzDoPatrao','https://i.imgur.com/hKU47oH.png',2,'FALSE','https://4.bp.blogspot.com/-CFmYSjVHPWk/UxaE6Ecf-II/AAAAAAAAADA/oVN-_pxWHcA/s1600/GOPR0468.JPG',8);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (4,-8.06396,-34.8692,'TURISTICO','Torre de Cristal','O Parque de Esculturas Francisco Brennand foi inaugurado em 29 de dezembro 2000, idealizado pelo artista pernambucano Francisco Brennand, integrando o projeto “Eu vi o mundo… Ele Começava no Recife” para comemoração dos 500 anos do descobrimento do Brasil. Ao total, existem, no parque, 90 obras (esculturas) do escultor e artista plástico pernambucano Francisco Brennand, sendo a principal obra no complexo a Torre de Cristal, com 32 metros de altura e confeccionada em argila e bronze. No ano de 2014, todas as esculturas foram restauradas, assim como o parque, além do recebimento de reforço na segurança do complexo.','torreCristal','https://i.imgur.com/7VXCUbw.png',2,'FALSE','https://upload.wikimedia.org/wikipedia/commons/1/17/Torre_de_Cristal_-_Parque_de_Esculturas_Francisco_Brennand_-_Recife%2C_Pernambuco%2C_Brasil.jpg',NULL);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (5,-8.05032,-34.88279,'FOLCLORE','Galega de Santo Amaro','O Cemitério de Santo Amaro foi inaugurado em 1851 por ordem de Francisco do Rêgo Barros, o Barrão da Boa Vista. Com o passar do tempo, os mais abastados também ocuparam espaço na necrópole. As famílias endinheiradas mandaram construir jazigos luxuosos, feitos de mármore, marcados com por epitáfios escritos com letras de bronze, decorados com estátuas em tamanho natural. A riqueza desses detalhes que transformou o local numa galeria de arte ao ar livre. Lá estão enterrados personagens históricos como Joaquim Nabuco, além de personalidade que se sobressaíram no campo das artes como o compositor Capiba e cantor Chico Science. O Santo Amaro também é espaço para a devoção a uma criança transformada em santa consagrada pelo povo, sem nunca ter alcançado espaço em qualquer altar. No túmulo da Menina Sem Nome, os fiéis pedem graças e deixam ex-votos quando os pedidos são atendidos. Garantem que ela faz milagre, mas não sabem quem ela foi: a menina enterrada ali foi vítima de um sórdido homicídio em meados do século passado e o corpo jamais foi identificado. Desconhecida também é a origem do fantasma mais visto nas imediações do cemitério. Trata-se uma mulher loira, sedutora, que, depois da meia-noite, aparece nas calçadas próximas. Ela chama a atenção dos homens que circulam por lá nessas horas silenciosas e os convida a um passeio. A história começou a ser contada na década de 1970. Na época, as supostas testemunhas diziam que a “galega” aparecia sempre usando sapato de salto alto, vestido vermelho curto e decotado. Hoje, há quem garanta que ela modernizou o figurino. Passou a usar calça jeans e chinelos, como se vê no desenho do artista plástico Fábio Rafael que ilustra este texto. Seria para conquistar os moderninhos? Tanto hoje, quanto antigamente, os marmanjos que que cedem ao apelo da galega são levados ao Santo Amaro. Lá, num passeio de mãos dadas, com sussurros ao pé do ouvido,  ela…. mostra aos rapazes o túmulo onde mora!  Depois some na escuridão, em meio a uma bruma gelada. Mas às vezes a aparição se mostra bem mais medonha e, ao fim da caminhada romântica, mostra uma face de caveira ao candidato a namorado. E o sujeito, claro, berra, molha as calças e sai  às carreiras. Por muitos anos, essa criatura foi o terror dos motoristas dos ônibus elétricos da CTU, a antiga companhia municipal de transporte. A garagem da empresa ficava em frente ao Santo Amaro. Não foram os poucos os condutores que à noite, depois do expediente, cederam aos encantos da loira e acabaram desmaiados entre as covas. A Galega tem, aliás, diversas formas de levar o pavor ao coração dos incautos. Comenta-se que às vezes ela pede carona a motoristas e pilotos de motos que passam, nas horas de silêncio e escuridão, pelo trecho da Avenida Norte próximo ao campo santo. Há quem diga ainda que a mulher fantasma costumava aparecer no primeiro andar do prédio da antiga delegacia do bairro. Nessas dependências, se manifestava de forma violenta, quase uma Pomba-gira, chegando inclusive a arranhar agentes de polícia que estivessem lá à noite. Para alguns, as aparições só vão cessar quando o espírito da Galega for apaziguado: ela estaria à procura de um amante com quem pudesse dividir toda uma eternidade consumida em luxúrias infernais. Quem se candidata?','loiraSantoAmaro','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www.orecifeassombrado.com/wp-content/uploads/2015/08/galega.jpg',9);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (6,-8.06013,-34.89474,'FOLCLORE','Praça Chora Menino','A Praça Chora Menino fica no bairro da Boa Vista, uma das áreas mais movimentadas  da capital pernambucana. Próxima ao Colégio Salesiano, à Praça do Derby e às ruas do Progresso e das Ninfas, é hoje uma simples confluência de vias, espaço atravessado às pressas  por gente desatenta, preocupada em chegar rápido ao seu destino. Poucos devem se perguntar por que o logradouro tem esse nome – que pode até soar poético. Menos pessoas ainda imaginam que o local foi cenário de uma tragédia e tem fama de mal assombrado. Para entender esse caso é preciso voltar no tempo, conhecer um dos episódios mais sangrentos da história da cidade. Em meados do século XIX, o Recife enfrentou uma revolta violenta de uma tropa insubordinada que ficou conhecida como “Setembrizada”. Especialistas contam que o motim dos soldados foi provocado pelo extremo rigor na disciplina militar (que previa castigos físico às falta cometidas pelos praças) e até atraso nos pagamentos, entre outros motivos. O conflito irrompeu  nos dias 14, 15 e 16 de setembro do ano de 1831. Soldados e civis a ela associados saquearam a cidade, cometendo todo tipo de atrocidades e assassinando centenas de moradores, entre eles muitas crianças. O historiador Pereira da Costa dá um número de pelo menos 300 mortos nesses conflitos. As ruas ficaram repletas de corpos, e muitos teriam sido enterrados num local ermo, as terras do velho Sítio do Mondego, onde hoje fica a praça Chora Menino. E esse nome vem de relatos que começaram a circular tempos depois da Setembrizada: dizia-se que quem passasse altas horas da noite perto da praça ouvia sempre choro de menino. Certamente tentou-se dar explicações “científicas” para o fato, de brincadeiras de estudantes a um tipo de sapo cujo coaxar seria semelhante ao choro de uma criança. Mas quem ouviu o estranho lamento nega-se a aceitar tais teorias tão pouco consistentes: o pranto fantasmagórico, por certo, não tem semelhança com sons emitidos pelos viventes. É há quem diga que mesmo nos dias de hoje, se prestarmos bem atenção, vamos escutar os soluços e choramingos daquelas pequenas vítimas de um massacre provocado pela intransigência dos adultos.','choraMenino','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www.orecifeassombrado.com/wp-content/uploads/2015/11/Chora-Menino.jpg',10);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (7,-8.05049,-34.88357,'FOLCLORE','O Barão Perseguido pelo Diabo','No Século XIX, ficou conhecida no Recife a história de um Barão que teria feito um pacto com o Diabo. Não se sabe o que o fidalgo pediu ao “Coisa Ruim”, mas contava-se o Demônio o perseguia, possivelmente cobrando o pagamento que havia sido combinado. No livro “Assombrações do Recife Velho”, o escritor e sociólogo Gilberto Freyre explica que o fidalgo muitas vezes estava se divertindo com os amigos, em noitadas na capital pernambucana e, de repente, recebia um sinal misterioso: “era do Chifrudo para ir encontrá-lo sozinho nas brenhas, tarde da noite”. Ele seguia para cumprir  o compromisso montado num cavalo sinistro “que ninguém sabia se era deste mundo, se do outro”. E quando o homem voltava desses encontros, “parecia que ia botar a alma pela boca”, pois “seu rosto era então o de um cadáver e suas mãos, também, as de um defunto”. Ainda de acordo com Freyre, tudo indica que o Diabo acabou ficando não só com alma, mas também com o corpo do Barão. Tanto que, para fingir enterrá-lo no Cemitério de Santo Amaro, o mais tradicional do Recife, “a família tivera que encher o caixão de pedra”.','baraoPerseguido','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','data:image/jpeg;base64,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',11);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (8,-8.06701,-34.87899,'FOLCLORE','Mulher Sinistra do Pátio de São Pedro','O cenário é dos centenários prédios do Pátio de São Pedro, no tradicional Bairro de São José. Dizem que num dos sobrados de quatro andares existentes na lateral da Igreja de São Pedro (a construção do século XVIII que dá nome ao lugar), reside uma figura que provoca calafrios nos que a encontram. Trata-se uma mulher jovem e bonita, de longos cabelos negros e  com um vestido escuro provocante – embora seja um traje bastante fora de moda. É vista a caminhar lentamente pelos corredores e, principalmente, pelas escadarias do antigo edifício. Tem no rosto uma expressão de pesar, como quem padece de um eterno luto. Os que se deparam com ela logo percebem que é uma visagem, um espírito desencarnado: depois de alguns passos, a moça misteriosa desaparece no ar, como por encanto. No sobrado, uns poucos cômodos são moradias. Na maioria das dependências, trabalham costureiras e prestadores serviços, como pintores de placas. Muitas dessas pessoas já testemunharam a aparição. Uma decoradora que trabalhou no lugar, por exemplo, relata que ouviu falar sobre a origem da fantasmagoria. Seria o espetro de uma mulher que alugou um dos quartos  em meados da década de 1950. Era bela sim, mas vivia só e carregava a dor de uma desilusão: havia sido abandonada pelo amante. Comenta-se que, para sobreviver, trabalhava como prostituta. Certo dia matou-se ateando fogo ao corpo. Morte lenta e dramática de quem tenta queimar a dor de uma constante amargura. E desde então virou malassombro, alma-penada, eternamente presa a este plano de existência por causa do terrível pecado que cometeu. As pessoas que convivem no sobrado já tentaram por fim ao sofrimento desse espírito encomendado missas e requisitando bênçãos dos padres no próprio edifício. Logo depois dessas medidas as aparições deixam de ocorrer, mas não por muito tempo – não demora e alguém se depara novamente com a sinistra mulher a caminhar pelos corredores.','saoPedro','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www.orecifeassombrado.com/wp-content/uploads/2015/12/escadaria-2.jpg',12);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (11,-8.05274,-34.87572,'FOLCLORE','O Fantasma da Debutante','Num dos mais bonitos prédios da Rua da Aurora, no Centro do Recife, funciona hoje o Museu de Arte Moderna Aloísio Magalhães – o MAMAM. Porém, mais do que apenas resguardar a cultura e abrigar importantes exposições, o espaço também é cenário de uma tristonha aparição fantasmagórica,  a lembrança sobrenatural de uma história trágica, recriada aqui pelas lentes do fotógrafo Lucas Evaristo. O prédio, cheio de salões e escadarias, já foi a sede do Clube Internacional do Recife, no começo do século XX. E tudo aconteceu durante um baile no ano de 1920 para celebrar os 15 anos de uma bela moça chamada Ana Lúcia. Contam que ela estava linda em seu traje branco ao descer as escadas do primeiro pavimento para o salão principal. Mas no meio do caminho tropeçou e caiu por vários degraus em frente aos convidados. Ela havia quebrado o pescoço! Os funcionários do museu dizem que até hoje o espírito da adolescente assombra a construção histórica. Nas noites caladas, Ana Lúcia caminha solenemente pelos corredores. A sua beleza  a princípio fascina e depois amedronta as testemunhas. E muitos servidores públicos – inclusive até alguns guardas municipais – pediram afastamento do trabalho do museu para não terem que se deparar com o fantasma da debutante.','fantasmaDebutante','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www.orecifeassombrado.com/wp-content/uploads/2017/10/IMG_3589.jpg',13);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (12,-8.06314,-34.87113,'HISTORICO','Marco Zero','No início do século passado, o centro do Recife passou por drásticas reformas, com projetos de higienização urbana e melhoramento das condições do Porto do Recife. Na prática, a higienização social se traduziu em desapropriações de pelo menos 480 imóveis que foram demolidos para a abertura das três novas avenidas no Bairro. Em um relato de Mário Sette podemos ter uma descrição do caso. Pouco a pouco desaparecia aos olhos não um bairro, mas um cenário de milhares de criaturas no seu presente e no seu passado. E o Corpo Santo também se desmanchava. Poucos falariam ainda desse burgo onde Recife nascera, tão enviesado de ruas e ruelas tudo no chão. Nunca se vira uma loucura assim. Parque das Esculturas Francisco Brennand, obra do escultor pernambucano Francisco Brennand em frente à praça. Com esta grande reforma, profundas modificações foram feitas no bairro e na praça, como a demolição da Matriz do Corpo Santo e a abertura de novas e largas avenidas. No local onde estava a igreja, está edificado o edifício Maurício de Nassau, de características modernas e fachadas em vidro. Ao seu lado foram construídos os prédios da Associação Comercial de Pernambuco e a Bolsa de Valores. Estes dois prédios apresentam, em sua arquitetura, nítida influência francesa que se caracteriza pela mistura de diversos elementos construtivos, além do armazém 10 e 12 que serviam ao porto do Recife para estoque de açúcar. Estes prédios, hoje, abrigam a sede do Grupo Industrial João Santos, o Santander Cultural, a Associação Comercial de Pernambuco, a Caixa Cultural e o Centro de Artesanato de Pernambuco, considerado o maior do segmento no Brasil. Em 1999 a praça que existia no local recebeu severas modificações. O busto do Barão do Rio Branco e o Marco Zero foram realocados para a borda da praça. A "nova praça" foi projetada pelo pintor Cícero Dias, em 1999. No seu centro se encontra uma enorme obra de arte feita por ele. Inspirado em sua obra Eu vi o mundo e ele começava no Recife, criou um grande circulo com uma Rosa dos Ventos no centro. A obra tem em média 10m de raio.  Atualmente serve como ponto de encontro de jovens, desportistas, artistas, turistas e moradores da cidade. Além de ser palco de comemorações e apresentações artísticas.','marcoZero','https://i.imgur.com/ASCDu0O.png',2,'FALSE','https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif',5);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (13,-8.06001,-34.8774,'HISTORICO','Palácio do Campo das Princesas','História: O Palácio do Campo das Princesas era o Palácio de Friburgo, uma das três residências oficiais do conde holandês Maurício de Nassau. Na área atualmente ocupada por ele, pelo Teatro de Santa Izabel e pela Praça da República, foi construído um jardim zoobotânico. Além de pioneiro no Brasil, o local é apontado como o segundo mais antigo das Américas, ficando atrás apenas de um asteca, criado pelos povos ameríndios. Entre os animais que habitavam o local estavam tucanos, araras, tamanduás, capivaras, tatus e outras espécies da fauna nativa. O espaço era coabitado por animais trazidos da África e Ásia, como tigres, cabras angolanas e diversas aves. De acordo com a professora do Departamento de Ciências Florestais da Universidade Federal Rural de Pernambuco (UFRPE), Isabelle Meunier, além de expor os animais, o parque tinha um caráter utilitário. Algumas espécies, como os peixes, eram criadas para fornecer proteína, além disso, havia o cultivo de laranjas e limões como armas para combater o escorbuto (doença causada pela carência de vitamina C). A inovação de Nassau, porém, durou apenas sete anos, sendo destruído pelos portugueses em 1645, um ano após a saída de Nassau do solo recifense, com a justificativa de que a construção atrapalhava a vista de possíveis ataques vindos pelo Rio Capibaribe.','campoPrincesas','https://i.imgur.com/f7xfjlS.png',2,'FALSE','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pal%C3%A1cio_do_Campo_das_Princesas_-_Recife%2C_Pernambuco%2C_Brasil%282%29.jpg/1280px-Pal%C3%A1cio_do_Campo_das_Princesas_-_Recife%2C_Pernambuco%2C_Brasil%282%29.jpg',6);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (14,-8.06318,-34.8774,'HISTORICO','Cabeça do Zumbi de Palmares','História: Um dos maiores símbolos da resistência escrava durante o Brasil Colônia foi morto, na Serra Dois Irmãos, na então Capitania de Pernambuco. Líder do Quilombo dos Palmares, Zumbi teve a cabeça cortada e exposta na Praça do Carmo até completa decomposição. A decisão do governador de Pernambuco na ocasião, Caetano de Melo Castro, visava acaba com a superstição difundida entre os escravos de que Zumbi era imortal. “A cabeça era um troféu, um exemplo para que os negros que por ali passassem tivessem cuidado para não ter o mesmo fim”, explica Severino Vicente, doutor em História e professor da UFPE.  Zumbi se tornou líder após se opor à liderança anterior de Ganga Zumba, que havia aceitado uma oferta de paz da Coroa Portuguesa. O Quilombo dos Palmares foi o grande foco de resistência formado por escravos negros, fugidos de fazendas e senzalas. Ocupava uma área equivalente ao tamanho de Portugal, onde atualmente, está o município de União dos Palmares, em Alagoas. Em seu auge, foi composto por 30 mil pessoas. Acabou desfeito por completo em 1710. Atualmente, a Praça do Carmo exibe um monumento, construído por Abelardo da Hora.','zumbiDosPalmares','https://i.imgur.com/qz6dur1.png',2,'FALSE','data:image/jpeg;base64,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',2);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (15,-8.05391,-34.87098,'HISTORICO','Captura do Recife','História:  Dois fatos precisam ser entendidos antes dos relatos sobre o que foi a "Captura do Recife". Primeiro: a Inglaterra começava a dar os primeiros passos para se tornar uma potência marítima. Segundo: o açúcar valia como ouro. Nesse cenário, os corsários ingleses, piratas que atuavam a mando da rainha Elizabete I, agiam saqueando embarcações e portos de colônias portuguesas e espanholas em busca de riquezas. "Recife e Olinda estavam entre os locais mais ricos do mundo ocidental. Um quilo de açúcar já era riqueza, imagine um carregamento de açúcar", destaca Severino Vicente. James Lancaster chegou ao Recife em abril de 1595, comandando uma expedição militar inglesa. Em cerca de um mês em que estiveram em águas e solo recifenses, a quantidade de açúcar, pau-brasil e algodão saqueada foi tão grande que foram fretados navios holandeses e franceses pela frota pela coroa inglesa. Ao todo foram mobilizados em torno de 750 soldados e 35 navios, entre próprios e capturados por Lancaster e seus aliados. No Recife, foram saqueadas lojas, armazéns e casas, deixando cerca de 120 mortos.','capturaRecife','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://upload.wikimedia.org/wikipedia/commons/2/29/Vista_recife.jpg',7);`);

        await queryRunner.query(`
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (16,-8.07154,-34.8808,'HISTORICO','Forte das 5 Pontas','História:  O líder libertário Joaquim do Amor Divino Rabelo, mais conhecido por Frei Caneca tem a sua história misturada com a do Recife. Esteve entre as principais lideranças da Revolução Pernambucana de 1817 e da Confederação do Equador, em 1824. No ano seguinte à segunda tentativa separatista foi preso onde atualmente, na Rua do Imperador, funciona o Arquivo Público de Pernambuco. Pouco mais de um mês após a prisão, deveria ser morto por enforcamento, apesar dos diversos pedidos de clemências de diversas ordens religiosas. No momento do enforcamento, porém, três carrascos se recusaram a enforcá-lo, por conta de sua atuação religiosa – era um padre carmelita. Diante disso, foi ordenado pela Casa Militar a execução por meio de tiros, chamada na ocasião por arcabuzamento. "A Câmara Municipal, atual Arquivo Público, também funcionava como prisão. Frei Caneca saiu de lá e foi levado andando até o local em que foi executado, que apesar de ter uma placa e um busto, muitos não sabem o que aconteceu lá", relata Severino Vicente. O local exato da execução é um muro que continua erguido, nas proximidades do Forte das Cinco Pontas, no bairro de São José.','forte5pontas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://www.gov.br/turismo/pt-br/centrais-de-conteudo/06-04-17-fortecincopontas-jpg',3);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (17,-8.06539,-34.87787,'HISTORICO','Igreja de Nossa Senhora do Rosário dos Homens Pretos','História: Trazidos à força do seu continente, com diferentes costumes entre eles, os africanos escravizados no Brasil tentaram manter viva da forma mais viável possível suas crenças. Para isso, se inseriram no cenário da colônia. No bairro de Santo Antônio, por meio da Irmandade do Rosário dos Homens Pretos, escravos construíram uma igreja com o intuito de ganhar força de representação e de expressão religiosa.  Em artigo publicado pela Fundação Joaquim Nabuco, a pesquisadora Semira Adler Vainsencher, aponta que a igreja manteve a tradição do Congo, de coroar um rei e uma rainha, que acabou originando o maracatu. O processo, porém, foi conturbado. Diante dos costumes diferentes para o catolicismo, as celebrações dos negros passaram um período proibidas pela Inquisição. Isso somado às dificuldades financeiras, afinal a Irmandade era formada por escravos. Porém, mesmo assim, tentava construir igrejas equivalentes às da nobreza, arrecadando por meio da venda de artigos, como doces. No altar, o objetivo era manter as raízes negras. "Excetuando-se Nossa Senhora do Rosário, Nossa Senhora da Boa Hora e São Domingos, todas as outras imagens presentes nos altares representam santos negros", aponta a pesquisadora. Em Olinda, há uma igreja com o mesmo nome, fundada na segunda metade do século 17.','igreja','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bas%C3%ADlica_do_Carmo_-_Recife_%28PE%29.jpg/1024px-Bas%C3%ADlica_do_Carmo_-_Recife_%28PE%29.jpg',4);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (18,-8.0613,-34.87045,'MUSEUS','Sanfona (1950)','Da marca Scandelli, pertenceu a Luiz Gonzaga e a Dominguinhos
        Local: Cais do sertão
        Público mensal: 10 a 14 mil
        Endereço: Av. Alfredo Lisboa.  Bairro do Recife. 
        Funcionamento:  Terça(gratuita) e de quarta a domingo: R$ 5 (meia) / R$ 10 (inteira)','sanfona','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/Sanfona%20Cais%20do%20Sert%C3%A3o.jpg',14);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (19,-8.0615,-34.88147,'MUSEUS','Traços (1855)','Litografias  "Panorama de Pernambuco", do pintor alemão Frederick Hagedorn, que morou no Brasil por 20 anos
        Local: Museu de Arte Moderna Aloísio Magalhães.
        Público mensal: 1.500
        Endereço: R. da Aurora, 265 - Boa Vista.
        Funcionamento: Terra a sexta das 12h às 18h. Sábados e Domingos, das 13h às 17h',NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/Panorama%20Pernambuco.jpg',15);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (20,-8.05666,-34.90884,'MUSEUS','Joias de crioula séc.20','Popular entre ex-escravas como símbolo de ostentavão, modelo de pulseiras, joias e aneis em ouro, pedras cristalinas e coco, de Diamantina(MG), era um presente comum de senhores de engenho às negras antes da abolição','joiaAntiga','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/Joias%20mineiras%20editadas.jpg',16);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (21,-8.01342,-34.85025,'MUSEUS','Sacrário','A obra do século 18 pertence à Igreja da Madre de Deus. Foi recuperada em 2014, apàs ser furtada há 40 anos
        Local: Museu de Arte Sacra
        Público mensal: 800
        Endereço: Rua Bispo Coutinho, 726 - Alto da Sé - Olinda.
        Funcionamento: Terça a domingo, de 10 às 17h.','sacrario','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/Sacr%C3%A1rio%20editado.jpg',17);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (22,-8.04451,-34.90174,'MUSEUS','Paíneis (séc. 18)','Feitos em adoração a Nossa Senhora dos Prazeres, em alusão a Batalha dos Guararapes.
        Local: Museu do Estado de Pernambuco
        Público mensal: 392
        Funcionamento: Terça à sexta das 9h às 17h e sábado e domingo das 14h às 17h
        Entrada:custa R$ 6,00 (inteira) e R$ 3,00 (estudantes)',NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/Ex-voto%20c%C3%AAnico%20Sec%20XVIII.jpg',18);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (23,-8.03085,-34.92541,'MUSEUS','Moedas (séc.17)','Coleção numismítica (moedas) que indica a presença holandesa no Brasil do século 17
        Local: Museu do Homem do Nordeste
        Endereço: Av. Dezessete de Agosto, 2187 - Casa Forte, Recife - PE
        Entrada: Visitação: terça a sexta, das 8h30 às 17h. Sábados e Domingos, das 14h às 18h.
        Visita noturna nas últimas quartas e quintas-feiras de cada
        màs (desde setembro), o Museu dispõe de horário estendido (das 8h30 às 20h)','moedaAntiga','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2015/09/22/normal/12d82db0ae21cd44da07ccd722bc8d61.jpg',19);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (24,-8.06185,-34.87142,'MUSEUS','mikve/bor','Registros arqueológicos que comprovam a presença judaica no estado no século 17
        Local: Sinagoga Kahal Zur Israel
        Público mensal: 1.500
        Endereço: Rua do Bom Jesus, 197.Recife - PE
        Funcionamento: terça a sexta-feira, das 9h às 17h; aos domingos, das 13h às 18h
        Entrada: R$ 6 (inteira) e R$ 3 (meia-entrada)','algoJudeu','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s3.amazonaws.com/uploads.knightlab.com/storymapjs/cffdf853310578a66c81882ca49dec7e/museus-do-recife/_images/mikve%20editado.jpg',20);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (25,-8.06163,-34.971,'MUSEUS','Michelangelo (século 16)','réplica do Davi de Michelangelo
        Local: Instituto Ricardo Brennand 
        Público mensal: 13.997
        Endereço: Engenho São João,na Várzea (Alameda Antônio Brennand)
        Funcionamento: De terça a domingo, das 13h às 17h.
        Informações: (81) 2121-0352','obraMichelangelo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://upload.wikimedia.org/wikipedia/commons/8/8c/Replica_of_Michelangelo%27s_David_in_Instituto_Ricardo_Brennand.jpg',21);`);

        await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (26,-8.06029,-34.87759,'HISTORICO','Primeiro horto zoobotúnico do Brasil','Local: Palácio do Campo das Princesas
        Ano:1638 - 1645
        
        história:
        O Palácio do Campo das Princesas era o Palácio de Friburgo, uma das trás residências oficiais do conde holandàs Maurício de Nassau. Na área atualmente ocupada por ele, pelo Teatro de Santa Izabel e pela Praça da República, foi construído um jardim zoobotúnico. Além de pioneiro no Brasil, o local é apontado como o segundo mais antigo das Américas, ficando atrás apenas de um asteca, criado pelos povos ameríndios. Entre os animais que habitavam o local estavam tucanos, araras, tamanduàs, capivaras, tatus e outras espécies da fauna nativa. O espaço era coabitado por animais trazidos da África e àsia, como tigres, cabras angolanas e diversas aves. De acordo com a professora do Departamento de Ciências Florestais da Universidade Federal Rural de Pernambuco (UFRPE), Isabelle Meunier, além de expor os animais, o parque tinha um caráter utilitário. Algumas espécies, como os peixes, eram criadas para fornecer proteína, além disso, havia o cultivo de laranjas e limões como armas para combater o escorbuto (doença causada pela carência de vitamina C). A inovação de Nassau, porém, durou apenas sete anos, sendo destruído pelos portugueses em 1645, um ano apàs a saída de Nassau do solo recifense, com a justificativa de que a construção atrapalhava a vista de possíveis ataques vindos pelo Rio Capibaribe.','zooAntigo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/01/MaquetePalacioFriburgo_Horto_chamada.jpg',22);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (27,-8.0535,-34.87147,'HISTORICO','Primeiro trem urbano da América Latina','Local: Entre o bairro portuário e o então povoado de Apipucos
        Ano: 1867
        
        história:
        Em 5 de janeiro de 1867 os recifenses viram a história ser feita. Começava
        a circular a maxambomba, o primeiro trem urbano da América Latina. O
        meio de transporte inovador foi criado por membros da sociedade
        recifense, sobretudo ingleses. O governo entrou com a concessão do
        espaço que seria percorrido pelo trem, enquanto a implantação da
        maxambomba ficou a cargo da empresa Brazilian Street Railwal Company
        Limited. A primeira linha circulou entre o bairro portuário e o
        povoado de Apipucos, na ocasião, o percurso mais habitado do Recife
        e seus 80 mil habitantes. De acordo com o historiador Leonardo Dantas
        Silva, as maxambombas tinham entre dois e quatro vagões e carregavam
        até 30 pessoas por viagem, a uma velocidade de 16 km/h, com a
        passagem custando 200 réis. Em 1870 a circulação do trem chegou
        até a Estrada da Caxangá, próximo à Várzea. Depois, Olinda e
        Casa Amarela entraram na rota. A maxambomba foi responsável por dar
        nome a vários bairros da cidade, como Ponto de Parada, Casa Amarela
        (a parada do trem ficava próximo a uma), Encruzilhada (local de
        cruzamento das linhas férreas) e Tamarineira (parada ficava perto de
        um pé de tamarindo). Atualmente, a Estação Ponte D''uchoa é a
        única mantida conservada desde as maxambombas.','tremAntigo','https://i.imgur.com/f7xfjlS.png',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/01/maxambombacapa.jpg',23);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (28,-8.0653,-34.87675,'HISTORICO','Pouso da primeira travessia de avião do Atlântico Sul','Local: Bairro de Santo Antônio
        Ano: 1922
        
        história: O piloto Sacadura Cabral e o navegador Gago
        Coutinho, ambos portugueses, chegaram ao Recife a bordo de um
        hidroavião monomotor, realizando a primeira travessia de avião do
        Atlântico Sul. A aeronave Lusitânia saiu de Lisboa, em 30 de março,
        e passou por Las Palmas, nas Ilhas Canárias, seguida pela Ilha de
        São Vicente, em Cabo Verde. A Parada seguinte ocorreu no Arquipélago
        de São Pedro e São Paulo, já em águas brasileiras, onde a
        aeronave sofreu avarias e foi levada até Fernando de Noronha com o
        auxílio de um cruzador da Marinha de Portugal. Em Noronha, a dupla
        recebeu um novo avião, batizado de Pátria, que também apresentou
        problemas, dessa vez no motor. Uma terceira aeronave, nomeada Santa
        Cruz conseguiu realizar o último trecho da viagem até o continente,
        chegando ao Recife. "Eles foram recebidos com muita festa pelo
        povo, foram levados nos braços do bairro de Santo Antônio até o
        Hotel do Parque, que fica próximo onde hoje é o Teatro do Parque,
        na Rua do Hospício", relata o professor da Universidade
        Catélica de Pernambuco (Unicap), Flávio Cabral. Pelo feito, Gago e
        Sacadura são homenageados com um monumento na Praça Dezessete, no
        bairro de Santo Antônio. A parada final do voo ocorreu no Rio de
        Janeiro.','aviaoAntigo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/monumento-aviadores-2.jpg',24);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (29,-8.01704,-34.84836,'HISTORICO','A cabeça de Zumbi dos Palmares foi exposta','Local: Praça do Carmo
        Ano: 1695
        
        história: Um dos maiores símbolos da resistência escrava
        durante o Brasil Colônia foi morto, na Serra Dois Irmãos, na então
        Capitania de Pernambuco. Líder do Quilombo dos Palmares, Zumbi teve
        a cabeça cortada e exposta na Praça do Carmo até completa
        decomposição. A decisão do governador de Pernambuco na ocasião,
        Caetano de Melo Castro, visava acaba com a superstição difundida
        entre os escravos de que Zumbi era imortal. A cabeça era um
        troféu, um exemplo para que os negros que por ali passassem tivessem
        cuidado para não ter o mesmo fim, explica Severino Vicente,
        doutor em história e professor da UFPE.  Zumbi se tornou líder apàs
        se opor à liderança anterior de Ganga Zumba, que havia aceitado uma
        oferta de paz da Coroa Portuguesa. O Quilombo dos Palmares foi o
        grande foco de resistência formado por escravos negros, fugidos de
        fazendas e senzalas. Ocupava uma área equivalente ao tamanho de
        Portugal, onde atualmente, está o município de União dos Palmares,
        em Alagoas. Em seu auge, foi composto por 30 mil pessoas. Acabou
        desfeito por completo em 1710. Atualmente, a Praça do Carmo exibe um
        monumento, construído por Abelardo da Hora.','zumbiDosPalmares','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/est%C3%A1tua-de-zumbi-2.jpg',25);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (30,-8.06394,-34.87535,'HISTORICO','O que é lugar de memória?','A história oficial ajuda a referendar um evento ocorrido, mas nem
        sempre é componente indispensável para a formação da memória de
        um povo. Isso é explicado pelo conceito de lugar de memória que, em
        linhas gerais, reflete eventos que acabam no imaginário popular, sem
        necessidade de comprovação histórica. A história do boi
        voador, na época de Maurício de Nassau é um exemplo. São
        experiências de diferentes indivíduos que formam uma experiência
        histórica. O período holandàs em Pernambuco tem muito disso,
        inclusive a figura do próprio Maurício de Nassau, explica Cibele
        Barbosa, pesquisadora da Fundação Joaquim Nabuco (Fundaj).  
        O conceito de lugar de memória defende que, para que haja memória,
        não é preciso uma representação fàsica. àSão referências
        culturais. Não é indispensável que exista um monumento numa praça,
        desde que ali se tenha uma memória referendada pela história oral
        trazida por uma comunidade. Mesmo que não se tenha certeza que a
        cabeça de zumbi esteve na Praça do Carmo, o que importa é o que
        foi introjetado na memória das pessoas, exemplifica.','boiVoador','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/boi-voador-ok.jpg',26);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (31,-8.0643,-34.88009,'HISTORICO','Assassinato de João Pessoa','Local: Rua Nova
        Ano: 1930
        
        história:  Na Confeitaria Glória, na Rua Nova, no Recife,
        enquanto tomava um café, João Pessoa, então governador da Parayba
        foi assassinado. O autor do disparo foi o deputado João Dantas. A
        motivação foi pessoal, apesar da rivalidade política nutrida entre
        os dois. "João Pessoa teria ordenado que a polícia invadisse a
        casa de João Dantas. Os policiais pegaram fotos íntimas e cartas
        que ele trocava com uma mulher e publicaram no jornal", relata
        Severino Vicente. Acontece que João Pessoa, no mesmo ano, foi
        candidato a vice-presidente na chapa encabeçada por Getúlio Vargas,
        que acabou derrotada por Júlio Prestes. "Começou a se espalhar
        a notícia da morte de João Pessoa como algo com motivação
        política. A morte foi de ordem pessoal, mas teve efeitos políticos.
        Foi um dos fatores que geraram a Revolução de 1930", aponta
        Vicente. A Revolução de 30 foi um movimento armado liderado pelo
        Rio Grande do Sul, Paraíba e Minas Gerais, que usou a morte de João
        Pessoa como estopim para anular o resultado das eleições. Ela
        resultou na deposição do presidente Washington Luàs e impediu a
        posse do vencedor das eleições, Júlio Prestes. Em homenagem ao
        falecido, a capital da então Parayba passou a se chamar João
        Pessoa.','joaoPessoa','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/Rua-assassinato-Jo%C3%A3o-Pessoa.jpg',27);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (32,-8.05401,-34.87106,'HISTORICO','Captura do Recife pelo inglàs James Lancaster','Local: Porto do Recife
        Ano: 1595
        
        história:  Dois fatos precisam ser entendidos antes dos
        relatos sobre o que foi a "Captura do Recife". Primeiro: a
        Inglaterra começaava a dar os primeiros passos para se tornar uma
        potência marítima. Segundo: o açúcar valia como ouro. Nesse
        cenário, os corsários ingleses, piratas que atuavam a mando da
        rainha Elizabete I, agiam saqueando embarcações e portos de
        colônias portuguesas e espanholas em busca de riquezas. "Recife
        e Olinda estavam entre os locais mais ricos do mundo ocidental. Um
        quilo de açúcar já era riqueza, imagine um carregamento de
        açúcar", destaca Severino Vicente. James Lancaster chegou ao
        Recife em abril de 1595, comandando uma expedição militar inglesa.
        Em cerca de um màs em que estiveram em águas e solo recifenses, a
        quantidade de açúcar, pau-brasil e algodão saqueada foi tão
        grande que foram fretados navios holandeses e franceses pela frota
        pela coroa inglesa. Ao todo foram mobilizados em torno de 750
        soldados e 35 navios, entre próprios e capturados por Lancaster e
        seus aliados. No Recife, foram saqueadas lojas, armazéns e casas,
        deixando cerca de 120 mortos.','jamesLancaster','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/Captura-do-recife.jpg',28);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (33,-8.07217,-34.8818,'HISTORICO','Prisão e fuzilamento de Frei Caneca','Local: Arquivo Público e proximidades do Forte das Cinco Pontas
        Ano: 1825
        
        história:  O líder libertário Joaquim do Amor Divino
        Rabelo, mais conhecido por Frei Caneca tem a sua história misturada
        com a do Recife. Esteve entre as principais lideranças da Revolução
        Pernambucana de 1817 e da Confederação do Equador, em 1824. No ano
        seguinte à segunda tentativa separatista foi preso onde atualmente,
        na Rua do Imperador, funciona o Arquivo Público de Pernambuco. Pouco
        mais de um màs apàs a prisão, deveria ser morto por enforcamento,
        apesar dos diversos pedidos de clemências de diversas ordens
        religiosas. No momento do enforcamento, porém, três carrascos se
        recusaram a enforcá-lo, por conta de sua atuação religiosa, era
        um padre carmelita. Diante disso, foi ordenado pela Casa Militar a
        execução por meio de tiros, chamada na ocasião por arcabuzamento.
        "A Câmara Municipal, atual Arquivo Público, também funcionava
        como prisão. Frei Caneca saiu de lá e foi levado andando até o
        local em que foi executado, que apesar de ter uma placa e um busto,
        muitos não sabem o que aconteceu lá", relata Severino Vicente.
        O local exato da execução é um muro que continua erguido, nas
        proximidades do Forte das Cinco Pontas, no bairro de São José.','freiCaneca','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/Colagem-frei-caneca.jpg',29);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (34,-8.01012,-34.85353,'HISTORICO','Igreja Construída por uma irmandade de escravos negros','Local: Igreja de Nossa Senhora do Rosário dos Homens Pretos
        Ano: 1630
        
        história: Trazidos à força do seu continente, com
        diferentes costumes entre eles, os africanos escravizados no Brasil
        tentaram manter viva da forma mais viável possível suas crenças.
        Para isso, se inseriram no cenário da colônia. No bairro de Santo
        Antônio, por meio da Irmandade do Rosário dos Homens Pretos,
        escravos construíram uma igreja com o intuito de ganhar força de
        representação e de expressão religiosa.  Em artigo publicado pela
        Fundação Joaquim Nabuco, a pesquisadora Semira Adler Vainsencher,
        aponta que a igreja manteve a tradição do Congo, de coroar um rei e
        uma rainha, que acabou originando o maracatu. O processo, porém, foi
        conturbado. Diante dos costumes diferentes para o catolicismo, as
        celebrações dos negros passaram um período proibidas pela
        Inquisição. Isso somado às dificuldades financeiras, afinal a
        Irmandade era formada por escravos. Porém, mesmo assim, tentava
        construir igrejas equivalentes às da nobreza, arrecadando por meio
        da venda de artigos, como doces. No altar, o objetivo era manter as
        raízes negras. "Excetuando-se Nossa Senhora do Rosário, Nossa
        Senhora da Boa Hora e São Domingos, todas as outras imagens
        presentes nos altares representam santos negros", aponta a
        pesquisadora. Em Olinda, há uma igreja com o mesmo nome, fundada na
        segunda metade do século 17.','igrejaNossaSenhoraRosario','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/12/Igreja-de-nossa-senhora-dos-homens-pretos.jpg',30);`);

        await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (35,-8.05482,-34.86535,'FORTES','Forte de São Francisco','Localização: No extremo dos arrecifes do Porto do Recife, onde hoje existe um farol
        Data de construção: 1614
        Situação: O forte foi destruído em 1910 para levantamento dos arrecifes e obras de melhoramento na cidade.
        história: O forte, de pequenas proporções (estima-se que cerca de 6 metros em cada lado) também foi feito para proteger o Porto do Recife. Ele cruzava fogo com o Forte de São Jorge Novo para afastar com mais efetividade possíveis invasores.','fortePicao','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://2.bp.blogspot.com/-e_ZNzzhTb_U/UvimnHuiY0I/AAAAAAAAArQ/GyTltypzMJ0/s1600/Forte+do+Pica%CC%83o.jpg',31);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (36,-8.01589,-34.84633,'FORTES','Forte do Queijo','Localização: Rua Manuel Borba - Carmo, Olinda
        Data de construção: 1620 (inauguração em 1622)
        Situação: Ainda erguido e, segundo arqueólogos, em bom estado de conservação
        história: Inicialmente, o local foi criado pelo Governador de Pernambuco com a denominação Forte de São Francisco, mas com a ocupação holandesa foi reformado e passou por outra mudança em 1800. A última restauração do forte foi feita no século XX.','forteQueijo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://media-cdn.tripadvisor.com/media/photo-s/08/cf/8c/60/fortim-de-sao-francisco.jpg',32);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (37,-8.05683,-34.93099,'FORTES','Forte Real do Bom Jesus','Data de construção: Por volta de 1630
        
        Situação: Apenas algumas evidências, como o fosso do forte, se mantém no local
        
        história: O local, longe da costa pernambucana, foi escolhido
        para evitar que invasores holandeses passassem do litoral para o interior, onde
        ficavam os engenhos de açúcar. Os pesquisadores acreditam que ele tenha sido
        posicionado estrategicamente para cercar os inimigos com mais facilidade','forteRealBomJesus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://uploads.knightlab.com/storymapjs/d5cc53d28ab2db871c39e00a9bdd9e6c/fortes-de-pernambuco/_images/forte%20bom%20jesus%20.jpg',33);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (38,-8.05291,-34.87066,'FORTES','Forte do Brum','Localização: Praça da Comunidade Luso Brasileira, Bairro do Recife.
        Data de construção: 1630
        Situação: Em bom estado de conservação
        história: Foi uma das primeiras fortificações construídas no Recife quando os holandeses invadiram a área. Muitas emboscadas de luso-brasileiros foram feitas para evitar sua construção, sem sucesso.','forteBrum','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://media.sketchfab.com/models/1bf781cd040d424bb7941adcb9fc54f1/thumbnails/5da5400f56f942ab9313a8bd4a44f77f/a4d619a8280544b5a9c0fc1ae23f8ff1.jpeg',34);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (39,-7.91079,-34.82289,'FORTES','Forte de Pau Amarelo','Localização: Rua Paquistão, S/n - Pau Amarelo, Paulista 
        Data de construção: Obras determinadas em 1703, mas só completamente concluída no século 17.
        Situação: Em bom estado de conservação
        história: O local foi projetado ainda antes dos holandeses chegarem ao Brasil, mas levou anos até ser construído completamente, com várias mudanças de planta, atingindo sua forma final, antes do abandono, em 1866. Foi restaurado em 1973.','fortePauAmarelo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://s2.glbimg.com/DhpWJlCNvHSqx_mJpBGRbQuQYaU=/0x0:1181x557/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/s/E/lf043DS3SeAmwQKXrUcA/forte-de-pau-amarelo-.jpg',35);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (40,-8.04126,-34.86698,'FORTES','Forte do Buraco','Localização: Divisa entre Recife e Olinda, próximo à Escola de Aprendizes Marinheiros
        Data de construção: 1630
        Situação: Conservada parcialmente, algumas dddd podem ser encontradas
        história: Fortificação foi construída em cima do Forte de São Jorge Velho quando os holandeses chegaram ao Brasil.','forteBuraco','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/17/normal/9f61f918b37df7aead4beb08c18b11e9.jpg',36);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (41,-8.07181,-34.88071,'FORTES','Forte das Cinco Pontas','Localização: Praça das Cinco Pontas, s/n, São José
        Data de construção: 1630
        Situação: Bem conservado
        história: Também foi construída por holandeses na chegada ao Brasil, para dar apoio ao Forte Ernesto na Ilha de Antônio Vaz, hoje, bairro de São José. Também foi alvo de emboscadas luso-brasileiras','forteCincoPontas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://i0.wp.com/www.conhecendomuseus.com.br/v2/wp-content/uploads/2014/06/vista_do_alto_museu_da_cidade_do_recife_grande.png',37);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (42,-7.81056,-34.83869,'FORTES','Forte Orange','Localização: Acesso ao Forte Orange, s/n, Ac. ao Forte Orange, Ilha de Itamaracá 
        Data de construção: 1631
        Situação: Em bom estado de conservação
        história: O forte foi construído pelos holandeses para defender as vilas de Itamaracá e Igarassu','forteOrange','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://i.ytimg.com/vi/ckIB2NJNseA/maxresdefault.jpg',38);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (43,-8.75766,-35.09972,'FORTES','Forte de tamandaré','Localização: Onde fica o Farol de Tamandaré
        Data de construção: 1691
        Situação: Preservado em estado parcial
        história: O forte foi construído pelos holandeses depois da ocupação da área. Pesquisadores ainda não conseguiram provar, mas estimama-se &nbsp;que ele tenha alguma relação com o Forte de Santa Cruz','forteTamandare','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/07/22/806x444/1_dji_0866-18567785.jpg',39);`);

        await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (44,-8.03389,-34.91894,'JARDINS','Praça de Casa Forte','A Praça de Casa Forte foi construída em 1935 na campina do antigo
        engenho Casa Forte, edificado em meados do século XVI e onde, em
        1645, aconteceu a Batalha da Casa Forte, luta campal entre portugueses
        e holandeses durante a Restauração Pernambucana. No início do século
        XX, no seu entorno, foram construídas a Igreja de Casa Forte, o Colégio
        Sagrada Família e algumas residências, delimitando um grande terreiro retangular onde se realizavam eventos religiosos e festas profanas.
        Em 1935, Burle Marx cria o Jardim da Casa Forte, fruto de uma reforma
        completa da praça existente: um jardim aquático constituído por trás
        lagos, em perfeita harmonia com esse conjunto edificado.
            Esse é o primeiro jardim moderno brasileiro. Com função educativa
        destaca a vegetação de regiões específicas da América, incluindo exemplares da Mata Atlântica, da Amazônia e espécies tropicais exóticas de
        outros continentes. Contornando os lagos estão as espécies arbáreas
        formando cenários variados de volumes e combinações de texturas.
        Para o lago central, o paisagista indicou a escultura de uma índia a se
        banhar que nunca foi executada. No contorno, duas alamedas de árvores sombreavam a fileira de bancos. A água represada em lagos, por
        sua vez, produzia efeitos cúnicos e refrescantes e servia como meio de
        cultura botânica. Foram introduzidos paus-mulatos e plantas aquáticas
        como ninfeas, vitórias-régias e lótus.','pracaCasaForte','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2015/12/casa-forte.jpg',40);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (45,-8.05841,-34.90357,'JARDINS','Praça Euclides da Cunha','A Praça Euclides da Cunha foi concebida por Burle Marx também em
        1935. Localiza-se no bairro da Madalena, em terras pertencentes ao antigo Engenho da Madalena. Antes de sua construção, o local chamava-se
        Largo do Viveiro. Nesse lugar, existia apenas uma estação elevatéria da
        Companhia Pernambucana de Saneamento, construída pelo engenheiro
        Francisco Saturnino de Brito em 1909, que funciona até os dias atuais.
        Esse Jardim também é conhecido como Praça do Internacional pela
        presença do Clube Internacional. Burle Marx traçou passeios e gramados em forma de elipse com um canteiro central dedicado às cactáceas
        como a coroa-de-frade, o facheiro e o xique-xique, e alamedas nas
        bordas com cortinas de árvores é como o pau-ferro, o pau-darco e o
        juazeiro, todas elas espécies vegetais da Caatinga.','pracaEuclidesCunha','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2015/12/euclidesCunha.jpg',41);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (46,-8.06081,-34.87849,'JARDINS','Praça da República','A Praça da República é o mais antigo jardim público do Recife. Foi
        construída no sítio onde existiu o Parque e o Palácio de Friburgo no
        século XVII, edificados pelo Conde João Maurício de Nassau durante o
        domínio holandàs em Pernambuco (1630/1654). Em substituição a esse
        conjunto, em 1841, foi construído o Palácio do Governo e, posteriormente, o Teatro Santa Isabel, dentre outros significativos exemplares
        da arquitetura. Em 1875, foram executados o projeto de uma praça e os
        jardins do Palácio do Governo, ambos assinados pelo engenheiro Emile
        Beringer, segundo a influência inglesa adotada no Brasil do século XIX.
        Naquela época, esta Praça foi chamada Jardim do Campo das Princesas,
        nome que hoje se dê aos jardins do Palácio do Governo do Estado. Para
        compor o cenário romântico, o mobiliário reunia esculturas de bronze
        adquiridas na França e gradil de ferro importado da Inglaterra, além de
        coreto e luminárias de ferro. Canteiros com vegetação de pequeno porte
        e renques de palmeiras imperiais como símbolo de identificação com a
        Corte complementavam aquele ambiente. Na década de 1920, a Praça 
        da República foi reformada e ganhou eixos em cruz, entremeados por
        passeios curvilíneos, quiosque e bancos de cimento armado de inspiração romântica.
        Por volta de 1937, Roberto Burle Marx deixa sua marca na Praça da
        República, mantendo as esculturas clàssicas e as palmeiras imperiais e
        especificando coqueiros, cajueiros e mangabeiras, entre outras espécies arbáreas. Substituiu os bancos por outros do mesmo modelo de
        granito polido que usou na Praça de Casa Forte e na Praça Euclides da
        Cunha. Desanuviou o traçado, conferindo-lhe um aspecto monumental
        ao acrescentar uma fonte luminosa no centro da composição. Também
        definiu passeios largos partindo dessa fonte para os edifícios do entorno
        e com as águas dos rios Capibaribe e Beberibe.','pracaRepublica','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://www.feriasbrasil.com.br/fotosfb/802222889-XG.jpg',42);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (47,-8.0598,-34.87804,'JARDINS','Jardins do Campo das Princesas','às margens do Rio Capibaribe, os jardins foram reformados pelo paisagista','campoPrincesas','https://i.imgur.com/f7xfjlS.png',2,'FALSE','https://media-cdn.tripadvisor.com/media/photo-s/08/48/1b/13/palacio-do-campo-das.jpg',43);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (48,-8.05632,-34.89915,'JARDINS','Praça do Derby','A Praça do Derby está localizada no bairro do mesmo nome, no local
        onde existiu um hipódromo (por volta de 1888) e depois, o Mercado
        Coelho Cintra e um hotel, construídos por Delmiro Gouveia. Na década
        de 1920, o Governo de Sérgio Loreto construiu o Quartel e o Parque
        do Derby, esse último incluindo um loteamento e a abertura de largas
        avenidas e de um canal de drenagem à que levou em conta a proximidade com o Rio Capibaribe. O projeto incluía dois lagos, um em cada
        trecho, bancos de cimento armado de feição romântica, esculturas e
        jarros, uma pérgula dórica e uma pérgula coríntia. Um dos lagos conformava a ilha de contemplação, denominada Ilha dos Amores, de formas
        irregulares e com uma éponte rústica que reforçava os ares românticos
        do conjunto da paisagem. Em 1937, Burle Marx elaborou um projeto de
        reforma para a Praça do Derby, introduzindo linhas curvas ao traçado
        de linhas retas e ampliando a Ilha dos Amores. Manteve o mobiliário','pracaDerby','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://visit.recife.br/wp-content/uploads/2018/04/o-que-fazer-praca-do-derby-topo-mobile.jpg',44);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (49,-23.43384,-51.90656,'JARDINS','Praça Salgado Filho','A Praça Ministro Salgado Filho é também conhecida como Praça do
        Aeroporto, estando localizada no bairro do Ibura, no limite do Recife
        com o município de Jaboatéo dos Guararapes, em frente à edificação do
        antigo Aeroporto Internacional dos Guararapes atualmente Aeroporto
        Internacional dos Guararapes à Gilberto Freyre. Em 1958, quando da
        inauguração do Aeroporto, o prefeito Pelópidas Silveira convidou Burle
        Marx para projetar uma praça com plantas regionais em frente a esse
        equipamento, local então conhecido como Campo do Ibura. O paisagista criou um jardim aquático, cujo elemento principal era um grande
        lago, para ser admirado pelos visitantes e moradores da Cidade. Uma
        larga escadaria dava acesso ao lago, em frente à entrada da Estação de
        Passageiros. Burle Marx emoldurou o lago com canteiros, gramados e
        passeio e criou um pequeno bosque com banco circular. A vegetação
        arbárea configurava arranjos sinuosos, expressos num traçado marcado
        por uma sucessão de curvas que se diluíam no terreno.','pracaSalgadoFilho','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2015/12/salgadoFilho.jpg',45);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (50,-8.01562,-34.94402,'JARDINS','Jardins da Farias Neves','A Praça Faria Neves ou Praça de Dois Irmãos localiza-se no bairro de
        Dois Irmãos, em área remanescente de Mata Atlântica, pertencente ao
        antigo engenho Dois Irmãos, onde no início do século XX, foi instalado
        o Jardim Zoobotúnico de Dois Irmãos (ou Horto Florestal). Na década
        de 1930, no seu entorno, foi construída a vila operária de Dois Irmãos,
        que existe até hoje. Na gestão do prefeito Pelópidas Silveira, em 1958,
        Burle Marx foi convidado para criar, naquele lugar, um jardim recreativo
        para as crianças, com um brinquedo desenhado por ele (em forma de
        escultura), balanãos, gangorras e escorregos, complementados por dois
        longos bancos.
        O artista contornou os bancos com árvores como o mulungu, o abricó
        de macaco, o pau-brasil, o pau-rei e palmeiras. Na década de 1960,
        esta Praça passou a ser chamada Praça Faria Neves, em homenagem ao
        professor de história Natural José Pedro Faria Neves. Por muito tempo,
        a Praça foi utilizada como local para estacionamento de carros e ônibus 
        dos visitantes do Parque de Dois Irmãos, antigo Zoobotúnico. Festas populares, um terminal de ônibus e um
        bar contribuíram para o desgaste da Praça. A participação da comunidade do entorno foi muito importante
        para a sua restauração pela Prefeitura do Recife que, em 2006, devolveu este lindo Jardim de Burle Marx à
        população do bairro, com mesinhas para jogos, o brinquedo de concreto recuperado, áreas sombreadas para
        sentar e conversar e canteiros de cana-da-índia. Esta obra de Burle Marx, como entrada do Parque Estadual de
        Dois Irmãos, é um lugar público agradável para o convívio social.','pracaFariaNeves','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2015/12/fariasNeves.jpg',46);`);

        // await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (51,-8.03186,-34.95452,'POESIA','Avenida Caxangá','Avenida Caxangá
        // "A seguir, Caxangá,
        // também velha e recolhida,
        // onde começa a estrada
        // dita Nova, ou de Iputinga,
        // que quase reta à cidade,
        // que é o mar a que se destina,
        // leva a gente que veio
        // baixando em minha companhia."
        // (João Cabral de Melo Neto)
        
        // Obra
        // O Rio','avenidaCaxanga','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2019/04/03/782751/20190403092448693718a.jpg',47);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (52,-8.0453,-34.9695,'POESIA','Várzea','"Entra-se no Recife
        // pelo Engenho São Francisco.
        // Já em terras da Várzea,
        // está São João, uma antiga usina.
        // Depois se atinge a Várzea,
        // a vila propriamente dita,
        // com suas árvores velhas
        // que dão uma sombra também antiga."
        // (João Cabral de Melo Neto)
        
        // Obra
        // O Rio','varzea','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://live.staticflickr.com/3801/11839706876_f17c8d8e03_b.jpg',48);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (53,-8.02635,-34.9288,'POESIA','Monteiro','"No pátio a noite é sem silêncio.
        // E que é a noite sem silêncio?
        // A noite é sem silêncio e no entanto onde os sinos
        // Do meu Natal sem sinos?
        
        // Ah meninos sinos
        // De quando eu menino!
        
        // Sinos da Boa Vista e de Santo Antônio.
        // Sinos do Poço, do Monteiro e da Igrejinha de Boa Viagem."
        // (Manuel Bandeira)
        // Obra
        // Natal sem sinos','monteiro','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUGRe2yJu0GmgH5bvxCHglE3pv1I_8S9BPFucZnDuFdgyw-naprIjAoDc8aYB1HhHhmh8u_XMiudu9Qej7mYtXbX76ccBqkk9JAzl2Spe_vzwAr1BVRiww=s16383',49);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (54,-8.0352,-34.9239,'POESIA','Poço da Panela','"Num remanso bucólico e sombrio
        // Onde atenua a marcha o grande rio,
        // À sombra de recurvas ingazeiras,
        // Batem roupa, cantando as lavadeiras.
        // Trago ainda nos olhos: é bem ela,
        // A paisagem do Poço da Panela:
        // A igreja, a casa grande, as gameleiras
        // E ao fundo o pátio verde e as ribanceiras
        // que afagam, num lúbrico arrepio,
        // O corpo adolescente e alvo rio."
        // (Olegário Mariano)
        
        // Obra
        // O Poço da Panela','pocoPanela','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://blog.eduardofeitosa.com.br/wp-content/uploads/2015/12/ESTRADA-REAL.jpg',50);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (55,-8.02439,-34.9332,'POESIA','Rio Capibaribe','"Na paisagem do rio
        // difícil é saber
        // onde começa o rio;
        // onde a lama
        // começa do rio;
        // onde a terra
        // começa da lama;
        // onde o homem,
        // onde a pele
        // começa da lama;
        // onde começa o homem
        // naquele homem."
        // (João Cabral de Melo Neto)
        
        // Obra
        // O cão sem plumas','rioCapibaribe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUG6x_RGQdYqR36gZOD9WfSFadU3NqlleCjoXRPAoUSUvnHfYLEv_BK18TWzUycnfyd6TvyHwZh7hXdRajQD-FJYkBV-q-pl1zwilPE_qOLIw3rBmkwEFYS1F8XBTwinysXDf0EyLUIXtvfm_kpz_kt3wlluJ7Es-M3b72NZgP_P_5OBecATC9DMJG7VwCBt7aChEDs=s16383',51);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (56,-8.0633,-34.88861,'POESIA','Mercado da Boa Vista','"Levanto-me neste dia que amanhece
        // E atravesso o portal de ferro
        // E as pilastras : ''maçãs portuguesas''
        // Símbolos dos leilões de sombras.
        
        // Onde já foi mercado de escravos
        // Hoje vendem-se cravos e canelas,
        // Cereais, legumes, frutas, carnes e ervas
        // Para Eva ou Maria : ''maçãs brasileiras''."
        // (Aldo Lins)
        
        // Obra
        // Mercado da Boa Vista','mercadoBoaVista','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/_mercado_da_boa_vista.jpg?itok=m0zu5MSd',52);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (57,-8.07328,-34.89539,'POESIA','Joana Bezerra','"Rasas na altura da água
        // vá-se brotar outras ilhas:
        // ilhas ainda sem nome,
        // ilhas ainda não de todo paridas.
        // Ilha Joana Bezerra,
        // do Leite, do Retiro, do Maruim:
        // o touro da maré
        // a estas já não precisa cobrir. "
        // (João Cabral de Melo Neto)
        
        // Obra
        // O Rio','joanaBezerra','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUGr-tBMahdEHoz0mS0KFAX5-3v5EImCrQAHPpj2IXuPomRRe8iuVbEytejw9_iF2n30EjMSoCdqRk35Wwiv7qIaTejgpVvrX3xRByJ80oSPrXR-WtH3hxLlqprgy_uLM5K_J2A-J6tHHqgUqUgrRahr7nKBBUKOH4BY6XOyHvu-znJNvxK4rGMwzIfnOMA=s16383',53);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (58,-8.07018,-34.87661,'POESIA','Cais de Santa Rita','"No cais de Santa Rita,
        // enquanto vou norte-sul,
        // surge o mar, afinal,
        // como enorme montanha azul.
        // No cais, Joaquim Cardozo
        // morou e aprendeu a luz
        // das costas do Nordeste,
        // mineral de tanto azul."
        // (João Cabral de Melo Neto)
        
        // Obra
        // O Rio','caisSantaRita','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://i.ytimg.com/vi/-y_R-SW2jec/maxresdefault.jpg',54);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (59,-8.06412,-34.88008,'POESIA','Rua Nova','"Os prazeres civilizados
        // Da Rua Nova
        // Nos teus paralelepípedos
        // Os melhores do mundo
        // Os automóveis
        // Do Novo Mundo
        // Cortar as pontes ancestrais
        // Do Capiberibe."
        // (Oswald de Andrade)
        
        // Obra
        // recife (Pau Brasil)','ruaNova','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUHBzDAcJZuUQzRq87YPJGrHyvAnTO2UAaZiul8ZpZaGhind0AFlDQq8rRrHtRUA_JE69INpLIEJdLKHjI-_2O0Vgd_dirA2TkEKQi6sOKxtjR5auC6UqdbQsYrDdGZP0dM3_wx4ZRsi6KLQSVbmYWzIXL0xUJ8X6bp59iwe4nAx5_8GxhX8=s16383',55);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (60,-21.70216,-45.25743,'POESIA','Avenida Guararapes','"Na Avenida Guararapes,
        // o Recife vai marchando.
        // O bairro de Santo Antônio,
        // tanto se foi transformando
        // que, agora, às cinco da tarde
        // mais se assemelha a um festim."
        // (Carlos Pena Filho)
        
        // Obra
        // Guia Prático da Cidade do Recife','avenidaGuararapes','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUGhO4ca1Q8vMNT2ZkUIMaoda4Nt4E1W5VinyFUmGg0tcIsGfPi5gqWyDErP1L31U0f_BiS8mBwFPsFXlmeEK5so-R7hIYPKXGC9AWusgOud2eoRrOUOf3YH13v-kCj3JuEv5fazIGDQ5oiRDg=s16383',56);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (61,-8.05695,-34.88145,'POESIA','Parque Treze de Maio','"Este ponto verde aqui,
        // feito de folhas e flores,
        // é o Jardim Treze de Maio,
        // onde os nossos oradores
        // vão um ao outro contar
        // como foi que conseguiram
        // a vida inteira passar
        // nas trevas da ignorância
        // sem nunca desconfiar. "
        // (Carlos Pena Filho)
        
        // Obra
        // Guia Prático da Cidade do Recife','trezeMaio','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUH1JwtFJlhOLJ9rJ_-0v8KLvot8pXE7vKeXJ4Ak0S_AP9yZdWT-Alt69n7YPwfi56ZJ1oIpZzj8PGbanuW6wiChvxk3JshA1KXBVTOcGuE9X5Zbs-KLqV38207LVNm1JpDo-WP8zD_AYHbjCMotdOiD5ERz6pdMSP5KaURYj_keaRK2VhcMS3EFJVWPQTrNJw=s16383',57);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (62,-8.05823,-34.87998,'POESIA','Rua da União','"Recife da minha infância
        // A rua da União onde eu brincava de chicote-queimado
        // e partia as vidraças da casa de dona Aninha Viegas
        // Totônio Rodrigues era muito velho e botava o pincenê
        // na ponta do nariz
        // Depois do jantar as famílias tomavam a calçada com cadeiras
        // mexericos namoros risadas
        // A gente brincava no meio da rua
        // Os meninos gritavam:
        // Coelho sai!
        // Não sai!"
        // (Manuel Bandeira)
        
        // Obra
        // Evocação do Recife','ruaUniao','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUGCfwPuQzDyaMz7sC21QZkaL48tx5Hbdz5FL9qBnJZ7YeUhgzeaQ0EenDNTFsqesPUsI3srsUNS9jiznDI4xhjI9GQUPll7D-Kk1jblz3M657WCR5xokyooagxODQSKfpn7NKnA=s16383',58);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (63,-8.05774,-34.87887,'POESIA','Rua da Aurora','Voei ao Recife, no Cais
        // Pousei na Rua da Aurora.
        // À Aurora da minha vida
        // Que os anos não trazem mais!"
        // (Manuel Bandeira)
        
        // Obra
        // Cotovia','ruaAurora','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://www.ipatrimonio.org/wp-content/uploads/2017/07/Recife-Rua-da-Aurora-Imagem-Fundarpe.jpg',59);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (64,-8.06395,-34.87537,'POESIA','Ponte Maurício de Nassau','"Tarde no Recife.
        // Da ponte Maurício o céu e a cidade.
        // Fachada verde do Café Maxime, Cais do Abacaxi. Gameleiras.
        
        // Tanta gente apressada, tanta mulher bonita;
        // Um camelô gritando: - alerta!
        // Algazarra. Seis horas. Os sinos.
        
        // Recife romântico dos crepúsculos das pontes,
        // Dos longos crepúsculos que assistiram à passagem dos fidalgos holandeses,
        // Que assistem agora ao movimento das ruas tumultuosas,
        // Que assistirão mais tarde à passagem dos aviões para as costas do Pacífico;
        // Recife romântico dos crepúsculos das pontes
        // E da beleza catélica do rio."
        // (Joaquim Cardozo)
        
        // Obra
        // Tarde no Recife','ponteMauricioNassau','https://i.imgur.com/5lcaghS.png',2,'FALSE','https://revista.algomais.com/wp-content/uploads/2020/02/ponte-mauricio-de-nassau-1.jpg',60);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (65,-8.06198,-34.87531,'POESIA','Pontes do Recife','"Amar mulheres, várias
        // amar cidade, só uma é Recife.
        // E assim mesmo com as suas pontes
        // E os seus rios que cantam
        // E seus jardins leves como sonâmbulos
        // E suas esquinas que desdobram os sonhos de Nassau."
        // (Lêdo Ivo)
        
        // Obra
        // Recife, poesia','pontesRecife','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUHqMeGXiystGlF7dpB6eQ2AjJ-uyIA7H9IYJ8KgUM6kJxYXULrMMBfwuXl6E_3YULEJsRKyhGthn7wojWY4L-SiIwGqtdsTbvSvFX6-ShG-OlI=s16383',61);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (66,-8.06319,-34.87114,'POESIA','Marco Zero','"Desejos e assombrações a dor tecendo
        // entre damas da madrugada
        // o tigre de bengala Tomàs Seixas
        // do Marco Zero adiante atormentando-se."
        // (Jomard Muniz de Britto)
        
        // Obra
        // Á cidade poeira','marcoZero','https://i.imgur.com/ASCDu0O.png',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUGYU17f6k1OKeaPWk0K8gVGD96pA4CX5dz7H-qf0I6DHpHeaMbddMHnGo7MdVQTXL_RN2uRRNur6KQPsmnagYp9zJQmPRrzLMSDJV1dgk-b9TW1OcOYbVnxhaXxbnnQ46htn-k-Hx2H_w=s16383',62);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (67,-8.06293,-34.87413,'POESIA','Cais do Apolo','"Esse é o bairro do Recife
        // que tem um cais debruçado
        // nas verdes águas do Atlântico
        // e ainda tem o cais do Apolo,
        // apodrecido e romântico,
        // beleza que ainda resiste
        // lá nos desvíos da memória
        // desse bairro que se escoa
        // pela Ponte Giratória,
        // que é uma estranha armação
        // que aguenta em seu férreo dorso
        // automóvel, caminhão
        // e trem de carga bem cheio,
        // mas não resiste às barcaças
        // que a fendem do meio a meio."
        // (Carlos Pena Filho)
        
        // Obra
        // Guia Prático da Cidade do Recife','caisApolo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','revista.algomais.com/wp-content/uploads/2020/04/cais-do-apolo-1.jpg',63);
        // INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (68,-8.0635,-34.8729,'POESIA','Bairro do Recife','"Zona portuária, espectro de blenorragia
        // e cargueiros.
        // A puta se mira no espelho
        // mão no queixo, como se perguntasse:
        // - Que meios, para atravessá-lo?
        // Eu responderia:
        // - Mil vezes, o outro lado.
        // Ela sorri pelo canto amargo da boca
        // e desaparece atrás do biombo chinàs.
        // Ouço o chocalhar das abluções
        // como as mareias no casco do cargueiro.
        // Considero o toucador colorido,
        // espectro de enormes vidros de loção.
        // Estou nu como uma garrafa,
        // nudez de vidro,
        // o quarto é o Éden."
        // (Gastão de Holanda)','bairroRecife','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','https://lh3.googleusercontent.com/umsh/AFiHsUHmit3svI4e633OT_Vyf-rEmCy-xITM9k5QjkGK57oCRr1L8kbVxYv6PUgcCYMsasVjfPkCn23qDUZeeJc59RxmjvYmCdm21weNZAv_n7bz6Vlz94YhhOrorNGWCpCuZM_AVGz-WI5YMMg1aMR3omuItS2GXFXSVPv-2yqrJP3h7AOlJMdBha26NQ=s16383',64);`);

        await queryRunner.query(`INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (69,-8.04805,-34.8989,'HISTORICO','Palácio dos Manguinhos','A residência oficial do arcebispo de Olinda e Recife fica no número 409. O imóvel foi construído para ser a residência do comerciante José da Silva Loyo, o Visconde de Loyo. Adquirido pela Arquidiocese, tornou-se a sede da Cúria Metropolitana. Fica ao lado da Igreja de São José dos Manguinhos, construída, entre 1711 e 1741, para ser uma capela particular. Foi no casarão que, na década de 1980, o papa João Paulo II pernoitou durante visita à capital pernambucana. Antes de dormir no Palácio dos Manguinhos, no 7 de julho de 1980, o papa se dirigiu à sacada superior do imóvel para acenar para duas mil pessoas que gritavam o seu nome. No dia seguinte, antes de seguir para Teresina, o pontífice experimentou comidas típicas, como cuscuz e tapioca, no café da manhã. A despedida foi com a bênção das 32 pessoas que o serviram durante a estada. A cada uma, o papa deu um terço.','palacioManguinhos','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/Palacio-Manguinhos-Casaroes-Rui-Barbosa.jpg',65);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (70,-8.0445,-34.90173,'HISTORICO','Museu do Estado de Pernambuco','O casarão do número 960, onde hoje funciona o Museu do Estado de Pernambuco, foi considerado, no século 19, a grande vitrine da alta sociedade pernambucana. As festas promovidas na casa de Francisco Antônio de Oliveira, o Barão de Beberibe, eram observadas do lado de fora por pessoas das classes mais baixas. Quem conta a história é o monitor do museu, Alexandre Amaral. Essa casa foi residência da família e também já foi sede do Country Club. As casas ao longo do Rio Capibaribe eram as preferidas dos ricos comerciantes, que davam grandes festas. Muitas pessoas que se deslocavam para ver as celebrações, explica. O luxo e requinte ainda podem ser vistos por quem tem curiosidade de saber como viviam os ricos da época. O Museu do Estado tem salas que reproduzem cômodos, com objetos originais. O Solar do Barão de Beberibe só foi adquirido pelo estado em 1935 e, em 10 de maio de 1940, virou museu por meio de decisão publicada no decreto número 491. O casarão também recebe o nome de Estácio Coimbra, governador que criou a Inspetoria Estadual dos Monumentos Nacionais de Pernambuco.','museuPernambuco','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/museu-do-estado-casaroes-rui-barbosa.jpg',66);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (71,-8.05252,-34.89624,'HISTORICO','Toyolex','A convivência harmônica entre uma concessionária de veículos moderna e um casarão antigo em estilo colonial provam que é possível preservar os imóveis históricos, mesmo que o uso deles pareça ser antagônico ao espaço. A união do tradicional com o contemporâneo marcam a arquitetura da Toyolex, no número 1105 da avenida. A loja de veículos ocupa um terreno de 10 mil metros quadrados e divide espaço com um casarão da década de 1950. Para preservar a arquitetura original do imóvel, a concessionária foi levantada nos fundos da casa, na parte do terreno voltada para a Avenida Beira Rio. Quem passa pela Rui Barbosa, por exemplo, nem consegue imaginar que, por trás do jardim e do casarão, exista um prédio de vidro representante de uma moderna arquitetura. O "antigo" e o "novo" estão interligados apenas por uma passarela. Antes da inauguração da loja, em 2013, as portas e os pisos do casarão foram restaurados, seguindo as especificações originais. As cores que as esquadrias de madeira tinham na década de 1950 também foram mantidas.','toyolex','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/Toyolex-casaroes-rui-barbosa.jpg',67);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (72,-8.04254,-34.90305,'HISTORICO','Mansão dos Gibson','No sítio de Henry Gibson, na Ponte de Uchoa, precisa-se de trabalhadores de enxada. Sendo bons, paga-se 800 réis por dia. "O anúncio estampado na edição de 8 de agosto de 1855 do Diario de Pernambuco se referia a uma das mais importantes propriedades do Recife na época. Hoje, a mansão dos Gibson, que atualmente pertence à família Baptista da Silva, faz parte do imaginário de muitos recifenses. A casa de estilo neomanuelino, ou neogótico, construída em 1847, sem dúvidas, uma das que mais chamam a atenção de quem passa pela avenida. O jardim bem cuidado, o portão de ferro e as estátuas são algumas das belezas do casarão que é possível contemplar. O acesso ao imóvel, porém, é restrito apenas a familiares e amigos dos proprietários; avisam os funcionários assim que alguém se aproxima do portão. "Gibson era um negociante inglàs e essa casa foi a primeira da região projetada com jardins", explica o arquiteto José Luiz da Mota Menezes. Apàs a saída dos Gibson da casa, o imóvel abrigou o Internato Pernambucano, considerado "o mais aristocrático colégio da época".','mansaoGibson','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/Mansao-Gibson-Casaroes-Rui-Barbosa.jpg',68);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (73,-8.04138,-34.90337,'HISTORICO','Ponte D''uchoa','Entre os carros que trafegam pela movimentada avenida, um pedacinho do passado chama a atenção. A Estação Ponte dUchoa está lá, lembrando os tempos em que o bonde era um dos meios de transporte mais comuns no Recife. A estação - inserida na Zona Especial de Preservação do Patrimônio histórico da cidade - é um dos exemplos da arquitetura de ferro da cidade. O trecho denominado de Ponte dUchoa, situado na área compreendida entre a Ponte da Torre e o Sítio da Jaqueira, tem a sua denominação originária da segunda metade do século 17, quando o senhor do Engenho da Torre, Antônio Borges Uchoa, mandou construir uma ponte de madeira sobre o Rio Capibaribe. A estação da antiga maxambomba, como eram chamados popularmente os trens da Brazilian Street Railway, era ponto de parada dos bondes. Foi construída em 1865, pela Empresa de Trilhos Urbanos, mas só começou a funcionar dois anos depois. A maxambomba percorreu os trilhos do Recife até 1915, quando a estação foi desativada.','ponteUchoa','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/ponte-duchoa-casaroes-rui-barbosa.jpg',69);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (74,-8.04088,-34.902,'HISTORICO','Colégio Damas','Se o Colégio Damas funciona na Avenida Rui Barbosa hoje, o fato se deve à estação de trens urbanos Ponte dUchoa, localizada em frente à unidade de ensino. As irmàs belgas responsáveis pela instituição de instrução cristã buscavam um imóvel. Ao descer do pequeno trem, maxambomba, e sabendo da procura das religiosas, o cônego Rechem viu uma placa de "vende-se" no sobrado em frente à estação. Voltou mais tarde com as madres Loyola e Alphonse, que fecharam negócio. O Sobrado de Ponte dUchoa, adquirido pelas freiras, pertencera ao comendador Luiz Morais Gomes Ferreira, um dos fundadores da Associação Comercial de Pernambuco. O sítio constituía, no século 19, uma localidade larga, extensa e bela avenida, ladeada de importantes prédios, bem construídos e de variada arquitetura, mostra o registro do Colégio Damas. Atualmente, o sobrado funciona como um museu, aberto a estudantes, que reúne objetos da história da casa e do colégio.','colegioDamas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/Colegio-Damas-casaroes-rui-barbosa.jpg',70);
        INSERT INTO "interest_point" (id,latitude,longitude,category,name,description,badge,"badgeUrl",likes,"isFavorite","imageUrl","itineraryOrderId") VALUES (75,-8.03945,-34.90388,'HISTORICO','Academia Pernambucana de Letras','único casarão da Rui Barbosa tombado pelo Instituto de Patrimônio histórico e Artàstico Nacional (Iphan). No século 19, era residência do portuguàs João José Rodrigues Mendes, que viveu entre 1827 e 1893. O pràspero comerciante de bacalhau tinha o título de barão e, na viuvez, construiu uma torre para isolar-se da família e viver os últimos anos da vida sem a mulher, Eugênia da Costa. Nos anos 1960, durante o governo Paulo Gerra, o imóvel foi desapropriado e cedido em comodato à Academia Pernambucana de Letras (APL). Apenas no governo Eraldo Gueiros, na década de 1970, o imóvel foi doado em definitivo à casa dos imortais. "Até hoje, descendentes do barão visitam a casa. Recentemente, uma herdeira dele pediu para entrar e contou que viveu aqui até os 10 anos. Ela veio com os netos e se emocionou lembrando da infância", afirma a presidente da APL, Margarida Cantarelli. Em setembro de 2015, uma minuciosa reforma teve início no casarão. Os azulejos portugueses, o piso inglàs e os lustres franceses foram restaurados. "Quando a reforma foi concluída (a previsão é que termine ainda em 2016), vamos abrir a casa à visitação. Toda a população será muito bem-vinda", garante Cantarelli.','academiaLetras','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU',2,'FALSE','http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/09/academia-pernambucana-letras-casaroes-rui-barbosa.jpg',71);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "interest_point"`);
    }

}
