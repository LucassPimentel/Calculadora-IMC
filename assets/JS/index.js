function calcularIMC() {
  let altura = Number(document.getElementById("idAltura").value);
  let peso = Number(document.getElementById("idPeso").value);
  let nome = String(document.getElementById("idNome").value);
  let imc = Number();
  let res = document.getElementById("res");


  if(!isNaN(nome)) {
    res.innerHTML = ' '
    alert('[ERRO NOME INVÁLIDO]')
  } if (peso <= 0) {
    res.innerHTML = ' '
    alert('[ERRO PESO INVÁLIDO]')
  } if (altura <= 0) {
    res.innerHTML = ' '
    alert('[ERRO ALTURA INVÁLIDO]')
  } 


  if(isNaN(nome) && peso > 0 && altura > 0) {
  
    imc = Math.round(peso / altura ** 2);

    if (imc < 18.5) {
      res.innerHTML = `${nome}, seu peso é ${peso} Kg, sua altura ${altura} mts e seu IMC ${imc} = Magreza.`;
    } else if (imc > 18.5 && imc <= 24.9) {
      res.innerHTML = `${nome}, seu peso é ${peso} Kg, sua altura ${altura} mts e seu IMC ${imc} = Normal.`;
    } else if (imc > 24.9 && imc <= 30) {
      res.innerHTML = `${nome}, seu peso é ${peso} Kg, sua altura ${altura} mts e seu IMC ${imc} = Sobrepeso.`;
    } else if (imc > 30) {
      res.innerHTML = `${nome}, seu peso é ${peso} Kg, sua altura ${altura} mts e seu IMC ${imc} = Obesidade.`;
    }
  }
}
