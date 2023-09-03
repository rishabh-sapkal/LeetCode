const countUniqueValues = (arr)=>{
    if(arr.length === 0){
        return 0
    }
    let leftIndex = 0;
    let rightIndex = 1;
    
    while(rightIndex <= arr.length-1){
        if(arr[leftIndex] === arr[rightIndex]){
            rightIndex++;
        }else{
            leftIndex++;
            arr.splice(leftIndex, 1, arr[rightIndex]);
            rightIndex++;
        }
    }
    return leftIndex+1;
}

console.log(countUniqueValues([0]));