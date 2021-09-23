// const numeros  = [3,6,1,8,2,3,6,3,2,5,6];
// let repetido = [];
 
// const tempArray = [...numeros].sort();
 
// for (let i = 0; i < tempArray.length; i++) {
//   if (tempArray[i + 1] === tempArray[i]) {
//     repetido.push(tempArray[i]);
//   }
// }
 
// console.log(repetido); 

function masRepetido(array) {
    let cuentaNumero = {};
  
    array.forEach(number => {
      cuentaNumero[number] = cuentaNumero[number] + 1 || 1;
    });
  
    let sortedValues = Object.entries(cuentaNumero)
      .sort((a, b) => b[1] - a[1] == 0 ? parseInt(a[0]) - parseInt(b[0]): b[1] - a[1]);
  
    let baseValue = sortedValues[0][1];
    let result = [ parseInt(sortedValues[0][0]) ];
  
    for (let i = 1; i < sortedValues.length; i++) {
      if (sortedValues[i][1] == baseValue) {
        result.push(parseInt(sortedValues[i][0]));
      } else break;
    }
  
    return result.length > 1 ? result : result[0];
  }
  
  let arr = [3,6,1,8,2,3,6,3,2,5,6];
  
  console.log(masRepetido(arr));