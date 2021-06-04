const calc = document.querySelector('#calcular')
const res = document.querySelector('#res')

function calcular() {
    res.innerHTML = ('')

    const select = document.querySelector('#formulas')
    const bhask = 'Bhaskara'
    const areaR = 'Área retângulo'
    const areaQ = 'Área quadrado'
    const areaT = 'Área triângulo'
    
    if(select.value == bhask){
        const abha = prompt('Digite o valor de a:')
        const n1 = Number(abha)
        const bbha =  prompt('Digite o valor de b:')
        const n2 = Number(bbha)
        const cbha = prompt('Digite o valor de c:')
        const n3 = Number(cbha)
        const delta = (n2 * n2) - 4 * n1 * n3
        res.innerHTML = (`Valor de Delta = ${delta} <br>`)
        if(delta < 0){
            res.innerHTML = (`Para Delta negativo, não existem raízes reais. <br/>`);  
          } else if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            alert(`Valores digitados são inválidos!`)
            res.innerHTML = ('')
          } else{
            res.innerHTML = (`Para Delta positivo, raízes diferentes: <br/>`);  
            
            const coeficiente1 = (-n2 + Math.sqrt(delta)) / (2 * n1);
            const coeficiente2 = (-n2 - Math.sqrt(delta)) / (2 * n1);
            
            res.innerHTML = (`x = ${coeficiente1} <br>`);
            res.innerHTML = (`x = ${coeficiente2} <br>`);
          }
    } else if(select.value == areaR){
       const baseR = prompt('Digite a medida da base:')
       const n4 = Number(baseR)
       const altR = prompt('Digite a medida da altura:')
       const n5 = Number(altR)
       const areaRet = n4*n5
       res.innerHTML = (`A área do retângulo é: ${areaRet}`)
       if(isNaN(n4) || isNaN(n5)){
          alert(`Valores digitados são inválidos!`)
          res.innerHTML = ('')
       }
    } else if(select.value == areaQ){
      const ladoQ = prompt('Digite a medida de um dos lados:')
      const n6 = Number(ladoQ)
      const areaQua = n6*n6
      res.innerHTML = (`A área do quadrado é: ${areaQua}`)
      if(isNaN(n6)){
        alert(`Valores digitados são inválidos!`)
        res.innerHTML = ('')
     }
    } else if(select.value == areaT){
        const baseT = prompt('Digite a medida da base:')
        const n7 = Number(baseT)
        const altT = prompt('Digite a medida da altura:')
        const n8 = Number(altT)
        const areaTri = (n7*n8)/2
        res.innerHTML = (`A área do triângulo é: ${areaTri}`)
        if(isNaN(n7) || isNaN(n8)){
          alert(`Valores digitados são inválidos!`)
          res.innerHTML = ('')
       } 
    }
    
}

calc.addEventListener('click', calcular)