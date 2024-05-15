function ranke (vitorias,derrotas){
  let saldoVitorias;
  let nivel;
  saldoVitorias = vitorias - derrotas

  if(vitorias <= 10){
    nivel = "Ferro"
  }else if(vitorias >=11 && vitorias <=20){
    nivel = "Bronze"
  }else if(vitorias >=21 && vitorias <=50){
    nivel = "Prata"
  }else if(vitorias >=51 && vitorias <=80){
    nivel = "Ouro"
  }else if(vitorias >=81 && vitorias <=90){
    nivel = "Diaman"
  }else if(vitorias >=11 && vitorias <=20){
    nivel = "Bronze"
  }else if(vitorias >=11 && vitorias <=20){
    nivel = "Bronze"
  }

}