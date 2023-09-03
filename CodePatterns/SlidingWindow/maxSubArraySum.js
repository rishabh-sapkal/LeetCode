const maxSubArraySum =(arr,num)=>{
    let maxSum = 0;
    let tempSum = 0;
    
    if(arr.length === 0 || arr.length < num){
        return null
    }
    //([1,2,3,4,5], 2)
    for(let i =0 ; i < num; i++){
        tempSum = tempSum + arr[i];
    }
    maxSum = tempSum;
    
    for(let i = num ; i< arr.length ; i++ ){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}
maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)//19
