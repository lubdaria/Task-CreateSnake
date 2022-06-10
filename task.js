// 5 6 8 
// 3 1 2 
// 4 3 2 
// Result: 5 3 4 3 1 6 8 2 2  

let arrayNumbers = [[1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9]];
                    
let arrays = createArraysWhithArrays(arrayNumbers);
let numberSnake = createStrickWithSnakeArrays(arrays);
let listNumbers = showNumbers(numberSnake);
console.log(listNumbers);

function createArraysWhithArrays(numbers){
  const numbersOne = [];
  const numbersSecond = [];
  const numbersThirth = [];
  let tempNumber = '';
  
  for(let i = 0; i < numbers.length; i++){
    let iteam = numbers[i];

    for(let i = 0; i < iteam.length; i++){
        
      if(i === 0){
        numbersOne.push(iteam[i]);
      }
      else if(i === 1){
        numbersSecond.push(iteam[i]);
      }
      else if(i === 2){
        numbersThirth.push(iteam[i]);
      }
    }
  }

  return [numbersOne, numbersSecond, numbersThirth];
}
  
function createStrickWithSnakeArrays(num){
  let tempNumbers = '';
  
  for(let i = 0; i < num.length; i++){
    tempNumbers = tempNumbers + num[i];
  }

  return tempNumbers;
}

function showNumbers(num){
  let numbers = '';

  for(let i = 0; i < num.length; i++){
    if(Number(num[i])){
      numbers = numbers + num[i] + ' ';
    }
  }

  return numbers;
}
