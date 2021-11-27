import {MigrationInterface, QueryRunner} from "typeorm";

export class Seed1637712575151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.profile (id, description) VALUES (1, 'Historiador');
        INSERT INTO public.profile (id, description) VALUES (2, 'Folclórico');`);

        await queryRunner.query(`INSERT INTO public.itinerary (id, "profileId", description) VALUES (1, 1, 'Um roteiro histórico da cidade do Recife!');
        INSERT INTO public.itinerary (id, "profileId", description) VALUES (2, 2, 'Um roteiro sobre algumas lendas urbanas da cidade mais assombrada em linha reta do Brasil!');`);

        await queryRunner.query(`INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (1, -8.0472, -34.86995, 'FOLCLÓRE', 'Cruz do Patrão', 'À noite, o local é dominado por uma quietude solene e misteriosa, quebrada apenas pelo vento quando assovia sua canção tristonha. No Porto do Recife, às margens do Rio Beberibe, reina a Cruz do Patrão – lembrança concreta do passado imponente da capital pernambucana.
        
        Mas o monumento é mais do que uma testemunha silenciosa de épocas remotas. Através de gerações e gerações, foi considerado um ponto de encontro com almas penadas, um sítio tomado aparições espectrais, sons de gemidos e arrastar de correntes: o lugar mais mal-assombrado da cidade.
        A Cruz do Patrão é na verdade uma coluna de alvenaria construída em estilo dórico, com seis metros de altura e dois de diâmetro. No topo tem uma pequena cruz de pedra, o que a torna semelhante ao “bispo” do jogo de xadrez. Em séculos passados, era usada como referência para os navios que precisavam atracar. Alinhado à cruz da velha igreja de Santo Amaro das Salinas, o marco orientava o patrão da embarcação no canal de acesso do ancoradouro interno do porto recifense. E “patrão da embarcação” era um termo náutico para designar o chefe da guarnição de um barco pequeno.
        
        Não há como dizer em que ano ela foi erguida no deserto istmo (uma estreita faixa de terra) que antigamente ligava o Recife a Olinda. Mas a Cruz do Patrão já estava registrada em um mapa confeccionado no ano de 1759. Com o passar das décadas, a coluna feita para viabilizar a navegação transformou-se em sinônimo de fantasmagoria.
        
        Os recifenses acreditavam que naquelas imediações eram enterrados negros pagãos mortos durante as jornadas dos navios chegados da África. A areia da maré facilitaria os sepultamentos realizados sem os devidos ritos religiosos. E por isso aquele canto se tornou amaldiçoado. No livro “Assombrações do Recife Velho”, Gilberto Freyre nos fala sobre essa crença popular: todo aquele que passasse pelas imediações da Cruz nas chamadas “horas mortas” veria fantasmas ou seria perseguido por terríveis espíritos. E muitos dos que caminharam por lá em meio às trevas noturnas teriam desaparecido sem deixar vestígios.
        
        E é certo que ocorreram fatos trágicos aos pés da Cruz do Patrão. No começo do século XX, por exemplo, um estudante foi assassinado naqueles ermos e um soldado foi preso acusado pelo crime. Tempos depois se descobriu que o culpado seria outro sujeito – ele teria confessado que praticou o crime motivado por um “espírito infernal”. A revelação, no entanto, chegou tarde demais, pois o soldado acabou morrendo na cadeia.
        
        Na obra “Folk-lore Pernambucano”, o historiador F. A. Pereira da Costa esclarece que a fama macabra do lugar acabou se tornando muito forte do imaginário recifense: dizia-se que quem estava “em busca de venturas” poderia ir à Cruz do Patrão e, à meia-noite em ponto, firmar com o Demônio “um pacto solene com sangue de suas próprias veias” para alcançar sorte e riqueza. Cruz Credo!
        
        Pesquisas arqueológicas recentes não demonstraram nenhum indício de qualquer cemitério clandestino no entorno da Cruz. Entretanto é difícil negar a existência de alguma relação do monumento com o sobrenatural. Como explicar que tenha resistido por séculos às investidas da maresia, às constantes reformas no terreno e principalmente à falta de cuidado das autoridades com muitas das construções históricas?
        
        Mesmo quase esquecida pela população, a coluna gigante jaz impávida, adornado com a sua beleza austera o cenário retilíneo e acinzentado do Porto do Recife. Se você sentir impulso de chegar mais perto, a recomendação é que o faça durante o dia, no máximo até o porto do sol, para ver como o crepúsculo pinta de tons belos e sinistros aquela região na cidade. Quando cai a penumbra, a Cruz do Patrão se torna domínio de todo tipo de fantasma e assombração. Pelo menos é o que ainda garantem alguns…melhor não arriscar, não é?', 'cruzDoPatrao', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (4, -8.0639, -34.87531, 'HISTORICO', 'Ponte Maurício de Nassau', 'A
        história oficial ajuda a referendar um evento ocorrido, mas nem
        sempre é componente indispensável para a formação da memória de
        um povo. Isso é explicado pelo conceito de lugar de memória que, em
        linhas gerais, reflete eventos que acabam no imaginário popular, sem
        necessidade de comprovação histórica. “A história do boi
        voador, na época de Maurício de Nassau é um exemplo. São
        experiências de diferentes indivíduos que formam uma experiência
        histórica. O período holandês em Pernambuco tem muito disso,
        inclusive a figura do próprio Maurício de Nassau”, explica Cibele
        Barbosa, pesquisadora da Fundação Joaquim Nabuco (Fundaj).  ', 'ponteMauricioNassau', 'google.com', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (9, -8.06396, -34.8692, 'TURISTICO', 'Torre de Cristal', 'O Parque de Esculturas Francisco Brennand foi inaugurado em 29 de dezembro 2000, idealizado pelo artista pernambucano Francisco Brennand, integrando o projeto “Eu vi o mundo… Ele Começava no Recife” para comemoração dos 500 anos do descobrimento do Brasil.
        
        Ao total, existem, no parque, 90 obras (esculturas) do escultor e artista plástico pernambucano Francisco Brennand, sendo a principal obra no complexo a Torre de Cristal, com 32 metros de altura e confeccionada em argila e bronze.
        
        No ano de 2014, todas as esculturas foram restauradas, assim como o parque, além do recebimento de reforço na segurança do complexo.', 'torreCristal', 'google.com', null);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (11, -8.05032, -34.88279, 'FOLCLÓRE', 'Galega de Santo Amaro', 'O Cemitério de Santo Amaro foi inaugurado em 1851 por ordem de Francisco do Rêgo Barros, o Barrão da Boa Vista. Com o passar do tempo, os mais abastados também ocuparam espaço na necrópole. As famílias endinheiradas mandaram construir jazigos luxuosos, feitos de mármore, marcados com por epitáfios escritos com letras de bronze, decorados com estátuas em tamanho natural. A riqueza desses detalhes que transformou o local numa galeria de arte ao ar livre.
        
        Lá estão enterrados personagens históricos como Joaquim Nabuco, além de personalidade que se sobressaíram no campo das artes como o compositor Capiba e cantor Chico Science. O Santo Amaro também é espaço para a devoção a uma criança transformada em santa consagrada pelo povo, sem nunca ter alcançado espaço em qualquer altar. No túmulo da Menina Sem Nome, os fiéis pedem graças e deixam ex-votos quando os pedidos são atendidos. Garantem que ela faz milagre, mas não sabem quem ela foi: a menina enterrada ali foi vítima de um sórdido homicídio em meados do século passado e o corpo jamais foi identificado.
        
        Desconhecida também é a origem do fantasma mais visto nas imediações do cemitério. Trata-se uma mulher loira, sedutora, que, depois da meia-noite, aparece nas calçadas próximas. Ela chama a atenção dos homens que circulam por lá nessas horas silenciosas e os convida a um passeio. A história começou a ser contada na década de 1970. Na época, as supostas testemunhas diziam que a “galega” aparecia sempre usando sapato de salto alto, vestido vermelho curto e decotado.
        
        Hoje, há quem garanta que ela modernizou o figurino. Passou a usar calça jeans e chinelos, como se vê no desenho do artista plástico Fábio Rafael que ilustra este texto. Seria para conquistar os moderninhos?
        
        Tanto hoje, quanto antigamente, os marmanjos que que cedem ao apelo da galega são levados ao Santo Amaro. Lá, num passeio de mãos dadas, com sussurros ao pé do ouvido,  ela…. mostra aos rapazes o túmulo onde mora!  Depois some na escuridão, em meio a uma bruma gelada. Mas às vezes a aparição se mostra bem mais medonha e, ao fim da caminhada romântica, mostra uma face de caveira ao candidato a namorado. E o sujeito, claro, berra, molha as calças e sai  às carreiras.
        
        Por muitos anos, essa criatura foi o terror dos motoristas dos ônibus elétricos da CTU, a antiga companhia municipal de transporte. A garagem da empresa ficava em frente ao Santo Amaro. Não foram os poucos os condutores que à noite, depois do expediente, cederam aos encantos da loira e acabaram desmaiados entre as covas.
        
        A Galega tem, aliás, diversas formas de levar o pavor ao coração dos incautos. Comenta-se que às vezes ela pede carona a motoristas e pilotos de motos que passam, nas horas de silêncio e escuridão, pelo trecho da Avenida Norte próximo ao campo santo.
        
        Há quem diga ainda que a mulher fantasma costumava aparecer no primeiro andar do prédio da antiga delegacia do bairro. Nessas dependências, se manifestava de forma violenta, quase uma Pomba-gira, chegando inclusive a arranhar agentes de polícia que estivessem lá à noite.
        
        Para alguns, as aparições só vão cessar quando o espírito da Galega for apaziguado: ela estaria à procura de um amante com quem pudesse dividir toda uma eternidade consumida em luxúrias infernais. Quem se candidata?', 'loiraSantoAmaro', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (12, -8.06013, -34.89474, 'FOLCLÓRE', 'Praça Chora Menino', 'A Praça Chora Menino fica no bairro da Boa Vista, uma das áreas mais movimentadas  da capital pernambucana. Próxima ao Colégio Salesiano, à Praça do Derby e às ruas do Progresso e das Ninfas, é hoje uma simples confluência de vias, espaço atravessado às pressas  por gente desatenta, preocupada em chegar rápido ao seu destino. Poucos devem se perguntar por que o logradouro tem esse nome – que pode até soar poético. Menos pessoas ainda imaginam que o local foi cenário de uma tragédia e tem fama de mal assombrado.
        
        Para entender esse caso é preciso voltar no tempo, conhecer um dos episódios mais sangrentos da história da cidade. Em meados do século XIX, o Recife enfrentou uma revolta violenta de uma tropa insubordinada que ficou conhecida como “Setembrizada”. Especialistas contam que o motim dos soldados foi provocado pelo extremo rigor na disciplina militar (que previa castigos físico às falta cometidas pelos praças) e até atraso nos pagamentos, entre outros motivos. O conflito irrompeu  nos dias 14, 15 e 16 de setembro do ano de 1831.
        
        Soldados e civis a ela associados saquearam a cidade, cometendo todo tipo de atrocidades e assassinando centenas de moradores, entre eles muitas crianças. O historiador Pereira da Costa dá um número de pelo menos 300 mortos nesses conflitos. As ruas ficaram repletas de corpos, e muitos teriam sido enterrados num local ermo, as terras do velho Sítio do Mondego, onde hoje fica a praça Chora Menino.
        
        E esse nome vem de relatos que começaram a circular tempos depois da Setembrizada: dizia-se que quem passasse altas horas da noite perto da praça ouvia sempre choro de menino. Certamente tentou-se dar explicações “científicas” para o fato, de brincadeiras de estudantes a um tipo de sapo cujo coaxar seria semelhante ao choro de uma criança.
        Mas quem ouviu o estranho lamento nega-se a aceitar tais teorias tão pouco consistentes: o pranto fantasmagórico, por certo, não tem semelhança com sons emitidos pelos viventes. É há quem diga que mesmo nos dias de hoje, se prestarmos bem atenção, vamos escutar os soluços e choramingos daquelas pequenas vítimas de um massacre provocado pela intransigência dos adultos.', 'choraMenino', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (15, -8.05049, -34.88357, 'FOLCLÓRE', 'O Barão Perseguido pelo Diabo', 'No Século XIX, ficou conhecida no Recife a história de um Barão que teria feito um pacto com o Diabo. Não se sabe o que o fidalgo pediu ao “Coisa Ruim”, mas contava-se o Demônio o perseguia, possivelmente cobrando o pagamento que havia sido combinado.
        
        No livro “Assombrações do Recife Velho”, o escritor e sociólogo Gilberto Freyre explica que o fidalgo muitas vezes estava se divertindo com os amigos, em noitadas na capital pernambucana e, de repente, recebia um sinal misterioso: “era do Chifrudo para ir encontrá-lo sozinho nas brenhas, tarde da noite”. Ele seguia para cumprir  o compromisso montado num cavalo sinistro “que ninguém sabia se era deste mundo, se do outro”.
        
        E quando o homem voltava desses encontros, “parecia que ia botar a alma pela boca”, pois “seu rosto era então o de um cadáver e suas mãos, também, as de um defunto”. Ainda de acordo com Freyre, tudo indica que o Diabo acabou ficando não só com alma, mas também com o corpo do Barão. Tanto que, para fingir enterrá-lo no Cemitério de Santo Amaro, o mais tradicional do Recife, “a família tivera que encher o caixão de pedra”.', 'baraoPerseguido', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (13, -8.06701, -34.87899, 'FOLCLÓRE', 'Mulher Sinistra do Pátio de São Pedro', 'O cenário é dos centenários prédios do Pátio de São Pedro, no tradicional Bairro de São José. Dizem que num dos sobrados de quatro andares existentes na lateral da Igreja de São Pedro (a construção do século XVIII que dá nome ao lugar), reside uma figura que provoca calafrios nos que a encontram.
        
        Trata-se uma mulher jovem e bonita, de longos cabelos negros e  com um vestido escuro provocante – embora seja um traje bastante fora de moda. É vista a caminhar lentamente pelos corredores e, principalmente, pelas escadarias do antigo edifício. Tem no rosto uma expressão de pesar, como quem padece de um eterno luto. Os que se deparam com ela logo percebem que é uma visagem, um espírito desencarnado: depois de alguns passos, a moça misteriosa desaparece no ar, como por encanto.
        No sobrado, uns poucos cômodos são moradias. Na maioria das dependências, trabalham costureiras e prestadores serviços, como pintores de placas. Muitas dessas pessoas já testemunharam a aparição. Uma decoradora que trabalhou no lugar, por exemplo, relata que ouviu falar sobre a origem da fantasmagoria. Seria o espetro de uma mulher que alugou um dos quartos  em meados da década de 1950.
        
        Era bela sim, mas vivia só e carregava a dor de uma desilusão: havia sido abandonada pelo amante. Comenta-se que, para sobreviver, trabalhava como prostituta. Certo dia matou-se ateando fogo ao corpo. Morte lenta e dramática de quem tenta queimar a dor de uma constante amargura. E desde então virou malassombro, alma-penada, eternamente presa a este plano de existência por causa do terrível pecado que cometeu.
        
        As pessoas que convivem no sobrado já tentaram por fim ao sofrimento desse espírito encomendado missas e requisitando bênçãos dos padres no próprio edifício. Logo depois dessas medidas as aparições deixam de ocorrer, mas não por muito tempo – não demora e alguém se depara novamente com a sinistra mulher a caminhar pelos corredores.', 'saoPedro', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (14, -8.05274, -34.87572, 'FOLCLÓRE', 'O Fantasma da Debutante', 'Num dos mais bonitos prédios da Rua da Aurora, no Centro do Recife, funciona hoje o Museu de Arte Moderna Aloísio Magalhães – o MAMAM. Porém, mais do que apenas resguardar a cultura e abrigar importantes exposições, o espaço também é cenário de uma tristonha aparição fantasmagórica,  a lembrança sobrenatural de uma história trágica, recriada aqui pelas lentes do fotógrafo Lucas Evaristo.
        
        O prédio, cheio de salões e escadarias, já foi a sede do Clube Internacional do Recife, no começo do século XX. E tudo aconteceu durante um baile no ano de 1920 para celebrar os 15 anos de uma bela moça chamada Ana Lúcia. Contam que ela estava linda em seu traje branco ao descer as escadas do primeiro pavimento para o salão principal. Mas no meio do caminho tropeçou e caiu por vários degraus em frente aos convidados. Ela havia quebrado o pescoço!
        
        Os funcionários do museu dizem que até hoje o espírito da adolescente assombra a construção histórica. Nas noites caladas, Ana Lúcia caminha solenemente pelos corredores. A sua beleza  a princípio fascina e depois amedronta as testemunhas. E muitos servidores públicos – inclusive até alguns guardas municipais – pediram afastamento do trabalho do museu para não terem que se deparar com o fantasma da debutante.', 'fantasmaDebutante', 'google.com', 2);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (10, -8.06314, -34.87113, 'HISTORICO', 'Marco Zero', 'No início do século passado, o centro do Recife passou por drásticas reformas, com projetos de higienização urbana e melhoramento das condições do Porto do Recife. Na prática, a higienização social se traduziu em desapropriações de pelo menos 480 imóveis que foram demolidos para a abertura das três novas avenidas no Bairro.[4] Em um relato de Mário Sette podemos ter uma descrição do caso.
        
        Pouco a pouco desaparecia aos olhos não um bairro, mas um cenário de milhares de criaturas no seu presente e no seu passado. [...] e o Corpo Santo também se desmanchava [...] Poucos falariam ainda desse burgo onde Recife nascera, tão enviesado de ruas e ruelas [...] tudo no chão. Nunca se vira uma loucura assim.
        
        Parque das Esculturas Francisco Brennand, obra do escultor pernambucano Francisco Brennand em frente à praça.
        Com esta grande reforma, profundas modificações foram feitas no bairro e na praça, como a demolição da Matriz do Corpo Santo e a abertura de novas e largas avenidas. No local onde estava a igreja, está edificado o edifício Maurício de Nassau, de características modernas e fachadas em vidro. Ao seu lado foram construídos os prédios da Associação Comercial de Pernambuco e a Bolsa de Valores. Estes dois prédios apresentam, em sua arquitetura, nítida influência francesa que se caracteriza pela mistura de diversos elementos construtivos, além do armazém 10 e 12 que serviam ao porto do Recife para estoque de açúcar. Estes prédios, hoje, abrigam a sede do Grupo Industrial João Santos, o Santander Cultural, a Associação Comercial de Pernambuco, a Caixa Cultural e o Centro de Artesanato de Pernambuco, considerado o maior do segmento no Brasil.
        
        Em 1999 a praça que existia no local recebeu severas modificações. O busto do Barão do Rio Branco e o Marco Zero foram realocados para a borda da praça. A "nova praça" foi projetada pelo pintor Cícero Dias, em 1999. No seu centro se encontra uma enorme obra de arte feita por ele. Inspirado em sua obra Eu vi o mundo e ele começava no Recife, criou um grande circulo com uma Rosa dos Ventos no centro. A obra tem em média 10m de raio. 
        
        Atualmente serve como ponto de encontro de jovens, desportistas, artistas, turistas e moradores da cidade. Além de ser palco de comemorações e apresentações artísticas.', 'marcoZero', 'google.com', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (2, -8.06001, -34.8774, 'HISTORICO', 'Palácio do Campo das Princesas', 'História:
        O Palácio do Campo das Princesas era o Palácio de Friburgo, uma das
        três residências oficiais do conde holandês Maurício de Nassau.
        Na área atualmente ocupada por ele, pelo Teatro de Santa Izabel e
        pela Praça da República, foi construído um jardim zoobotânico.
        Além de pioneiro no Brasil, o local é apontado como o segundo mais
        antigo das Américas, ficando atrás apenas de um asteca, criado
        pelos povos ameríndios. Entre os animais que habitavam o local
        estavam tucanos, araras, tamanduás, capivaras, tatus e outras
        espécies da fauna nativa. O espaço era coabitado por animais
        trazidos da África e Ásia, como tigres, cabras angolanas e diversas
        aves. De acordo com a professora do Departamento de Ciências
        Florestais da Universidade Federal Rural de Pernambuco (UFRPE),
        Isabelle Meunier, além de expor os animais, o parque tinha um
        caráter utilitário. Algumas espécies, como os peixes, eram criadas
        para fornecer proteína, além disso, havia o cultivo de laranjas e
        limões como armas para combater o escorbuto (doença causada pela
        carência de vitamina C). A inovação de Nassau, porém, durou
        apenas sete anos, sendo destruído pelos portugueses em 1645, um ano
        após a saída de Nassau do solo recifense, com a justificativa de
        que a construção atrapalhava a vista de possíveis ataques vindos
        pelo Rio Capibaribe. ', 'campoPrincesas', 'google.com', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (3, -8.06318, -34.8774, 'HISTORICO', 'Cabeça do Zumbi de Palmares', 'História: Um dos maiores símbolos da resistência escrava
        durante o Brasil Colônia foi morto, na Serra Dois Irmãos, na então
        Capitania de Pernambuco. Líder do Quilombo dos Palmares, Zumbi teve
        a cabeça cortada e exposta na Praça do Carmo até completa
        decomposição. A decisão do governador de Pernambuco na ocasião,
        Caetano de Melo Castro, visava acaba com a superstição difundida
        entre os escravos de que Zumbi era imortal. “A cabeça era um
        troféu, um exemplo para que os negros que por ali passassem tivessem
        cuidado para não ter o mesmo fim”, explica Severino Vicente,
        doutor em História e professor da UFPE.  Zumbi se tornou líder após
        se opor à liderança anterior de Ganga Zumba, que havia aceitado uma
        oferta de paz da Coroa Portuguesa. O Quilombo dos Palmares foi o
        grande foco de resistência formado por escravos negros, fugidos de
        fazendas e senzalas. Ocupava uma área equivalente ao tamanho de
        Portugal, onde atualmente, está o município de União dos Palmares,
        em Alagoas. Em seu auge, foi composto por 30 mil pessoas. Acabou
        desfeito por completo em 1710. Atualmente, a Praça do Carmo exibe um
        monumento, construído por Abelardo da Hora. ', 'zumbiDosPalmares', 'google.com', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (5, -8.05391, -34.87098, 'HISTORICO', 'Captura do Recife', 'História:  Dois fatos precisam ser entendidos antes dos
        relatos sobre o que foi a "Captura do Recife". Primeiro: a
        Inglaterra começava a dar os primeiros passos para se tornar uma
        potência marítima. Segundo: o açúcar valia como ouro. Nesse
        cenário, os corsários ingleses, piratas que atuavam a mando da
        rainha Elizabete I, agiam saqueando embarcações e portos de
        colônias portuguesas e espanholas em busca de riquezas. "Recife
        e Olinda estavam entre os locais mais ricos do mundo ocidental. Um
        quilo de açúcar já era riqueza, imagine um carregamento de
        açúcar", destaca Severino Vicente. James Lancaster chegou ao
        Recife em abril de 1595, comandando uma expedição militar inglesa.
        Em cerca de um mês em que estiveram em águas e solo recifenses, a
        quantidade de açúcar, pau-brasil e algodão saqueada foi tão
        grande que foram fretados navios holandeses e franceses pela frota
        pela coroa inglesa. Ao todo foram mobilizados em torno de 750
        soldados e 35 navios, entre próprios e capturados por Lancaster e
        seus aliados. No Recife, foram saqueadas lojas, armazéns e casas,
        deixando cerca de 120 mortos. ', 'capturaRecife', 'google.com', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (6, -8.07154, -34.8808, 'HISTORICO', 'Forte das 5 Pontas', 'História:  O líder libertário Joaquim do Amor Divino
        Rabelo, mais conhecido por Frei Caneca tem a sua história misturada
        com a do Recife. Esteve entre as principais lideranças da Revolução
        Pernambucana de 1817 e da Confederação do Equador, em 1824. No ano
        seguinte à segunda tentativa separatista foi preso onde atualmente,
        na Rua do Imperador, funciona o Arquivo Público de Pernambuco. Pouco
        mais de um mês após a prisão, deveria ser morto por enforcamento,
        apesar dos diversos pedidos de clemências de diversas ordens
        religiosas. No momento do enforcamento, porém, três carrascos se
        recusaram a enforcá-lo, por conta de sua atuação religiosa – era
        um padre carmelita. Diante disso, foi ordenado pela Casa Militar a
        execução por meio de tiros, chamada na ocasião por arcabuzamento.
        "A Câmara Municipal, atual Arquivo Público, também funcionava
        como prisão. Frei Caneca saiu de lá e foi levado andando até o
        local em que foi executado, que apesar de ter uma placa e um busto,
        muitos não sabem o que aconteceu lá", relata Severino Vicente.
        O local exato da execução é um muro que continua erguido, nas
        proximidades do Forte das Cinco Pontas, no bairro de São José.', 'forte5pontas', 'google.coim', 1);
INSERT INTO public.interest_point (id, latitude, longitude, category, name, description, badge, "badgeUrl", "itineraryId") VALUES (8, -8.06539, -34.87787, 'HISTORICO', 'Igreja de Nossa Senhora do Rosário dos Homens Pretos', 'História: Trazidos à força do seu continente, com
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
        segunda metade do século 17. ', 'igreja', 'google.com', 1);`);

        

        await queryRunner.query(`INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (3, 'teste@email.com', 'senha123', null, null, 0, false, null);
INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (4, 'milton@email.com', 'senha123', 'José', 'milton.jpg', 0, false, null);`);

    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "interest_point"`);
        await queryRunner.query(`DELETE FROM "itinerary"`);
        await queryRunner.query(`DELETE FROM "profile"`);
        await queryRunner.query(`DELETE FROM "user"`);
    }

}
