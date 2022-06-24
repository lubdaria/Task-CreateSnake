// 5 6 8 
// 3 1 2 
// 4 3 2 
// Result: 5 3 4 3 1 6 8 2 2  

let numberArray = [[1, 8, 9, 16],
                   [2, 7, 10, 15],
                   [3, 6, 11, 14],
                   [4, 5, 12, 13]];
                    
let snakeArray = createSnakeArray(numberArray);
let numbers = showStrickWithSnakeArrays(snakeArray);
console.log(numbers);

function createSnakeArray(arr){
  const numberArray = [];
      
  for(let i = 0; i < arr[0].length; i++){
            
    if(i % 2 === 0){
      for(let j = 0; j < arr.length; j++){
        numberArray.push(arr[j][i]);
      }
    }
    else{
      for(let j = arr.length - 1; j >= 0; j--){
        numberArray.push(arr[j][i]);
      }
    }
  }  

  return numberArray;
}
 
function showStrickWithSnakeArrays(arr){
  let numbers = arr.join(' ');
    
  return numbers;
}

