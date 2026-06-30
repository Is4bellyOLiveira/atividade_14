let matriz = []
for(let l=0;l<5;l++){
    matriz[l] = []
    for(let c=0;c<5;c++){
        if(l===c){
            matriz[l][c] = 1
        }
        else{
            matriz[l][c] = 0
        }
    }
}
for (let i = 0; i < 4; i++) {
  let linha = "";
  
  for (let j = 0; j < 4; j++) {
    linha += matriz[i][j] + "  ";
  }
  console.log(linha)
}