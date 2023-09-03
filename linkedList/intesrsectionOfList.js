
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
                    
        if(!headA || !headB){
            return 0
        }
        
        let temA = headA;
        let temB = headB;
        
        let lengthA = 0;
        let lengthB = 0;
        
        let dataAndPositionOfA = [];
        let dataAndPositionOfB = [];
        
        console.log(headA, headB)
        while(temA.next !== null){
            dataAndPositionOfA.push({pos:lengthA, val:temA.val  })
            lengthA++
            temA = temA.next
        }
        dataAndPositionOfA.push({pos:lengthA, val:temA.val  })
        
        
         while(temB.next !== null){
            dataAndPositionOfB.push({pos:lengthB, val:temB.val  })
            lengthB++
            temB = temB.next
        }
        dataAndPositionOfB.push({pos:lengthB, val:temB.val  })
         
        console.log(dataAndPositionOfA)
        console.log(dataAndPositionOfB)
        
        let result = [];
        
        if(dataAndPositionOfA.length >= dataAndPositionOfB.length ){

            for(let i = 0 ; i<=dataAndPositionOfB.length-1; i++){

                for(let j = 0; j<=dataAndPositionOfA.length-1; j++){
                    console.log(j,dataAndPositionOfA.length-1, '<-1st')
                    if(dataAndPositionOfB[i].val === dataAndPositionOfA[j].val){
                        result.push(dataAndPositionOfB[i])
                        //return result[0]
                    }
                }
            }

          // result = dataAndPositionOfA.find(o => dataAndPositionOfB.some(({pos,val}) => o.val === val));
        }else{

                     result = dataAndPositionOfA.map(d=> d.val).filter(d=> dataAndPositionOfB.map(d=> d.val).includes(d))
            //    for(let i = 0 ; i<=dataAndPositionOfA.length-1; i++){

            //     for(let j =0; j<=dataAndPositionOfB.length-1; j++){
            //         console.log(j,i)
            //         if(dataAndPositionOfA[i].val === dataAndPositionOfB[j].val){
            //             console.log(j,i, '<Inside')
            //             result.push(dataAndPositionOfA[i])
            //             // return result[0]
            //         }
            //     }
            // }
        }
     console.log(result, '-')
        if(result){
            result.sort((a, b) => a.pos > b.pos ? 1 : -1);
        console.log(result, '<--')
        return result[0]
        }
        else{
            return null
        }
};


///NEW APPROAACHHH


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
                    
    if(!headA || !headB){
        return 0
    }
    
    let temA = headA;
    let temB = headB;
    
    let lengthA = 0;
    let lengthB = 0;
    
    let dataAndPositionOfA = [];
    let dataAndPositionOfB = [];
    
    console.log(headA, headB)
    while(temA.next !== null){
        dataAndPositionOfA.push({pos:lengthA, val:temA.val  })
        lengthA++
        temA = temA.next
    }
    dataAndPositionOfA.push({pos:lengthA, val:temA.val  })
    
    
     while(temB.next !== null){
        dataAndPositionOfB.push({pos:lengthB, val:temB.val  })
        lengthB++
        temB = temB.next
    }
    dataAndPositionOfB.push({pos:lengthB, val:temB.val  })
     
     console.log(lengthA, lengthB)

     if(lengthB >= lengthA){
         let newtempA = headA;
         let newtempB = headB
         console.log(newtempA, newtempB)
         while(newtempB.next !=null && newtempA.next !=null){
             //console.log(newtempB.val,newtempB.next,newtempA.val,newtempA.next, '<--')
             if(newtempB.next.val === newtempA.val && newtempA.next.val === newtempB.next.next.val){
                console.log(newtempA.val,newtempA.next,newtempB.val,newtempB.next,newtempA.next.val,
                newtempB.next.next.val,  'TRUEE') 

                return newtempB.next.next
             }
             newtempB = newtempB.next
             newtempA = newtempA.next
         }
     }
     else{
         let newtempB = headA;
         let newtempA = headB
         console.log(newtempB, newtempA)
         while(newtempB.next !=null && newtempA.next !=null){
             console.log(newtempA.val,newtempA.next,newtempB.val,newtempB.next, '<--')
             if(newtempA.next.val === newtempB.val && newtempB.next.val === newtempA.next.next.val){
                console.log(newtempB.val,newtempB.next,newtempA.val,newtempA.next,newtempB.next.val,
                newtempA.next.next.val,  'TRUEE') 

                return newtempA.next.next
             }
             newtempA = newtempA.next
             newtempB = newtempB.next
        
         }
     }

};