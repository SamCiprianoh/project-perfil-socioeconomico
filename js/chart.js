//LÊ O ARQUIVO JSOM
async function generateChart() {
   const file = await fetch('js/forms.json')

   const json = await file.json()
   const forms = json.forms
   
   let email = [], RA = [], i = 0
   let cabecalho = '', dadosTabela = ''
  
   cabecalho = '<tr class="thead__row"><td class="thead__data">E-mail</td> <td class="thead__data">RA</td></tr>'
   document.getElementById('thead').innerHTML = cabecalho

   for(quest of forms){
       email[i] = quest["Email Address"]
       RA[i] = quest["3. Informe os 7 últimos dígitos do seu RA (109048xxxxxxx)"]
       
       dadosTabela = dadosTabela + `<tr class="tbody__row"><td class="tbody__data">${email[i]}</td><td class="tbody__data">${'109048' + RA[i]}</td></tr>`
       i++
   }

   document.getElementById('tbody').innerHTML = dadosTabela
}

generateChart()
