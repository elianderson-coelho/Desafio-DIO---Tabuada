let N = gets()

for (let i = 1; i <= 10; i++) {
  // Fiz apenas a inclusão de template string para ficar mais legível e facilitar o entendimento
  print(`${i} x ${N} = ${N * i}`)
}

// // Caso queira rodar direto no Nodejs tem a opção abaixo utilizando ArrowFunction
// const tabuada = numero => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`)
//   }
// }
