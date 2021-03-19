var ctx = document.getElementById('chartCurso').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       title: {
         display: true,
         text: '1. Qual o seu curso?',
         fontSize: 18,
         fontColor: '#2E446E',
         fontFamily: 'Monospace'
     },
    }
});

var ctx = document.getElementById('chartPeriodo').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       title: {
         display: true,
         text: '2. Qual o período que cursa?',
         fontSize: 18,
         fontColor: '#2E446E',
         fontFamily: 'Monospace'
     },
    }
});



//LÊ O ARQUIVO JSOM
async function generateChart() {
    const file = await fetch('js/forms.json')
 
    const json = await file.json()
    const forms = json.forms

    let i = 0
    let ADS = 0
    let cabecalho = '', dadosTabela = ''
    
    let email = [], RA = [] 
    let curso = []
    let periodo = [], matutino = 0, noturno = 0
    
   
    
 
    for(quest of forms){

        //EMAIL E RA
        email[i] = quest["Email Address"]
        RA[i] = quest["3. Informe os 7 últimos dígitos do seu RA (109048xxxxxxx)"]
        
        dadosTabela = dadosTabela + `<tr class="tbody__row"><td class="tbody__data">${email[i]}</td><td class="tbody__data">${'109048' + RA[i]}</td></tr>`
        i++

        //CURSO
        curso[i] = quest["1. Qual o seu curso?"]
        if(curso[i] === 'Análise e Desenvolvimento de Sistemas (ADS)'){
            ADS++
        }

        //PERIODO
        periodo[i] = quest["2. Qual o período que cursa?"]
        if(periodo[i] === "Matutino"){
            matutino++
        } else {
            noturno++
        }
    }

    

    //TABELA EMAIL E RA
    cabecalho = '<tr class="thead__row"><td class="thead__data">E-mail</td> <td class="thead__data">RA</td></tr>'
    document.getElementById('thead').innerHTML = cabecalho
 
    document.getElementById('tbody').innerHTML = dadosTabela
    
   
}

generateChart()