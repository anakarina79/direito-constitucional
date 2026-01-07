const questions = [
  {
    enunciado: "A Constituição Federal de 1988 é classificada como escrita, promulgada e rígida.",
    correta: "C",
    tema: "Classificação da Constituição",
    justificativa: "A CF/88 é escrita (texto formal), promulgada (resultado do poder constituinte originário) e rígida (processo de alteração mais difícil que o das leis ordinárias). Pense na Constituição como o manual principal de um jogo: para mudar as regras básicas, o procedimento é mais complexo do que para alterar regras secundárias."
  },
  {
    enunciado: "A Constituição Federal de 1988 pode ser considerada uma constituição exclusivamente analítica.",
    correta: "E",
    tema: "Classificação da Constituição",
    justificativa: "A CF/88 é predominantemente analítica, mas não exclusivamente, pois também contém normas sintéticas. É como um contrato longo, mas que ainda mantém cláusulas gerais."
  },
  {
    enunciado: "O preâmbulo da Constituição Federal possui força normativa equivalente à das normas constitucionais.",
    correta: "E",
    tema: "Preâmbulo",
    justificativa: "O STF entende que o preâmbulo não tem força normativa, servindo como vetor interpretativo. Funciona como a capa de um livro: ajuda a entender a obra, mas não cria regras obrigatórias."
  },
  {
    enunciado: "As normas definidoras de direitos e garantias fundamentais têm aplicação imediata.",
    correta: "C",
    tema: "Direitos Fundamentais",
    justificativa: "O art. 5º, §1º, da CF estabelece a aplicação imediata. Pense nesses direitos como um extintor de incêndio: não precisam de autorização para serem usados quando o fogo começa."
  },
  {
    enunciado: "A dignidade da pessoa humana é um objetivo fundamental da República Federativa do Brasil.",
    correta: "E",
    tema: "Princípios Fundamentais",
    justificativa: "A dignidade da pessoa humana é fundamento da República (art. 1º), não objetivo. É como a base de um prédio, não o andar que se pretende alcançar."
  },
  {
    enunciado: "A soberania é um dos fundamentos da República Federativa do Brasil.",
    correta: "C",
    tema: "Princípios Fundamentais",
    justificativa: "Prevista no art. 1º da CF, a soberania indica o poder supremo do Estado. Pense nela como o controle remoto final: não há outro acima dele."
  },
  {
    enunciado: "Os direitos e garantias individuais podem ser abolidos por emenda constitucional, desde que observados os requisitos formais.",
    correta: "E",
    tema: "Cláusulas pétreas",
    justificativa: "Os direitos e garantias individuais são cláusulas pétreas e não podem ser abolidos. É como tentar retirar os pilares de uma ponte sem que ela desmorone."
  },
  {
    enunciado: "A forma federativa de Estado constitui cláusula pétrea.",
    correta: "C",
    tema: "Cláusulas pétreas",
    justificativa: "A forma federativa está protegida pelo art. 60, §4º. Funciona como o formato do tabuleiro: não se muda o jogo sem mudar tudo."
  },
  {
    enunciado: "Os tratados internacionais sobre direitos humanos aprovados com quórum de emenda constitucional possuem status supralegal.",
    correta: "E",
    tema: "Tratados Internacionais",
    justificativa: "Quando aprovados com quórum qualificado, esses tratados têm status constitucional. É como se fossem peças do mesmo nível da Constituição."
  },
  {
    enunciado: "A liberdade de manifestação do pensamento é absoluta no ordenamento constitucional brasileiro.",
    correta: "E",
    tema: "Direitos Fundamentais",
    justificativa: "A liberdade de manifestação do pensamento não é absoluta, pois é vedado o anonimato. Pense como um microfone aberto, mas com identificação de quem fala."
  },
  {
    enunciado: "É assegurado o direito de resposta proporcional ao agravo, além da indenização por dano material, moral ou à imagem.",
    correta: "C",
    tema: "Direitos Fundamentais",
    justificativa: "O art. 5º, V, da CF garante o direito de resposta e a indenização. É como um espelho jurídico: quem causa o dano deve refletir suas consequências."
  },
  {
    enunciado: "A liberdade de associação independe de autorização estatal.",
    correta: "C",
    tema: "Direitos Fundamentais",
    justificativa: "A CF veda a exigência de autorização para associação. Pense em um grupo de pessoas conversando: o Estado não pode exigir permissão prévia."
  },
  {
    enunciado: "É possível a dissolução compulsória de associação por ato administrativo.",
    correta: "E",
    tema: "Direitos Fundamentais",
    justificativa: "A dissolução só pode ocorrer por decisão judicial transitada em julgado. É como encerrar uma empresa: não basta uma canetada administrativa."
  },
  {
    enunciado: "A casa é asilo inviolável do indivíduo, salvo em caso de flagrante delito, desastre ou para prestar socorro.",
    correta: "C",
    tema: "Direitos Fundamentais",
    justificativa: "A CF protege o domicílio, com exceções. Pense na casa como um cofre: só se abre em situações extremas previstas em lei."
  },
  {
    enunciado: "A interceptação telefônica pode ocorrer por ordem judicial para fins civis.",
    correta: "E",
    tema: "Direitos Fundamentais",
    justificativa: "A interceptação telefônica só é admitida para fins de investigação criminal ou instrução processual penal. É uma lupa penal, não civil."
  },
  {
    enunciado: "O habeas corpus é cabível sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção.",
    correta: "C",
    tema: "Remédios Constitucionais",
    justificativa: "O habeas corpus protege a liberdade de locomoção. Funciona como um freio de emergência contra prisões ilegais."
  },
  {
    enunciado: "O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional.",
    correta: "C",
    tema: "Remédios Constitucionais",
    justificativa: "A CF autoriza partidos políticos com representação no Congresso a impetrar MS coletivo. É como um porta-voz institucional."
  },
  {
    enunciado: "O direito de petição depende do pagamento de taxas.",
    correta: "E",
    tema: "Direitos Fundamentais",
    justificativa: "O direito de petição é gratuito. Pense nele como um canal de atendimento público que não pode ser tarifado."
  },
  {
    enunciado: "Os direitos sociais são direitos fundamentais de segunda dimensão.",
    correta: "C",
    tema: "Direitos Fundamentais",
    justificativa: "Direitos sociais exigem prestações do Estado. São como serviços públicos: dependem de ação estatal."
  },
  {
    enunciado: "A Constituição Federal assegura igualdade absoluta entre brasileiros e estrangeiros.",
    correta: "E",
    tema: "Direitos Fundamentais",
    justificativa: "A CF assegura igualdade em regra, mas admite distinções. É como acesso a um clube: regras gerais, mas com exceções justificadas."
  },
  {
    enunciado: "A nacionalidade brasileira pode ser adquirida originariamente ou derivadamente.",
    correta: "C",
    tema: "Nacionalidade",
    justificativa: "A CF prevê brasileiros natos e naturalizados. Pense como nascer em um país ou optar por ele depois."
  },
  {
    enunciado: "A perda da nacionalidade brasileira é sempre automática.",
    correta: "E",
    tema: "Nacionalidade",
    justificativa: "A perda depende de hipóteses constitucionais e, em regra, de procedimento. Não é um botão de desligar imediato."
  },
  {
    enunciado: "Os direitos políticos podem ser suspensos ou perdidos nos casos previstos na Constituição.",
    correta: "C",
    tema: "Direitos Políticos",
    justificativa: "A CF enumera taxativamente essas hipóteses. Pense nos direitos políticos como uma habilitação: pode ser suspensa ou cassada conforme a lei."
  },
  {
    enunciado: "A cassação de direitos políticos é admitida pela Constituição Federal de 1988.",
    correta: "E",
    tema: "Direitos Políticos",
    justificativa: "A CF veda a cassação, admitindo apenas perda ou suspensão. Cassar seria rasgar o título; a Constituição não permite."
  },
  {
    enunciado: "A soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos.",
    correta: "C",
    tema: "Direitos Políticos",
    justificativa: "Trata-se do núcleo do regime democrático. É como uma assembleia em que cada pessoa tem um voto de mesmo peso."
  },
{
  enunciado: "A Constituição Federal admite a existência de direitos fundamentais implícitos.",
  correta: "C",
  tema: "Direitos Fundamentais",
  justificativa: "Além dos direitos expressamente previstos, a CF admite direitos implícitos decorrentes do regime e dos princípios adotados. Pense como um contrato que prevê cláusulas escritas e outras que surgem naturalmente da lógica do acordo."
},
{
  enunciado: "Os direitos fundamentais possuem aplicação apenas vertical, incidindo exclusivamente nas relações entre o Estado e o indivíduo.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "Os direitos fundamentais também possuem eficácia horizontal, alcançando relações entre particulares. É como regras de convivência que valem tanto com o governo quanto entre cidadãos."
},
{
  enunciado: "O princípio da vedação ao retrocesso social impede a supressão injustificada de direitos sociais já concretizados.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "Esse princípio busca evitar que conquistas sociais sejam eliminadas sem justificativa adequada. É como subir uma escada e alguém retirar um degrau já vencido."
},
{
  enunciado: "Os direitos fundamentais de primeira dimensão exigem, em regra, prestações positivas do Estado.",
  correta: "E",
  tema: "Dimensões dos Direitos Fundamentais",
  justificativa: "Direitos de primeira dimensão exigem abstenção do Estado. Pense neles como uma área em que o Estado deve ficar em silêncio."
},
{
  enunciado: "Os direitos fundamentais de segunda dimensão estão relacionados à igualdade material.",
  correta: "C",
  tema: "Dimensões dos Direitos Fundamentais",
  justificativa: "Esses direitos exigem atuação do Estado para reduzir desigualdades. Funcionam como políticas que equilibram o ponto de partida."
},
{
  enunciado: "O direito à vida, segundo a Constituição Federal, é protegido de forma absoluta.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "O direito à vida é fundamental, mas não absoluto, admitindo exceções como a legítima defesa. É um valor máximo, mas não ilimitado."
},
{
  enunciado: "A liberdade religiosa compreende o direito de crença, de culto e de organização religiosa.",
  correta: "C",
  tema: "Direitos Fundamentais",
  justificativa: "A Constituição assegura essas três dimensões da liberdade religiosa. Pense como um tripé: crença, culto e organização sustentam o direito."
},
{
  enunciado: "O Estado brasileiro é laico, o que implica hostilidade estatal em relação às religiões.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "Estado laico significa neutralidade, não hostilidade. É como um árbitro que não torce contra nenhum time."
},
{
  enunciado: "A objeção de consciência pode ser invocada para o descumprimento de qualquer dever legal.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "A objeção de consciência só é admitida nos casos previstos em lei. Não funciona como salvo-conduto geral."
},
{
  enunciado: "O direito de reunião pode ser exercido independentemente de autorização, desde que pacífico e sem armas.",
  correta: "C",
  tema: "Direitos Fundamentais",
  justificativa: "A Constituição garante o direito de reunião nessas condições. É como organizar um encontro público respeitando regras básicas."
},
{
  enunciado: "A exigência de aviso prévio para reuniões em locais públicos configura autorização estatal.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "O aviso prévio serve para organização e segurança, não como autorização. É como avisar, não pedir permissão."
},
{
  enunciado: "A inviolabilidade do domicílio estende-se ao local de trabalho fechado ao público.",
  correta: "C",
  tema: "Direitos Fundamentais",
  justificativa: "O STF entende que locais privados, inclusive de trabalho, podem ser protegidos como domicílio. Funciona como uma extensão da casa."
},
{
  enunciado: "A proteção constitucional à intimidade e à vida privada é absoluta.",
  correta: "E",
  tema: "Direitos Fundamentais",
  justificativa: "Esses direitos admitem relativização quando colidem com outros valores constitucionais. É uma proteção forte, mas não cega."
},
{
  enunciado: "É assegurado o acesso à informação pública, ressalvadas as hipóteses de sigilo imprescindível.",
  correta: "C",
  tema: "Direitos Fundamentais",
  justificativa: "A transparência é a regra, e o sigilo é exceção. Pense em uma casa de vidro com poucas paredes opacas."
},
{
  enunciado: "O habeas data destina-se à proteção da liberdade de locomoção.",
  correta: "E",
  tema: "Remédios Constitucionais",
  justificativa: "O habeas data serve para acesso e correção de dados pessoais. Para locomoção, o instrumento correto é o habeas corpus."
},
{
  enunciado: "O mandado de injunção é cabível quando a falta de norma regulamentadora inviabiliza o exercício de direitos constitucionais.",
  correta: "C",
  tema: "Remédios Constitucionais",
  justificativa: "O mandado de injunção funciona como uma ponte provisória quando a lei ainda não foi construída."
},
{
  enunciado: "O mandado de segurança coletivo pode ser impetrado por sindicato, entidade de classe ou associação.",
  correta: "C",
  tema: "Remédios Constitucionais",
  justificativa: "Essas entidades atuam como representantes legítimos do grupo. Funcionam como porta-vozes institucionais."
},
{
  enunciado: "O mandado de segurança pode substituir ação de cobrança.",
  correta: "E",
  tema: "Remédios Constitucionais",
  justificativa: "O mandado de segurança não é substitutivo de ação de cobrança. Ele protege direito líquido e certo."
},
{
  enunciado: "Os direitos sociais integram o rol de direitos fundamentais.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A Constituição inclui expressamente os direitos sociais como fundamentais, essenciais à dignidade."
},
{
  enunciado: "A educação é direito de todos e dever exclusivo do Estado.",
  correta: "E",
  tema: "Direitos Sociais",
  justificativa: "A educação é dever do Estado e da família, com colaboração da sociedade. É responsabilidade compartilhada."
},
{
  enunciado: "O direito à saúde possui natureza meramente programática.",
  correta: "E",
  tema: "Direitos Sociais",
  justificativa: "O STF reconhece a exigibilidade do direito à saúde. Não é promessa vazia, mas obrigação concreta."
},
{
  enunciado: "A assistência social será prestada a quem dela necessitar, independentemente de contribuição.",
  correta: "C",
  tema: "Seguridade Social",
  justificativa: "A assistência social não exige contribuição prévia. Funciona como uma rede de proteção."
},
{
  enunciado: "A previdência social possui caráter contributivo e solidário.",
  correta: "C",
  tema: "Seguridade Social",
  justificativa: "A previdência funciona como um fundo comum: todos contribuem para proteção coletiva."
},
{
  enunciado: "A seguridade social compreende apenas a saúde e a previdência social.",
  correta: "E",
  tema: "Seguridade Social",
  justificativa: "A seguridade social engloba saúde, previdência e assistência social, formando um tripé."
},
{
  enunciado: "Nenhum benefício ou serviço da seguridade social pode ser criado sem a correspondente fonte de custeio total.",
  correta: "C",
  tema: "Seguridade Social",
  justificativa: "É o princípio da contrapartida: não se cria despesa sem previsão de recursos."
},
{
  enunciado: "A Constituição Federal adota o princípio da separação dos Poderes de forma absoluta.",
  correta: "E",
  tema: "Separação dos Poderes",
  justificativa: "A separação dos Poderes não é absoluta, admitindo mecanismos de freios e contrapesos. É como um sistema de balanças: cada poder controla o outro para evitar excessos."
},
{
  enunciado: "Compete privativamente à União legislar sobre direito civil, comercial, penal, processual, eleitoral e do trabalho.",
  correta: "C",
  tema: "Competências Legislativas",
  justificativa: "O art. 22 da CF enumera matérias de competência privativa da União. Pense como uma lista exclusiva de assuntos reservados a um único administrador."
},
{
  enunciado: "A competência legislativa concorrente permite aos estados legislar plenamente quando inexistir lei federal sobre normas gerais.",
  correta: "C",
  tema: "Competências Legislativas",
  justificativa: "Na ausência de norma geral federal, os estados exercem competência plena. É como preencher um espaço em branco até que a regra geral seja criada."
},
{
  enunciado: "Na competência legislativa concorrente, a superveniência de lei federal revoga automaticamente a lei estadual.",
  correta: "E",
  tema: "Competências Legislativas",
  justificativa: "A lei federal suspende a eficácia da lei estadual no que lhe for contrário, não ocorrendo revogação automática. É como pausar um aplicativo, não desinstalá-lo."
},
{
  enunciado: "A intervenção federal nos estados depende, em regra, de decreto do Presidente da República.",
  correta: "C",
  tema: "Intervenção",
  justificativa: "A intervenção federal é formalizada por decreto presidencial. Funciona como um botão de emergência acionado em situações excepcionais."
},
{
  enunciado: "A intervenção federal para assegurar a observância dos direitos da pessoa humana pode ocorrer de ofício pelo Presidente da República.",
  correta: "E",
  tema: "Intervenção",
  justificativa: "Nessa hipótese, a intervenção depende de requisição do STF, STJ ou PGR. É como precisar de uma chave específica para abrir uma porta sensível."
},
{
  enunciado: "Os estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios da Constituição Federal.",
  correta: "C",
  tema: "Organização do Estado",
  justificativa: "A autonomia estadual existe, mas deve respeitar os princípios da CF. É como personalizar um software sem alterar o sistema operacional."
},
{
  enunciado: "Os municípios integram a federação brasileira, possuindo autonomia política, administrativa e financeira.",
  correta: "C",
  tema: "Organização do Estado",
  justificativa: "A CF reconhece os municípios como entes federativos autônomos. É como um membro com voz própria dentro de uma equipe."
},
{
  enunciado: "A criação de municípios depende exclusivamente de lei estadual.",
  correta: "E",
  tema: "Organização do Estado",
  justificativa: "A criação de municípios depende de lei estadual e de consulta prévia à população interessada, além de outros requisitos. Não é decisão unilateral."
},
{
  enunciado: "Os territórios federais integram a União e não possuem autonomia política.",
  correta: "C",
  tema: "Organização do Estado",
  justificativa: "Os territórios são administrados pela União e não possuem autonomia política. Funcionam como extensões administrativas."
},
{
  enunciado: "O Poder Legislativo federal é exercido pelo Congresso Nacional, composto pela Câmara dos Deputados e pelo Senado Federal.",
  correta: "C",
  tema: "Poder Legislativo",
  justificativa: "O Congresso Nacional é bicameral. Pense como duas casas revisando as decisões para maior equilíbrio."
},
{
  enunciado: "A Câmara dos Deputados é composta por representantes dos estados e do Distrito Federal, eleitos pelo sistema proporcional.",
  correta: "C",
  tema: "Poder Legislativo",
  justificativa: "A Câmara representa o povo, com eleição proporcional. É como dividir assentos conforme o tamanho da população."
},
{
  enunciado: "O Senado Federal é composto por representantes do povo, eleitos pelo sistema proporcional.",
  correta: "E",
  tema: "Poder Legislativo",
  justificativa: "O Senado representa os estados e o DF, com eleição majoritária. Cada ente federativo tem o mesmo peso."
},
{
  enunciado: "O mandato dos senadores é de oito anos.",
  correta: "C",
  tema: "Poder Legislativo",
  justificativa: "O mandato dos senadores é mais longo para garantir estabilidade institucional. É como um contrato de prazo estendido."
},
{
  enunciado: "Compete privativamente à Câmara dos Deputados autorizar, por dois terços de seus membros, a instauração de processo contra o Presidente da República.",
  correta: "C",
  tema: "Poder Legislativo",
  justificativa: "Essa autorização é condição para o processamento. Funciona como um filtro inicial de admissibilidade."
},
{
  enunciado: "Compete privativamente ao Senado Federal julgar o Presidente da República nos crimes de responsabilidade.",
  correta: "C",
  tema: "Poder Legislativo",
  justificativa: "O Senado atua como órgão julgador nesses casos. É como a fase final de um julgamento político-jurídico."
},
{
  enunciado: "O Presidente da República exerce simultaneamente as funções de Chefe de Estado e Chefe de Governo.",
  correta: "C",
  tema: "Poder Executivo",
  justificativa: "No presidencialismo, o Presidente acumula essas funções. É como um gestor que representa a empresa e também a administra."
},
{
  enunciado: "O mandato do Presidente da República é de quatro anos, admitida uma reeleição consecutiva.",
  correta: "C",
  tema: "Poder Executivo",
  justificativa: "A CF permite uma única reeleição consecutiva. É um limite para evitar perpetuação no poder."
},
{
  enunciado: "Os ministros de Estado são nomeados pelo Presidente da República, independentemente de aprovação do Congresso Nacional.",
  correta: "C",
  tema: "Poder Executivo",
  justificativa: "A nomeação dos ministros é ato privativo do Presidente. É como escolher diretamente os auxiliares imediatos."
},
{
  enunciado: "Compete ao Presidente da República editar medidas provisórias com força de lei, em caso de relevância e urgência.",
  correta: "C",
  tema: "Poder Executivo",
  justificativa: "As MPs são instrumentos excepcionais. Funcionam como um atalho legislativo em situações emergenciais."
},
{
  enunciado: "A medida provisória perde eficácia desde a edição se não for convertida em lei no prazo constitucional.",
  correta: "E",
  tema: "Poder Executivo",
  justificativa: "A MP perde eficácia desde a edição apenas após rejeição ou perda de prazo, com efeitos regulados. Não é apagada automaticamente."
},
{
  enunciado: "O Poder Judiciário exerce função típica jurisdicional e funções atípicas administrativas.",
  correta: "C",
  tema: "Poder Judiciário",
  justificativa: "Além de julgar, o Judiciário administra seus serviços. É como um árbitro que também organiza o campeonato."
},
{
  enunciado: "O Supremo Tribunal Federal é o órgão de cúpula do Poder Judiciário.",
  correta: "C",
  tema: "Poder Judiciário",
  justificativa: "O STF é o guardião da Constituição. Funciona como a última instância de controle constitucional."
},
{
  enunciado: "Todos os ministros do Supremo Tribunal Federal devem ser brasileiros natos.",
  correta: "C",
  tema: "Poder Judiciário",
  justificativa: "A CF exige nacionalidade brasileira nata para ministros do STF. É um requisito de vínculo máximo com o Estado."
},
{
  enunciado: "O controle concentrado de constitucionalidade é exercido exclusivamente pelo Supremo Tribunal Federal.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "O controle concentrado também pode ser exercido pelos tribunais de justiça estaduais em face das constituições estaduais."
},
{
  enunciado: "O Supremo Tribunal Federal exerce, como função típica, o controle concentrado de constitucionalidade.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "O STF é o principal órgão do controle concentrado no âmbito federal. Pense nele como o guardião do manual do jogo, verificando se as regras estão sendo respeitadas."
},
{
  enunciado: "A ação direta de inconstitucionalidade pode ser proposta para questionar lei ou ato normativo municipal em face da Constituição Federal.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "A ADI no STF não alcança leis municipais em face da CF. É como tentar usar a chave errada para uma fechadura diferente."
},
{
  enunciado: "A arguição de descumprimento de preceito fundamental é instrumento subsidiário no controle concentrado.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "A ADPF só é cabível quando não houver outro meio eficaz. Funciona como um plano B constitucional."
},
{
  enunciado: "A decisão definitiva de mérito proferida em controle concentrado possui eficácia contra todos e efeito vinculante.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "As decisões do STF em controle concentrado valem para todos e vinculam os demais órgãos. É como uma regra geral que todos devem seguir."
},
{
  enunciado: "A modulação de efeitos é vedada nas decisões de controle concentrado de constitucionalidade.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "O STF pode modular os efeitos por razões de segurança jurídica. É como ajustar o impacto de uma decisão para evitar caos."
},
{
  enunciado: "O controle difuso de constitucionalidade pode ser exercido por qualquer juiz ou tribunal.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "No controle difuso, qualquer órgão do Judiciário pode afastar a aplicação da norma no caso concreto. É um controle espalhado pelo sistema."
},
{
  enunciado: "No controle difuso, a declaração de inconstitucionalidade produz efeitos erga omnes automaticamente.",
  correta: "E",
 tema: "Controle de Constitucionalidade",
  justificativa: "No controle difuso, os efeitos são, em regra, inter partes. Para efeitos gerais, é necessária atuação do Senado. É como uma decisão que vale só para aquele jogo."
},
{
  enunciado: "Compete privativamente ao Senado Federal suspender a execução de lei declarada inconstitucional pelo STF em controle difuso.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "Essa competência está prevista no art. 52, X, da CF. O Senado atua como amplificador do efeito da decisão."
},
{
  enunciado: "A súmula vinculante possui efeito obrigatório apenas para o Poder Judiciário.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "A súmula vinculante vincula o Judiciário e a Administração Pública. É uma orientação obrigatória para quem aplica o direito."
},
{
  enunciado: "A edição de súmula vinculante exige reiteradas decisões do Supremo Tribunal Federal sobre a matéria.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "A súmula vinculante surge após reiteradas decisões. É como consolidar um entendimento após várias partidas iguais."
},
{
  enunciado: "O controle preventivo de constitucionalidade é exercido exclusivamente pelo Poder Judiciário.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "O controle preventivo também ocorre no Legislativo e no Executivo. É como revisar o projeto antes de colocá-lo em prática."
},
{
  enunciado: "O veto presidencial constitui forma de controle preventivo de constitucionalidade.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "O veto pode ser jurídico (por inconstitucionalidade). Funciona como um freio antes da entrada em vigor da norma."
},
{
  enunciado: "A Comissão de Constituição e Justiça exerce controle preventivo no processo legislativo.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A CCJ analisa a constitucionalidade dos projetos. É como uma inspeção técnica antes da aprovação."
},
{
  enunciado: "O Poder Executivo não exerce qualquer forma de controle de constitucionalidade.",
  correta: "E",
  tema: "Controle de Constitucionalidade",
  justificativa: "O Executivo exerce controle preventivo por meio do veto. Não é mero executor das leis."
},
{
  enunciado: "A Constituição Federal admite a edição de medidas provisórias em matéria penal.",
  correta: "E",
  tema: "Processo Legislativo",
  justificativa: "Medidas provisórias não podem tratar de direito penal. É uma área sensível, fora do alcance desse instrumento."
},
{
  enunciado: "A Constituição Federal veda a edição de medidas provisórias sobre direito eleitoral.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "O art. 62 da CF estabelece essa vedação. É como preservar regras do jogo eleitoral contra mudanças abruptas."
},
{
  enunciado: "A medida provisória tem vigência imediata, mas depende de aprovação do Congresso Nacional para conversão em lei.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A MP produz efeitos imediatos, mas precisa ser aprovada para se tornar definitiva. É um remédio de efeito rápido, mas provisório."
},
{
  enunciado: "A rejeição de medida provisória impede a reedição da matéria na mesma sessão legislativa.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A CF proíbe a reedição na mesma sessão. É como impedir insistência após negativa clara."
},
{
  enunciado: "A iniciativa popular de leis federais exige a subscrição de, no mínimo, um por cento do eleitorado nacional.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A CF fixa esse percentual e a distribuição mínima por estados. É um mecanismo direto de participação popular."
},
{
  enunciado: "O processo legislativo ordinário compreende, entre outras fases, a iniciativa, a deliberação e a sanção.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "Essas são etapas clássicas do processo legislativo. É como um fluxo: propor, discutir e aprovar."
},
{
  enunciado: "A sanção presidencial pode ser expressa ou tácita.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A sanção tácita ocorre pelo decurso do prazo sem manifestação. É o silêncio que vale como concordância."
},
{
  enunciado: "O veto presidencial é apreciado em sessão separada da Câmara dos Deputados e do Senado Federal.",
  correta: "E",
  tema: "Processo Legislativo",
  justificativa: "O veto é apreciado em sessão conjunta do Congresso Nacional. É uma decisão tomada em conjunto."
},
{
  enunciado: "A promulgação da lei ocorre após a sanção ou a rejeição do veto.",
  correta: "C",
  tema: "Processo Legislativo",
  justificativa: "A promulgação declara a existência da lei. É como carimbar oficialmente o nascimento da norma."
},
{
  enunciado: "A publicação da lei é requisito de validade da norma jurídica.",
  correta: "E",
  tema: "Processo Legislativo",
  justificativa: "A publicação é requisito de eficácia, não de validade. A lei existe antes de ser publicada, mas só produz efeitos depois."
},
{
  enunciado: "A Constituição Federal estabelece cláusulas pétreas que não podem ser abolidas nem mesmo por emenda constitucional.",
  correta: "C",
  tema: "Cláusulas Pétreas",
  justificativa: "As cláusulas pétreas são núcleos intocáveis da Constituição. Funcionam como as colunas de sustentação de um prédio: podem reformar o resto, mas não removê-las."
},
{
  enunciado: "Os direitos e garantias individuais podem ser abolidos por emenda constitucional desde que respeitado o quórum qualificado.",
  correta: "E",
  tema: "Cláusulas Pétreas",
  justificativa: "Direitos e garantias individuais são cláusulas pétreas e não podem ser abolidos. Não importa a maioria: é uma porta permanentemente trancada."
},
{
  enunciado: "A forma federativa de Estado constitui cláusula pétrea da Constituição Federal.",
  correta: "C",
  tema: "Cláusulas Pétreas",
  justificativa: "A federação é protegida contra supressão. É como o formato básico do jogo: não pode ser alterado sem descaracterizá-lo."
},
{
  enunciado: "A separação dos Poderes é considerada cláusula pétrea.",
  correta: "C",
  tema: "Cláusulas Pétreas",
  justificativa: "A separação dos Poderes é essencial ao equilíbrio institucional. É como dividir funções para evitar concentração de poder."
},
{
  enunciado: "O voto direto, secreto, universal e periódico constitui cláusula pétrea.",
  correta: "C",
  tema: "Cláusulas Pétreas",
  justificativa: "Esses elementos do voto são protegidos constitucionalmente. Funcionam como regras fixas da democracia."
},
{
  enunciado: "A Constituição Federal admite emendas tendentes a abolir cláusulas pétreas, desde que não as extinga por completo.",
  correta: "E",
  tema: "Cláusulas Pétreas",
  justificativa: "Nem mesmo propostas tendentes à abolição são admitidas. É como não poder nem planejar derrubar a estrutura."
},
{
  enunciado: "O poder constituinte derivado reformador encontra limites materiais, formais e circunstanciais.",
  correta: "C",
  tema: "Poder Constituinte",
  justificativa: "O poder de emendar a Constituição não é ilimitado. É como reformar uma casa respeitando normas técnicas e períodos permitidos."
},
{
  enunciado: "Durante a vigência de intervenção federal, é vedada a aprovação de emendas constitucionais.",
  correta: "C",
  tema: "Poder Constituinte",
  justificativa: "As circunstâncias excepcionais suspendem reformas constitucionais. É como congelar mudanças em meio a uma crise."
},
{
  enunciado: "O poder constituinte originário é juridicamente limitado pela Constituição anterior.",
  correta: "E",
  tema: "Poder Constituinte",
  justificativa: "O poder constituinte originário é inicial e ilimitado juridicamente. Ele cria a nova ordem, sem se submeter à anterior."
},
{
  enunciado: "O poder constituinte derivado decorrente refere-se à elaboração das Constituições estaduais.",
  correta: "C",
  tema: "Poder Constituinte",
  justificativa: "Esse poder permite aos estados elaborarem suas Constituições, respeitando os princípios da CF. É autonomia com limites."
},
{
  enunciado: "As Constituições estaduais devem obrigatoriamente reproduzir integralmente o texto da Constituição Federal.",
  correta: "E",
  tema: "Poder Constituinte",
  justificativa: "Os estados devem observar princípios, não copiar integralmente o texto. É como seguir regras gerais, mantendo identidade própria."
},
{
  enunciado: "O Distrito Federal exerce competências legislativas atribuídas aos estados e aos municípios.",
  correta: "C",
  tema: "Distrito Federal",
  justificativa: "O DF acumula competências estaduais e municipais. Funciona como um ente híbrido."
},
{
  enunciado: "O Distrito Federal pode ser dividido em municípios por lei distrital.",
  correta: "E",
  tema: "Distrito Federal",
  justificativa: "A CF veda a divisão do DF em municípios. É uma característica estrutural fixa."
},
{
  enunciado: "A Constituição Federal estabelece hipóteses taxativas de estado de defesa e estado de sítio.",
  correta: "C",
  tema: "Defesa do Estado e das Instituições",
  justificativa: "As situações que autorizam esses regimes são taxativas. É como uma lista fechada de emergência."
},
{
  enunciado: "O estado de defesa pode ser decretado para preservar ou prontamente restabelecer a ordem pública.",
  correta: "C",
  tema: "Defesa do Estado e das Instituições",
  justificativa: "O estado de defesa é medida excepcional e temporária. Funciona como um reforço emergencial."
},
{
  enunciado: "O estado de sítio depende de autorização prévia do Congresso Nacional.",
  correta: "C",
  tema: "Defesa do Estado e das Instituições",
  justificativa: "O Congresso controla politicamente essa medida extrema. É como exigir aval coletivo antes da decisão."
},
{
  enunciado: "No estado de sítio, podem ser suspensos direitos e garantias individuais de forma ilimitada.",
  correta: "E",
  tema: "Defesa do Estado e das Instituições",
  justificativa: "Mesmo no estado de sítio há limites constitucionais. Nem em crise vale tudo."
},
{
  enunciado: "A Constituição Federal prevê controle político do estado de defesa e do estado de sítio pelo Congresso Nacional.",
  correta: "C",
  tema: "Defesa do Estado e das Instituições",
  justificativa: "O Congresso fiscaliza essas medidas. É como um freio institucional durante situações extremas."
},
{
  enunciado: "A segurança pública é dever exclusivo da União.",
  correta: "E",
  tema: "Segurança Pública",
  justificativa: "A segurança pública é dever do Estado em sentido amplo, envolvendo União, estados e municípios. É uma responsabilidade compartilhada."
},
{
  enunciado: "As polícias civis exercem funções de polícia judiciária.",
  correta: "C",
  tema: "Segurança Pública",
  justificativa: "À polícia civil cabe investigar infrações penais. Funciona como o braço investigador do sistema."
},
{
  enunciado: "As polícias militares exercem a função de polícia ostensiva e preservação da ordem pública.",
  correta: "C",
  tema: "Segurança Pública",
  justificativa: "A PM atua preventivamente e de forma visível. É como a presença constante para evitar conflitos."
},
{
  enunciado: "A guarda municipal pode substituir as polícias civil e militar.",
  correta: "E",
  tema: "Segurança Pública",
  justificativa: "A guarda municipal tem funções específicas e não substitui as polícias. Atua de forma complementar."
},
{
  enunciado: "A Constituição Federal admite a criação de guardas municipais para a proteção de bens, serviços e instalações.",
  correta: "C",
  tema: "Segurança Pública",
  justificativa: "A CF autoriza expressamente as guardas municipais. É uma proteção focada no patrimônio e serviços locais."
},
{
  enunciado: "A defesa civil integra o sistema de segurança pública previsto na Constituição Federal.",
  correta: "E",
  tema: "Segurança Pública",
  justificativa: "A defesa civil não integra o rol constitucional dos órgãos de segurança pública. Atua em outra frente, voltada a desastres."
},
{
  enunciado: "A Constituição Federal estabelece que os membros do Ministério Público gozam de vitaliciedade após dois anos de exercício.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "A vitaliciedade é adquirida após dois anos de exercício. É como um período de estágio probatório antes da estabilidade máxima."
},
{
  enunciado: "O Ministério Público integra o Poder Judiciário.",
  correta: "E",
  tema: "Ministério Público",
  justificativa: "O Ministério Público é instituição autônoma, não integrante de nenhum dos Poderes. Atua como fiscal do jogo, não como jogador."
},
{
  enunciado: "Compete ao Ministério Público a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "Essa é a missão constitucional do MP. Funciona como um guardião dos interesses essenciais da sociedade."
},
{
  enunciado: "Os membros do Ministério Público possuem independência funcional.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "A independência funcional garante liberdade de atuação dentro da lei. É como um árbitro que decide sem ordens externas."
},
{
  enunciado: "O princípio da unidade do Ministério Público significa que todos os seus membros estão subordinados hierarquicamente entre si.",
  correta: "E",
  tema: "Ministério Público",
  justificativa: "Unidade não significa hierarquia absoluta. Os membros atuam de forma integrada, mas com independência funcional."
},
{
  enunciado: "O Ministério Público pode propor ação direta de inconstitucionalidade.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "O Procurador-Geral da República é legitimado para ADI. Funciona como um canal institucional para provocar o STF."
},
{
  enunciado: "A advocacia pública tem por função a representação judicial e a consultoria jurídica das pessoas jurídicas de direito público.",
  correta: "C",
  tema: "Funções Essenciais à Justiça",
  justificativa: "A advocacia pública atua como o advogado institucional do Estado. É quem defende juridicamente o ente público."
},
{
  enunciado: "A Advocacia-Geral da União representa judicialmente os estados e municípios.",
  correta: "E",
  tema: "Funções Essenciais à Justiça",
  justificativa: "A AGU representa a União. Estados e municípios possuem suas próprias procuradorias."
},
{
  enunciado: "A Defensoria Pública tem como função a orientação jurídica e a defesa dos necessitados.",
  correta: "C",
  tema: "Defensoria Pública",
  justificativa: "A Defensoria atua como porta de acesso à Justiça para quem não pode pagar advogado. É uma ponte para a cidadania."
},
{
  enunciado: "A Defensoria Pública integra o Poder Executivo.",
  correta: "E",
  tema: "Defensoria Pública",
  justificativa: "A Defensoria é instituição autônoma, não integrante do Executivo. Atua com independência funcional."
},
{
  enunciado: "Os membros da Defensoria Pública gozam de independência funcional.",
  correta: "C",
  tema: "Defensoria Pública",
  justificativa: "A independência funcional garante atuação técnica livre. É como um defensor que não recebe ordens externas."
},
{
  enunciado: "O Tribunal de Contas da União auxilia o Congresso Nacional no exercício do controle externo.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "O TCU atua como órgão técnico auxiliar do Legislativo. Funciona como uma auditoria especializada."
},
{
  enunciado: "O Tribunal de Contas da União integra o Poder Judiciário.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "O TCU não integra o Judiciário. Atua de forma autônoma no auxílio ao Legislativo."
},
{
  enunciado: "Compete ao Tribunal de Contas da União julgar as contas dos administradores e demais responsáveis por dinheiros públicos.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "Essa é uma competência típica do TCU. É como verificar se o gestor cuidou corretamente do dinheiro alheio."
},
{
  enunciado: "As decisões do Tribunal de Contas da União possuem natureza jurisdicional.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "As decisões do TCU são administrativas, não jurisdicionais. Não substituem decisões judiciais."
},
{
  enunciado: "O controle interno deve ser exercido por cada Poder de forma integrada.",
  correta: "C",
  tema: "Controle da Administração",
  justificativa: "Cada Poder mantém seu controle interno, de forma articulada. É como cada setor revisar seus próprios processos."
},
{
  enunciado: "O controle social constitui mecanismo informal de fiscalização da administração pública.",
  correta: "C",
  tema: "Controle da Administração",
  justificativa: "A participação da sociedade fortalece o controle. Funciona como olhos externos acompanhando a gestão."
},
{
  enunciado: "A Constituição Federal veda a fiscalização contábil, financeira e orçamentária pelo Poder Legislativo.",
  correta: "E",
  tema: "Controle da Administração",
  justificativa: "A fiscalização é expressamente atribuída ao Legislativo com auxílio do TCU. É uma função essencial."
},
{
  enunciado: "A iniciativa das leis orçamentárias é privativa do Poder Executivo.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Cabe ao Executivo propor o orçamento. É como quem planeja as despesas do ano."
},
{
  enunciado: "O plano plurianual, a lei de diretrizes orçamentárias e a lei orçamentária anual integram o sistema orçamentário.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Esses três instrumentos formam o ciclo orçamentário. Funcionam como planejamento, orientação e execução."
},
{
  enunciado: "A lei orçamentária anual pode conter matéria estranha à previsão de receitas e fixação de despesas.",
  correta: "E",
  tema: "Orçamento Público",
  justificativa: "A CF veda matérias estranhas na LOA. É como um orçamento que não pode virar pacote de assuntos."
},
{
  enunciado: "Os créditos extraordinários destinam-se a despesas urgentes e imprevisíveis.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Esses créditos atendem emergências como guerras e calamidades. São recursos para situações fora do planejamento."
},
{
  enunciado: "Os créditos suplementares dependem sempre de autorização legislativa e indicação de recursos.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "A suplementação exige autorização e fonte de custeio. É como reforçar um caixa com dinheiro identificado."
},
{
  enunciado: "A Constituição Federal admite a vinculação de receita de impostos, como regra geral.",
  correta: "E",
  tema: "Orçamento Público",
  justificativa: "A vinculação é exceção, não regra. A CF busca flexibilidade orçamentária."
},
{
  enunciado: "A ordem econômica tem por fim assegurar a todos existência digna, conforme os ditames da justiça social.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "Esse é o objetivo central da ordem econômica constitucional. É crescimento com justiça."
},
{
  enunciado: "A Constituição Federal estabelece que os membros do Ministério Público gozam de vitaliciedade após dois anos de exercício.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "A vitaliciedade é adquirida após dois anos de exercício. É como um período de estágio probatório antes da estabilidade máxima."
},
{
  enunciado: "O Ministério Público integra o Poder Judiciário.",
  correta: "E",
  tema: "Ministério Público",
  justificativa: "O Ministério Público é instituição autônoma, não integrante de nenhum dos Poderes. Atua como fiscal do jogo, não como jogador."
},
{
  enunciado: "Compete ao Ministério Público a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "Essa é a missão constitucional do MP. Funciona como um guardião dos interesses essenciais da sociedade."
},
{
  enunciado: "Os membros do Ministério Público possuem independência funcional.",
  correta: "C",
  tema: "Ministério Público",
  justificativa: "A independência funcional garante liberdade de atuação dentro da lei. É como um árbitro que decide sem ordens externas."
},
{
  enunciado: "O princípio da unidade do Ministério Público significa que todos os seus membros estão subordinados hierarquicamente entre si.",
  correta: "E",
  tema: "Ministério Público",
  justificativa: "Unidade não significa hierarquia absoluta. Os membros atuam de forma integrada, mas com independência funcional."
},
{
  enunciado: "O Ministério Público pode propor ação direta de inconstitucionalidade.",
  correta: "C",
  tema: "Controle de Constitucionalidade",
  justificativa: "O Procurador-Geral da República é legitimado para ADI. Funciona como um canal institucional para provocar o STF."
},
{
  enunciado: "A advocacia pública tem por função a representação judicial e a consultoria jurídica das pessoas jurídicas de direito público.",
  correta: "C",
  tema: "Funções Essenciais à Justiça",
  justificativa: "A advocacia pública atua como o advogado institucional do Estado. É quem defende juridicamente o ente público."
},
{
  enunciado: "A Advocacia-Geral da União representa judicialmente os estados e municípios.",
  correta: "E",
  tema: "Funções Essenciais à Justiça",
  justificativa: "A AGU representa a União. Estados e municípios possuem suas próprias procuradorias."
},
{
  enunciado: "A Defensoria Pública tem como função a orientação jurídica e a defesa dos necessitados.",
  correta: "C",
  tema: "Defensoria Pública",
  justificativa: "A Defensoria atua como porta de acesso à Justiça para quem não pode pagar advogado. É uma ponte para a cidadania."
},
{
  enunciado: "A Defensoria Pública integra o Poder Executivo.",
  correta: "E",
  tema: "Defensoria Pública",
  justificativa: "A Defensoria é instituição autônoma, não integrante do Executivo. Atua com independência funcional."
},
{
  enunciado: "Os membros da Defensoria Pública gozam de independência funcional.",
  correta: "C",
  tema: "Defensoria Pública",
  justificativa: "A independência funcional garante atuação técnica livre. É como um defensor que não recebe ordens externas."
},
{
  enunciado: "O Tribunal de Contas da União auxilia o Congresso Nacional no exercício do controle externo.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "O TCU atua como órgão técnico auxiliar do Legislativo. Funciona como uma auditoria especializada."
},
{
  enunciado: "O Tribunal de Contas da União integra o Poder Judiciário.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "O TCU não integra o Judiciário. Atua de forma autônoma no auxílio ao Legislativo."
},
{
  enunciado: "Compete ao Tribunal de Contas da União julgar as contas dos administradores e demais responsáveis por dinheiros públicos.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "Essa é uma competência típica do TCU. É como verificar se o gestor cuidou corretamente do dinheiro alheio."
},
{
  enunciado: "As decisões do Tribunal de Contas da União possuem natureza jurisdicional.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "As decisões do TCU são administrativas, não jurisdicionais. Não substituem decisões judiciais."
},
{
  enunciado: "O controle interno deve ser exercido por cada Poder de forma integrada.",
  correta: "C",
  tema: "Controle da Administração",
  justificativa: "Cada Poder mantém seu controle interno, de forma articulada. É como cada setor revisar seus próprios processos."
},
{
  enunciado: "O controle social constitui mecanismo informal de fiscalização da administração pública.",
  correta: "C",
  tema: "Controle da Administração",
  justificativa: "A participação da sociedade fortalece o controle. Funciona como olhos externos acompanhando a gestão."
},
{
  enunciado: "A Constituição Federal veda a fiscalização contábil, financeira e orçamentária pelo Poder Legislativo.",
  correta: "E",
  tema: "Controle da Administração",
  justificativa: "A fiscalização é expressamente atribuída ao Legislativo com auxílio do TCU. É uma função essencial."
},
{
  enunciado: "A iniciativa das leis orçamentárias é privativa do Poder Executivo.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Cabe ao Executivo propor o orçamento. É como quem planeja as despesas do ano."
},
{
  enunciado: "O plano plurianual, a lei de diretrizes orçamentárias e a lei orçamentária anual integram o sistema orçamentário.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Esses três instrumentos formam o ciclo orçamentário. Funcionam como planejamento, orientação e execução."
},
{
  enunciado: "A lei orçamentária anual pode conter matéria estranha à previsão de receitas e fixação de despesas.",
  correta: "E",
  tema: "Orçamento Público",
  justificativa: "A CF veda matérias estranhas na LOA. É como um orçamento que não pode virar pacote de assuntos."
},
{
  enunciado: "Os créditos extraordinários destinam-se a despesas urgentes e imprevisíveis.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "Esses créditos atendem emergências como guerras e calamidades. São recursos para situações fora do planejamento."
},
{
  enunciado: "Os créditos suplementares dependem sempre de autorização legislativa e indicação de recursos.",
  correta: "C",
  tema: "Orçamento Público",
  justificativa: "A suplementação exige autorização e fonte de custeio. É como reforçar um caixa com dinheiro identificado."
},
{
  enunciado: "A Constituição Federal admite a vinculação de receita de impostos, como regra geral.",
  correta: "E",
  tema: "Orçamento Público",
  justificativa: "A vinculação é exceção, não regra. A CF busca flexibilidade orçamentária."
},
{
  enunciado: "A ordem econômica tem por fim assegurar a todos existência digna, conforme os ditames da justiça social.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "Esse é o objetivo central da ordem econômica constitucional. É crescimento com justiça."
},
{
  enunciado: "A ordem econômica constitucional fundamenta-se na valorização do trabalho humano e na livre iniciativa.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "A Constituição equilibra trabalho e livre iniciativa. É como uma bicicleta: precisa de dois pedais para andar."
},
{
  enunciado: "A livre concorrência é princípio da ordem econômica previsto na Constituição Federal.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "A livre concorrência busca evitar monopólios e abusos. Funciona como um mercado com várias opções para o consumidor."
},
{
  enunciado: "A função social da propriedade é incompatível com o direito de propriedade.",
  correta: "E",
  tema: "Ordem Econômica",
  justificativa: "A função social limita, mas não elimina a propriedade. É como ter um carro: é seu, mas deve respeitar regras."
},
{
  enunciado: "A defesa do consumidor é princípio da ordem econômica constitucional.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "A proteção do consumidor é expressamente prevista. É o equilíbrio entre quem vende e quem compra."
},
{
  enunciado: "A repressão ao abuso do poder econômico constitui princípio da ordem econômica.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "A Constituição combate abusos econômicos. É como impedir que alguém domine o jogo sozinho."
},
{
  enunciado: "A ordem econômica constitucional admite o monopólio estatal em hipóteses excepcionais previstas na Constituição.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "Alguns monopólios são admitidos por razões estratégicas. É como reservar áreas sensíveis ao Estado."
},
{
  enunciado: "A intervenção do Estado no domínio econômico é, em regra, proibida pela Constituição Federal.",
  correta: "E",
  tema: "Ordem Econômica",
  justificativa: "A CF admite intervenção quando necessária. É como um árbitro que entra em campo para corrigir desequilíbrios."
},
{
  enunciado: "A Constituição Federal prevê a possibilidade de desapropriação por interesse social.",
  correta: "C",
  tema: "Ordem Econômica",
  justificativa: "A desapropriação por interesse social é instrumento de justiça social. É usar a propriedade em favor do coletivo."
},
{
  enunciado: "A desapropriação para fins de reforma agrária exige prévia e justa indenização em dinheiro.",
  correta: "E",
  tema: "Ordem Econômica",
  justificativa: "Na reforma agrária, a indenização é feita em títulos da dívida agrária. Não é pagamento imediato em dinheiro."
},
{
  enunciado: "A Constituição Federal admite a desapropriação de propriedade produtiva para fins de reforma agrária.",
  correta: "E",
  tema: "Ordem Econômica",
  justificativa: "Propriedade produtiva não pode ser desapropriada para reforma agrária. É como cumprir a função social."
},
{
  enunciado: "A ordem social tem como base o primado do trabalho e como objetivo o bem-estar e a justiça sociais.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A ordem social busca dignidade e justiça. É o lado humano do desenvolvimento."
},
{
  enunciado: "A seguridade social compreende ações nas áreas de saúde, previdência e assistência social.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A seguridade funciona como um tripé de proteção social."
},
{
  enunciado: "A saúde é direito de todos e dever exclusivo do Estado.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A saúde é dever do Estado, mas também envolve a sociedade. É uma responsabilidade compartilhada."
},
{
  enunciado: "As ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "O SUS é organizado em rede para eficiência. É como um sistema integrado."
},
{
  enunciado: "A previdência social será organizada sob a forma de regime geral, de caráter contributivo e solidário.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A previdência funciona como um fundo comum: todos contribuem para proteção coletiva."
},
{
  enunciado: "A assistência social será prestada apenas a quem contribuiu para a seguridade social.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A assistência é não contributiva. Protege quem precisa, independentemente de contribuição."
},
{
  enunciado: "A educação é direito de todos e dever do Estado e da família.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A educação é responsabilidade compartilhada. É a base da cidadania."
},
{
  enunciado: "O ensino será ministrado com base, entre outros, no princípio da gestão democrática do ensino público.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A gestão democrática busca participação. É como decidir coletivamente os rumos da escola."
},
{
  enunciado: "A Constituição Federal veda a atuação do setor privado na educação.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A CF admite a iniciativa privada na educação, respeitadas as normas. É pluralidade educacional."
},
{
  enunciado: "A cultura é direito de todos e o Estado deve garantir o pleno exercício dos direitos culturais.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A cultura integra a identidade do povo. O Estado atua como fomentador."
},
{
  enunciado: "O meio ambiente ecologicamente equilibrado é direito fundamental de terceira dimensão.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "Direitos ambientais são coletivos e intergeracionais. É cuidar do presente e do futuro."
},
{
  enunciado: "A proteção ao meio ambiente é dever exclusivo do Poder Público.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A proteção ambiental é dever do Estado e da coletividade. Todos são responsáveis."
},
{
  enunciado: "A Constituição Federal prevê responsabilidade penal da pessoa jurídica por danos ao meio ambiente.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF admite responsabilização penal de pessoas jurídicas. Empresas também respondem por danos ambientais."
},
{
  enunciado: "Os direitos das comunidades indígenas às terras que tradicionalmente ocupam são originários.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "Esses direitos precedem o próprio Estado. São reconhecidos, não concedidos."
},
{
  enunciado: "A família, base da sociedade, tem especial proteção do Estado, nos termos da Constituição Federal.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF reconhece a família como base da sociedade e lhe confere proteção especial. É como o alicerce de uma casa que sustenta toda a estrutura."
},
{
  enunciado: "A Constituição Federal reconhece apenas a família constituída pelo casamento civil.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A CF reconhece diferentes entidades familiares, como a união estável e a família monoparental. É um conceito ampliado de família."
},
{
  enunciado: "A união estável entre homem e mulher é reconhecida como entidade familiar.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF reconhece a união estável como entidade familiar. É o reconhecimento jurídico de uma realidade social."
},
{
  enunciado: "A Constituição Federal admite a conversão da união estável em casamento.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF facilita a conversão da união estável em casamento. É como transformar um contrato informal em formal."
},
{
  enunciado: "Os direitos e deveres referentes à sociedade conjugal são exercidos igualmente pelo homem e pela mulher.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF assegura igualdade entre os cônjuges. É a parceria em igualdade de condições."
},
{
  enunciado: "A Constituição Federal assegura proteção integral à criança, ao adolescente e ao jovem.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF adota a doutrina da proteção integral. É um escudo completo de proteção."
},
{
  enunciado: "A proteção à criança e ao adolescente é dever exclusivo da família.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A proteção é dever da família, da sociedade e do Estado. É uma responsabilidade compartilhada."
},
{
  enunciado: "A Constituição Federal prevê prioridade absoluta aos direitos da criança e do adolescente.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A prioridade absoluta orienta políticas públicas e decisões. É como uma fila preferencial garantida constitucionalmente."
},
{
  enunciado: "O Estatuto da Criança e do Adolescente decorre diretamente do comando constitucional da proteção integral.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "O ECA concretiza o mandamento constitucional. É a tradução da Constituição em regras práticas."
},
{
  enunciado: "A Constituição Federal garante aos idosos participação na comunidade e defesa de sua dignidade.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF protege o idoso contra discriminação e abandono. É o reconhecimento do valor da experiência."
},
{
  enunciado: "A assistência aos desamparados é direito fundamental previsto na Constituição Federal.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A assistência social integra os direitos fundamentais. Funciona como uma rede de proteção para quem precisa."
},
{
  enunciado: "A Constituição Federal assegura o direito ao lazer como direito social.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "O lazer é direito social expresso. É parte do equilíbrio entre trabalho e descanso."
},
{
  enunciado: "A Constituição Federal veda qualquer forma de discriminação no acesso ao trabalho.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "A CF combate discriminações no trabalho. É garantir igualdade de oportunidades."
},
{
  enunciado: "A proteção do mercado de trabalho da mulher é incompatível com o princípio da igualdade.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A proteção específica visa promover igualdade material. É tratar desiguais na medida de suas desigualdades."
},
{
  enunciado: "A Constituição Federal assegura aos trabalhadores urbanos e rurais direitos sociais mínimos.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "O art. 7º da CF garante um rol de direitos trabalhistas. É um piso mínimo de proteção."
},
{
  enunciado: "Os direitos dos trabalhadores domésticos são idênticos aos dos trabalhadores urbanos e rurais desde a promulgação da CF/88.",
  correta: "E",
  tema: "Direitos Sociais",
  justificativa: "A equiparação foi gradual e ampliada por emendas posteriores. Não foi automática desde 1988."
},
{
  enunciado: "A Constituição Federal garante a liberdade sindical.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A liberdade sindical assegura organização dos trabalhadores. É autonomia coletiva."
},
{
  enunciado: "A Constituição Federal adota o sistema de unicidade sindical.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A CF mantém a unicidade sindical por base territorial. É um modelo específico adotado pelo Brasil."
},
{
  enunciado: "O direito de greve é assegurado aos trabalhadores, competindo a eles decidir sobre sua oportunidade e interesses a defender.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A CF garante o direito de greve. É um instrumento legítimo de reivindicação coletiva."
},
{
  enunciado: "O direito de greve dos servidores públicos é exercido nos termos de lei específica.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A CF condiciona o exercício à lei específica. É um direito reconhecido, mas regulamentado."
},
{
  enunciado: "A Constituição Federal proíbe a greve em qualquer serviço público.",
  correta: "E",
  tema: "Direitos Sociais",
  justificativa: "A CF não proíbe a greve, mas admite restrições conforme o serviço. Não é vedação absoluta."
},
{
  enunciado: "A Constituição Federal assegura a participação dos trabalhadores nos lucros ou resultados da empresa.",
  correta: "C",
  tema: "Direitos Sociais",
  justificativa: "A participação nos lucros é prevista constitucionalmente. É dividir os resultados do esforço coletivo."
},
{
  enunciado: "A Constituição Federal prevê a coexistência do setor público e do setor privado na prestação de serviços de saúde.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "O SUS admite a participação complementar da iniciativa privada. É cooperação, não exclusão."
},
{
  enunciado: "A Constituição Federal admite a destinação de recursos públicos a instituições privadas de saúde com fins lucrativos.",
  correta: "E",
  tema: "Ordem Social",
  justificativa: "A CF veda recursos públicos para instituições privadas com fins lucrativos, salvo exceções legais específicas."
},
{
  enunciado: "A Constituição Federal assegura a todos o direito ao meio ambiente ecologicamente equilibrado, impondo deveres ao Poder Público e à coletividade.",
  correta: "C",
  tema: "Ordem Social",
  justificativa: "O meio ambiente é direito e dever de todos. É uma responsabilidade compartilhada entre Estado e sociedade."
},
];
