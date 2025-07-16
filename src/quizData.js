const quizData = [
  //  FÁCEIS 
  {
    question: "Quem foi lançado na cova dos leões?",
    options: ["José", "Daniel", "Davi", "Elias"],
    correct: "Daniel",
  },
  {
    question: "Quem traiu Jesus por 30 moedas?",
    options: ["Pedro", "Judas Iscariotes", "Tomé", "Paulo"],
    correct: "Judas Iscariotes",
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Gênesis", "Êxodo", "Mateus", "Salmos"],
    correct: "Gênesis",
  },
  {
    question: "Qual apóstolo negou Jesus três vezes?",
    options: ["Pedro", "João", "Tomé", "Tiago"],
    correct: "Pedro",
  },
  {
    question: "Quem é conhecido como o 'pai da fé'?",
    options: ["Abraão", "Moisés", "Isaac", "Jacó"],
    correct: "Abraão",
  },

  // MÉDIAS
  {
    question: "Quem foi o primeiro rei de Israel?",
    options: ["Saul", "Davi", "Salomão", "Josué"],
    correct: "Saul",
  },
  {
    question: "Quantos capítulos tem o Salmo mais longo?",
    options: ["119", "23", "150", "1"],
    correct: "119",
  },
  {
    question: "Quem foi vendido como escravo pelos irmãos?",
    options: ["Moisés", "José", "Davi", "Jacó"],
    correct: "José",
  },
  {
    question: "Qual livro fala sobre a saída do Egito?",
    options: ["Gênesis", "Êxodo", "Levítico", "Números"],
    correct: "Êxodo",
  },
  {
    question: "Quantos evangelhos há na Bíblia?",
    options: ["4", "3", "5", "2"],
    correct: "4",
  },

 //  LIVROS MENOS CONHECIDOS 
{
  question: "Qual rei reinou mais tempo em Judá, segundo os registros bíblicos?",
  options: ["Manassés", "Ezequias", "Salomão", "Josias"],
  correct: "Manassés", // 55 anos
},
{
  question: "Qual livro contém leis sobre pureza, sacrifícios e sacerdócio?",
  options: ["Levítico", "Deuteronômio", "Números", "Êxodo"],
  correct: "Levítico",
},
{
  question: "Quem foi rei aos 8 anos de idade e restaurou a Lei do Senhor?",
  options: ["Josias", "Joás", "Salomão", "Ezequias"],
  correct: "Josias",
},
{
  question: "Qual rei teve sua mão paralisada por tocar no altar, e depois foi curado?",
  options: ["Jeroboão", "Roboão", "Acabe", "Jeú"],
  correct: "Jeroboão", // 1 Reis 13
},
{
  question: "Qual livro é composto por dois discursos de Moisés e sua despedida?",
  options: ["Deuteronômio", "Levítico", "Josué", "Êxodo"],
  correct: "Deuteronômio",
},
{
  question: "Quem foi a rainha que destruiu a descendência real e quase acabou com a linhagem de Davi?",
  options: ["Atalia", "Jezabel", "Bate-Seba", "Raquel"],
  correct: "Atalia",
},
{
  question: "Qual rei mandou colocar o livro da Lei de volta no templo e chorou ao ouvi-lo?",
  options: ["Josias", "Manassés", "Joás", "Asa"],
  correct: "Josias",
},
{
  question: "Em qual livro é descrito o ciclo de pecado, opressão, clamor e livramento?",
  options: ["Juízes", "1 Samuel", "Neemias", "Josué"],
  correct: "Juízes",
},
{
  question: "Qual foi o rei que viu a escrita na parede antes da queda da Babilônia?",
  options: ["Belsazar", "Nabucodonosor", "Dario", "Artaxerxes"],
  correct: "Belsazar",
},
{
  question: "Qual livro relata o retorno dos judeus do exílio e a reconstrução do templo?",
  options: ["Esdras", "Neemias", "Daniel", "Ageu"],
  correct: "Esdras",
},


  //  ESPÍRITO SANTO
  {
    question: "Em Atos 2, o que apareceu sobre as cabeças dos discípulos?",
    options: ["Línguas como de fogo", "Pombas", "Anjos", "Nuvens"],
    correct: "Línguas como de fogo",
  },
  {
    question: "Qual fruto é citado como parte do fruto do Espírito em Gálatas 5?",
    options: ["Paciência", "Orgulho", "Discórdia", "Vaidade"],
    correct: "Paciência",
  },
  {
    question: "Onde o Espírito Santo impediu Paulo de ir pregar?",
    options: ["Ásia", "Macedônia", "Judeia", "Roma"],
    correct: "Ásia",
  },
  {
    question: "Quem foi cheio do Espírito Santo ainda no ventre?",
    options: ["João Batista", "Jesus", "Paulo", "Pedro"],
    correct: "João Batista",
  },
  {
    question: "Quem mentiu ao Espírito Santo e morreu por isso?",
    options: ["Ananias e Safira", "Simão, o mágico", "Herodes", "Judas"],
    correct: "Ananias e Safira",
  },
  {
    question: "Quem disse: 'Não por força nem por poder, mas pelo meu Espírito'?",
    options: ["Zacarias", "Jeremias", "Isaías", "Ezequiel"],
    correct: "Zacarias",
  },
  {
    question: "Qual é a primeira menção do Espírito de Deus na Bíblia?",
    options: ["Gênesis 1:2", "Êxodo 3:14", "Salmos 23", "João 3:5"],
    correct: "Gênesis 1:2",
  },
  {
    question: "O que o Espírito Santo nos ensina, segundo João 14?",
    options: ["Todas as coisas", "A lei de Moisés", "A justiça de Deus", "Os salmos"],
    correct: "Todas as coisas",
  },
  {
    question: "Quem foi guiado ao deserto pelo Espírito para ser tentado?",
    options: ["Jesus", "João Batista", "Elias", "Moisés"],
    correct: "Jesus",
  },
  {
    question: "Como o Espírito Santo é descrito em João 14:16?",
    options: ["Consolador", "Rei", "Juiz", "Fogo"],
    correct: "Consolador",
  },

  //  NOVO TESTAMENTO
  {
    question: "Quem escreveu o evangelho mais longo?",
    options: ["Lucas", "Mateus", "João", "Marcos"],
    correct: "Lucas",
  },
  {
    question: "Qual apóstolo foi chamado de 'gêmeo'?",
    options: ["Tomé", "Tiago", "João", "Pedro"],
    correct: "Tomé",
  },
  {
    question: "Qual é o primeiro milagre de Jesus registrado?",
    options: ["Transformar água em vinho", "Curar o cego", "Andar sobre as águas", "Multiplicação dos pães"],
    correct: "Transformar água em vinho",
  },
  {
    question: "Qual evangelho começa com a genealogia de Jesus?",
    options: ["Mateus", "Lucas", "João", "Marcos"],
    correct: "Mateus",
  },
  {
    question: "Qual carta fala sobre a armadura de Deus?",
    options: ["Efésios", "Gálatas", "Romanos", "1 Coríntios"],
    correct: "Efésios",
  },
  {
    question: "Quem escreveu o livro de Hebreus?",
    options: ["Autor desconhecido", "Paulo", "Pedro", "João"],
    correct: "Autor desconhecido",
  },
  {
    question: "Quem foi o companheiro de Paulo em sua primeira viagem missionária?",
    options: ["Barnabé", "Silas", "Timóteo", "Lucas"],
    correct: "Barnabé",
  },
  {
    question: "Quem caiu da janela e morreu durante uma pregação de Paulo?",
    options: ["Êutico", "Timóteo", "Ananias", "Demas"],
    correct: "Êutico",
  },
  {
    question: "Qual apóstolo escreveu o Apocalipse?",
    options: ["João", "Pedro", "Paulo", "Tiago"],
    correct: "João",
  },
  {
    question: "Onde Jesus nasceu?",
    options: ["Belém", "Jerusalém", "Nazaré", "Cafarnaum"],
    correct: "Belém",
  },

  // PEGADINHAS DIFÍCEIS
  {
    question: "Qual é o último livro do Antigo Testamento na ordem cronológica dos fatos (e não da Bíblia)?",
    options: ["Malaquias", "Neemias", "Esdras", "Ageu"],
    correct: "Neemias"
  },
  {
    question: "Quantos animais de cada espécie Noé levou para a arca, segundo Gênesis 7?",
    options: ["2 de cada", "7 pares de todos", "2 de impuros e 7 de puros", "7 de cada"],
    correct: "2 de impuros e 7 de puros"
  },
  {
    question: "Quem cortou o cabelo de Sansão?",
    options: ["Dalila", "Os filisteus", "Um servo", "Ele mesmo"],
    correct: "Um servo"
  },
  {
    question: "Quem foi o pai de José, marido de Maria?",
    options: ["Jacó", "Heli", "Abraão", "Zacarias"],
    correct: "Jacó"
  },
  {
    question: "Qual é o primeiro mandamento com promessa?",
    options: ["Não matarás", "Não adulterarás", "Honra teu pai e tua mãe", "Amarás a Deus"],
    correct: "Honra teu pai e tua mãe"
  },
  {
    question: "Quem escreveu o Salmo 90?",
    options: ["Davi", "Moisés", "Salomão", "Asafe"],
    correct: "Moisés"
  },
  {
    question: "Em qual livro está escrito: 'A alma que pecar, essa morrerá'?",
    options: ["Levítico", "Romanos", "Ezequiel", "Deuteronômio"],
    correct: "Ezequiel"
  },
  {
    question: "Quem foi o primeiro a construir uma cidade na Bíblia?",
    options: ["Caim", "Ninrode", "Noé", "Lameque"],
    correct: "Caim"
  },
  {
    question: "Qual mulher foi julgada como embriagada enquanto orava?",
    options: ["Marta", "Maria", "Ana", "Débora"],
    correct: "Ana"
  },
  {
    question: "Quem viveu mais: Adão, Noé ou Matusalém?",
    options: ["Adão", "Noé", "Matusalém", "Nenhum"],
    correct: "Matusalém"
  }
];

export default quizData;
