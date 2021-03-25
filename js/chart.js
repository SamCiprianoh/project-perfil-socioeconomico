//LÊ O ARQUIVO JSOM
async function generateChart() {
    const file = await fetch('json/forms.json')
 
    const json = await file.json()
    const forms = json.forms

    let i = 0
    let questoes

    //Loop para pegar as questoes
    for(quest of forms){
        questoes = Object.getOwnPropertyNames(quest)
        i++
    }

    //Filtra so as questoes do noturno
    let noturno = forms.filter(function(periodo){
        return periodo[questoes[3]] === 'Noturno'
    })

    //Filtra so as questoes do matutino
    let matutino = forms.filter(function(periodo){
        return periodo[questoes[3]] === 'Matutino'
    })

    let respostas = new Array(questoes.length)
    let resNoturno = new Array(questoes.length)
    let resMatutino = new Array(questoes.length)
    
    
    for(let j = 0; j < questoes.length; j++){
        resNoturno[j] = new Array(noturno.length)
        resMatutino[j] = new Array(matutino.length)
        respostas[j] = new Array(forms.length)
    }

    //Array com todas as questoes 
    for(let k = 0; k < forms.length; k++){
        for(let j = 0; j < questoes.length; j++){
            respostas[j][k] = forms[k][questoes[j]]
        }
    }

    //Array com todas as questoes do noturno
    for(let k = 0; k < noturno.length; k++){
        for(let j = 0; j < questoes.length; j++){
            resNoturno[j][k] = noturno[k][questoes[j]]
        }
    } 

    //Array com todas as questoes do matutino
    for(let k = 0; k < matutino.length; k++){
        for(let j = 0; j < questoes.length; j++){
            resMatutino[j][k] = matutino[k][questoes[j]]
        }
    } 

    let optCurso = ["Análise e Desenvolvimento de Sistemas (ADS)", "Gestão da Produção Industrial (GPI)", "Gestão de Recursos Humanos", "Desenvolvimento de Software Multiplataforma"]
    let optPeriodo = ['Matutino', 'Noturno'];
    let optEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
    let optCidade = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
    let optGenero = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
    let optDataNascimento
    let optEstadoCivil = ['Solteiro(a)', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
    let optPortador = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
    let optConvivePort = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convivo ou não moro com alguém com deficiência'];
    let optQtdFilhos = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
    let optMoraCom = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
    let optQtdMoradores = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    let optSituacaoDomi = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
    let optTempoMoradia = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
    let optRendaMensal = ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'];
    let opt17QtdeCadaCoisa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // Para todas as questões dentro da questão 17
    let optTemNoDomicilio = ['Telefone fixo', 'Internet', 'Tv por assinatura', 'Empregada mensalista', 'Nenhuma das opções acima', 'Telefone fixo, Internet', 'Telefone fixo, Internet, Tv por assinatura', 'Telefone fixo, Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura', 'Internet, Empregada mensalista', 'Telefone fixo, Tv por assinatura', 'Telefone fixo, Empregada mensalista'];
    let optTrabalha = ['Sim', 'Não'];
    let optVinculoEmprego = ['Não trabalho', 'Sou registrado em indústria (calçados/confecções/outras)', 'Sou registrado no comércio', 'Sou registrado em empresa prestadora de serviços', 'Sou registrado em empresa pública (federal/estadual/municipal)', 'Sou autônomo', 'Sou empresário', 'Sou estagiário'];
    let optAreaTrabalho = ['Não trabalho', 'Trabalho na área do curso', 'Trabalho fora da área do curso'];
    let optHorarioTrabalho = ['Não trabalho', 'Manhã', 'Tarde', 'Noite', 'Manhã e tarde', 'Manhã e noite', 'Tarde e noite', 'Regime de turnos'];
    let optPlanoDeSaude = ['Não tenho, uso o SUS', 'Tenho e é pago integralmente pela empresa', 'Tenho e é pago parcialmente pela empresa', 'Tenho e é um plano familiar', 'Tenho e é um plano individual'];
    let optEscolaridade = ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior', 'Pós-graduação', 'Prefiro não responder'];
    let optEstudou = ['Sempre em escola pública', 'A maior parte em escola pública', 'Sempre em escola particular paga pela família', 'Sempre em escola particular com bolsa', 'A maior parte em escola particular paga pela família', 'A maior parte em escola particular com bolsa'];
    let optUsaMicroComp = ['Nunca', 'Pouco', 'Ás vezes', 'Muito', 'Sempre']; // para questão 23.1 e 27
    let optOndeUsaMicroComp = ['Em casa', 'No trabalho', 'Na escola', 'Em outros lugares', 'Em casa, No trabalho', 'Em casa, Na escola', 'Em casa, Na escola, Em outros lugares', 'Em casa, Em outros lugares', 'Em casa, No trabalho, Na escola', 'Em casa, No trabalho, Em outros lugares', 'Em casa, No trabalho, Na escola, Em outros lugares', 'No trabalho, Na escola', 'No trabalho, Em outros lugares', 'No trabalho, Na escola, Em outros lugares', 'Na escola, Em outros lugares'];
    let optFinalizadeUsaMicroComp = ['Para trabalhos profissionais', 'Para trabalhos escolares', 'Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para comunicação por e-mail', 'Para operações bancárias', 'Para compras eletrônicas', ' Para trabalhos profissionais, Para trabalhos escolares', 'Para trabalhos profissionais, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para comunicação por e-mail', 'Para trabalhos profissionais, Para operações bancárias', 'Para trabalhos profissionais, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos escolares, Para operações bancárias', 'Para trabalhos escolares, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias', 'Para comunicação por e-mail, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para operações bancárias, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas','Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas'];
    let optConhecimentoInformatica = ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'];
    let optConhecimentoLinguas = ['Leio, escrevo e falo bem', 'Leio, escrevo e falo razoavelmente', 'Leio e escrevo mas não falo', 'Leio mas não escrevo nem falo', 'Praticamente nula'];
    let optLeJornal = ['Diariamente', 'Algumas vezes por semana', 'Somente aos domingos', 'Raramente', 'Não leio'];
    let optAssuntosJornal = ['Não leio jornal', 'Todos os assuntos', 'Notícia locais', 'Notícias nacionais', 'Notícias internacionais', 'Esporte', 'Lazer, arte e cultura', 'Notícias policiais', 'Classificados', 'Moda', 'Sociais'];
    let optQtdLivros = ['Nenhum', 'Até 2', 'De 3 até 6', 'De 7 até 10', 'Mais de 10'];
    let optLeLivros = ['Não leio', 'Romance', 'Ficção', 'Policial', 'Biográfico', 'Aventura', 'Autoajuda', 'Outros'];
    let optAtividadeVolun = ['Sim', 'Não'];
    let optReligiao = ['Nenhuma', 'Católica', 'Espírita', 'Evangélica', 'Protestante', 'Outra'];
    let optEntretenimento = ['Cinema', 'Exposições de arte', 'Filmes na internet', 'Literatura', 'Museus', 'Música', 'Teatro', 'TV', 'Viagens', 'Nenhuma'];
    let optConheceuFatec = ['Cartaz de divulgação', 'Indicação de familiar/amigo', 'Pelo Facebook', 'Por algum dos jornais', 'Por alguma das rádios', 'Por outdoor', 'Propaganda na escola que estudava'];
    let optEscolheuCurso = ['Este curso forma profissionais facilmente absorvidos pelo mercado', 'Este curso forma profissionais que são bem remunerados', 'Minha vocação é seguir esta carreira', 'Este curso é gratuito', 'Este curso é de média duração', 'É um curso bem conceituado na região', 'Porque já trabalho na área', 'Sugestão ou vontade familiar', 'Outros motivos'];
    let optExpectativa = ['Obter novos conhecimentos', 'Obter competências para exercício de uma profissão', 'Conhecer novas pessoas', 'Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter um diploma de nível superior', 'Outra expectativa', 'Não tenho expectativa alguma'];
    let optFormar = ['Conquistar vaga em empresa privada', 'Prestar concurso público', 'Melhorar cargo e salário na empresa que trabalho', 'Abrir meu próprio negócio', 'Ingressar na carreira acadêmica', 'Outra expectativa', 'Nenhuma expectativa'];
    let optEstudoNaEscola = ['Sim', 'Não'];
    let optCursoTecnico = ['Não fiz', 'Sim, em uma ETEC', 'Sim, no SENAC', 'Sim, no SENAI', 'Sim, em outra instituição']
    let optTransporte = ['Caminhando', 'Carona', 'Bicicleta', 'Moto', 'Carro', 'Ônibus', 'Transporte escolar']
    

    //Funcao dos charts
    function chartTwoLabels(id, tipo, labels, dados1, dados2, title){
        var ctx = document.getElementById(id).getContext('2d');
        var myChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Matutino',
                    data: dados1,
                    backgroundColor: [
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                        'rgba(91, 228, 247, .8)',
                    ],
                },{
                    label: 'Noturno',
                    data: dados2,
                    backgroundColor: [
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                        'rgba(255, 110, 170, .8)',
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: questoes[title],
                    fontSize: 18,
                    fontColor: '#2E446E',
                    fontFamily: 'Monospace'
                },
    
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(64, 64, 64)'
                    }
                }
            }
        });
    }

    function chartOneLabel(id, tipo, labels, label, dados, title){
        var ctx = document.getElementById(id).getContext('2d');
        var myChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: dados,
                    backgroundColor: [
                        'rgba(91, 228, 247, .8)',
                        'rgba(255, 110, 170, .8)',
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: title,
                    fontSize: 18,
                    fontColor: '#2E446E',
                    fontFamily: 'Monospace'
                },
    
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(64, 64, 64)'
                    }
                }
            }
        });
    }

    //Gera Matriz
    function geraMatriz(variavel, tamanho){
        variavel = new Array(optPeriodo.length)
        for(j = 0; j < optPeriodo.length; j++){
            variavel[j] = new Array()
            for(k = 0; k < tamanho.length; k++){
                variavel[j][k] = new Array()  
            }
        }
        return variavel
    }

    

    //Funcao completa que gera os graficos
    function geraChart(variavel, opcao, numQuestao, dadosM, dadosN, labels, classe, tipo){
        variavel = geraMatriz(variavel, opcao)
    

        
        resMatutino[numQuestao].forEach(function(resposta){
            for(j = 0; j < 1; j++){
                for(k = 0; k < opcao.length; k++){
                    if(resposta === opcao[k]){
                        variavel[j][k].push(resposta)
                    }
                }
            }
        })

        resNoturno[numQuestao].forEach(function(resposta){
            for(j = 1; j < 2; j++){
                for(k = 0; k < opcao.length; k++){
                    if(resposta === opcao[k]){
                        variavel[j][k].push(resposta)
                    }
                }
            }
        })


        for(j = 0; j < opcao.length; j++){
            if(variavel[0][j].length > 0){
                dadosM.push(variavel[0][j].length)
            }
            if(variavel[1][j].length > 0){
                dadosN.push(variavel[1][j].length)
            }
            if(dadosM.length > dadosN.length){
                dadosN.push(0)
            }
            if(dadosN.length > dadosM.length){
                dadosM.push(0)
            }
           
        }

        for(j = 0; j <= 1; j++){
            for(k = 0; k < opcao.length; k++){
                if(variavel[j][k][0] != undefined){
                    labels.push(variavel[j][k][0])
                }
                labels = labels.filter(function(este, i) {
                    return labels.indexOf(este) === i;
                });
            }
        }

        chartTwoLabels(classe, tipo, labels, dadosM, dadosN, numQuestao)
    }


    //Chart Curso
    let curso
    let dadosCursoM = []
    let dadosCursoN = []
    let labelsCurso = []

    geraChart(curso, optCurso, 2, dadosCursoM, dadosCursoN, labelsCurso, 'chartCurso', 'bar')

    //Chart Periodo
    let periodo = []
    let dadosPeriodo = []
    let labelsPeriodo = []

    for(let i = 0; i < optPeriodo.length; i++){
        periodo[i] = new Array()
    }

    for (j = 0; j < optPeriodo.length; j++) {
        for (k = 0; k < respostas[3].length; k++) {
            if (respostas[3][k] === optPeriodo[j]) {
                periodo[j].push(respostas[3][k])
            }
        }
        if(periodo[j].length > 0){
            dadosPeriodo.push(periodo[j].length)
        }
    }

    for(j = 0; j < 1; j++){
        for(k = 0; k < optPeriodo.length; k++){
            if(periodo[k][j] != undefined){
                labelsPeriodo.push(periodo[k][j])
            }
        }
    }
    
    chartOneLabel('chartPeriodo', 'pie', labelsPeriodo, 'Cursos', dadosPeriodo, questoes[3])

    //Pega emails e RA
    let cabecalho = '', dadosTabela = ''
    let email = [], RA = []

    for(quest of forms){
        email[i] = quest["Email Address"]
        RA[i] = quest["3. Informe os 7 últimos dígitos do seu RA (109048xxxxxxx)"]
        
        dadosTabela = dadosTabela + `<tr class="tbody__row"><td class="tbody__data">${email[i]}</td><td class="tbody__data">${'109048' + RA[i]}</td></tr>`
        i++
    }

    //Gera tabela com emails e RA
    cabecalho = '<tr class="thead__row"><td class="thead__data">E-mail</td> <td class="thead__data">RA</td></tr>'
    document.getElementById('thead').innerHTML = cabecalho
 
    document.getElementById('tbody').innerHTML = dadosTabela

    //Chart Estado
    let estado
    let dadosEstadoM = []
    let dadosEstadoN = []
    let labelsEstado = []

    geraChart(estado, optEstado, 5, dadosEstadoM, dadosEstadoN, labelsEstado, 'chartEstado', 'bar')

    //Chart Cidade
    let cidade 
    let dadosCidadeM = []
    let dadosCidadeN = []
    let labelsCidade = []

    geraChart(cidade, optCidade, 6, dadosCidadeM, dadosCidadeN, labelsCidade, 'chartCidade', 'horizontalBar')

    //Chart Mora com quem
    let moraCom 
    let dadosMoraComM = []
    let dadosMoraComN = []
    let labelsMoraCom = []

    geraChart(moraCom, optMoraCom, 13, dadosMoraComM, dadosMoraComN, labelsMoraCom, 'chartMoraCom', 'horizontalBar')


    //Chart Mora com quem
    let TempoMoradia 
    let dadosTempoMoradiaM = []
    let dadosTempoMoradiaN = []
    let labelsTempoMoradia = []

    geraChart(TempoMoradia, optTempoMoradia, 16, dadosTempoMoradiaM, dadosTempoMoradiaN, labelsTempoMoradia, 'chartTempoMoradia', 'bar')

    //Chart Mora com quem
    let QtdMoradores 
    let dadosQtdMoradoresM = []
    let dadosQtdMoradoresN = []
    let labelsQtdMoradores = []

    geraChart(QtdMoradores, optQtdMoradores, 14, dadosQtdMoradoresM, dadosQtdMoradoresN, labelsQtdMoradores, 'chartQtdMoradores', 'bar')

    //Chart Mora com quem
    let SituacaoDomi 
    let dadosSituacaoDomiM = []
    let dadosSituacaoDomiN = []
    let labelsSituacaoDomi = []

    geraChart(SituacaoDomi, optSituacaoDomi, 15, dadosSituacaoDomiM, dadosSituacaoDomiN, labelsSituacaoDomi, 'chartSituacaoDomi', 'bar')

    //Chart Mora com quem
    let Genero 
    let dadosGeneroM = []
    let dadosGeneroN = []
    let labelsGenero = []

    geraChart(Genero, optGenero, 7, dadosGeneroM, dadosGeneroN, labelsGenero, 'chartGenero', 'bar')


    //Chart Mora com quem
    let EstadoCivil 
    let dadosEstadoCivilM = []
    let dadosEstadoCivilN = []
    let labelsEstadoCivil = []

    geraChart(EstadoCivil, optEstadoCivil, 9, dadosEstadoCivilM, dadosEstadoCivilN, labelsEstadoCivil, 'chartEstadoCivil', 'horizontalBar')

    //Chart Mora com quem
    let Portador 
    let dadosPortadorM = []
    let dadosPortadorN = []
    let labelsPortador = []

    geraChart(Portador, optPortador, 11, dadosPortadorM, dadosPortadorN, labelsPortador, 'chartPortador', 'bar')

    //Chart Mora com quem
    let QtdFilhos 
    let dadosQtdFilhosM = []
    let dadosQtdFilhosN = []
    let labelsQtdFilhos = []

    geraChart(QtdFilhos, optQtdFilhos, 12, dadosQtdFilhosM, dadosQtdFilhosN, labelsQtdFilhos, 'chartQtdFilhos', 'bar')

    

    

     
    
    console.log(respostas)
     
}

generateChart()