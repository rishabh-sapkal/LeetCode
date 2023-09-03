const sumZero = (arr)=>{
let leftIndex = 0;
let rightIndex = arr.length-1;

while(leftIndex < rightIndex){

    let leftValue = arr[leftIndex];
    let rightValue = arr[rightIndex];

    let sum = leftValue + rightValue;
    if(sum === 0){
        return [leftValue , rightValue]
    }else if ( sum > 0) {
        rightIndex--
    }else {
        leftIndex++
    }
}

return null
}