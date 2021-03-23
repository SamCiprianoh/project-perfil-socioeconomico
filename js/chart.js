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

    let optCurso = ['Análise e Desenvolvimento de Sistemas (ADS)', 'Gestão da Produção Industrial (GPI)', 'Gestão de Recursos Humanos', 'Desenvolvimento de Software Multiplataforma']

    let optPeriodo = ['Matutino', 'Noturno']

    let optEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)']
    
    //Gera os graficos
    function chartTwoLabels(classe, tipo, labels, dados1, dados2, title){
        var ctx = document.getElementById(classe).getContext('2d');
        var myChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Matutino',
                    data: dados1[0],
                    backgroundColor: [
                        'rgb(91, 228, 247)',
                        'rgb(91, 228, 247)',
                    ],
                },{
                    label: 'Noturno',
                    data: dados2[1],
                    backgroundColor: [
                        'rgb(255, 110, 170)',
                        'rgb(255, 110, 170)',
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

    function chartOneLabel(classe, tipo, labels, dados, title){
        var ctx = document.getElementById(classe).getContext('2d');
        var myChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Período',
                    data: dados,
                    backgroundColor: [
                        'rgb(91, 228, 247)',
                        'rgb(255, 110, 170)',
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

    //Gera os dados por periodo
    function turmaMatutino(resPeriodo, dados, opcoes){
        resPeriodo.forEach(function(resposta){
            for(j = 0; j < 1; j++){
                for(k = 0; k < opcoes.length; k++){
                    if(resposta === opcoes[k]){
                        dados[j][k].push(resposta)
                    }
                    
                }
            }
        })
    }

    function turmaNoturno(resPeriodo, dados, opcoes){
        resPeriodo.forEach(function(resposta){
            for(j = 1; j < 2; j++){
                for(k = 0; k < opcoes.length; k++){
                    if(resposta === opcoes[k]){
                        dados[j][k].push(resposta)
                    }
                    
                }
            }
        })
    }

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

    console.log(respostas[1])

    //Pega as respostas da questao 1
    let curso

    curso = geraMatriz(curso, optCurso)
    
    turmaMatutino(resMatutino[2], curso, optCurso)
    turmaNoturno(resNoturno[2], curso, optCurso)

    //Gera os dados da questao 1
    let dadosCurso

    dadosCurso = geraMatriz(dadosCurso, optCurso)

    for(j = 0; j < 2; j++){
        for(k = 0; k < optCurso.length; k++){
            if(curso[j][k].length >= 0){
                dadosCurso[j][k].push(curso[j][k].length)
            }
        }   
    }

    //Mostra o label de acordo com os dados (!!TERMINAR!!)
    let labelsCurso = []

    if(dadosCurso[0][0] > 0 || dadosCurso[1][0] > 0){
        labelsCurso.push('ADS')
    }
    if(dadosCurso[0][1] > 0 || dadosCurso[1][1] > 0){
        labelsCurso.push('GPI')
    }
    if(dadosCurso[0][2] > 0 || dadosCurso[1][2] > 0){
        labelsCurso.push('GRH')
    }
    if(dadosCurso[0][3] > 0 || dadosCurso[1][3] > 0){
        labelsCurso.push('DSM')
    }

    console.log(dadosCurso)

    chartTwoLabels('chartCurso', 'bar', labelsCurso, dadosCurso, dadosCurso, questoes[2])

    //Pega as dados da questao 2
    let dadosPeriodo = []
    let labelsPeriodo = []

    if(resMatutino[2].length >= 0){
        dadosPeriodo.push(resMatutino[2].length)
    }
    if(resNoturno[2].length >= 0){
        dadosPeriodo.push(resNoturno[2].length)
    }

    for(k = 0; k < 2; k++){
        if(dadosPeriodo[k] >= 0){
            labelsPeriodo.push(optPeriodo[k])
        }
    }

    chartOneLabel('chartPeriodo', 'pie', labelsPeriodo, dadosPeriodo, questoes[3])

}

generateChart()