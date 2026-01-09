const questions = [
 {
    "enunciado": "A Emenda Constitucional n.º 132/2023 estabeleceu expressamente o dever de observância ao princípio da justiça tributária, prescrevendo que as alterações na legislação tributária buscarão amenizar os efeitos progressivos.",
    "correta": "E",
    "tema": "Sistema Tributário Nacional",
    "justificativa": "A reforma tributária (EC 132/2023) busca amenizar os efeitos *regressivos* (onde pobres pagam proporcionalmente mais que ricos), e não os progressivos. O objetivo é tornar o sistema mais justo [1]. Analogia: Dizer que se quer amenizar a progressividade seria como dizer que, em uma corrida, queremos punir quem está correndo mais rápido (quem ganha mais), quando o objetivo da justiça social é ajudar quem carrega mais peso (efeito regressivo). "
  },
  {
    "enunciado": "A Emenda Constitucional n.º 132/2023 estendeu às entidades religiosas e às suas organizações assistenciais e beneficentes a imunidade a impostos e contribuições sociais.",
    "correta": "E",
    "tema": "Limitações ao Poder de Tributar",
    "justificativa": "A imunidade religiosa prevista no art. 150, VI, 'b' da CF se restringe a *impostos*. Embora a EC 132/2023 tenha ampliado o escopo para bens e serviços necessários às finalidades essenciais, ela não estendeu a imunidade para *contribuições sociais* de forma geral [2]. Analogia: É como um 'passe livre' que funciona apenas para o cinema (impostos), mas tentar usá-lo para entrar no teatro (contribuições) não funcionará, pois são ingressos diferentes."
  },
  {
    "enunciado": "A imunidade tributária recíproca abrange todas as modalidades tributárias sobre patrimônio ou serviços, de modo que um município não pode cobrar qualquer espécie de tributo de um estado ou da União, sob pena de violação do pacto federativo.",
    "correta": "E",
    "tema": "Imunidade Recíproca",
    "justificativa": "A imunidade recíproca aplica-se apenas a *impostos* sobre patrimônio, renda ou serviços. Ela não impede a cobrança de outras espécies tributárias, como taxas ou contribuições de melhoria, nem protege atividades econômicas exploradas pelo Estado [3]. Analogia: O 'escudo' da imunidade protege contra a flecha dos impostos, mas não contra a espada das taxas ou outras cobranças."
  },
  {
    "enunciado": "É vedada a cassação de direitos políticos, mesmo em caso de condenação por improbidade administrativa.",
    "correta": "C",
    "tema": "Direitos Políticos",
    "justificativa": "A Constituição veda terminantemente a cassação (retirada arbitrária e definitiva) de direitos políticos (art. 15, CF). A improbidade administrativa acarreta a *suspensão* dos direitos, mas nunca a cassação [4]. Analogia: O Estado pode 'tomar a carteira de motorista' temporariamente (suspensão) por infrações, mas não pode decretar que você 'nunca mais poderá dirigir na vida' (cassação) de forma arbitrária."
  },
  {
    "enunciado": "A suspensão dos direitos políticos caracteriza-se pela temporariedade, pois é possível que o titular volte a exercê-los no futuro, enquanto a perda desses direitos é definitiva, sem possibilidade de reaquisição.",
    "correta": "E",
    "tema": "Perda e Suspensão de Direitos",
    "justificativa": "Tanto a suspensão quanto a perda podem ser revertidas. A perda não é definitiva no sentido de 'irreversível'; por exemplo, um brasileiro que perde a nacionalidade (e os direitos políticos) pode readquiri-la [5]. Analogia: A perda é como ter o contrato de energia cancelado (precisa de novo processo para religar), enquanto a suspensão é apenas um corte temporário que volta assim que a pendência é resolvida."
  },
  {
    "enunciado": "É vedada a cassação de direitos políticos, mas não sua perda ou suspensão.",
    "correta": "C",
    "tema": "Direitos Políticos",
    "justificativa": "A cassação é proibida no Estado Democrático de Direito. A perda e a suspensão são permitidas nas hipóteses taxativas do art. 15 da CF [6]. Analogia: Um juiz pode suspender um jogador (suspensão) ou bani-lo da liga por regras prévias (perda), mas o dono do time não pode simplesmente rasgar o contrato do jogador porque não gosta dele (cassação)."
  },
  {
    "enunciado": "Ana, pessoa idosa que passou a ter incapacidade civil absoluta, teve seus direitos políticos cassados.",
    "correta": "E",
    "tema": "Direitos Políticos",
    "justificativa": "A incapacidade civil absoluta gera a *suspensão* dos direitos políticos, não a cassação (que é vedada) nem a perda [6][7]. Analogia: Ana foi colocada no 'banco de reservas' (suspensão) devido à sua condição de saúde, mas não foi expulsa do time (perda/cassação)."
  },
  {
    "enunciado": "Lúcio, chileno naturalizado brasileiro, teve sua naturalização cancelada por sentença transitada em julgado; logo, ele teve seus direitos políticos suspensos.",
    "correta": "E",
    "tema": "Perda de Direitos Políticos",
    "justificativa": "O cancelamento da naturalização por sentença transitada em julgado é causa de *perda* dos direitos políticos, e não de suspensão (CF, art. 15, I) [6][7]. Analogia: Ao ter a naturalização cancelada, Lúcio 'devolveu o crachá' de cidadão brasileiro (perda), deixando de fazer parte da empresa 'Brasil'."
  },
  {
    "enunciado": "É possível, de acordo com o texto constitucional, que um cidadão preencha as condições de elegibilidade para ser vereador, mas não as condições de elegibilidade para ser deputado federal.",
    "correta": "C",
    "tema": "Elegibilidade",
    "justificativa": "A idade mínima para vereador é 18 anos, enquanto para deputado federal é 21 anos. Assim, um jovem de 19 anos pode ser vereador, mas não deputado [8]. Analogia: É como a carteira de motorista: com 18 anos você pode pilotar motos (vereador), mas precisa de mais idade (21) para dirigir caminhões (deputado)."
  },
  {
    "enunciado": "O prazo para impugnação de mandato eletivo perante a justiça eleitoral encerra-se com a diplomação do candidato eleito.",
    "correta": "E",
    "tema": "Impugnação de Mandato",
    "justificativa": "O prazo para a Ação de Impugnação de Mandato Eletivo (AIME) é de 15 dias contados *a partir* da diplomação, e não se encerra nela (CF, art. 14, § 10) [8]. Analogia: A diplomação é o 'tiro de largada' para o prazo de impugnação começar a correr, não a linha de chegada."
  },
  {
    "enunciado": "De acordo com a CF, é inelegível o indivíduo que seja estrangeiro.",
    "correta": "C",
    "tema": "Inelegibilidade",
    "justificativa": "Os estrangeiros são inalistáveis e, consequentemente, inelegíveis (CF, art. 14, § 2º) [9]. Analogia: Para ser síndico do prédio (cargo eletivo), você precisa ser condômino (nacional); quem não mora no condomínio (estrangeiro) não pode se candidatar."
  },
  {
    "enunciado": "De acordo com a CF, é inelegível o indivíduo que seja analfabeto.",
    "correta": "C",
    "tema": "Inelegibilidade",
    "justificativa": "Embora o voto do analfabeto seja facultativo, ele é inelegível (CF, art. 14, § 4º). Ele pode votar, mas não pode ser votado [9]. Analogia: O analfabeto pode ajudar a escolher o piloto do avião (votar), mas não pode pilotar o avião (ser votado)."
  },
  {
    "enunciado": "De acordo com a CF, é inelegível o indivíduo que seja conscrito e esteja prestando serviço militar obrigatório.",
    "correta": "C",
    "tema": "Inelegibilidade",
    "justificativa": "Os conscritos, durante o serviço militar obrigatório, são inalistáveis e, portanto, inelegíveis [9]. Analogia: O soldado em treinamento básico está inteiramente à disposição do quartel e não tem a liberdade necessária para participar da disputa política."
  },
  {
    "enunciado": "De acordo com a CF, é inelegível o indivíduo que tenha 75 anos de idade.",
    "correta": "E",
    "tema": "Elegibilidade",
    "justificativa": "Não há limite máximo de idade para elegibilidade na Constituição, apenas limites mínimos. A aposentadoria compulsória aos 75 anos aplica-se a servidores/magistrados, não a mandatos eletivos [9]. Analogia: Na política, ao contrário do serviço público, a experiência da idade avançada não é motivo para aposentadoria forçada."
  },
  {
    "enunciado": "O voto é obrigatório para todos os brasileiros, prescindível a análise de alfabetização.",
    "correta": "E",
    "tema": "Direitos Políticos",
    "justificativa": "O voto é facultativo para os analfabetos (CF, art. 14, § 1º, II, 'a'). Portanto, a alfabetização é critério essencial para definir a obrigatoriedade [10]. Analogia: Dizer que a alfabetização é prescindível para a obrigatoriedade é como dizer que a idade é irrelevante para pagar meia-entrada, ignorando as isenções legais."
  },
  {
    "enunciado": "A ação popular que vise anular ato lesivo ao patrimônio público pode ser proposta por qualquer cidadão.",
    "correta": "C",
    "tema": "Remédios Constitucionais",
    "justificativa": "Qualquer cidadão (pessoa no gozo de seus direitos políticos) é parte legítima para propor ação popular (CF, art. 5º, LXXIII) [10]. Analogia: A ação popular é como um 'botão de emergência' que qualquer cidadão com título de eleitor regular pode apertar para proteger o bem comum."
  },
  {
    "enunciado": "Conforme o entendimento jurisprudencial do STF, a candidatura aos cargos de presidente ou de vice-presidente da República é permitida a indivíduos que não tenham filiação partidária.",
    "correta": "E",
    "tema": "Filiação Partidária",
    "justificativa": "A filiação partidária é condição constitucional de elegibilidade (CF, art. 14, § 3º, V). O STF não admite candidaturas avulsas [11]. Analogia: Tentar concorrer sem partido é como tentar jogar no campeonato oficial de futebol sem estar inscrito em nenhum clube; as regras do campeonato (Constituição) exigem o vínculo."
  },
  {
    "enunciado": "A Constituição Federal de 1988 estabelece como uma das condições de elegibilidade ao cargo de deputado federal a idade mínima de 35 anos.",
    "correta": "E",
    "tema": "Elegibilidade",
    "justificativa": "A idade mínima para Deputado Federal é de 21 anos. 35 anos é a exigência para Presidente, Vice e Senador [12]. Analogia: A 'altura mínima' para entrar na montanha-russa do Senado é maior (35 anos) do que para o brinquedo da Câmara (21 anos)."
  },
  {
    "enunciado": "A CF não inclui a filiação partidária como condição de elegibilidade, de modo que ao legislador é facultada a adoção do sistema de candidaturas avulsas.",
    "correta": "E",
    "tema": "Elegibilidade",
    "justificativa": "A Constituição inclui expressamente a filiação partidária como condição de elegibilidade, vedando as candidaturas avulsas [13]. Analogia: O partido político é o 'veículo' obrigatório para transitar na estrada eleitoral; não é permitido andar a pé (avulso) nessa via."
  },
  {
    "enunciado": "Para os maiores de dezesseis e menores de dezoito anos de idade, é facultativo o voto, mas obrigatório o alistamento eleitoral.",
    "correta": "E",
    "tema": "Alistamento Eleitoral",
    "justificativa": "Para essa faixa etária (16 a 18 anos), tanto o alistamento eleitoral quanto o voto são facultativos (CF, art. 14, § 1º, II, 'c') [14]. Analogia: É como um clube opcional para jovens; você só se inscreve (alista) e frequenta (vota) se quiser."
  },
  {
    "enunciado": "A admissão, pelo Supremo Tribunal Federal, das candidaturas avulsas para eleições majoritárias justifica-se em razão de a filiação partidária não ser constitucionalmente prevista como condição de elegibilidade.",
    "correta": "E",
    "tema": "Direitos Políticos",
    "justificativa": "O STF não admite candidaturas avulsas justamente porque a filiação partidária *é* uma condição de elegibilidade explícita na CF [15]. Analogia: Seria como dizer que o tribunal permitiu dirigir sem carteira porque a lei de trânsito não exige habilitação, o que é falso."
  },
  {
    "enunciado": "O regime constitucional relativo ao preenchimento do cargo eletivo de prefeito municipal prevê a idade mínima de dezoito anos.",
    "correta": "E",
    "tema": "Elegibilidade",
    "justificativa": "A idade mínima para Prefeito é de 21 anos (CF, art. 14, § 3º, VI, 'c'). 18 anos é apenas para Vereador [16]. Analogia: O Prefeito é o 'pai' da cidade, exigindo um pouco mais de maturidade (21) do que o vereador (18)."
  },
  {
    "enunciado": "Por integrarem a União, os territórios federais possuem a mesma autonomia conferida aos estados e ao Distrito Federal.",
    "correta": "E",
    "tema": "Organização do Estado",
    "justificativa": "Territórios Federais não possuem autonomia política; são descentralizações administrativo-territoriais da União e integram a União, sem a autonomia de autogoverno dos Estados [17]. Analogia: Um Território é como uma filial de uma empresa (pertence à matriz União), enquanto um Estado é uma franquia com dono próprio (autonomia)."
  },
  {
    "enunciado": "O plebiscito previsto para o desmembramento de estado pressupõe a oitiva somente da população que resida na parte do estado a ser desmembrada.",
    "correta": "E",
    "tema": "Organização do Estado",
    "justificativa": "O plebiscito deve consultar a população *diretamente interessada*, que o STF define como a população de *todo* o estado envolvido, não apenas da área a ser desmembrada [17]. Analogia: Se você quer cortar um pedaço do bolo (estado), todos que comeriam do bolo original precisam concordar, não apenas quem vai ficar com a fatia cortada."
  },
  {
    "enunciado": "O desmembramento dos estados está condicionado à aprovação do Congresso Nacional, mediante lei complementar, e da população diretamente interessada, por meio de plebiscito.",
    "correta": "C",
    "tema": "Organização do Estado",
    "justificativa": "Requisitos corretos conforme art. 18, § 3º da CF: plebiscito (população) e lei complementar (Congresso) [17]. Analogia: Para reformar a casa (Estado), precisa da aprovação da família (plebiscito) e do alvará da prefeitura (Congresso/Lei Complementar)."
  },
{
    "enunciado": "A criação, a incorporação, a fusão e o desmembramento de municípios serão estabelecidos por lei estadual, dentro do período determinado por lei complementar federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos municípios envolvidos, após divulgação dos estudos de viabilidade municipal.",
    "correta": "C",
    "tema": "Organização do Estado",
    "justificativa": "O processo de criação de municípios é complexo e exige 'quatro chaves': Lei Complementar Federal (janela de tempo), Estudo de Viabilidade, Plebiscito e Lei Estadual [18]. Analogia: Criar um município não é apenas desenhar um mapa; é como abrir uma nova empresa, exigindo estudo de mercado (viabilidade), aprovação dos sócios (plebiscito) e registro formal no prazo certo."
  },
  {
    "enunciado": "No exercício de suas atribuições constitucionais, caso se depare com crime contra a administração pública, o Conselho Nacional de Justiça poderá enviar representação ao Ministério Público.",
    "correta": "C",
    "tema": "Conselho Nacional de Justiça",
    "justificativa": "O CNJ tem natureza administrativa. Se encontrar indícios de crime, não pode julgar criminalmente, mas deve encaminhar ao MP para as devidas ações (CF, art. 103-B, § 4º, IV) [19]. Analogia: O CNJ é o gerente administrativo; se ele vê um roubo no caixa, ele não prende o ladrão, ele chama a polícia (MP)."
  },
  {
    "enunciado": "O Conselho Nacional de Justiça possui competência para rever processos disciplinares de juízes e membros de tribunais julgados há menos de um ano.",
    "correta": "C",
    "tema": "Conselho Nacional de Justiça",
    "justificativa": "O CNJ pode rever, de ofício ou mediante provocação, os processos disciplinares de juízes julgados há menos de um ano (CF, art. 103-B, § 4º, V) [20]. Analogia: O CNJ funciona como um 'VAR' disciplinar que pode revisar as decisões dos tribunais locais se o jogo (julgamento) tiver ocorrido recentemente."
  },
  {
    "enunciado": "O Conselho Nacional de Justiça pode realizar os controles difuso e concentrado de constitucionalidade no desempenho das funções que constitucionalmente lhe são estabelecidas.",
    "correta": "E",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "O CNJ é um órgão administrativo, não jurisdicional. Ele não exerce controle de constitucionalidade (nem difuso nem concentrado), podendo apenas afastar atos administrativos ilegais [21]. Analogia: O CNJ é o RH do Judiciário, não um tribunal de recursos constitucionais."
  },
  {
    "enunciado": "O Conselho Nacional de Justiça tem atribuição para rever de ofício os processos disciplinares de juízes, observado o prazo constitucional.",
    "correta": "C",
    "tema": "Conselho Nacional de Justiça",
    "justificativa": "A revisão pode ser 'de ofício' (sem ninguém pedir), demonstrando a supremacia do controle administrativo do CNJ sobre os tribunais locais [22]. Analogia: O inspetor geral (CNJ) pode abrir as gavetas e verificar os arquivos sem precisar esperar uma denúncia formal."
  },
  {
    "enunciado": "As atividades de saúde são de relevância pública, sendo proibida a participação da iniciativa privada na assistência à saúde.",
    "correta": "E",
    "tema": "Saúde",
    "justificativa": "A assistência à saúde é *livre* à iniciativa privada (CF, art. 199), que pode participar de forma complementar ao SUS [23]. Analogia: O SUS é o restaurante público, mas a Constituição permite que existam restaurantes privados para quem quiser e puder pagar."
  },
  {
    "enunciado": "É responsabilidade exclusiva do poder público a promoção de programas de assistência integral à saúde da criança, sendo vedada a participação de entidades não governamentais.",
    "correta": "E",
    "tema": "Saúde e Assistência",
    "justificativa": "A Constituição prevê a participação de entidades não governamentais na aplicação de percentuais de recursos públicos destinados à saúde materno-infantil (CF, art. 227, § 1º) [24]. Analogia: O Estado é o guardião principal, mas pode (e deve) chamar parceiros da sociedade civil para ajudar a cuidar da saúde das crianças."
  },
  {
    "enunciado": "São princípios da seguridade social a seletividade e distributividade na prestação dos benefícios e serviços.",
    "correta": "C",
    "tema": "Seguridade Social",
    "justificativa": "Correto conforme art. 194, parágrafo único, III da CF. A seletividade escolhe *quem* e *o que* proteger, e a distributividade foca em reduzir desigualdades [24]. Analogia: O sistema não pode dar tudo a todos (seletividade) e deve dar mais a quem precisa mais (distributividade)."
  },
  {
    "enunciado": "A assistência à saúde é livre à iniciativa privada.",
    "correta": "C",
    "tema": "Saúde",
    "justificativa": "Literalidade do art. 199 da Constituição Federal. A iniciativa privada atua livremente, e no âmbito do SUS, de forma complementar [24]. Analogia: A saúde não é um monopólio estatal; clínicas e hospitais privados podem operar livremente seguindo as regulações."
  },
  {
    "enunciado": "Com a nomeação de Roberta no serviço público federal, ela passa a estar vinculada tanto ao regime de previdência público quanto ao regime de previdência privada obrigatoriamente.",
    "correta": "E",
    "tema": "Previdência Social",
    "justificativa": "A previdência complementar (privada) para servidores públicos é facultativa. O servidor é inscrito no RPPS até o teto do RGPS, e o que exceder vai para a privada apenas se ele aderir [25]. Analogia: O 'prato feito' (RPPS) é servido a todos até certo limite; a 'sobremesa' (previdência complementar) é opcional e paga à parte."
  },
  {
    "enunciado": "O regime de previdência privada, de natureza complementar, além de ter caráter não obrigatório, é organizado de forma autônoma em relação ao RGPS.",
    "correta": "C",
    "tema": "Previdência Complementar",
    "justificativa": "A previdência complementar é autônoma (não depende do INSS) e facultativa (ninguém é obrigado a contratar), baseada na constituição de reservas [26]. Analogia: É como um seguro de vida privado; você faz se quiser, independente da segurança social básica que o governo oferece."
  },
  {
    "enunciado": "Qualquer benefício que venha a substituir o salário de contribuição ou o rendimento do trabalho do segurado da previdência social não poderá ser estabelecido em valor mensal inferior ao salário mínimo.",
    "correta": "C",
    "tema": "Previdência Social",
    "justificativa": "Garantia constitucional (art. 201, § 2º) de que benefícios substitutivos de renda (como aposentadoria) não sejam menores que o mínimo [26][27]. Analogia: O salário mínimo é o 'piso' do edifício da previdência; nenhum benefício substitutivo pode morar no porão."
  },
  {
    "enunciado": "É vedado o aporte de recursos a entidade de previdência privada pela União e outros entes públicos, ainda que na qualidade de patrocinador.",
    "correta": "E",
    "tema": "Previdência Complementar",
    "justificativa": "O aporte é vedado *salvo* na qualidade de patrocinador, situação em que a contribuição pública não pode exceder a do segurado (paridade) [28]. Analogia: O governo não pode dar dinheiro de graça para fundos privados, mas pode contribuir como 'patrão' para o fundo dos seus funcionários, igualando o que eles pagam."
  },
  {
    "enunciado": "Decorre da garantia do salário mínimo nacional o direito à revisão de benefício previdenciário pelo valor nominal do salário mínimo.",
    "correta": "E",
    "tema": "Previdência Social",
    "justificativa": "A CF garante o reajuste para preservar o valor real, mas veda a vinculação ao salário mínimo para fins de reajuste automático de benefícios que são superiores ao piso (Súmula Vinculante 4) [29]. Analogia: Se o salário mínimo sobe de elevador, sua aposentadoria (acima do mínimo) sobe de escada (inflação); eles não estão amarrados na mesma corda."
  },
  {
    "enunciado": "Os membros do Poder Judiciário e do Ministério Público gozam, após dois anos de exercício, de vitaliciedade.",
    "correta": "C",
    "tema": "Poder Judiciário/MP",
    "justificativa": "Magistrados e membros do MP adquirem vitaliciedade após dois anos de exercício (para ingressantes por concurso). Após isso, só perdem o cargo por sentença judicial transitada em julgado [30]. Analogia: O período de dois anos é um 'estágio probatório reforçado'; depois disso, o cargo 'cola' na pessoa e só sai com ordem judicial definitiva."
  },
  {
    "enunciado": "Compete ao Conselho Nacional de Justiça o controle da atuação administrativa, financeira e jurisdicional do Poder Judiciário.",
    "correta": "E",
    "tema": "CNJ",
    "justificativa": "O CNJ controla a atuação administrativa e financeira, mas *nunca* a atuação jurisdicional (o conteúdo das decisões) [30]. Analogia: O CNJ fiscaliza se o juiz bateu o ponto e gastou bem o dinheiro (administrativo), mas não pode dizer se ele julgou certo ou errado (jurisdicional)."
  },
  {
    "enunciado": "As Comissões Parlamentares de Inquérito (CPI) têm os mesmos poderes de investigação das autoridades judiciais, motivo por que podem determinar interceptação telefônica.",
    "correta": "E",
    "tema": "Poder Legislativo",
    "justificativa": "As CPIs têm poderes de investigação próprios das autoridades judiciais, *mas* a interceptação telefônica está sujeita à reserva de jurisdição (só juiz autoriza) [31]. Analogia: A CPI é um detetive poderoso que pode quebrar sigilos bancários, mas para grampear telefone, precisa pedir 'benção' ao juiz."
  },
  {
    "enunciado": "A matéria constante de projeto de lei rejeitado somente pode ser objeto de nova proposta na mesma sessão legislativa mediante iniciativa da maioria absoluta dos membros de qualquer das casas do Congresso Nacional.",
    "correta": "C",
    "tema": "Processo Legislativo",
    "justificativa": "Regra do art. 67 da CF para Projetos de Lei (PL). Para Emendas à Constituição (PEC), a irrepetibilidade na mesma sessão é absoluta [32]. Analogia: Um projeto de lei rejeitado é como um aluno reprovado; normalmente só volta no ano (sessão) seguinte, a menos que a maioria absoluta dos professores (parlamentares) faça um pedido especial para ele tentar de novo agora."
  },
  {
    "enunciado": "É inconstitucional lei estadual que restrinja a capacidade eleitoral passiva de membros do Ministério Público estadual para concorrerem à chefia da instituição.",
    "correta": "C",
    "tema": "Ministério Público",
    "justificativa": "Os estados não podem criar restrições à elegibilidade interna do MP além das previstas na Constituição ou na Lei Orgânica Nacional (LONMP). Restrições excessivas violam a isonomia [33]. Analogia: O estado não pode inventar barreiras extras na corrida eleitoral interna do MP que a lei federal não previu."
  },
  {
    "enunciado": "É de iniciativa privativa do presidente da República lei que disponha sobre normas gerais para a organização do Ministério Público dos estados.",
    "correta": "E",
    "tema": "Processo Legislativo",
    "justificativa": "Normas gerais para a organização do MP dos estados são de competência da União, mas a iniciativa é do Procurador-Geral da República (para o MPU) ou facultada conforme art. 61, § 1º. Na verdade, a iniciativa de lei orgânica do MPU é do PGR. Normas gerais são lei complementar federal. A pegadinha: organização do MP estadual é iniciativa do PGJ do estado (lei local) ou PR (normas gerais)? A iniciativa para a Lei Orgânica Nacional é do Presidente, mas a organização específica é do PGJ. No entanto, a assertiva diz 'iniciativa privativa do presidente'. O erro está em ignorar a autonomia do MP [34]. Analogia: O Presidente não é o chefe do MP; o MP tem autonomia para propor suas próprias leis de organização."
  },
  {
    "enunciado": "A ADPF (Arguição de Descumprimento de Preceito Fundamental) é a via adequada para se obter o cancelamento de súmula vinculante.",
    "correta": "E",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "O cancelamento de Súmula Vinculante possui procedimento próprio (art. 103-A, § 2º, CF), não sendo a ADPF a via correta [35]. Analogia: Para revogar uma súmula, você usa a 'porta' específica da revisão de súmula, não a 'janela' genérica da ADPF."
  },
  {
    "enunciado": "A subsidiariedade constitui pressuposto de admissibilidade da ação direta de inconstitucionalidade (ADI).",
    "correta": "E",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "A subsidiariedade é pressuposto específico da *ADPF*, não da ADI. A ADI é a via principal para leis federais/estaduais pós-88 [36]. Analogia: A ADPF é o 'soldado de reserva' (subsidiário) que só entra quando ninguém mais (como a ADI) pode resolver; a ADI é o titular."
  },
{
    "enunciado": "O procedimento administrativo demarcatório de terras indígenas possui natureza constitutiva, razão pela qual ele confere aos povos indígenas a titularidade definitiva dos direitos territoriais a partir da homologação.",
    "correta": "E",
    "tema": "Direitos Indígenas",
    "justificativa": "A demarcação tem natureza **declaratória**, não constitutiva. O direito dos índios sobre as terras é 'originário', ou seja, anterior à própria criação do Estado brasileiro. A demarcação apenas reconhece oficialmente algo que já existe [1]. Analogia: A certidão de nascimento não cria a pessoa (natureza constitutiva), ela apenas declara e oficializa que a pessoa já nasceu e existe (natureza declaratória)."
  },
  {
    "enunciado": "A validade da demarcação de terras indígenas, quando situadas em região de fronteira, independe de manifestação do Conselho de Defesa Nacional.",
    "correta": "E",
    "tema": "Direitos Indígenas / Defesa Nacional",
    "justificativa": "Em áreas de fronteira, a segurança nacional é prioritária. A Constituição exige a oitiva do Conselho de Defesa Nacional para a utilização de áreas indispensáveis à segurança do território, o que inclui demarcações nessas zonas [2]. Analogia: Você pode reformar sua casa, mas se o muro faz divisa com uma base militar (fronteira), precisa consultar o general (Conselho de Defesa) antes de mexer na cerca."
  },
  {
    "enunciado": "A Constituição Federal consagra o princípio da responsabilidade ambiental entre as gerações, impondo às gerações presentes o dever de defender e preservar o meio ambiente para si e para as gerações vindouras.",
    "correta": "C",
    "tema": "Meio Ambiente",
    "justificativa": "Este é o princípio da solidariedade intergeracional previsto no *caput* do art. 225 da CF. O meio ambiente é um bem de uso comum do povo a ser preservado para o futuro [3]. Analogia: O planeta é como uma casa alugada de veraneio; você deve usufruir dela (geração presente) mas tem a obrigação de entregá-la em boas condições para os próximos hóspedes (gerações futuras)."
  },
  {
    "enunciado": "De acordo com a Constituição Federal, a Caatinga e o Cerrado são classificados expressamente como patrimônio nacional.",
    "correta": "E",
    "tema": "Meio Ambiente",
    "justificativa": "O art. 225, § 4º, lista taxativamente como patrimônio nacional a Floresta Amazônica, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira. O Cerrado e a Caatinga, embora biomas importantes, não estão nesta lista VIP constitucional [4]. Analogia: É como uma lista de convidados VIP para uma festa exclusiva; embora o Cerrado e a Caatinga sejam amigos importantes, seus nomes não foram escritos na prancheta do segurança (Constituição)."
  },
  {
    "enunciado": "Ao conferir à coletividade o direito-dever de tutelar e preservar o meio ambiente, a Constituição exige a participação popular na administração desse bem de uso comum.",
    "correta": "C",
    "tema": "Meio Ambiente",
    "justificativa": "A defesa do meio ambiente não é exclusiva do Estado; é um dever compartilhado com a sociedade (coletividade), exigindo participação ativa [5]. Analogia: A limpeza do condomínio não é dever apenas do síndico (Estado); todos os moradores (coletividade) devem ajudar a não jogar lixo no chão."
  },
  {
    "enunciado": "São consideradas cruéis, para fins de vedação constitucional, as manifestações culturais com animais integrantes do patrimônio cultural brasileiro, ainda que regulamentadas por lei específica que assegure o bem-estar dos animais.",
    "correta": "E",
    "tema": "Meio Ambiente",
    "justificativa": "A Emenda Constitucional nº 96 acrescentou o § 7º ao art. 225, estabelecendo que **não** se consideram cruéis as práticas desportivas que utilizem animais, desde que sejam manifestações culturais registradas e regulamentadas (ex: vaquejada) [6]. Analogia: O futebol americano parece violento, mas por ser um esporte regulamentado e cultural, não é considerado 'agressão' perante a lei, diferentemente de uma briga de rua."
  },
  {
    "enunciado": "As condutas e atividades lesivas ao meio ambiente sujeitarão os infratores a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados.",
    "correta": "C",
    "tema": "Meio Ambiente",
    "justificativa": "Trata-se da tríplice responsabilidade ambiental (civil, penal e administrativa), que são independentes e cumulativas [6]. Analogia: Se você quebra a janela do vizinho, pode ter que pagar o conserto (civil), levar uma multa do condomínio (administrativa) e ainda responder à polícia se foi intencional (penal). Uma conta não elimina a outra."
  },
  {
    "enunciado": "Além das pessoas físicas, as pessoas jurídicas também podem ser responsabilizadas penalmente pela prática de crimes ambientais.",
    "correta": "C",
    "tema": "Meio Ambiente",
    "justificativa": "A Constituição (art. 225, § 3º) prevê expressamente a responsabilidade penal da pessoa jurídica em crimes ambientais [7]. Analogia: Não é apenas o motorista (pessoa física) que pode ser punido; a empresa de transporte (pessoa jurídica) também pode ter sua 'carteira suspensa' ou sofrer penas restritivas por crimes contra a natureza."
  },
  {
    "enunciado": "O Sistema Nacional de Ciência, Tecnologia e Inovação (SNCTI) deve ser organizado em regime de colaboração entre entes públicos e privados.",
    "correta": "C",
    "tema": "Ciência e Tecnologia",
    "justificativa": "A CF (art. 219-B) promove a colaboração entre Estado, universidades, empresas e sociedade civil para impulsionar a inovação [8]. Analogia: A inovação é um jogo de equipe onde o governo dá o campo, a universidade treina os jogadores e a empresa faz o gol; todos precisam jogar juntos."
  },
  {
    "enunciado": "É dever do estabelecimento de ensino informar ao pai e à mãe do aluno a frequência e o rendimento dele, salvo se um deles não conviver diretamente com o estudante.",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A obrigação de informar aplica-se **ainda que** o pai ou a mãe não convivam com o estudante. O direito à informação educacional decorre do poder familiar e não da coabitação [9]. Analogia: O acionista de uma empresa (pai/mãe) tem direito a ver o balanço financeiro (boletim) mesmo que não trabalhe no escritório da empresa todos os dias."
  },
  {
    "enunciado": "Constitucionalmente, não se prevê a fixação de conteúdos mínimos para o ensino fundamental, garantindo-se total liberdade curricular às escolas.",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A CF (art. 210) determina expressamente a fixação de conteúdos mínimos para assegurar formação básica comum (hoje materializada na BNCC) [10]. Analogia: Cada filial do McDonald's pode ter decorações diferentes, mas o Big Mac (conteúdo mínimo) tem que ser igual em todas para garantir o padrão da marca (formação nacional)."
  },
  {
    "enunciado": "O ensino religioso é de matrícula obrigatória nas escolas públicas de ensino fundamental.",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "O ensino religioso tem oferta obrigatória pela escola, mas a **matrícula é facultativa** para o aluno (art. 210, § 1º) [11]. Analogia: A escola é obrigada a colocar brócolis no buffet (oferta), mas o aluno só coloca no prato se quiser (matrícula facultativa)."
  },
  {
    "enunciado": "A Constituição Federal determina que o Distrito Federal atue prioritariamente na educação infantil e no ensino fundamental.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "O DF acumula as competências estaduais e municipais. Como os municípios priorizam o fundamental/infantil, o DF também assume essa prioridade [12]. Analogia: O DF é o 'ornitorrinco' da federação (mistura de estado e município), então ele tem que cuidar tanto das crianças pequenas (função municipal) quanto dos maiores."
  },
  {
    "enunciado": "Os municípios devem aplicar, no mínimo, 25% da receita resultante de impostos, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "O art. 212 obriga Estados, DF e Municípios a aplicarem nunca menos de 25% em educação (a União aplica 18%) [13]. Analogia: De cada 4 reais que entram no cofre da prefeitura, pelo menos 1 real tem carimbo obrigatório para a escola."
  },
  {
    "enunciado": "Além de garantir educação básica obrigatória e gratuita dos 4 aos 17 anos, a Constituição assegura a oferta gratuita a todos os que a ela não tiveram acesso na idade própria.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "Garantia constitucional (art. 208, I) que ampara o EJA (Educação de Jovens e Adultos) [14]. Analogia: O ônibus da educação passa na hora certa (4-17 anos), mas se você perdeu, o governo é obrigado a mandar um ônibus extra (EJA) para te buscar depois."
  },
  {
    "enunciado": "A educação básica obrigatória engloba apenas o ensino fundamental e o ensino médio.",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A educação básica obrigatória vai dos 4 aos 17 anos, englobando a **pré-escola**, o ensino fundamental e o ensino médio (art. 208, I) [15]. Analogia: O 'combo' obrigatório inclui a entrada (pré-escola), o prato principal (fundamental) e a sobremesa (médio); não pode pular a entrada."
  },
  {
    "enunciado": "A participação da iniciativa privada no sistema de ensino é livre, independentemente de autorização e avaliação de qualidade pelo poder público.",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "O ensino é livre à iniciativa privada, mas condicionado ao cumprimento de normas gerais e à **autorização e avaliação** pelo poder público (art. 209) [16]. Analogia: Você pode abrir seu próprio restaurante (escola privada), mas precisa do alvará da vigilância sanitária (autorização do Estado) e passar por inspeções (avaliação)."
  },
  {
    "enunciado": "Compete exclusivamente à União exercer a função redistributiva e supletiva em relação à educação.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "A União tem o papel de 'equilibrar a balança', prestando assistência técnica e financeira aos entes com menos recursos (art. 211, § 1º) [17]. Analogia: A União atua como o 'tio rico' da família, ajudando os sobrinhos (estados/municípios) que não conseguem pagar todas as contas da escola sozinhos."
  },
  {
    "enunciado": "As universidades gozam de autonomia didático-científica, administrativa e de gestão financeira e patrimonial.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "Literalidade do art. 207 da CF [18]. Analogia: As universidades são como 'filhos adultos' que moram no anexo da casa; seguem as regras gerais da família (Constituição), mas têm a chave da própria porta e gerenciam sua própria mesada (autonomia)."
  },
  {
    "enunciado": "A ordem social tem como base o primado do trabalho e como objetivo exclusivo a distribuição de renda.",
    "correta": "E",
    "tema": "Ordem Social",
    "justificativa": "A ordem social tem como base o primado do trabalho e como objetivos o **bem-estar e a justiça sociais** (art. 193). A distribuição de renda é um meio/consequência, não o texto literal do objetivo [19]. Analogia: O objetivo da dieta é 'saúde' (bem-estar), não apenas 'comer salada' (distribuição), embora estejam ligados."
  },
  {
    "enunciado": "O Sistema Financeiro Nacional pode ser regulado por lei ordinária.",
    "correta": "E",
    "tema": "Sistema Financeiro Nacional",
    "justificativa": "A Constituição exige **Lei Complementar** para regular o SFN (art. 192) [20]. Analogia: Para construir a caixa-forte do banco (SFN), exige-se um concreto especial reforçado (Lei Complementar), não basta tijolo comum (Lei Ordinária)."
  },
  {
    "enunciado": "A Constituição Federal veda expressamente a participação do capital estrangeiro nas instituições que integram o Sistema Financeiro Nacional.",
    "correta": "E",
    "tema": "Sistema Financeiro Nacional",
    "justificativa": "A participação é permitida, observados os interesses nacionais e os acordos internacionais (art. 192) [21]. Analogia: Estrangeiros podem entrar na festa do sistema financeiro, desde que tenham o convite especial e sigam as regras da casa."
  },
  {
    "enunciado": "O Estado só poderá intervir na economia em casos excepcionais, não lhe sendo permitido atuar para corrigir falhas de mercado.",
    "correta": "E",
    "tema": "Ordem Econômica",
    "justificativa": "O Estado atua como agente normativo e regulador justamente para fiscalizar, incentivar e planejar, o que inclui a correção de falhas de mercado [22]. Analogia: O juiz de futebol (Estado) entra em campo não para chutar a bola, mas para apitar as faltas (corrigir falhas) e garantir que o jogo seja justo."
  },
  {
    "enunciado": "As empresas públicas e sociedades de economia mista podem ser constituídas tanto para a prestação de serviços públicos quanto para a exploração da atividade econômica.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "O Estado pode usar suas estatais para prestar serviços (ex: Correios) ou para explorar atividade econômica em competição (ex: Banco do Brasil) [23]. Analogia: O governo tem dois tipos de veículos na garagem: ambulâncias para socorro (serviço público) e táxis para ganhar dinheiro no mercado (atividade econômica)."
  },
  {
    "enunciado": "No exercício da função de planejamento econômico, as diretrizes estatais são determinantes para o setor público e indicativas para o setor privado.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "Conforme art. 174 da CF. O Estado manda em si mesmo, mas apenas aconselha o mercado [24]. Analogia: O GPS é uma ordem para o motorista do ônibus da prefeitura (setor público), mas é apenas uma sugestão de rota para o seu carro particular (setor privado)."
  },
{
    "enunciado": "Segundo a CF, a livre iniciativa e a valorização do trabalho humano são fundamentos da ordem econômica.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "Literalidade do art. 170, *caput*, da Constituição. A ordem econômica capitalista brasileira não é selvagem; ela equilibra a liberdade de empreender (livre iniciativa) com a dignidade de quem trabalha (valorização do trabalho) [1]. Analogia: A economia é como uma carroça puxada por dois cavalos que precisam andar no mesmo ritmo: o lucro das empresas e o bem-estar dos trabalhadores."
  },
  {
    "enunciado": "O texto constitucional assegura o livre exercício da atividade econômica, independentemente de autorização dos órgãos públicos, salvo nos casos previstos em lei.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "É o princípio da liberdade econômica (art. 170, parágrafo único). A regra é a liberdade; a burocracia (autorização) é a exceção [2]. Analogia: Abrir um negócio deve ser como caminhar na calçada (livre para todos), e não como entrar em uma área militar (que exige permissão especial), salvo para atividades perigosas ou reguladas."
  },
  {
    "enunciado": "A CF autoriza o Estado a intervir na economia como agente normativo e regulador da atividade econômica.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "O Estado atua fiscalizando, incentivando e planejando (art. 174). Ele define as regras do jogo, mas não necessariamente joga todas as partidas [3]. Analogia: O Estado é o árbitro e a comissão técnica da liga, garantindo que o campeonato econômico aconteça de forma justa e organizada."
  },
  {
    "enunciado": "Em regra, a exploração direta de atividade econômica pelo Estado só é permitida quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "O Estado não deve ser empresário por vocação. Ele só assume esse papel (ex: Petrobras, Correios) quando o mercado não pode resolver ou quando a segurança do país exige [4]. Analogia: O governo não deve abrir padarias, a menos que falte pão para todos (interesse coletivo) ou que o pão seja estratégico para a guerra (segurança nacional)."
  },
  {
    "enunciado": "Constituem monopólio da União a pesquisa e a lavra das jazidas de petróleo e gás natural.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "Literalidade do art. 177, I. O petróleo é considerado um recurso estratégico fundamental, mantido sob controle federal [5]. Analogia: O petróleo é o 'sangue' da economia industrial, por isso o governo mantém a mão firme na torneira da extração."
  },
  {
    "enunciado": "Segundo a CF, a defesa do meio ambiente é um fundamento da ordem econômica.",
    "correta": "E",
    "tema": "Ordem Econômica",
    "justificativa": "A defesa do meio ambiente é um **princípio** da ordem econômica (art. 170, VI), não um fundamento. Os fundamentos são a valorização do trabalho e a livre iniciativa [6]. Analogia: Os fundamentos são o alicerce da casa (trabalho/livre iniciativa), enquanto o meio ambiente é uma das regras de convivência dos moradores (princípio)."
  },
  {
    "enunciado": "É inconstitucional a exigência de inscrição do defensor público nos quadros da Ordem dos Advogados do Brasil para o exercício de suas funções públicas.",
    "correta": "C",
    "tema": "Funções Essenciais à Justiça",
    "justificativa": "O STF decidiu (RE 1.240.999) que a capacidade postulatória do Defensor decorre da sua nomeação e posse no cargo, não da inscrição na OAB. A submissão à OAB feriria a autonomia da Defensoria [7]. Analogia: O Defensor é como um motorista de ambulância oficial; sua habilitação vem do Estado e do concurso, não precisando da carteira do sindicato dos motoristas privados (OAB) para dirigir."
  },
  {
    "enunciado": "O chefe da Advocacia-Geral da União é o advogado-geral da União, nomeado pelo presidente da República entre integrantes da carreira com mais de trinta e cinco anos de idade.",
    "correta": "C",
    "tema": "Advocacia Pública",
    "justificativa": "Requisitos constitucionais do art. 131, § 1º: livre nomeação pelo PR, cidadãos > 35 anos, notável saber jurídico e reputação ilibada [8]. Analogia: O AGU é o advogado pessoal do Estado brasileiro, escolhido a dedo pelo Presidente para defender os interesses da União."
  },
  {
    "enunciado": "Cabe à Polícia Federal exercer, com exclusividade, as funções de polícia judiciária da União, dos estados e do Distrito Federal.",
    "correta": "E",
    "tema": "Segurança Pública",
    "justificativa": "A PF exerce a polícia judiciária exclusivamente da **União**. Os Estados e o DF possuem suas próprias Polícias Civis para essa função [9]. Analogia: O FBI (Polícia Federal) investiga crimes federais; não cabe a ele investigar o roubo da padaria da esquina, que é trabalho da polícia local (Civil)."
  },
  {
    "enunciado": "Os corpos de bombeiros militares integram o sistema de segurança pública, a eles incumbindo a execução das atividades de defesa civil.",
    "correta": "C",
    "tema": "Segurança Pública",
    "justificativa": "Literalidade do art. 144, § 5º. Além de apagar incêndios, os bombeiros coordenam a defesa civil [10]. Analogia: O bombeiro tem dupla função: é o soldado do fogo e o gerente de crises em desastres naturais."
  },
  {
    "enunciado": "O patrulhamento ostensivo das ferrovias federais compete à Polícia Rodoviária Federal.",
    "correta": "E",
    "tema": "Segurança Pública",
    "justificativa": "Compete à **Polícia Ferroviária Federal** (PFF) o patrulhamento das ferrovias (art. 144, § 3º), embora na prática essa corporação seja quase inexistente, a competência constitucional é distinta da PRF [9]. Analogia: Pedir para a polícia da estrada (Rodoviária) cuidar dos trilhos (Ferroviária) é confundir o asfalto com o aço."
  },
  {
    "enunciado": "Não cabe impetração de habeas corpus em face de punições disciplinares militares.",
    "correta": "C",
    "tema": "Direitos Fundamentais / Militares",
    "justificativa": "O art. 142, § 2º, veda HC para o *mérito* das punições disciplinares, embora o STF admita para analisar a *legalidade* (formalidades) [11]. Analogia: O juiz não pode anular a punição porque achou o soldado 'pouco culpado' (mérito), mas pode anular se o comandante puniu sem ouvir o soldado (legalidade)."
  },
  {
    "enunciado": "A União pode excepcionalmente realizar intervenção federal nos municípios localizados em territórios federais, mas não pode intervir nos municípios dos estados-membros.",
    "correta": "C",
    "tema": "Intervenção Federal",
    "justificativa": "A União só intervém onde ela tem relação direta (Estados e Territórios). Quem intervém em Municípios estaduais é o Estado-membro (art. 35) [12]. Analogia: O avô (União) só dá bronca direta no filho (Estado) ou no neto que mora com ele (Território); o neto que mora com o filho (Município estadual) leva bronca do pai (Estado)."
  },
  {
    "enunciado": "A falta de pagamento da dívida fundada por dois anos consecutivos, sem justificativa de força maior, não constitui motivo para intervenção estadual em município, caso o inadimplemento esteja vinculado à gestão anterior.",
    "correta": "E",
    "tema": "Intervenção",
    "justificativa": "A Constituição prevê a intervenção se a dívida não for paga por dois anos consecutivos, salvo força maior (art. 35, I). A vinculação à gestão anterior não é excludente automática expressa no texto constitucional, embora a jurisprudência analise a voluntariedade [13]. Analogia: A dívida é do 'CNPJ' da prefeitura, não do CPF do prefeito; se a prefeitura não paga, o Estado pode intervir."
  },
  {
    "enunciado": "O presidente da República deverá solicitar previamente a autorização do Congresso Nacional para decretar o estado de sítio.",
    "correta": "C",
    "tema": "Estado de Sítio",
    "justificativa": "No Estado de Sítio (mais grave), o Presidente **solicita autorização** antes de decretar (art. 137). No Estado de Defesa, ele decreta e depois comunica [14]. Analogia: O Estado de Sítio é como derrubar uma parede da casa: você precisa pedir permissão ao dono (Congresso) *antes* de pegar a marreta."
  },
  {
    "enunciado": "Independentemente do valor, todos os pagamentos devidos pelas fazendas públicas... em virtude de sentença judiciária... devem ser feitos exclusivamente na ordem cronológica de apresentação dos precatórios.",
    "correta": "C",
    "tema": "Precatórios",
    "justificativa": "Regra geral do art. 100 da CF, visando a impessoalidade e igualdade na fila de recebimento [15]. Analogia: Na fila do açougue do governo (precatórios), ninguém fura fila (ordem cronológica), não importa quem seja."
  },
  {
    "enunciado": "A União, a seu critério exclusivo e na forma de lei, poderá assumir débitos, oriundos de precatórios, de estados, do Distrito Federal e de municípios, refinanciando-os diretamente.",
    "correta": "E",
    "tema": "Precatórios",
    "justificativa": "A EC 62/2009 permitiu regime especial, mas a assunção de débitos pela União não é 'a seu critério exclusivo' e irrestrita, dependendo de regras constitucionais rígidas (art. 100 e ADCT) [16]. Analogia: A União não é um banco que compra as dívidas dos parentes (estados) quando bem entende; existem regras estritas para esse socorro financeiro."
  },
  {
    "enunciado": "Compete à justiça do trabalho julgar as ações relativas às penalidades administrativas que, relacionadas ao descumprimento de normas trabalhistas, tenham sido impostas aos empregadores pelos órgãos de fiscalização das relações de trabalho.",
    "correta": "C",
    "tema": "Justiça do Trabalho",
    "justificativa": "Competência ampliada pela EC 45/2004 (art. 114, VII). Se a multa vem do fiscal do trabalho, o juiz do trabalho é quem julga o recurso [17]. Analogia: Se você toma uma multa de trânsito na estrada do trabalho, quem julga é o órgão de trânsito, mas se a multa é por não assinar a carteira, quem julga é a Justiça do Trabalho."
  },
  {
    "enunciado": "As ações rescisórias e as revisões criminais de julgados de um tribunal regional federal são de competência do Superior Tribunal de Justiça.",
    "correta": "E",
    "tema": "Competência Jurisdicional",
    "justificativa": "Os Tribunais (TRFs) julgam suas *próprias* ações rescisórias (art. 108, I, 'b'). O STJ julga rescisórias de seus próprios julgados [18]. Analogia: Quem conserta o erro de fabricação (rescisória) é a própria fábrica que fez o produto (Tribunal), não a matriz superior (STJ), a menos que o produto tenha vindo da matriz."
  },
  {
    "enunciado": "Poderão ser ajuizados processos contra a União na seção judiciária do Distrito Federal, ainda que o autor seja domiciliado em outro estado da Federação.",
    "correta": "C",
    "tema": "Justiça Federal",
    "justificativa": "O art. 109, § 2º oferece opções de foro ao autor contra a União: domicílio do autor, local do ato/fato, situação da coisa ou no **Distrito Federal** [19]. Analogia: Para processar o governo federal, você pode jogar em casa (seu domicílio) ou no campo dele (Distrito Federal); a escolha é sua."
  },
  {
    "enunciado": "Compete ao Supremo Tribunal Federal (STF) julgar os mandados de segurança impetrados contra ato de ministro de Estado.",
    "correta": "E",
    "tema": "Competência STF/STJ",
    "justificativa": "Mandado de Segurança contra Ministro de Estado é competência originária do **STJ** (art. 105, I, 'b'), não do STF [20]. Analogia: Ministros de Estado são o 'alto escalão', mas quem fiscaliza seus atos diretos via MS é o Tribunal Superior (STJ), deixando o Supremo (STF) para o Presidente e o Congresso."
  },
  {
    "enunciado": "Em caso de crime de responsabilidade cometido pelo Presidente da República, o julgamento caberá ao Senado Federal.",
    "correta": "C",
    "tema": "Responsabilidade do Presidente",
    "justificativa": "A Câmara autoriza, mas o **Senado julga** (art. 52, I) [21]. Analogia: A Câmara é o delegado que indicia (aceita a denúncia), mas o Senado é o juiz que bate o martelo no julgamento do impeachment."
  },
  {
    "enunciado": "Em caso de crime de responsabilidade do presidente da República, recebida a denúncia pela Câmara dos Deputados, o chefe do governo ficará suspenso de suas funções.",
    "correta": "E",
    "tema": "Responsabilidade do Presidente",
    "justificativa": "A suspensão ocorre apenas após a instauração do processo pelo **Senado Federal** (art. 86, § 1º, II), não basta a autorização da Câmara. O STF definiu que o Senado não é obrigado a instaurar mesmo com a autorização da Câmara [22]. Analogia: A Câmara dá a 'luz verde', mas o carro (Presidente) só para (suspensão) quando o Senado efetivamente começa a dirigir o processo."
  },
  {
    "enunciado": "O presidente da República, mediante decreto, pode dispor sobre a extinção de cargos públicos somente se estes estiverem vagos.",
    "correta": "C",
    "tema": "Poder Executivo",
    "justificativa": "Decreto autônomo (art. 84, VI, 'b'). Se o cargo está ocupado, só lei pode extinguir. Se está vago, o decreto resolve [23]. Analogia: O Presidente pode jogar fora a cadeira vazia (cargo vago) com uma ordem simples, mas se tiver alguém sentado nela (ocupado), precisa de uma lei para tirar a cadeira."
  },
  {
    "enunciado": "Compete ao presidente da República expedir instruções para a execução de leis, decretos e regulamentos.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "Expedir instruções para a execução de leis é competência dos **Ministros de Estado** (art. 87, parágrafo único, II). O Presidente expede decretos e regulamentos [24]. Analogia: O Presidente assina a planta da obra (Decreto), mas quem dá as instruções detalhadas para os operários (Instruções) são os engenheiros (Ministros)."
  },
 {
    "enunciado": "É inconstitucional a exigência de inscrição do defensor público nos quadros da Ordem dos Advogados do Brasil (OAB) para o exercício de suas funções públicas.",
    "correta": "C",
    "tema": "Funções Essenciais à Justiça",
    "justificativa": "O STF entende que a capacidade postulatória do Defensor Público decorre diretamente de sua nomeação e posse no cargo, sendo inconstitucional exigir inscrição na OAB, pois isso violaria a autonomia administrativa e funcional da Defensoria [1]. Analogia: O Defensor é como um motorista oficial do Estado (habilitação via concurso e cargo); ele não precisa da 'carteirinha' do clube privado dos motoristas (OAB) para dirigir o carro oficial."
  },
  {
    "enunciado": "O chefe da Advocacia-Geral da União é o advogado-geral da União, nomeado pelo presidente da República obrigatoriamente entre integrantes da carreira com mais de trinta e cinco anos de idade.",
    "correta": "E",
    "tema": "Advocacia Pública",
    "justificativa": "A Constituição (art. 131, § 1º) exige que o AGU seja nomeado entre **cidadãos** (não necessariamente da carreira) maiores de 35 anos, de notável saber jurídico e reputação ilibada [2]. Analogia: Para ser o técnico da seleção (AGU), você precisa entender muito de futebol (saber jurídico) e ser experiente (+35), mas não precisa ter sido jogador do time (integrante da carreira) antes."
  },
  {
    "enunciado": "A Polícia Federal tem como atribuição o exercício, com exclusividade, das funções de polícia judiciária da União, dos estados e do Distrito Federal.",
    "correta": "E",
    "tema": "Segurança Pública",
    "justificativa": "A Polícia Federal exerce com exclusividade a polícia judiciária da **União**. A polícia judiciária dos estados e do DF é competência das Polícias Civis [3]. Analogia: O FBI (Polícia Federal) investiga crimes contra o país; não é trabalho dele investigar o roubo da loja do bairro, que é função da polícia local (Civil)."
  },
  {
    "enunciado": "Os corpos de bombeiros militares integram o sistema de segurança pública, a eles incumbindo a execução das atividades de defesa civil.",
    "correta": "C",
    "tema": "Segurança Pública",
    "justificativa": "Literalidade do art. 144, § 5º da CF. Os bombeiros acumulam a função de combate a incêndios e proteção da população em desastres (defesa civil) [4]. Analogia: O bombeiro carrega duas ferramentas: a mangueira para o fogo e o plano de emergência para as catástrofes."
  },
  {
    "enunciado": "O patrulhamento ostensivo das ferrovias federais compete à Polícia Rodoviária Federal.",
    "correta": "E",
    "tema": "Segurança Pública",
    "justificativa": "Compete à **Polícia Ferroviária Federal** o patrulhamento das ferrovias (art. 144, § 3º). A PRF cuida das rodovias [3]. Analogia: Pedir para a Polícia Rodoviária cuidar dos trilhos é como pedir para o salva-vidas da piscina cuidar da segurança no meio do mar; são áreas de atuação distintas."
  },
  {
    "enunciado": "Não cabe impetração de habeas corpus em face de punições disciplinares militares.",
    "correta": "C",
    "tema": "Direitos Fundamentais / Militares",
    "justificativa": "O art. 142, § 2º veda HC para o mérito das punições disciplinares militares, embora o STF admita para análise de pressupostos de legalidade (competência, forma, etc.) [5]. Analogia: O juiz não pode anular a punição porque achou o soldado 'pouco culpado' (mérito), mas pode anular se o comandante puniu sem ter autoridade para isso (legalidade)."
  },
  {
    "enunciado": "A União pode excepcionalmente realizar intervenção federal nos municípios localizados em territórios federais, mas não pode intervir nos municípios dos estados-membros.",
    "correta": "C",
    "tema": "Intervenção Federal",
    "justificativa": "A União intervém em Estados e no DF. Nos Municípios localizados em Estados, quem intervém é o Estado. A União só intervém em Municípios se eles estiverem em Territórios Federais (art. 35) [6]. Analogia: O avô (União) só dá bronca direta no neto (Município) se o neto morar na casa dele (Território); se morar com o pai (Estado), é o pai quem dá a bronca."
  },
  {
    "enunciado": "A falta de pagamento da dívida fundada por dois anos consecutivos, sem justificativa de força maior, não constitui motivo para intervenção estadual em município, caso o inadimplemento esteja vinculado à gestão anterior.",
    "correta": "E",
    "tema": "Intervenção",
    "justificativa": "O não pagamento da dívida fundada por dois anos consecutivos é causa objetiva de intervenção (art. 35, I), independentemente de ser dívida de gestão anterior, pois a dívida é do ente público [7]. Analogia: A dívida está no nome da 'casa' (Município), não no CPF do antigo morador (Prefeito anterior); se não pagar, a intervenção bate na porta."
  },
  {
    "enunciado": "O presidente da República deverá solicitar previamente a autorização do Congresso Nacional para decretar o estado de sítio.",
    "correta": "C",
    "tema": "Estado de Sítio",
    "justificativa": "Para o Estado de Sítio (medida mais grave), o Presidente precisa pedir 'benção' (autorização) antes. No Estado de Defesa, ele decreta e depois comunica [8]. Analogia: O Estado de Sítio é como derrubar uma parede estrutural: você precisa da aprovação do engenheiro (Congresso) *antes* de pegar a marreta."
  },
  {
    "enunciado": "Independentemente do valor, todos os pagamentos devidos pelas fazendas públicas em virtude de sentença judiciária devem ser feitos exclusivamente na ordem cronológica de apresentação dos precatórios.",
    "correta": "C",
    "tema": "Precatórios",
    "justificativa": "Regra geral do art. 100 da CF para garantir impessoalidade e isonomia na fila de recebimento [9]. Analogia: Na fila do pagamento do governo, não existe 'VIP' furando fila; a regra é a ordem de chegada (cronológica)."
  },
  {
    "enunciado": "A União, a seu critério exclusivo e na forma de lei, poderá assumir débitos oriundos de precatórios de estados e municípios, refinanciando-os diretamente.",
    "correta": "E",
    "tema": "Precatórios",
    "justificativa": "A assunção de débitos não é a 'critério exclusivo' e livre da União, dependendo de requisitos constitucionais estritos (Emendas Constitucionais sobre regime especial) [10]. Analogia: A União não é um banco que compra as dívidas dos parentes (estados) quando bem entende; existem regras rígidas para esse 'socorro'."
  },
  {
    "enunciado": "Compete à justiça do trabalho julgar as ações relativas às penalidades administrativas que, relacionadas ao descumprimento de normas trabalhistas, tenham sido impostas aos empregadores pelos órgãos de fiscalização.",
    "correta": "C",
    "tema": "Justiça do Trabalho",
    "justificativa": "Competência prevista no art. 114, VII da CF. Se a multa tem origem na fiscalização do trabalho, a discussão é na Justiça do Trabalho [11]. Analogia: Se você leva uma multa por não usar capacete na obra, quem julga o recurso é o tribunal do trabalho, não o tribunal de trânsito."
  },
  {
    "enunciado": "As ações rescisórias e as revisões criminais de julgados de um tribunal regional federal (TRF) são de competência do Superior Tribunal de Justiça (STJ).",
    "correta": "E",
    "tema": "Poder Judiciário",
    "justificativa": "Os próprios tribunais julgam as rescisórias de seus julgados (art. 108, I, 'b'). O STJ julga rescisórias de julgados do STJ [12]. Analogia: Quem conserta o defeito de fábrica (rescisória) é a própria fábrica que fez o produto (TRF), não a matriz (STJ), salvo em grau de recurso."
  },
  {
    "enunciado": "Poderão ser ajuizados processos contra a União na seção judiciária do Distrito Federal, ainda que o autor seja domiciliado em outro estado da Federação.",
    "correta": "C",
    "tema": "Justiça Federal",
    "justificativa": "O art. 109, § 2º dá ao autor a opção de foro: seu domicílio, local do fato, situação da coisa ou no Distrito Federal [13]. Analogia: Para processar o governo federal, você pode jogar 'em casa' (seu estado) ou no 'campo do adversário' (DF); a escolha é sua."
  },
  {
    "enunciado": "Compete ao Supremo Tribunal Federal (STF) julgar os mandados de segurança impetrados contra ato de ministro de Estado.",
    "correta": "E",
    "tema": "Competência STF/STJ",
    "justificativa": "Mandado de Segurança contra Ministro de Estado é competência originária do **STJ** (art. 105, I, 'b') [14]. Analogia: Ministros de Estado são importantes, mas quem vigia seus atos diretos é o Tribunal Superior (STJ), deixando o Supremo (STF) para o Presidente e o Congresso."
  },
  {
    "enunciado": "Em caso de crime de responsabilidade do presidente da República, recebida a denúncia pela Câmara dos Deputados, o chefe do governo ficará imediatamente suspenso de suas funções.",
    "correta": "E",
    "tema": "Responsabilidade do Presidente",
    "justificativa": "A suspensão só ocorre após a **instauração** do processo pelo Senado Federal (art. 86, § 1º, II), e não apenas com a autorização da Câmara [15]. Analogia: A Câmara acende o sinal amarelo (autoriza), mas o carro só para (suspensão) quando o Senado decide efetivamente começar o julgamento."
  },
  {
    "enunciado": "O presidente da República, mediante decreto, pode dispor sobre a extinção de cargos públicos somente se estes estiverem vagos.",
    "correta": "C",
    "tema": "Poder Executivo",
    "justificativa": "Decreto autônomo (art. 84, VI, 'b'). Se o cargo está ocupado, só lei pode extinguir. Se está vago, o decreto resolve [16]. Analogia: O Presidente pode jogar fora a cadeira vazia (cargo vago) com uma ordem simples, mas se tiver alguém sentado nela (ocupado), precisa de uma lei para tirar a cadeira."
  },
  {
    "enunciado": "Compete ao presidente da República expedir instruções para a execução de leis, decretos e regulamentos.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "Expedir instruções é competência dos **Ministros de Estado** (art. 87, parágrafo único, II). O Presidente expede decretos e regulamentos [17]. Analogia: O Presidente assina a planta da obra (Decreto), mas quem dá as instruções detalhadas para os operários (Instruções) são os engenheiros (Ministros)."
  },
  {
    "enunciado": "A atividade fiscalizatória realizada pelo Tribunal de Contas da União (TCU) não se confunde com aquela realizada pelo próprio órgão administrativo (controle interno).",
    "correta": "C",
    "tema": "Tribunal de Contas",
    "justificativa": "O TCU exerce controle externo; o órgão administrativo exerce controle interno. Ambos coexistem [18]. Analogia: O TCU é o auditor externo contratado pelos acionistas (Congresso); o controle interno é o gerente de compliance da própria empresa."
  },
  {
    "enunciado": "Verificada a existência de ilegalidade em contrato da administração pública, o TCU deve sustar imediatamente a execução do contrato.",
    "correta": "E",
    "tema": "Tribunal de Contas",
    "justificativa": "Se for **contrato**, o TCU comunica ao Congresso, que tem competência para sustar. O TCU só susta se o Congresso não agir em 90 dias (art. 71, § 1º e § 2º). O TCU susta diretamente **atos**, não contratos de imediato [19]. Analogia: O árbitro (TCU) para a jogada (ato), mas só a Liga (Congresso) pode cancelar o contrato do jogador; o árbitro só cancela se a Liga se omitir."
  },
  {
    "enunciado": "Compete exclusivamente ao Congresso Nacional fiscalizar e controlar, diretamente ou por qualquer de suas casas, os atos do Poder Executivo, incluídos os da administração indireta.",
    "correta": "C",
    "tema": "Poder Legislativo",
    "justificativa": "Literalidade do art. 49, X da CF. É a função fiscalizadora do Legislativo [20]. Analogia: O Congresso é o Conselho de Administração que tem poder total para inspecionar o trabalho do CEO (Executivo) e de suas filiais (Administração Indireta)."
  },
  {
    "enunciado": "A alteração da Constituição Federal por meio de emendas constitucionais decorre do poder constituinte originário.",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "Emendas decorrem do Poder Constituinte **Derivado Reformador**. O Originário é aquele que criou a Constituição em 1988 [21]. Analogia: O Originário é o arquiteto que construiu a casa do zero; o Derivado é o empreiteiro que faz reformas seguindo as regras deixadas pelo arquiteto."
  },
  {
    "enunciado": "É incabível a impetração de mandado de injunção quando a controvérsia for relativa à efetividade da legislação existente.",
    "correta": "C",
    "tema": "Remédios Constitucionais",
    "justificativa": "O Mandado de Injunção serve para suprir a **falta** de norma regulamentadora. Se a norma existe, mas é ineficaz ou defeituosa, o remédio é outro (ADI, etc.) [22]. Analogia: O Mandado de Injunção serve para quando falta a chave do carro; se você tem a chave mas o carro não pega (norma ineficaz), você precisa de um mecânico, não de um chaveiro."
  },
  {
    "enunciado": "Para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa, é necessária a autorização expressa dos associados.",
    "correta": "E",
    "tema": "Mandado de Segurança",
    "justificativa": "O STF entende (Súmula 629) que a impetração de MS coletivo por entidade de classe **independe** de autorização expressa dos associados [23]. Analogia: O sindicato age como um 'substituto processual'; ele entra em campo pelo time todo sem precisar pegar a assinatura de cada jogador antes do jogo."
  },
  {
    "enunciado": "Somente aos trabalhadores com vínculo empregatício formal é assegurado o direito de participar de eleições sindicais e integrar diretoria de sindicato, sendo vedada essa prerrogativa aos aposentados.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "A Constituição assegura ao **aposentado** o direito de votar e ser votado nas organizações sindicais (art. 8º, VII) [24]. Analogia: O aposentado pendurou as chuteiras, mas continua sendo sócio do clube e pode votar para presidente."
  },
{
    "enunciado": "Determinado cidadão recebeu notificação da Receita Federal sobre um imposto não recolhido e, sem ter mais informações, solicitou ao órgão os extratos. Após mais de um mês sem resposta, o cidadão pode se valer do habeas data para buscar acesso a essas informações.",
    "correta": "C",
    "tema": "Habeas Data",
    "justificativa": "O Habeas Data é o remédio correto para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais, quando houver recusa ou omissão [1, 2]. Analogia: O Habeas Data é como uma 'chave mestra' que o cidadão usa para abrir o arquivo do governo e ver a sua própria ficha, quando o funcionário se recusa a mostrá-la."
  },
  {
    "enunciado": "É incabível a impetração de mandado de injunção quando a controvérsia for relativa à efetividade da legislação existente.",
    "correta": "C",
    "tema": "Mandado de Injunção",
    "justificativa": "O Mandado de Injunção serve para suprir a *ausência* de norma regulamentadora (omissão legislativa), e não para reclamar que uma lei existente é ruim ou ineficaz [2, 3]. Analogia: Você chama o mecânico (Mandado de Injunção) quando falta uma peça no carro (lei), não quando a peça existe mas está suja ou mal ajustada."
  },
  {
    "enunciado": "A extinção, sem resolução de mérito, de mandado de segurança, ante pedido de desistência formulado pelo impetrante, independe da concordância de quem foi indicado como autoridade coatora ou da entidade estatal interessada.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "O STF fixou tese (Tema 530) de que é lícito ao impetrante desistir da ação de mandado de segurança a qualquer tempo, independentemente de consentimento da outra parte [4]. *Nota: O gabarito oficial antigo ou divergente pode apontar 'E' baseado no CPC geral, mas a jurisprudência atual do STF em MS garante a desistência.* Analogia: O Mandado de Segurança é como um pedido de socorro expresso; se você resolve o problema ou muda de ideia, pode cancelar o chamado sem precisar pedir permissão ao 'agressor'."
  },
  {
    "enunciado": "De acordo com a CF, é permitida a impetração de mandado de segurança para a proteção de direito líquido e certo, não protegido por habeas corpus ou habeas data, quando o responsável pela ilegalidade for agente de pessoa jurídica no exercício de atribuições do poder público.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "Definição clássica do art. 5º, LXIX da CF. O MS é residual (só cabe se não for caso de HC ou HD) [5]. Analogia: O Mandado de Segurança é o 'clínico geral' dos remédios constitucionais; ele cura tudo o que os especialistas (Habeas Corpus para liberdade, Habeas Data para informação) não tratam."
  },
  {
    "enunciado": "Para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa de caráter civil, são necessárias a autorização expressa dos associados e a relação nominal destes.",
    "correta": "E",
    "tema": "Mandado de Segurança Coletivo",
    "justificativa": "A impetração de MS coletivo por associação *independe* de autorização expressa dos associados (Súmula 629 do STF) [6, 7]. Analogia: O sindicato/associação age como um 'substituto' no jogo; ele entra em campo pelo time inteiro sem precisar pegar a assinatura de cada jogador antes da partida."
  },
  {
    "enunciado": "Declarada a extinção da punibilidade pelo cumprimento da pena, não mais subsiste ao agente o interesse na impetração de habeas corpus.",
    "correta": "C",
    "tema": "Habeas Corpus",
    "justificativa": "O HC visa proteger a liberdade de locomoção. Se a pena já foi cumprida e a punibilidade extinta, não há mais ameaça à liberdade que justifique o remédio (Súmula 695 do STF) [8]. Analogia: Não faz sentido pedir um 'alvará de soltura' para quem já saiu da prisão e está livre."
  },
  {
    "enunciado": "Somente aos trabalhadores com vínculo empregatício formal é assegurado o direito de participar de eleições sindicais e integrar diretoria de sindicato, sendo essa prerrogativa vedada aos aposentados.",
    "correta": "E",
    "tema": "Direitos Sindicais",
    "justificativa": "A Constituição assegura expressamente ao aposentado o direito de votar e ser votado nas organizações sindicais (art. 8º, VII) [9]. Analogia: O aposentado 'pendurou as chuteiras' do trabalho diário, mas continua sendo sócio honorário do clube (sindicato) e pode votar na diretoria."
  },
  {
    "enunciado": "Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.",
    "correta": "C",
    "tema": "Direitos dos Domésticos",
    "justificativa": "Embora a EC 72/2013 tenha ampliado significativamente os direitos dos domésticos, a CF (art. 7º, parágrafo único) ainda lista quais direitos se aplicam, não sendo a totalidade absoluta dos direitos dos demais trabalhadores (ex: piso salarial proporcional) [10]. Analogia: O trabalhador doméstico foi convidado para a mesa principal dos direitos, mas o menu dele ainda tem algumas pequenas diferenças em relação ao menu do trabalhador da indústria."
  },
  {
    "enunciado": "A Constituição Federal de 1988 prevê expressamente o lazer como um direito social.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "O lazer consta expressamente no rol do art. 6º da CF como direito social [11]. Analogia: O lazer não é apenas 'descanso', é um 'ingrediente' obrigatório na receita de cidadania que a Constituição prescreve."
  },
  {
    "enunciado": "É direito dos trabalhadores urbanos e rurais a assistência gratuita a seus filhos e dependentes, desde o nascimento até os 6 anos de idade, em creches e pré-escolas.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Atenção: A redação original da CF dizia 6 anos, mas a EC 53/2006 alterou para **5 anos**. Contudo, como o item foi considerado 'Certo' na fonte baseada em questão anterior ou literalidade de certas normas infraconstitucionais antigas, mantem-se o registro, mas o aluno deve saber que a CF hoje diz **5 anos** [12]. Analogia: A 'garantia de fábrica' da creche constitucional vai até os 5 anos hoje, embora modelos antigos fossem até os 6."
  },
  {
    "enunciado": "Todo brasileiro em situação de vulnerabilidade social tem direito a renda básica familiar garantida pelo poder público em programa permanente de transferência de renda.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Direito introduzido pela Emenda Constitucional nº 114/2021 no parágrafo único do art. 6º da CF [13]. Analogia: A Constituição criou um 'piso' financeiro para que ninguém caia no buraco da miséria absoluta."
  },
  {
    "enunciado": "A atividade fiscalizatória realizada pelo Tribunal de Contas da União (TCU) confunde-se com aquela realizada pelo próprio órgão administrativo, uma vez que decorre do controle interno.",
    "correta": "E",
    "tema": "Controle Externo",
    "justificativa": "O TCU exerce controle **externo**. O órgão administrativo exerce controle **interno**. São sistemas distintos e complementares [14]. Analogia: O TCU é o auditor independente contratado pelos donos (povo/Congresso), enquanto o controle interno é o gerente de compliance contratado pela própria diretoria (Executivo)."
  },
  {
    "enunciado": "Verificada a existência de ilegalidade em contrato da administração pública, o TCU deve sustar imediatamente a execução do contrato.",
    "correta": "E",
    "tema": "Competência do TCU",
    "justificativa": "Se for **contrato**, o TCU solicita ao Congresso Nacional que suste. O TCU só pode sustar diretamente se o Congresso não se manifestar em 90 dias. O TCU susta diretamente **atos**, não contratos de imediato [15]. Analogia: O árbitro (TCU) apita a falta, mas só a Liga (Congresso) pode cancelar o contrato do jogador; o árbitro só cancela se a Liga se omitir por muito tempo."
  },
  {
    "enunciado": "A delegação de competências legislativas privativas da União aos estados pode ser autorizada por decreto federal ou medida provisória.",
    "correta": "E",
    "tema": "Competência Legislativa",
    "justificativa": "A delegação de competência privativa da União para os Estados deve ser feita, obrigatoriamente, por **Lei Complementar** (art. 22, parágrafo único) [16]. Analogia: Para emprestar o poder de fazer leis federais, exige-se um documento solene e robusto (Lei Complementar), não basta um bilhete simples (Decreto)."
  },
  {
    "enunciado": "A fiscalização contábil, financeira e orçamentária dos estados será exercida pelas respectivas assembleias legislativas, mediante controle externo, e pelo sistema de controle interno de cada Poder.",
    "correta": "C",
    "tema": "Fiscalização",
    "justificativa": "Simetria com o modelo federal. A Assembleia (Legislativo) exerce o controle externo com auxílio do Tribunal de Contas do Estado [17]. Analogia: Nos estados, a Assembleia é o 'olho do dono' (controle externo) que vigia o cofre."
  },
  {
    "enunciado": "Se um deputado praticar ato protegido pela imunidade parlamentar, ele estará imune à responsabilização penal, mas poderá ser civilmente condenado a indenizar os danos que o ato causar.",
    "correta": "E",
    "tema": "Imunidade Parlamentar",
    "justificativa": "A imunidade material (palavras, opiniões e votos) exclui tanto a responsabilidade penal quanto a **civil** [18]. Analogia: A imunidade é um escudo completo; as palavras do deputado, no exercício da função, não podem virar nem processo crime nem boleto de indenização."
  },
  {
    "enunciado": "Em caso de crime de responsabilidade cometido pelo Presidente da República, o julgamento caberá ao Senado Federal.",
    "correta": "C",
    "tema": "Impeachment",
    "justificativa": "A Câmara autoriza (juízo de admissibilidade) e o Senado julga (juízo de mérito) [19]. Analogia: A Câmara é o promotor que aceita a denúncia, o Senado é o júri que condena ou absolve."
  },
  {
    "enunciado": "É competência privativa do Senado Federal aprovar previamente a escolha dos chefes de missão diplomática de caráter permanente.",
    "correta": "C",
    "tema": "Competência do Senado",
    "justificativa": "O Senado sabatina e aprova (art. 52, IV) os embaixadores indicados pelo Presidente [20]. Analogia: O Presidente escolhe o mensageiro, mas o Senado precisa checar se ele é confiável para representar o país lá fora."
  },
  {
    "enunciado": "Compete exclusivamente ao Congresso Nacional fiscalizar e controlar, diretamente ou por qualquer de suas casas, os atos do Poder Executivo, incluídos os da administração indireta.",
    "correta": "C",
    "tema": "Competência do Congresso",
    "justificativa": "Função fiscalizatória ampla prevista no art. 49, X da CF [21]. Analogia: O Congresso não serve apenas para fazer leis; ele é o inspetor-geral de tudo o que o Executivo e suas empresas fazem."
  },
  {
    "enunciado": "O Senado Federal possui competência exclusiva para sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar.",
    "correta": "E",
    "tema": "Competência do Congresso",
    "justificativa": "Essa competência é do **Congresso Nacional** (art. 49, V), e não exclusiva do Senado [22]. Analogia: Quem puxa o freio de mão quando o Presidente dirige rápido demais (exorbita) é o Congresso inteiro, não apenas uma das casas."
  },
  {
    "enunciado": "A pesquisa e a lavra de minerais em terras indígenas só podem ser efetivadas mediante autorização do Congresso Nacional.",
    "correta": "C",
    "tema": "Terras Indígenas",
    "justificativa": "Exigência do art. 231, § 3º e art. 49, XVI da CF [23]. Analogia: As terras indígenas têm uma 'tranca' especial; só o Congresso Nacional tem a chave para permitir a mineração lá."
  },
  {
    "enunciado": "Salvo as hipóteses de exigência de quórum qualificado, a regra geral é que as deliberações das comissões de cada casa legislativa federal sejam tomadas por maioria simples de votos, exigindo-se a presença da maioria absoluta de seus membros.",
    "correta": "C",
    "tema": "Processo Legislativo",
    "justificativa": "Regra geral do art. 47 da CF: deliberação por maioria de votos (simples), presente a maioria absoluta dos membros (quórum de instalação) [24]. Analogia: Para a reunião valer, a maioria tem que estar na sala (presença); para decidir, basta a maioria de quem está lá (voto)."
  },
  {
    "enunciado": "A alteração da Constituição Federal por meio de emendas constitucionais decorre do poder constituinte originário.",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "Emendas decorrem do Poder Constituinte **Derivado** (Reformador). O Originário é inicial, ilimitado e incondicionado (fez a CF em 88) [25]. Analogia: O Poder Originário é o arquiteto que construiu o prédio; o Derivado é o síndico que faz reformas na fachada seguindo as regras do condomínio."
  },
  {
    "enunciado": "A capacidade de os estados-membros produzirem suas constituições é uma manifestação do poder constituinte derivado decorrente.",
    "correta": "C",
    "tema": "Poder Constituinte",
    "justificativa": "Os Estados se auto-organizam (Constituições Estaduais) por força do Poder Derivado Decorrente concedido pela CF/88 [26]. Analogia: A Constituição Federal deu aos Estados o 'direito de escrever suas próprias regras da casa', desde que não contrariem as regras da rua (CF)."
  },
  {
    "enunciado": "A impossibilidade de emenda constitucional ser promulgada na vigência de estado de sítio constitui limitação circunstancial do poder constituinte.",
    "correta": "C",
    "tema": "Reforma Constitucional",
    "justificativa": "O art. 60, § 1º impede emendas durante intervenção federal, estado de defesa ou sítio (limitações circunstanciais) [163/164]. Analogia: Não se faz reforma na estrutura da casa durante um incêndio ou um terremoto (circunstâncias anormais)."
  },
{
    "enunciado": "Julgar as contas prestadas anualmente pelo Presidente da República é uma competência constitucional do Tribunal de Contas da União (TCU).",
    "correta": "E",
    "tema": "Controle Externo",
    "justificativa": "O TCU não julga as contas do Presidente (Chefe de Governo); ele apenas emite um **parecer prévio** (apreciação). Quem julga as contas do Presidente é o Congresso Nacional [1]. Analogia: O TCU é o sommelier que prova o vinho e dá a nota (parecer), mas quem decide se compra a garrafa ou manda devolver (julga) é o cliente (Congresso)."
  },
  {
    "enunciado": "Compete ao TCU fiscalizar a aplicação de quaisquer recursos repassados pela União mediante convênio, acordo, ajuste ou outros instrumentos congêneres, a Estado, ao Distrito Federal ou a município.",
    "correta": "C",
    "tema": "Controle Externo",
    "justificativa": "Literalidade do art. 71, VI, da CF. Se o dinheiro saiu do cofre federal, o 'olho' do TCU vai junto fiscalizar, não importa onde o recurso tenha ido parar [1]. Analogia: O dinheiro federal é como um filho menor de idade; mesmo quando vai dormir na casa do amigo (Estado/Município), os pais (TCU) continuam vigiando seu comportamento."
  },
  {
    "enunciado": "Verificada a existência de ilegalidade em contrato da administração pública, o TCU deve sustar imediatamente a execução do contrato.",
    "correta": "E",
    "tema": "Controle Externo",
    "justificativa": "No caso de **contratos**, o TCU não susta de imediato; ele solicita ao Congresso Nacional que o faça. O TCU só pode sustar o contrato se o Congresso não se manifestar em 90 dias (art. 71, § 1º e § 2º) [2]. Analogia: O árbitro de vídeo (TCU) sinaliza a irregularidade, mas só o juiz de campo (Congresso) pode apitar o fim do jogo (contrato) imediatamente. O árbitro de vídeo só apita se o juiz de campo ignorar o aviso por muito tempo."
  },
  {
    "enunciado": "A iniciativa popular de lei federal pode ser exercida pela apresentação à Câmara dos Deputados de projeto subscrito por, no mínimo, 5% do eleitorado nacional.",
    "correta": "E",
    "tema": "Processo Legislativo",
    "justificativa": "O percentual exigido é de **1%** do eleitorado nacional (não 5%), distribuído por pelo menos 5 estados, com não menos de 0,3% dos eleitores de cada um deles (art. 61, § 2º) [3]. Analogia: A 'taxa de inscrição' para o povo propor uma lei é de 1%; cobrar 5% seria um 'pedágio' democrático caro demais e inconstitucional."
  },
  {
    "enunciado": "As Comissões Parlamentares de Inquérito (CPI) detêm poderes de investigação próprios das autoridades judiciais, inclusive para determinar busca e apreensão domiciliar e interceptação telefônica sem necessidade de ordem judicial.",
    "correta": "E",
    "tema": "Poder Legislativo",
    "justificativa": "Embora a CPI tenha poderes de juiz para investigar, ela esbarra na cláusula de **reserva de jurisdição**. Busca domiciliar e quebra de sigilo telefônico (interceptação) dependem de ordem judicial emanada de magistrado [3]. Analogia: A CPI é um super-detetive, mas não tem o 'mandado de juiz' no bolso para arrombar portas (busca) ou grampear linhas (interceptação)."
  },
  {
    "enunciado": "As medidas provisórias perderão eficácia se não forem convertidas em lei no prazo de sessenta dias, prorrogável uma vez por igual período, ainda que esteja em curso o intervalo de recesso do Congresso Nacional.",
    "correta": "E",
    "tema": "Processo Legislativo",
    "justificativa": "O prazo da MP (60+60 dias) **suspende-se** durante o recesso parlamentar (art. 62, § 4º). O prazo não corre nas férias dos parlamentares [3]. Analogia: O cronômetro da bomba-relógio da MP para de contar quando o Congresso sai de férias; só volta a ticar quando eles voltam ao trabalho."
  },
  {
    "enunciado": "Resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos gravosos ao patrimônio nacional é competência exclusiva do Congresso Nacional.",
    "correta": "C",
    "tema": "Competências do Congresso",
    "justificativa": "Literalidade do art. 49, I, da CF. O Presidente assina, mas o Congresso dá a palavra final (referendo) [4]. Analogia: O Presidente negocia a compra (tratado), mas quem tem a senha do cartão de crédito da nação para confirmar a despesa (encargos) é o Congresso."
  },
  {
    "enunciado": "Processar e julgar o Presidente da República nos crimes de responsabilidade é competência exclusiva do Congresso Nacional em reunião conjunta.",
    "correta": "E",
    "tema": "Competências",
    "justificativa": "O julgamento do Presidente nos crimes de responsabilidade é competência privativa do **Senado Federal**, presidido pelo Presidente do STF, e não do Congresso em sessão conjunta [5]. Analogia: A Câmara acusa (promotor), mas o Senado é quem senta na cadeira de juiz para decidir o destino do Presidente."
  },
  {
    "enunciado": "Compete privativamente ao Senado Federal aprovar previamente, por voto secreto, a escolha dos presidentes e diretores do Banco Central do Brasil.",
    "correta": "C",
    "tema": "Competências do Senado",
    "justificativa": "Literalidade do art. 52, III, 'd' da CF. É a função de sabatina do Senado [5]. Analogia: Antes de entregar a chave do cofre (Banco Central), o Senado faz uma entrevista de emprego rigorosa e secreta com o candidato."
  },
  {
    "enunciado": "Compete exclusivamente ao Congresso Nacional fixar limites globais para o montante da dívida consolidada da União, dos estados e dos municípios.",
    "correta": "E",
    "tema": "Competências",
    "justificativa": "Essa competência é privativa do **Senado Federal** (art. 52, VI), pois o Senado é a casa que representa os Estados e o equilíbrio federativo [5]. Analogia: Como o Senado é a 'reunião dos Estados', cabe a ele definir o limite do cartão de crédito (dívida) de cada membro da família federativa."
  },
  {
    "enunciado": "O poder constituinte originário, por ser político e inicial, não encontra limites jurídicos, podendo romper com a ordem jurídica anterior sem dever obediência a direitos adquiridos.",
    "correta": "C",
    "tema": "Poder Constituinte",
    "justificativa": "O Poder Originário é ilimitado e incondicionado juridicamente. Ele cria uma nova ordem jurídica do zero (doutrina positivista majoritária) [6]. Analogia: O Poder Originário é como um Deus Criador de um novo universo; ele não precisa seguir as leis da física do universo antigo que ele acabou de destruir."
  },
  {
    "enunciado": "De acordo com o STF, é possível a declaração de inconstitucionalidade de norma oriunda do poder constituinte originário caso haja violação a princípios constitucionais de justiça (normas constitucionais inconstitucionais).",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "O STF **não admite** a tese das 'normas constitucionais inconstitucionais' para o texto originário. Todas as normas da CF/88 original têm o mesmo hierarquia e presunção de validade [7]. Analogia: Em uma família (Constituição), nenhum irmão (artigo originário) pode expulsar o outro dizendo que ele é ilegítimo, pois todos nasceram do mesmo pai (Poder Originário) ao mesmo tempo."
  },
  {
    "enunciado": "O princípio da simetria obriga que as constituições estaduais estendam aos Governadores a imunidade processual penal relativa (prisão apenas após sentença) prevista na Constituição Federal para o Presidente da República.",
    "correta": "E",
    "tema": "Poder Constituinte Decorrente",
    "justificativa": "O STF entende que as imunidades do Presidente (art. 86, § 3º e 4º) são excepcionais e **não** se estendem automaticamente aos Governadores via simetria, salvo se a CF autorizasse expressamente, o que não ocorre [7]. Analogia: O Presidente veste um 'colete à prova de balas' (imunidade) único e feito sob medida; os Governadores não podem encomendar coletes iguais na alfaiataria estadual."
  },
  {
    "enunciado": "A Constituição Federal autoriza que o poder constituinte estadual (constituições estaduais) estabeleça a adoção de medidas provisórias pelos governadores.",
    "correta": "C",
    "tema": "Poder Constituinte Decorrente",
    "justificativa": "O STF reconhece a possibilidade de Estados editarem Medidas Provisórias, desde que haja previsão expressa na Constituição Estadual e observância estrita dos princípios do modelo federal (art. 62 da CF) [7]. Analogia: O Governador pode ter o poder da 'caneta rápida' (MP), mas só se a regra da casa (Constituição Estadual) permitir e copiar as travas de segurança da regra federal."
  },
  {
    "enunciado": "Cidadão que teve negado o acesso a informações fiscais próprias pela Receita Federal deve se valer do mandado de segurança, e não do habeas data, pois a informação é de natureza tributária.",
    "correta": "E",
    "tema": "Remédios Constitucionais",
    "justificativa": "Se a informação diz respeito à **pessoa do impetrante** e consta em banco de dados governamental, o remédio correto é o **Habeas Data** (art. 5º, LXXII, 'a') [8]. Analogia: Se o arquivo é sobre *você* (dados pessoais/fiscais) e o governo esconde, a chave correta para abrir a gaveta é o Habeas Data, não o Mandado de Segurança."
  },
  {
    "enunciado": "O mandado de injunção é o remédio cabível para questionar a insuficiência ou a falta de norma regulamentadora que torne inviável o exercício de direitos e liberdades constitucionais.",
    "correta": "C",
    "tema": "Remédios Constitucionais",
    "justificativa": "Definição do art. 5º, LXXI. Serve para curar a 'síndrome da ineficácia' das normas constitucionais por falta de lei [9]. Analogia: O Mandado de Injunção é a ferramenta para construir a ponte (lei) que falta para você atravessar o rio e alcançar seu direito constitucional."
  },
  {
    "enunciado": "A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados depende de autorização expressa dos membros e da apresentação da lista nominal dos representados.",
    "correta": "E",
    "tema": "Remédios Constitucionais",
    "justificativa": "No MS Coletivo impetrado por associação, atua-se por **substituição processual**, dispensando autorização expressa e lista nominal (Súmula 629/STF) [10]. Analogia: O sindicato entra em campo como o próprio time (substituto); não precisa de uma procuração assinada por cada torcedor (associado) para jogar."
  },
  {
    "enunciado": "Ao servidor público civil são assegurados direitos como o fundo de garantia do tempo de serviço (FGTS) e o seguro-desemprego.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "O art. 39, § 3º da CF lista os direitos sociais aplicáveis aos servidores. **Não** estão incluídos o FGTS e o seguro-desemprego, pois o servidor estatutário possui estabilidade (o que substitui a lógica desses benefícios) [11]. Analogia: O servidor público tem um 'casamento estável' com o Estado (estabilidade), por isso não recebe o 'seguro-divórcio' (FGTS/Seguro-desemprego) que os trabalhadores privados têm."
  },
  {
    "enunciado": "É assegurado aos servidores públicos o direito à irredutibilidade do subsídio e dos vencimentos, ressalvadas as hipóteses constitucionais de incidência tributária e ajustes cambiais.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "A irredutibilidade é garantida pelo art. 37, XV, combinada com o art. 39, § 3º (referência ao art. 7º, VI) [11]. Analogia: O salário do servidor tem uma catraca: só pode girar para cima (ou ficar parado), nunca voltar para trás (reduzir nominalmente), salvo impostos."
  },
  {
    "enunciado": "Os direitos à moradia e ao lazer são garantidos constitucionalmente a todos, independentemente de nacionalidade ou condição econômica, como direitos sociais fundamentais.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Moradia e lazer estão no rol do art. 6º da CF. Sendo direitos fundamentais, aplicam-se em princípio a todos os residentes, com base na dignidade da pessoa humana [12]. Analogia: A Constituição desenhou um 'teto' (moradia) e um 'parque' (lazer) na planta da sociedade ideal para todos os habitantes."
  },
  {
    "enunciado": "O direito ao trabalho é exclusivo dos brasileiros natos e naturalizados, não sendo considerado um direito social extensível a estrangeiros residentes.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "O art. 6º lista o trabalho como direito social universal. O art. 5º garante a igualdade aos residentes estrangeiros. Estrangeiros residentes têm direito ao trabalho [12]. Analogia: A carteira de trabalho não exige certidão de nascimento brasileira; o mercado de trabalho é aberto a quem vive aqui legalmente."
  },
  {
    "enunciado": "A educação básica é um direito social, mas sua oferta pelo Estado depende da disponibilidade orçamentária (reserva do possível), não sendo subjetivamente exigível.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "A educação básica é direito público **subjetivo** (art. 208, § 1º). O Estado não pode alegar falta de dinheiro para negar o mínimo existencial na educação [12]. Analogia: A educação básica é uma dívida vencida do Estado com o cidadão; o Estado não pode dizer 'pago quando der', ele tem que pagar agora."
  },
  {
    "enunciado": "O acesso ao ensino obrigatório e gratuito é direito público subjetivo.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "Literalidade do art. 208, § 1º da CF. Qualquer cidadão pode exigir judicialmente a vaga na escola. Analogia: A vaga na escola não é um favor do governo, é um crédito que o aluno pode cobrar no balcão do Judiciário."
  },
  {
    "enunciado": "O não-oferecimento do ensino obrigatório pelo poder público, ou sua oferta irregular, importa responsabilidade da autoridade competente.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "Literalidade do art. 208, § 2º da CF. O gestor responde administrativa e civilmente pela omissão. Analogia: Se o prefeito não constrói a escola ou deixa faltar professor, ele senta no banco dos réus por negligência com o futuro das crianças."
  },
  {
    "enunciado": "O ensino é livre à iniciativa privada, atendidas as condições de cumprimento das normas gerais da educação nacional e autorização e avaliação de qualidade pelo poder público.",
    "correta": "C",
    "tema": "Educação",
    "justificativa": "Literalidade do art. 209 da CF. Liberdade com regulação. Analogia: Você pode abrir sua própria escola, mas tem que seguir o 'manual de instruções' do MEC e deixar o inspetor entrar para verificar a qualidade."
  },
{
    "enunciado": "Determinado cidadão recebeu notificação da Receita Federal sobre um imposto não recolhido e solicitou extratos sem obter resposta. Nessa situação, o cidadão poderá se valer do habeas data para buscar acesso a essas informações sobre si.",
    "correta": "C",
    "tema": "Habeas Data",
    "justificativa": "O Habeas Data é o remédio constitucional adequado para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público [1]. Analogia: O Habeas Data é a 'chave mestra' que o cidadão usa para obrigar o governo a abrir a gaveta onde guarda a ficha pessoal dele, quando o funcionário se recusa a mostrar."
  },
  {
    "enunciado": "É incabível a impetração de mandado de injunção quando a controvérsia for relativa à efetividade da legislação existente.",
    "correta": "C",
    "tema": "Mandado de Injunção",
    "justificativa": "O mandado de injunção pressupõe a *ausência* de norma regulamentadora que inviabilize o exercício de um direito. Se a lei existe, mas é ineficaz ou defeituosa, o remédio não é a injunção [2]. Analogia: Você chama o mecânico (Mandado de Injunção) quando está faltando uma peça no motor (lei inexistente), não quando a peça está lá mas funciona mal (lei ineficaz)."
  },
  {
    "enunciado": "A extinção, sem resolução de mérito, de mandado de segurança, ante pedido de desistência formulado pelo impetrante, independe da concordância de quem foi indicado como autoridade coatora.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "O STF firmou entendimento (Tema 530) de que o impetrante pode desistir do mandado de segurança a qualquer tempo, sem precisar da anuência da parte contrária [3]. Analogia: O Mandado de Segurança é um pedido de socorro voluntário; se você decide que não precisa mais da ajuda, pode desligar o telefone (desistir) sem pedir permissão ao atendente."
  },
  {
    "enunciado": "Para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa de caráter civil, são desnecessárias a autorização expressa dos associados e a relação nominal destes.",
    "correta": "C",
    "tema": "Mandado de Segurança Coletivo",
    "justificativa": "No Mandado de Segurança Coletivo impetrado por associação, ocorre substituição processual, dispensando-se a autorização individual e a lista nominal exigidas em ações ordinárias (Súmula 629/STF) [4]. Analogia: A associação entra em campo como se fosse o próprio time (substituto); não precisa recolher assinatura de cada torcedor (associado) para jogar o campeonato."
  },
  {
    "enunciado": "Declarada a extinção da punibilidade pelo cumprimento da pena, não mais subsiste ao agente o interesse na impetração de habeas corpus.",
    "correta": "C",
    "tema": "Habeas Corpus",
    "justificativa": "O Habeas Corpus visa proteger a liberdade de locomoção. Se a pena já foi cumprida, não há mais ameaça à liberdade, logo, falta interesse de agir (Súmula 695/STF) [5]. Analogia: Não faz sentido pedir um alvará de soltura para alguém que já saiu da prisão e está livre na rua."
  },
  {
    "enunciado": "É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.",
    "correta": "C",
    "tema": "Direitos dos Trabalhadores",
    "justificativa": "Previsão expressa do art. 10 da Constituição Federal, garantindo a gestão democrática e participativa [6]. Analogia: Quem vai comer o bolo (trabalhadores/empregadores) tem o direito de sentar à mesa com o cozinheiro (governo) para discutir a receita."
  },
  {
    "enunciado": "Somente aos trabalhadores com vínculo empregatício formal é assegurado o direito de participar de eleições sindicais e integrar diretoria de sindicato, sendo essa prerrogativa vedada aos aposentados.",
    "correta": "E",
    "tema": "Direitos Sindicais",
    "justificativa": "A Constituição garante expressamente ao aposentado o direito de votar e ser votado nas organizações sindicais (art. 8º, VII) [7]. Analogia: O aposentado pendurou as chuteiras do trabalho diário, mas continua sendo sócio pleno do clube (sindicato) e pode se candidatar a presidente."
  },
  {
    "enunciado": "Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.",
    "correta": "C",
    "tema": "Direitos dos Domésticos",
    "justificativa": "Embora a EC 72/2013 tenha ampliado muito os direitos, o parágrafo único do art. 7º ainda lista quais se aplicam, não sendo a totalidade absoluta (ex: piso salarial proporcional, proteções específicas de automação) [8]. Analogia: O doméstico foi convidado para o banquete dos direitos, mas o menu dele ainda tem algumas pequenas diferenças em relação ao menu do trabalhador da fábrica."
  },
  {
    "enunciado": "Todo brasileiro em situação de vulnerabilidade social tem direito a renda básica familiar garantida pelo poder público em programa permanente de transferência de renda.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Direito introduzido pela Emenda Constitucional nº 114/2021 (art. 6º, parágrafo único), estabelecendo um piso de proteção social [9]. Analogia: A Constituição criou um 'colchão de segurança' financeiro obrigatório para impedir que os vulneráveis caiam diretamente no chão da miséria."
  },
  {
    "enunciado": "É direito dos trabalhadores urbanos e rurais a assistência gratuita a seus filhos e dependentes, desde o nascimento até os 6 anos de idade, em creches e pré-escolas.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Obs: A questão considera a literalidade de textos antigos ou interpretação ampla, mas a redação atual do art. 7º, XXV da CF (pós-EC 53) reduziu para **5 anos**. O gabarito da fonte indica 'Certo', mas deve-se atentar à atualização para 5 anos [10]. Analogia: A garantia de fábrica da creche constitucional vai até os 5 anos hoje, embora modelos antigos fossem até os 6."
  },
  {
    "enunciado": "A defesa do consumidor é um dos princípios da ordem econômica do Brasil, de acordo com a CF.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "A defesa do consumidor figura tanto como direito fundamental (art. 5º) quanto como princípio da ordem econômica (art. 170, V) [84/92]. Analogia: O consumidor é a parte mais fraca na gangorra do mercado; por isso, a Constituição coloca um peso extra do lado dele (princípio da defesa) para equilibrar o jogo."
  },
  {
    "enunciado": "Segundo a CF, a defesa do meio ambiente é um fundamento da ordem econômica.",
    "correta": "E",
    "tema": "Ordem Econômica",
    "justificativa": "A defesa do meio ambiente é um **princípio** (art. 170, VI), não um fundamento. Os fundamentos são a valorização do trabalho e a livre iniciativa [11]. Analogia: Os fundamentos são o alicerce de concreto (trabalho/livre iniciativa); o meio ambiente é uma das regras essenciais do condomínio (princípio), mas não o alicerce em si."
  },
  {
    "enunciado": "Constituem monopólio da União a pesquisa e a lavra das jazidas de petróleo e gás natural.",
    "correta": "C",
    "tema": "Monopólios da União",
    "justificativa": "Literalidade do art. 177, I da CF. Embora a União possa contratar empresas para isso, a titularidade do monopólio permanece estatal [12]. Analogia: O petróleo é o 'tesouro da coroa'; o rei (União) é o único dono, mesmo que pague alguém para cavar o buraco."
  },
  {
    "enunciado": "Não viola o princípio da livre concorrência lei municipal que proíbe a abertura de estabelecimentos comerciais do mesmo ramo em determinada área.",
    "correta": "E",
    "tema": "Livre Concorrência",
    "justificativa": "Viola sim. A Súmula Vinculante 49 do STF declara inconstitucional lei municipal que fixa distanciamento mínimo entre estabelecimentos do mesmo ramo, pois fere a livre concorrência [13]. Analogia: A prefeitura não pode impedir que uma padaria abra ao lado de outra só para proteger a primeira; a concorrência deve ser livre para beneficiar o cliente."
  },
  {
    "enunciado": "A CF enumera como princípio da ordem econômica o tratamento favorecido para as empresas de pequeno porte, independentemente de sua sede e administração ser no país.",
    "correta": "E",
    "tema": "Ordem Econômica",
    "justificativa": "O tratamento favorecido é restrito às empresas de pequeno porte constituídas sob as leis brasileiras e que tenham sua **sede e administração no País** (art. 170, IX) [14]. Analogia: O benefício fiscal é um 'prato da casa' servido apenas para as empresas que moram aqui (sede no país), não para as visitas estrangeiras."
  },
  {
    "enunciado": "O advogado-geral da União é o chefe da Advocacia-Geral da União, sendo o cargo de livre nomeação pelo presidente da República entre cidadãos maiores de trinta e cinco anos de idade, de notável saber jurídico e reputação ilibada.",
    "correta": "C",
    "tema": "Advocacia Pública",
    "justificativa": "Requisitos constitucionais do art. 131, § 1º. Não se exige que o AGU seja integrante da carreira, basta ser cidadão qualificado [15]. Analogia: O técnico da seleção (AGU) é escolhido pelo presidente; ele precisa entender muito do jogo, mas não precisa ter sido jogador do time (carreira) antes."
  },
  {
    "enunciado": "Os corpos de bombeiros militares integram o sistema de segurança pública, a eles incumbindo a execução das atividades de defesa civil.",
    "correta": "C",
    "tema": "Segurança Pública",
    "justificativa": "Literalidade do art. 144, § 5º. O bombeiro apaga o fogo e coordena a defesa em desastres [16]. Analogia: O bombeiro tem dupla função no cinto de utilidades: a mangueira de incêndio e o plano de emergência da defesa civil."
  },
  {
    "enunciado": "Compete privativamente ao presidente da República enviar ao Senado Federal o plano plurianual, o projeto de lei de diretrizes orçamentárias e as propostas de orçamento.",
    "correta": "E",
    "tema": "Processo Orçamentário",
    "justificativa": "O Presidente envia esses projetos ao **Congresso Nacional** (para apreciação das duas casas), e não apenas ao Senado Federal (art. 84, XXIII) [17]. Analogia: O orçamento é a conta da casa toda, então o 'pai' (Presidente) tem que mostrar para a família inteira (Congresso), não só para um dos filhos (Senado)."
  },
  {
    "enunciado": "Desde que por delegação do presidente da República, pode o advogado-geral da União conceder indulto e comutar penas.",
    "correta": "C",
    "tema": "Poder Executivo",
    "justificativa": "O art. 84, parágrafo único, permite a delegação das atribuições de conceder indulto (inciso XII) ao AGU, Ministros de Estado ou PGR [18]. Analogia: O Presidente tem o poder de perdoar (indulto), mas pode passar essa caneta para seus conselheiros jurídicos de confiança (AGU/Ministros) assinarem por ele."
  },
  {
    "enunciado": "O presidente da República, mediante decreto, pode dispor sobre a extinção de cargos públicos somente se estes estiverem vagos.",
    "correta": "C",
    "tema": "Decreto Autônomo",
    "justificativa": "Se o cargo estiver ocupado, sua extinção depende de lei. Se vago, o Presidente pode extinguir por decreto (art. 84, VI, 'b') [19]. Analogia: O Presidente pode jogar fora a cadeira vazia (cargo vago) com uma ordem simples, mas se tiver alguém sentado nela (ocupado), precisa de uma lei para tirar a cadeira."
  },
  {
    "enunciado": "É possível a edição de medida provisória que trate de matérias relacionadas a cidadania e a direito civil, tributário, urbanístico e financeiro.",
    "correta": "E",
    "tema": "Medidas Provisórias",
    "justificativa": "É vedada a edição de MP sobre **cidadania** (art. 62, § 1º, I, 'a'). Embora possa tratar de direito tributário ou financeiro em certas condições, a vedação à cidadania torna o item errado [20]. Analogia: A cidadania é um tema sagrado demais para ser alterado pela 'caneta rápida' e provisória do Presidente; exige o debate lento do Congresso."
  },
  {
    "enunciado": "O parecer prévio do tribunal de contas constitui condição indispensável para que o Poder Legislativo possa exercer sua competência constitucional de julgar as contas do chefe do Poder Executivo.",
    "correta": "C",
    "tema": "Controle Externo",
    "justificativa": "O julgamento das contas de governo é político (pelo Legislativo), mas exige a base técnica do parecer do TC. O STF entende que sem o parecer, o julgamento não pode ocorrer [137/138]. Analogia: O júri (Legislativo) dá o veredito, mas não pode começar o julgamento sem ler o laudo da perícia técnica (Tribunal de Contas)."
  },
  {
    "enunciado": "A atividade fiscalizatória realizada pelo Tribunal de Contas da União não se confunde com aquela realizada pelo próprio órgão administrativo (controle interno).",
    "correta": "C",
    "tema": "Controle Externo/Interno",
    "justificativa": "O TCU exerce controle externo (auditor do Congresso); a administração exerce controle interno (autotutela). São esferas independentes [21]. Analogia: O controle interno é o gerente da loja conferindo o caixa; o TCU é o auditor fiscal que vem de fora para inspecionar a loja."
  },
  {
    "enunciado": "Consoante a Constituição Federal de 1988, apenas os chefes dos três poderes constitucionais prestam contas de governo.",
    "correta": "E",
    "tema": "Prestação de Contas",
    "justificativa": "Qualquer pessoa física ou jurídica que utilize, arrecade, guarde, gerencie ou administre dinheiros, bens e valores públicos deve prestar contas (art. 70, parágrafo único) [22]. Analogia: Não é só o patrão que mostra a nota fiscal; qualquer um que pegou o dinheiro da empresa para comprar algo tem que prestar contas do troco."
  },
  {
    "enunciado": "A delegação de competências legislativas privativas da União aos estados pode ser autorizada por decreto federal ou medida provisória.",
    "correta": "E",
    "tema": "Competência Legislativa",
    "justificativa": "A delegação de competência legislativa privativa da União para os Estados deve ser feita por **Lei Complementar** (art. 22, parágrafo único) [23]. Analogia: Para emprestar um poder tão forte quanto fazer leis federais, exige-se um contrato solene e blindado (Lei Complementar), não basta um bilhete simples (Decreto)."
  },
 {
    "enunciado": "A Mesa da Câmara dos Deputados é legitimada universal para a propositura de ação direta de inconstitucionalidade, não necessitando demonstrar pertinência temática.",
    "correta": "C",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "A Mesa da Câmara e a Mesa do Senado são legitimados universais (art. 103 da CF). Já a Mesa de Assembleia Legislativa é legitimado especial e precisa demonstrar pertinência temática [1]. Analogia: A Mesa da Câmara tem um 'crachá VIP' que dá acesso a todas as áreas do clube do STF; a Mesa da Assembleia tem um crachá restrito, só entra nas áreas que lhe dizem respeito."
  },
  {
    "enunciado": "A confederação sindical, por ser entidade de classe de âmbito nacional, é legitimada universal para a propositura de ADI, dispensada a demonstração de pertinência temática.",
    "correta": "E",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "Confederações sindicais e entidades de classe de âmbito nacional são **legitimados especiais**. Elas precisam provar que a lei impugnada afeta diretamente seus representados (pertinência temática) [1]. Analogia: O sindicato só pode reclamar do barulho da festa se o som alto estiver incomodando especificamente os seus associados; não pode reclamar em nome da vizinhança inteira (legitimado universal)."
  },
  {
    "enunciado": "Lei federal anterior à promulgação da Constituição de 1988, como a antiga Lei de Imprensa, pode ser objeto de ação direta de inconstitucionalidade (ADI) perante o STF.",
    "correta": "E",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "Leis anteriores à CF/88 não são objeto de ADI (que serve para leis posteriores). O instrumento correto para questionar a recepção de leis pré-constitucionais é a **ADPF** (Arguição de Descumprimento de Preceito Fundamental) [2]. Analogia: A ADI é para defeitos de fabricação em produtos novos; para produtos antigos que não funcionam na casa nova, usa-se a ADPF."
  },
  {
    "enunciado": "Conflito de competência entre um juiz de direito estadual e um juiz federal vinculado a tribunal regional federal deve ser resolvido pelo tribunal regional federal.",
    "correta": "E",
    "tema": "Competência Jurisdicional",
    "justificativa": "Conflitos entre juízes vinculados a tribunais diferentes (Federal x Estadual) são resolvidos pelo **Superior Tribunal de Justiça (STJ)** (art. 105, I, 'd') [3]. Analogia: Quando dois filhos de famílias diferentes brigam, quem resolve não é o pai de um deles (TRF), mas sim o 'avô' comum a todos (STJ)."
  },
  {
    "enunciado": "Compete à justiça federal processar e julgar ação ajuizada por município contra empresa pública federal para a discussão do valor de tarifa.",
    "correta": "C",
    "tema": "Competência Jurisdicional",
    "justificativa": "A presença de empresa pública federal no polo passivo atrai a competência da Justiça Federal (art. 109, I), salvo em causas de falência, acidentes de trabalho e eleitorais [4]. Analogia: Se uma empresa do governo federal entra em campo, o jogo sai do estádio municipal e vai para a arena federal."
  },
  {
    "enunciado": "Compete ao Superior Tribunal de Justiça (STJ) julgar os conflitos entre os entes federativos e o Comitê Gestor do Imposto sobre Bens e Serviços (IBS).",
    "correta": "C",
    "tema": "Reforma Tributária / Competência",
    "justificativa": "Inovação da EC 132/2023. O Comitê Gestor do IBS (tributo subnacional) terá seus conflitos com entes federativos dirimidos pelo STJ [5]. Analogia: O Comitê Gestor é o novo síndico das finanças estaduais/municipais; se houver briga com os moradores (entes), o tribunal responsável é o STJ."
  },
  {
    "enunciado": "A promoção de magistrados, de entrância para entrância, obedece, alternadamente, aos critérios de antiguidade e merecimento.",
    "correta": "C",
    "tema": "Estatuto da Magistratura",
    "justificativa": "Regra constitucional do art. 93, II. A carreira da magistratura é uma escada que se sobe ora pelo tempo de casa (antiguidade), ora pela competência (merecimento) [6]. Analogia: Para subir de cargo, você precisa ter paciência na fila (antiguidade) e mostrar serviço (merecimento), um de cada vez."
  },
  {
    "enunciado": "Não é permitida a permuta entre juízes de primeira instância vinculados a distintos tribunais de justiça.",
    "correta": "E",
    "tema": "Estatuto da Magistratura",
    "justificativa": "A Emenda Constitucional nº 130/2023 passou a permitir expressamente a permuta entre juízes de direito vinculados a diferentes tribunais (permuta interestadual), garantindo o caráter nacional da magistratura [7]. Analogia: Antes cada juiz jogava apenas no time do seu estado; agora o 'mercado da bola' permite trocas de jogadores entre times de estados diferentes."
  },
  {
    "enunciado": "O presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções.",
    "correta": "C",
    "tema": "Imunidade Presidencial",
    "justificativa": "É a cláusula de irresponsabilidade penal relativa temporária (art. 86, § 4º). O Presidente não pode ser processado criminalmente por atos particulares enquanto estiver no cargo. Analogia: O Presidente veste uma 'armadura' temporária; flechas sobre sua vida privada batem e voltam enquanto ele for Presidente, mas podem atingi-lo depois que ele sair."
  },
  {
    "enunciado": "O presidente da República, na vigência de seu mandato, somente poderá ser preso em flagrante de crime inafiançável.",
    "correta": "E",
    "tema": "Imunidade Presidencial",
    "justificativa": "O Presidente da República **não** pode ser preso em flagrante, nem preventiva ou temporariamente. Ele só pode ser preso após sentença condenatória penal transitada em julgado (art. 86, § 3º). A regra do flagrante por crime inafiançável aplica-se a parlamentares, não ao Chefe do Executivo [8]. Analogia: A imunidade prisional do Presidente é absoluta antes da condenação final; ele não vai para a cela nem se for pego com a 'boca na botija'."
  },
  {
    "enunciado": "A União, a seu critério exclusivo e na forma de lei, poderá assumir débitos oriundos de precatórios de estados e municípios, refinanciando-os diretamente.",
    "correta": "E",
    "tema": "Precatórios",
    "justificativa": "A assunção de dívidas não é a critério exclusivo da União. Depende de requisitos constitucionais rigorosos (EC 62 e alterações posteriores) e não é uma discricionariedade livre [9]. Analogia: A União não é um banco que compra a dívida dos parentes (estados) só porque quer; existem regras rígidas para esse tipo de socorro."
  },
  {
    "enunciado": "Compete ao Superior Tribunal de Justiça julgar e processar os conflitos de competência entre órgãos com jurisdição trabalhista.",
    "correta": "E",
    "tema": "Competência Jurisdicional",
    "justificativa": "Conflitos entre órgãos da Justiça do Trabalho (ex: Juiz do Trabalho x TRT) são resolvidos pelo **Tribunal Superior do Trabalho (TST)**, não pelo STJ [10]. Analogia: Briga dentro da fábrica (Justiça do Trabalho) quem resolve é o gerente da fábrica (TST), não o gerente geral da empresa (STJ)."
  },
  {
    "enunciado": "A aprovação das contas do chefe do Poder Executivo pelo Poder Legislativo sem o respectivo parecer prévio do tribunal de contas configura inconstitucionalidade por vício de competência.",
    "correta": "C",
    "tema": "Controle Externo",
    "justificativa": "O STF entende que o parecer prévio do Tribunal de Contas é condição de procedibilidade indispensável. O Legislativo julga, mas não pode ignorar a etapa técnica prévia [11]. Analogia: O juiz (Legislativo) dá a sentença, mas o julgamento é nulo se ele pular a leitura do laudo pericial (Tribunal de Contas)."
  },
  {
    "enunciado": "Ao servidor ocupante de cargo público aplica-se o direito ao fundo de garantia do tempo de serviço (FGTS) e ao seguro-desemprego.",
    "correta": "E",
    "tema": "Direitos dos Servidores",
    "justificativa": "Servidores estatutários possuem estabilidade, o que é incompatível com a lógica do FGTS e seguro-desemprego (direitos de celetistas). O art. 39, § 3º não lista esses incisos do art. 7º [12]. Analogia: O servidor público tem um 'casamento' estável com o Estado, por isso não recebe o 'seguro-divórcio' (FGTS/Seguro-desemprego) que os trabalhadores privados têm."
  },
  {
    "enunciado": "O direito ao trabalho é exclusivo dos brasileiros natos e naturalizados, não sendo considerado um direito social aplicável a estrangeiros.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "O direito ao trabalho (art. 6º) e a igualdade (art. 5º) aplicam-se aos estrangeiros residentes no país. A Constituição não restringe o trabalho apenas a nacionais [13]. Analogia: O mercado de trabalho brasileiro não pede certidão de nascimento nacional na porta; pede apenas que a pessoa esteja legalmente no país."
  },
  {
    "enunciado": "Os direitos à moradia e ao lazer são garantidos a todos, independentemente de nacionalidade ou condição econômica, conforme os princípios da dignidade humana.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "São direitos sociais fundamentais (art. 6º) baseados no mínimo existencial e na dignidade da pessoa humana [13]. Analogia: A Constituição desenhou um 'teto' (moradia) e um 'parque' (lazer) acessíveis a todos os seres humanos que vivem sob sua proteção."
  },
  {
    "enunciado": "Cidadão que teve negado o acesso a seus próprios dados fiscais pela Receita Federal deve se valer do mandado de segurança.",
    "correta": "E",
    "tema": "Habeas Data",
    "justificativa": "Se a informação é sobre a **pessoa do impetrante** e houve recusa administrativa, o remédio correto é o **Habeas Data**, não o Mandado de Segurança [14]. Analogia: Se o governo trancou a gaveta com a sua ficha pessoal, a chave correta para abrir é o Habeas Data."
  },
  {
    "enunciado": "O mandado de injunção é o remédio cabível para questionar a insuficiência ou falta de norma regulamentadora que torne inviável o exercício de direitos constitucionais.",
    "correta": "C",
    "tema": "Remédios Constitucionais",
    "justificativa": "O MI combate a síndrome da inefetividade das normas constitucionais por omissão legislativa (art. 5º, LXXI) [15]. Analogia: O Mandado de Injunção é a ponte construída pelo Judiciário quando o Legislativo esqueceu de construir a estrada para você chegar ao seu direito."
  },
  {
    "enunciado": "É desnecessária a relação nominal dos associados para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa.",
    "correta": "C",
    "tema": "Mandado de Segurança Coletivo",
    "justificativa": "No MS Coletivo impetrado por associação, ocorre substituição processual. A associação age em nome próprio defendendo direito alheio, dispensando lista nominal e autorização individual (Súmula 629/STF) [16]. Analogia: O sindicato joga pelo time todo; não precisa pegar a assinatura de cada jogador antes de entrar em campo para cobrar o prêmio da vitória."
  },
  {
    "enunciado": "Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.",
    "correta": "C",
    "tema": "Direitos dos Domésticos",
    "justificativa": "O art. 7º, parágrafo único, lista quais direitos se aplicam aos domésticos. Alguns, como piso salarial proporcional ou proteções contra automação, não são aplicáveis ou dependem de lei específica, não sendo a 'integralidade' absoluta [17]. Analogia: O trabalhador doméstico foi convidado para a mesa principal dos direitos, mas o prato dele ainda tem algumas diferenças sutis em relação ao prato do operário da fábrica."
  },
  {
    "enunciado": "É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Direito previsto no art. 10 da CF. Garante a gestão democrática em órgãos como o Conselho Nacional da Previdência [18]. Analogia: Quem paga a conta e recebe o benefício (trabalhadores/patrões) tem o direito de sentar na mesa de reuniões do governo para decidir como o sistema funciona."
  },
  {
    "enunciado": "A educação básica é um direito social, mas sua oferta pelo Estado depende da disponibilidade orçamentária (reserva do possível).",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A educação básica é **direito público subjetivo**. O Estado não pode alegar falta de dinheiro (reserva do possível) para negar o mínimo existencial na educação [13]. Analogia: A educação básica é uma dívida vencida e urgente; o Estado não pode dizer 'pago quando sobrar dinheiro', ele deve pagar agora."
  },
  {
    "enunciado": "A Constituição Federal autoriza a intervenção da União nos estados quando o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios constitucionais sensíveis.",
    "correta": "E",
    "tema": "Intervenção Federal",
    "justificativa": "Se a representação é para assegurar princípios sensíveis estaduais, a intervenção é do Estado no Município. Para a União intervir no Estado por ofensa a princípios sensíveis (art. 34, VII), a representação (ADI Interventiva) é julgada pelo **STF**, não pelo Tribunal de Justiça [107 - contextual]. Analogia: Se o Estado desobedece as regras sagradas da Constituição, quem autoriza a punição (intervenção) é o guardião supremo (STF), não o tribunal local."
  },
  {
    "enunciado": "O presidente da República pode, mediante decreto, dispor sobre a organização e funcionamento da administração federal, desde que isso não implique aumento de despesa nem criação ou extinção de órgãos públicos.",
    "correta": "C",
    "tema": "Decreto Autônomo",
    "justificativa": "Literalidade do art. 84, VI, 'a'. O decreto serve para reorganizar a casa, desde que não gaste mais nem crie/extinga estruturas (órgãos) [8]. Analogia: O Presidente pode mudar os móveis de lugar no escritório (reorganizar), mas não pode comprar móveis novos (aumento de despesa) nem derrubar paredes (extinguir órgãos) sem autorização da lei."
  },
  {
    "enunciado": "As Comissões Parlamentares de Inquérito (CPI) podem determinar a interceptação telefônica sem necessidade de autorização judicial.",
    "correta": "E",
    "tema": "Poderes da CPI",
    "justificativa": "A interceptação telefônica está sujeita à cláusula de **reserva de jurisdição**. A CPI pode pedir a quebra do sigilo de dados telefônicos (lista de chamadas), mas não a interceptação da conversa (escuta), que exige ordem judicial [19]. Analogia: A CPI pode ver a conta telefônica para saber para quem você ligou, mas não pode grampear a linha para ouvir o que você falou; isso só o juiz autoriza."
  },
{
    "enunciado": "O mandado de injunção é o remédio cabível para questionar a omissão estatal em legislar que impeça o exercício de direitos, liberdades ou prerrogativas constitucionais.",
    "correta": "C",
    "tema": "Remédios Constitucionais",
    "justificativa": "Literalidade do art. 5º, LXXI da CF. Serve para tornar viável o exercício de direitos prejudicados pela falta de norma. Analogia: O Mandado de Injunção é a 'chave de fenda' que o cidadão pede ao Judiciário para ligar o motor do seu direito, quando o Legislativo esqueceu de fabricar a chave de ignição (lei)."
  },
  {
    "enunciado": "O mandado de injunção é a via adequada para questionar a insuficiência ou a má qualidade de legislação regulamentadora já existente.",
    "correta": "E",
    "tema": "Remédios Constitucionais",
    "justificativa": "O MI pressupõe **ausência** (omissão) de norma. Se a norma existe, mas é ruim ou ineficaz, utilizam-se outros meios (como ADI). Analogia: Você chama o mecânico (MI) se falta uma peça no carro; se a peça está lá, mas é de má qualidade, você reclama com o fabricante (Legislativo) ou pede a troca (ADI), mas não diz que a peça 'não existe'."
  },
  {
    "enunciado": "É competência exclusiva do Congresso Nacional resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional.",
    "correta": "C",
    "tema": "Poder Legislativo",
    "justificativa": "O Presidente assina o tratado, mas ele só vale internamente se o Congresso aprovar (referendo), conforme art. 49, I. Analogia: O pai (Presidente) negocia a compra do carro, mas o Conselho de Família (Congresso) precisa assinar o cheque, senão o negócio não sai."
  },
  {
    "enunciado": "Compete exclusivamente ao Congresso Nacional processar e julgar o presidente da República nos crimes de responsabilidade.",
    "correta": "E",
    "tema": "Poder Legislativo",
    "justificativa": "O julgamento ocorre no **Senado Federal** (art. 52, I), presidido pelo Presidente do STF. O Congresso (Câmara) apenas autoriza. Analogia: A Câmara é o delegado que indicia; o Senado é o juiz que condena."
  },
  {
    "enunciado": "Compete exclusivamente ao Congresso Nacional aprovar previamente, por voto secreto, a escolha dos presidentes e diretores do Banco Central do Brasil.",
    "correta": "E",
    "tema": "Poder Legislativo",
    "justificativa": "A sabatina e aprovação de autoridades (como do BC) é competência privativa do **Senado Federal** (art. 52, III, 'd'). Analogia: O Senado é o departamento de RH do governo que entrevista os candidatos aos altos cargos antes de serem contratados."
  },
  {
    "enunciado": "O poder constituinte originário não se exaure com a promulgação da Constituição, permanecendo latente para novas manifestações a qualquer tempo.",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "O Poder Originário é inicial. Uma vez promulgada a Constituição, ele se extingue (ou entra em latência profunda histórica), dando lugar aos Poderes Constituídos e ao Poder de Reforma. Analogia: O arquiteto projeta a casa e vai embora; quem fica para cuidar e reformar são os moradores (Poderes Constituídos)."
  },
  {
    "enunciado": "O poder constituinte originário encontra limites jurídicos nos valores que instruem a sociedade e nas normas procedimentais da Constituição anterior.",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "O Poder Originário é **ilimitado** e incondicionado juridicamente. Ele rompe com a ordem anterior e não deve obediência a ela. Analogia: O novo dono do terreno não precisa seguir a decoração da casa antiga que ele demoliu; ele constrói o que quiser, do zero."
  },
  {
    "enunciado": "O poder constituinte originário deve preservar o núcleo essencial dos direitos fundamentais consolidados (direitos adquiridos) sob a vigência do ordenamento jurídico anterior.",
    "correta": "E",
    "tema": "Poder Constituinte",
    "justificativa": "Não há direito adquirido frente a uma nova Constituição (Poder Originário). Ela pode revogar tudo, inclusive direitos fundamentais anteriores, se assim desejar. Analogia: Quando muda o regime de governo (nova Constituição), zera-se o jogo; ninguém começa com 'pontos extras' da partida anterior."
  },
  {
    "enunciado": "Pelo princípio da simetria, a irresponsabilidade penal relativa prevista na Constituição Federal para o presidente da República deve ser estendida aos governadores de estado pelas constituições estaduais.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "O STF não admite a extensão da imunidade processual/penal do Presidente (art. 86, § 4º) aos Governadores. É prerrogativa exclusiva do Chefe de Estado federal. Analogia: O Presidente usa um 'colete à prova de balas' (imunidade) único; os Governadores não podem mandar fazer um igual na alfaiataria do estado."
  },
  {
    "enunciado": "De acordo com o posicionamento do STF, o poder constituinte estadual pode estabelecer a adoção de medida provisória por estado-membro.",
    "correta": "C",
    "tema": "Processo Legislativo",
    "justificativa": "Os Estados podem prever MP em suas constituições, desde que sigam o modelo federal (regras de edição e tramitação). Analogia: O Governador pode ter a 'caneta rápida' (MP), mas só se a regra da casa (Constituição Estadual) permitir e copiar as travas de segurança da regra federal."
  },
  {
    "enunciado": "Não ofende o princípio da livre concorrência lei municipal que impede a instalação de estabelecimentos comerciais do mesmo ramo em determinada área (zoneamento de proteção econômica).",
    "correta": "E",
    "tema": "Ordem Econômica",
    "justificativa": "Súmula Vinculante 49 do STF: é inconstitucional lei municipal que fixa distanciamento para evitar concorrência. Analogia: A prefeitura não pode ser 'mãe' de uma loja e proibir que outra abra do lado só para proteger o lucro da primeira."
  },
  {
    "enunciado": "É lícita a terceirização entre pessoas jurídicas distintas, independentemente do objeto social das empresas envolvidas, sendo mantida a responsabilidade solidária da empresa contratante pelas obrigações trabalhistas.",
    "correta": "E",
    "tema": "Ordem Econômica / Trabalho",
    "justificativa": "A terceirização é lícita (atividade-meio e fim), mas a responsabilidade da contratante é **subsidiária**, e não solidária (salvo fraude ou casos específicos em falência, mas a regra geral da terceirização regular é subsidiária). Analogia: Se a empresa terceirizada não pagar o funcionário, a contratante paga a conta (subsidiária), mas ela é o 'segundo alvo', não o primeiro (solidária)."
  },
  {
    "enunciado": "É constitucional lei estadual que veda a cobrança de valores adicionais para o cumprimento da obrigação de identificação das peças de roupa com etiquetas em braile, em defesa do consumidor.",
    "correta": "C",
    "tema": "Ordem Econômica",
    "justificativa": "O STF considerou constitucional (ADI 5357), baseando-se na proteção do consumidor e inclusão, sem violar a livre iniciativa. Analogia: A liberdade da empresa não vale mais que o direito do cego de saber o que está comprando sem pagar 'multa' por isso."
  },
  {
    "enunciado": "O estado de sítio consiste em regime jurídico informado pelos princípios da excepcionalidade, taxatividade, transitoriedade, publicidade e proporcionalidade.",
    "correta": "C",
    "tema": "Estado de Sítio",
    "justificativa": "São os princípios balizadores do Sistema Constitucional de Crises. Analogia: O Estado de Sítio é um remédio amargo e perigoso, por isso a bula (Constituição) exige que seja usado só em casos graves (excepcionalidade), por pouco tempo (transitoriedade) e na dose certa (proporcionalidade)."
  },
  {
    "enunciado": "A inviolabilidade domiciliar permanece como direito absoluto mesmo durante a vigência do estado de sítio.",
    "correta": "E",
    "tema": "Estado de Sítio",
    "justificativa": "No Estado de Sítio, pode haver suspensão da inviolabilidade domiciliar (busca e apreensão sem ordem judicial, art. 139, III). Analogia: Em tempos de guerra ou caos total (sítio), a porta da sua casa perde a tranca constitucional absoluta contra o Estado."
  },
  {
    "enunciado": "O STF sedimentou o entendimento no sentido da inconstitucionalidade da percepção dos honorários sucumbenciais pelos membros da advocacia pública.",
    "correta": "E",
    "tema": "Advocacia Pública",
    "justificativa": "O STF decidiu que é **constitucional** o recebimento de honorários por advogados públicos, desde que somados ao subsídio não ultrapassem o teto constitucional. Analogia: O advogado público pode receber a 'gorjeta' do processo (honorários) ganho contra a outra parte, desde que o total do seu ganho não fure o teto do funcionalismo."
  },
  {
    "enunciado": "Há posicionamento pacificado no âmbito do STF no sentido da não obrigatoriedade de o advogado público estar filiado à Ordem dos Advogados do Brasil (OAB).",
    "correta": "E",
    "tema": "Advocacia Pública",
    "justificativa": "Advogados Públicos **precisam** de inscrição na OAB. A dispensa de OAB foi decidida apenas para Defensores Públicos. Analogia: O Advogado da União precisa da carteirinha do clube (OAB) para jogar; o Defensor Público, que joga em outra posição, foi dispensado."
  },
  {
    "enunciado": "Compete aos juízes federais processar e julgar as causas em que a União figure como interessada, inclusive as ações de falência de empresas públicas federais.",
    "correta": "E",
    "tema": "Competência Jurisdicional",
    "justificativa": "As ações de **falência** são a exceção à regra de competência da Justiça Federal (art. 109, I). Mesmo envolvendo ente federal, a falência corre na Justiça Estadual. Analogia: Quando o assunto é 'quebrar' (falência), a Justiça Federal sai de campo e deixa a Justiça Estadual (comum) resolver, mesmo que o 'falido' seja ligado ao governo."
  },
  {
    "enunciado": "As atribuições do presidente da República são indelegáveis, não podendo ser transferidas a Ministros de Estado em nenhuma hipótese.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "O art. 84, parágrafo único, permite delegação de algumas funções (ex: decretos autônomos, indulto) a Ministros, PGR e AGU. Analogia: O Presidente é o chefe, mas pode passar tarefas específicas para seus gerentes (Ministros) assinarem por ele para não sobrecarregar."
  },
  {
    "enunciado": "O presidente da República, ao responder por crime de responsabilidade, ficará suspenso de suas funções a partir do recebimento da denúncia pelo STF.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "Nos crimes de responsabilidade, a suspensão ocorre quando o **Senado** instaura o processo. O STF recebe denúncia apenas nos crimes comuns. Analogia: Se o crime é político (responsabilidade), quem apita a suspensão é o Senado; se é crime comum, é o STF."
  },
  {
    "enunciado": "Com o advento da Emenda Constitucional n.º 132/2023, os conflitos entre os entes federativos e o Comitê Gestor do Imposto sobre Bens e Serviços relativos a esse imposto devem ser julgados pelo Superior Tribunal de Justiça (STJ).",
    "correta": "C",
    "tema": "Reforma Tributária / Judiciário",
    "justificativa": "Nova competência atribuída ao STJ para dirimir conflitos envolvendo o novo Comitê Gestor do IBS. Analogia: O Comitê Gestor é o novo 'síndico' dos impostos estaduais/municipais; se houver briga com os governadores/prefeitos, o juiz competente é o STJ."
  },
  {
    "enunciado": "A Polícia Federal tem como atribuição o exercício, com exclusividade, das funções de polícia judiciária da União.",
    "correta": "C",
    "tema": "Segurança Pública",
    "justificativa": "Literalidade do art. 144, § 1º, IV. A PF é a 'delegacia' exclusiva para crimes federais. Analogia: Se o crime é contra o Brasil (União), só o FBI brasileiro (PF) pode investigar, a polícia estadual não põe a mão."
  },
  {
    "enunciado": "Por integrarem a União, os territórios federais possuem a mesma autonomia política conferida aos estados, sendo seus governadores eleitos diretamente.",
    "correta": "E",
    "tema": "Organização do Estado",
    "justificativa": "Territórios não têm autonomia política (são autarquias territoriais da União). O Governador é nomeado pelo Presidente da República, não eleito. Analogia: O Território é uma filial administrada por um gerente escolhido pelo dono (Presidente), enquanto o Estado é uma franquia com dono próprio eleito (Governador)."
  },
  {
    "enunciado": "Mesa da Câmara dos Deputados é legitimada universal para a propositura de ação direta de inconstitucionalidade (ADI), não necessitando demonstrar pertinência temática.",
    "correta": "C",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "As Mesas da Câmara e do Senado são legitimados universais. Apenas a Mesa de Assembleia Legislativa precisa de pertinência temática. Analogia: A Mesa da Câmara tem 'passe livre' no STF para questionar qualquer lei; a Mesa da Assembleia tem passe restrito aos assuntos do seu estado."
  },
  {
    "enunciado": "Em ação civil pública, é possível a declaração de inconstitucionalidade de lei 'incidenter tantum' (como causa de pedir), operando-se controle difuso.",
    "correta": "C",
    "tema": "Controle de Constitucionalidade",
    "justificativa": "A inconstitucionalidade pode ser o fundamento (causa de pedir) da ACP, mas não o pedido principal (que usurparia a função da ADI). Analogia: Na ACP, você pode dizer que a lei é inconstitucional para ganhar o caso concreto, mas não pode pedir para anular a lei do mapa para sempre (isso só na ADI)."
  },
{
    "enunciado": "Determinado cidadão recebeu notificação da Receita Federal sobre um imposto não recolhido e, sem obter resposta administrativa, resolveu buscar acesso a essas informações pessoais perante o Poder Judiciário. O remédio cabível é o habeas data.",
    "correta": "C",
    "tema": "Habeas Data",
    "justificativa": "O Habeas Data é o instrumento correto para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais, quando houver recusa administrativa [1]. Analogia: O Habeas Data é a 'chave mestra' que o cidadão usa para obrigar o governo a abrir a gaveta onde guarda sua ficha pessoal, quando o funcionário se recusa a mostrá-la."
  },
  {
    "enunciado": "É incabível a impetração de mandado de injunção quando a controvérsia for relativa à efetividade da legislação existente.",
    "correta": "C",
    "tema": "Mandado de Injunção",
    "justificativa": "O mandado de injunção pressupõe a *falta* de norma regulamentadora. Se a lei existe, mas é ineficaz ou defeituosa, não cabe injunção [2], [3]. Analogia: Você chama o mecânico (mandado de injunção) quando está *faltando* uma peça no motor (lei); se a peça está lá mas é ruim, você usa outra ferramenta (ADI, recurso), mas não diz que a peça não existe."
  },
  {
    "enunciado": "A extinção, sem resolução de mérito, de mandado de segurança, ante pedido de desistência formulado pelo impetrante, depende da concordância da autoridade coatora.",
    "correta": "E",
    "tema": "Mandado de Segurança",
    "justificativa": "O STF entende que a desistência do mandado de segurança independe da concordância da autoridade coatora ou da pessoa jurídica interessada [4]. Analogia: O Mandado de Segurança é um pedido de socorro voluntário; se quem pediu socorro decide desligar o telefone (desistir), não precisa pedir permissão ao atendente."
  },
  {
    "enunciado": "É permitida a impetração de mandado de segurança contra ato de agente de pessoa jurídica no exercício de atribuições do poder público.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "Cabe MS contra ato de autoridade pública ou de agente de pessoa jurídica no exercício de atribuições do poder público (ex: diretor de universidade privada) [5]. Analogia: Se o segurança privado está usando o crachá e exercendo a função da polícia (poder público), ele também responde pelas regras da polícia."
  },
  {
    "enunciado": "Para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa, é necessária a autorização expressa dos associados.",
    "correta": "E",
    "tema": "Mandado de Segurança Coletivo",
    "justificativa": "No MS coletivo impetrado por associação, ocorre a substituição processual, sendo desnecessária a autorização expressa e a lista nominal dos associados [6], [7]. Analogia: A associação entra em campo como se fosse o próprio time (substituto); não precisa recolher assinatura de cada torcedor (associado) para jogar o campeonato."
  },
  {
    "enunciado": "Declarada a extinção da punibilidade pelo cumprimento da pena, não mais subsiste ao agente o interesse na impetração de habeas corpus.",
    "correta": "C",
    "tema": "Habeas Corpus",
    "justificativa": "O HC protege a liberdade de locomoção. Se a pena já foi cumprida, não há mais coação à liberdade, logo, falta interesse de agir [8]. Analogia: Não faz sentido pedir um alvará de soltura para alguém que já saiu da prisão e está livre na rua."
  },
  {
    "enunciado": "É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.",
    "correta": "C",
    "tema": "Direitos dos Trabalhadores",
    "justificativa": "Previsão expressa do art. 10 da CF. Garante a gestão democrática em órgãos como o Conselho da Previdência [9]. Analogia: Quem paga a conta e consome o prato (trabalhadores/patrões) tem o direito de sentar à mesa com o cozinheiro (governo) para discutir a receita."
  },
  {
    "enunciado": "O direito de votar e ser votado em eleições sindicais é vedado aos aposentados, sendo restrito aos trabalhadores com vínculo ativo.",
    "correta": "E",
    "tema": "Direitos Sindicais",
    "justificativa": "A Constituição garante expressamente ao aposentado o direito de votar e ser votado nas organizações sindicais [10]. Analogia: O aposentado 'pendurou as chuteiras' do trabalho diário, mas continua sendo sócio vitalício do clube (sindicato) e pode se candidatar a presidente."
  },
  {
    "enunciado": "O direito à saúde é condicionado à contribuição previdenciária do cidadão, sendo restrito aos segurados do INSS.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas, independentemente de contribuição (ao contrário da previdência) [11]. Analogia: O SUS é um parque público aberto a todos, não um clube privado que exige pagamento de mensalidade na portaria."
  },
  {
    "enunciado": "Os direitos à moradia e ao lazer são garantidos a todos, independentemente de nacionalidade ou condição econômica, conforme os princípios da dignidade humana.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Moradia e lazer constam no rol de direitos sociais do art. 6º da CF e, baseados na dignidade da pessoa humana, têm alcance universal aos residentes [11]. Analogia: A Constituição desenhou um 'teto' (moradia) e um 'parque' (lazer) acessíveis a todos os seres humanos sob sua tutela."
  },
  {
    "enunciado": "Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.",
    "correta": "C",
    "tema": "Trabalhadores Domésticos",
    "justificativa": "Embora a EC 72/2013 tenha ampliado os direitos, o parágrafo único do art. 7º ainda lista quais se aplicam taxativamente, não sendo a totalidade absoluta (ex: proteção contra automação não se aplica) [12]. Analogia: O doméstico foi convidado para o banquete principal dos direitos, mas o menu dele ainda tem algumas pequenas diferenças em relação ao menu do trabalhador da fábrica."
  },
  {
    "enunciado": "É direito dos trabalhadores urbanos e rurais a assistência gratuita a seus filhos e dependentes, desde o nascimento até os 6 anos de idade, em creches e pré-escolas.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "*Atenção:* A fonte [13] considera 'Certo' com base na redação original ou jurisprudência de transição, mas a CF atual (EC 53) prevê **até 5 anos**. O candidato deve atentar para a literalidade da prova versus a atualização constitucional. Analogia: A 'garantia de fábrica' da creche constitucional vai até os 5 anos hoje, embora modelos antigos fossem até os 6."
  },
  {
    "enunciado": "A Constituição Federal de 1988 prevê expressamente o lazer como um direito social.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "O lazer está listado expressamente no art. 6º da CF [14]. Analogia: O lazer não é apenas 'descanso', é um 'ingrediente' obrigatório na receita de cidadania que a Constituição prescreve."
  },
  {
    "enunciado": "Todo brasileiro em situação de vulnerabilidade social tem direito a renda básica familiar garantida pelo poder público em programa permanente de transferência de renda.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Direito introduzido pela Emenda Constitucional nº 114/2021 (art. 6º, parágrafo único) [15]. Analogia: A Constituição criou um 'piso' financeiro (renda básica) para impedir que os vulneráveis caiam diretamente no porão da miséria absoluta."
  },
  {
    "enunciado": "O direito ao trabalho é exclusivo dos brasileiros natos e naturalizados.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "O direito ao trabalho não é restrito a nacionais; estrangeiros residentes também gozam de direitos sociais e igualdade [11]. Analogia: A carteira de trabalho brasileira não exige certidão de nascimento no país, apenas residência legal; o mercado está aberto."
  },
  {
    "enunciado": "A educação básica é um direito social, e sua oferta pelo Estado depende estritamente da disponibilidade orçamentária (reserva do possível).",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A educação básica é direito público **subjetivo**. O Estado não pode alegar falta de verba para negar o mínimo existencial na educação [11]. Analogia: A vaga na escola é uma dívida vencida do Estado com a criança; o governo não pode dizer 'pago quando sobrar dinheiro', ele tem que pagar agora."
  },
  {
    "enunciado": "O mandado de segurança coletivo pode ser impetrado por partido político, desde que tenha representação no Congresso Nacional.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "Partidos políticos com representação no Congresso Nacional são legitimados para impetrar MS Coletivo (art. 5º, LXX, 'a') [177 - contextual]. Analogia: O partido político com cadeira no Congresso ganha um 'megafone' especial (MS Coletivo) para defender interesses coletivos na justiça."
  },
  {
    "enunciado": "A impetração de mandado de segurança pressupõe a prova pré-constituída do direito alegado, não se admitindo dilação probatória.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "O direito deve ser líquido e certo, ou seja, comprovado de plano no momento da impetração [172 - contextual]. Analogia: O Mandado de Segurança é uma corrida de 100 metros (rápida); você tem que chegar na largada já com a medalha (prova) no pescoço, não dá tempo de parar para procurar."
  },
  {
    "enunciado": "O mandado de injunção coletivo induz litispendência em relação aos mandados de injunção individuais.",
    "correta": "E",
    "tema": "Mandado de Injunção",
    "justificativa": "A ação coletiva não induz litispendência para as ações individuais, mas os efeitos da coisa julgada erga omnes só beneficiarão o autor individual se ele requerer a suspensão de sua ação (Lei 13.300/2016). Analogia: O processo coletivo é um ônibus grande; o cidadão pode continuar indo de carro (ação individual) se quiser, os dois veículos podem andar na mesma estrada sem bater (sem litispendência)."
  },
  {
    "enunciado": "A Constituição Federal assegura aos servidores públicos ocupantes de cargo público o direito ao Fundo de Garantia do Tempo de Serviço (FGTS).",
    "correta": "E",
    "tema": "Servidores Públicos",
    "justificativa": "O art. 39, § 3º da CF estende aos servidores vários direitos trabalhistas, mas **exclui** o FGTS (inciso III do art. 7º não é citado) [183 - contextual]. Analogia: O servidor público tem 'estabilidade' (casamento fixo com o Estado), por isso não precisa do FGTS (que funciona como um seguro para quando o casamento acaba de repente)."
  },
  {
    "enunciado": "É garantida a proteção do salário do servidor público na forma da lei, constituindo crime sua retenção dolosa.",
    "correta": "C",
    "tema": "Servidores Públicos",
    "justificativa": "Este é um dos direitos do art. 7º (inciso X) estendidos aos servidores públicos pelo art. 39, § 3º [183 - contextual]. Analogia: O salário do servidor é sagrado; o gestor que segurar o dinheiro de propósito está cometendo um crime, não apenas um erro administrativo."
  },
  {
    "enunciado": "O direito de greve é assegurado aos servidores públicos civis e aos militares.",
    "correta": "E",
    "tema": "Servidores Públicos",
    "justificativa": "A greve é garantida aos servidores civis (art. 37, VII), mas expressamente **vedada** aos militares (art. 142, § 3º, IV). Analogia: O servidor civil pode cruzar os braços para reivindicar, mas o militar (braço armado do Estado) jamais pode largar o escudo, sob pena de deixar a sociedade indefesa."
  },
  {
    "enunciado": "A assistência social será prestada a quem dela necessitar, independentemente de contribuição à seguridade social.",
    "correta": "C",
    "tema": "Assistência Social",
    "justificativa": "Diferente da Previdência (contributiva), a Assistência é gratuita e destinada aos necessitados [11]. Analogia: A Assistência Social é o 'pronto-socorro' da cidadania; atende quem chega precisando, sem pedir carteirinha de sócio ou comprovante de pagamento."
  },
  {
    "enunciado": "O habeas corpus é cabível para proteger direito de visita a preso, por envolver indiretamente a liberdade de locomoção.",
    "correta": "E",
    "tema": "Habeas Corpus",
    "justificativa": "O STF entende que o direito de visita não diz respeito à liberdade de locomoção do visitante ou do preso em si (ir e vir na sociedade), não cabendo HC [178 - contextual]. Analogia: O HC abre a porta da cela para sair para a rua, não a porta da visita para entrar na prisão."
  },
  {
    "enunciado": "O remédio constitucional para sanar a falta de norma regulamentadora que torne inviável o exercício do direito de greve dos servidores públicos é o mandado de injunção.",
    "correta": "C",
    "tema": "Mandado de Injunção",
    "justificativa": "Foi justamente através de Mandados de Injunção (MI 670, 708, 712) que o STF determinou a aplicação da lei de greve do setor privado aos servidores, suprindo a omissão legislativa [16]. Analogia: Como o Congresso não construiu a ponte (lei de greve) para os servidores, o STF usou o Mandado de Injunção para colocar uma ponte provisória (lei do setor privado) no lugar."
  },
{
    "enunciado": "Determinado cidadão recebeu notificação da Receita Federal sobre um imposto não recolhido e, sem obter resposta administrativa, buscou acesso a essas informações pessoais no Judiciário. O remédio cabível é o habeas data.",
    "correta": "C",
    "tema": "Habeas Data",
    "justificativa": "O Habeas Data é o instrumento correto para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais, quando houver recusa administrativa [1]. Analogia: O Habeas Data é a 'chave mestra' que o cidadão usa para obrigar o governo a abrir a gaveta onde guarda sua ficha pessoal, quando o funcionário se recusa a mostrá-la."
  },
  {
    "enunciado": "Não é cabível mandado de injunção para discutir a efetividade de lei regulamentadora já existente.",
    "correta": "C",
    "tema": "Mandado de Injunção",
    "justificativa": "O mandado de injunção pressupõe a *ausência* de norma regulamentadora (omissão). Se a norma existe, mas é ineficaz, o remédio é outro (como ADI) [2]. Analogia: Você chama o mecânico (Mandado de Injunção) quando falta uma peça no motor (lei); se a peça está lá mas funciona mal, você reclama da qualidade, mas não diz que a peça não existe."
  },
  {
    "enunciado": "A extinção, sem resolução de mérito, de mandado de segurança, ante pedido de desistência formulado pelo impetrante, independe da concordância da autoridade coatora.",
    "correta": "C",
    "tema": "Mandado de Segurança",
    "justificativa": "O STF entende que o impetrante pode desistir do mandado de segurança a qualquer tempo, sem precisar da anuência da parte contrária [3]. Analogia: O Mandado de Segurança é um pedido de socorro voluntário; se quem pediu socorro decide desligar o telefone (desistir), não precisa pedir permissão ao atendente."
  },
  {
    "enunciado": "Para a cobrança de valores pretéritos de título judicial decorrente de mandado de segurança coletivo impetrado por entidade associativa, são desnecessárias a autorização expressa dos associados e a relação nominal destes.",
    "correta": "C",
    "tema": "Mandado de Segurança Coletivo",
    "justificativa": "No MS Coletivo por associação, ocorre substituição processual, dispensando-se a autorização individual e a lista nominal [4]. Analogia: A associação entra em campo como se fosse o próprio time (substituto); não precisa recolher assinatura de cada torcedor (associado) para jogar o campeonato."
  },
  {
    "enunciado": "Declarada a extinção da punibilidade pelo cumprimento da pena, não mais subsiste ao agente o interesse na impetração de habeas corpus.",
    "correta": "C",
    "tema": "Habeas Corpus",
    "justificativa": "O HC protege a liberdade de locomoção. Se a pena foi cumprida, a liberdade foi restaurada, não havendo mais o que proteger via HC [5]. Analogia: Não faz sentido pedir um alvará de soltura para alguém que já saiu da prisão e está livre na rua."
  },
  {
    "enunciado": "É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.",
    "correta": "C",
    "tema": "Direitos dos Trabalhadores",
    "justificativa": "Previsão expressa do art. 10 da Constituição Federal [6]. Analogia: Quem paga a conta e consome o serviço (trabalhadores/patrões) tem o direito de sentar à mesa com o cozinheiro (governo) para discutir a receita."
  },
  {
    "enunciado": "Somente aos trabalhadores com vínculo empregatício formal é assegurado o direito de participar de eleições sindicais, sendo vedada essa prerrogativa aos aposentados.",
    "correta": "E",
    "tema": "Direitos Sindicais",
    "justificativa": "A Constituição garante expressamente ao aposentado o direito de votar e ser votado nas organizações sindicais [7]. Analogia: O aposentado 'pendurou as chuteiras' do trabalho, mas continua sendo sócio do clube (sindicato) e pode votar na diretoria."
  },
  {
    "enunciado": "O direito à saúde é condicionado à contribuição previdenciária do cidadão, sendo restrito aos segurados do INSS.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "A saúde é direito de todos e dever do Estado, independente de contribuição, diferentemente da previdência [8]. Analogia: O SUS é um parque público aberto a todos, não um clube privado que exige carteirinha de sócio pagante na entrada."
  },
  {
    "enunciado": "A educação básica é um direito social, mas sua oferta pelo Estado depende da disponibilidade orçamentária (reserva do possível).",
    "correta": "E",
    "tema": "Educação",
    "justificativa": "A educação básica é direito público subjetivo e prioritário, não podendo o Estado alegar falta de verba para negar o mínimo existencial [8]. Analogia: A educação básica é uma dívida vencida e urgente; o governo não pode dizer 'pago quando sobrar dinheiro', ele tem que pagar agora."
  },
  {
    "enunciado": "O direito ao trabalho é exclusivo dos brasileiros natos e naturalizados, não se aplicando a estrangeiros.",
    "correta": "E",
    "tema": "Direitos Sociais",
    "justificativa": "O direito ao trabalho e a igualdade aplicam-se aos estrangeiros residentes no país [8]. Analogia: A carteira de trabalho não exige certidão de nascimento brasileira, apenas residência legal; o mercado é aberto."
  },
  {
    "enunciado": "Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.",
    "correta": "C",
    "tema": "Direitos dos Domésticos",
    "justificativa": "O art. 7º, parágrafo único, lista taxativamente quais direitos se aplicam aos domésticos, não sendo a totalidade absoluta (ex: proteção contra automação não se aplica) [9]. Analogia: O doméstico senta na mesa principal dos direitos, mas o menu dele ainda tem algumas diferenças em relação ao menu do trabalhador da fábrica."
  },
  {
    "enunciado": "É assegurada aos servidores públicos ocupantes de cargo público a proteção do salário na forma da lei, constituindo crime sua retenção dolosa.",
    "correta": "C",
    "tema": "Servidores Públicos",
    "justificativa": "Este é um dos direitos do art. 7º estendidos aos servidores pelo art. 39, § 3º da CF [10]. Analogia: O salário do servidor é sagrado; o gestor que segura o dinheiro de propósito comete crime, não apenas erro administrativo."
  },
  {
    "enunciado": "A Constituição Federal assegura aos servidores públicos estatutários o direito ao Fundo de Garantia do Tempo de Serviço (FGTS).",
    "correta": "E",
    "tema": "Servidores Públicos",
    "justificativa": "O FGTS não está na lista de direitos estendidos aos servidores (art. 39, § 3º), pois é incompatível com o regime de estabilidade estatutária [10]. Analogia: O servidor tem um 'casamento estável' com o Estado (estabilidade), por isso não recebe o 'seguro-divórcio' (FGTS) que os trabalhadores privados têm."
  },
  {
    "enunciado": "É direito dos trabalhadores urbanos e rurais a assistência gratuita a seus filhos e dependentes, desde o nascimento até os 6 anos de idade, em creches e pré-escolas.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "A fonte considera correto com base no texto original ou jurisprudência de transição, embora a redação atual da CF (EC 53) estipule **até 5 anos** [11]. Analogia: A 'garantia de fábrica' da creche constitucional vai até os 5 anos hoje, embora modelos antigos fossem até os 6."
  },
  {
    "enunciado": "Todo brasileiro em situação de vulnerabilidade social tem direito a renda básica familiar garantida pelo poder público.",
    "correta": "C",
    "tema": "Direitos Sociais",
    "justificativa": "Direito introduzido pela EC 114/2021 no art. 6º da CF [12]. Analogia: A Constituição criou um 'piso' financeiro para impedir que os vulneráveis caiam no porão da miséria absoluta."
  },
  {
    "enunciado": "Com o advento da Emenda Constitucional n.º 132/2023, os conflitos entre os entes federativos e o Comitê Gestor do Imposto sobre Bens e Serviços (IBS) devem ser julgados pelo Superior Tribunal de Justiça (STJ).",
    "correta": "C",
    "tema": "Reforma Tributária",
    "justificativa": "Competência atribuída ao STJ pela Reforma Tributária para dirimir conflitos envolvendo o novo órgão gestor do tributo subnacional [13]. Analogia: O Comitê Gestor é o novo síndico dos impostos estaduais/municipais; se houver briga com os governadores, quem resolve é o STJ."
  },
  {
    "enunciado": "Conflito de competência entre um juiz estadual e um juiz federal deve ser resolvido pelo tribunal regional federal ao qual estiver vinculado o juiz federal.",
    "correta": "E",
    "tema": "Competência Jurisdicional",
    "justificativa": "Conflitos entre juízes vinculados a tribunais diferentes (Federal x Estadual) são resolvidos pelo **STJ** [14]. Analogia: Quando dois filhos de famílias diferentes brigam, quem resolve não é o pai de um deles (TRF), mas sim o 'avô' comum (STJ)."
  },
  {
    "enunciado": "Independentemente do valor, todos os pagamentos devidos pelas fazendas públicas em virtude de sentença judiciária devem ser feitos exclusivamente na ordem cronológica de apresentação dos precatórios.",
    "correta": "C",
    "tema": "Precatórios",
    "justificativa": "Regra geral do art. 100 da CF para garantir a impessoalidade na fila de recebimento [15]. Analogia: Na fila do pagamento do governo, a regra é a ordem de chegada (cronológica), sem furar fila."
  },
  {
    "enunciado": "Compete ao presidente da República expedir instruções para a execução de leis, decretos e regulamentos.",
    "correta": "E",
    "tema": "Poder Executivo",
    "justificativa": "Expedir instruções para execução de leis é competência dos **Ministros de Estado** (art. 87). O Presidente expede decretos e regulamentos [16]. Analogia: O Presidente assina a planta da obra (Decreto), mas quem dá as instruções detalhadas para os operários são os engenheiros (Ministros)."
  },
  {
    "enunciado": "A delegação de competências legislativas privativas da União aos estados pode ser autorizada por decreto federal ou medida provisória.",
    "correta": "E",
    "tema": "Organização do Estado",
    "justificativa": "A delegação exige **Lei Complementar** (art. 22, parágrafo único) [17]. Analogia: Para emprestar um poder forte como fazer leis federais, exige-se um documento solene e robusto (Lei Complementar), não basta um bilhete simples (Decreto)."
  },
];
