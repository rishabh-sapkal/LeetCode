//Binary Search For Sorted Array
//Binary Search For Sorted Array
const binarySearch=(arr,searchTerm)=>{
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    
    //[1,2,3,4,5,6,7]
    while(leftIndex < rightIndex){
        let mid = Math.floor((leftIndex+rightIndex)/2);
        let midValue = arr[mid];
        
        if(midValue === searchTerm){
            return mid
        }else if (midValue < searchTerm){
            leftIndex = mid;
        }else if (midValue > searchTerm){
            rightIndex = mid;
        }
        
    }
    
}

binarySearch([1,2,3,4,5,6],4) // 3 (Considering Zero indexing )