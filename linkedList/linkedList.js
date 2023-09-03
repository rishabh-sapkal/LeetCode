class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    
    addAtEnd(data){
        const node = new Node(data);
        if(this.head == null){
            this.head = node;
        }
        else{
            let temp = this.head;
            
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = node;
        }
    }
    
    //print LL
    print(){
        let temp = this.head;
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }
    //add at beg
    addAtBeg(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
    //del at beg
    delAtBeg(){
        const secondValOnwards = this.head.next;
        this.head.next = null;
        this.head = secondValOnwards;
    }
    //del at en
    delAtEnd(){
        let temp = this.head;
       
       if(this.head.next === null){
           this.head = null
           return
       }
        while(temp.next.next !== null){
            temp = temp.next;
        }
        temp.next = null;
        
    }
    //del at a position specified
    delAtSpecifiedPosition(position){
        let temp = this.head;
        
        if(position === 0){
            this.delAtBeg();
            return
        }
        for(let i = 0; temp != null && i < position - 1; i++){
            temp = temp.next
        }
        const newTemp = temp.next.next;
        temp.next = newTemp;
    }
    //insert at a position specified
    insertAtPosition(position,value){
        let temp = this.head;
        
        const newNode = new Node(value);
        
        for(let i=0; temp !==null && i < position-1 ; i++ ){
            temp = temp.next;
        }
        
        const positionalNode = temp.next;
        newNode.next = positionalNode;
        temp.next = newNode
        
    }

    removeDuplicates(val){
        let temp = this.head;
        if(!temp.next && this.head.data == val){
            this.head = null;
            return this.head
        } else if(!temp.next){
            return this.head
        }

        while(temp.next!==null){
            if(temp.next.data === val){
                const nodeToBeRemoved = temp.next;
                temp.next = nodeToBeRemoved.next
            }else{
                temp = temp.next;
            }
        }
        
        if(this.head.data === val){
            const secondValueOnwards = this.head.next;
            this.head = null;
            this.head = secondValueOnwards
        }
    }
    
    removeDuplicatesInSortedList(){
        let temp = this.head;
        let duplicates = new Set([]);
        
        if(!temp){
            return this.head;
        }
        if(!temp.next){
             return this.head;
        }
        
       
        while(temp.next !== null){
          
            console.log(duplicates, duplicates.has(temp.data), 'HELLO')
           
            if(duplicates.has(temp.next.data)){
                const nodeToBeRemoved = temp.next;
                temp.next = nodeToBeRemoved.next;
            }
            else{
                duplicates.add(temp.next.data);
                temp = temp.next
            }
        }
        
        if(duplicates.has(this.head.data)){
            const secondValOnwards = this.head.next;
            this.head = null;
            this.head = secondValOnwards
        }
    }

    findIntersection(hA,hB){

        
        let headA = hA;
        let headB = hB;
        
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
            dataAndPositionOfA.push({pos:lengthA, val:temA.data  })
            lengthA++
            temA = temA.next
        }
        dataAndPositionOfA.push({pos:lengthA, val:temA.data  })
        
        
         while(temB.next !== null){
            dataAndPositionOfB.push({pos:lengthB, val:temB.data  })
            lengthB++
            temB = temB.next
        }
        dataAndPositionOfB.push({pos:lengthB, val:temB.data  })
         
        console.log(dataAndPositionOfA)
        console.log(dataAndPositionOfB)
        
        let result = [];
        
        if(dataAndPositionOfA.length >= dataAndPositionOfB.length ){
           result = dataAndPositionOfA.filter(o => dataAndPositionOfB.some(({pos,val}) => o.val === val));
        }else{
             result = dataAndPositionOfB.filter(o => dataAndPositionOfA.some(({pos,val}) => o.val === val));
        }
    
        if(result){
        console.log(result[0].val)
        return result[0].val
        }
        else{
            return 0
        }
        
    }
    
    hasCycle(head){
        let temp = head;
        
        let dups = new Set([]);
        
        let pos = 0
        while(temp.next !== null){
            if(dups.has(pos)){
                return true
            }else{
                dups.add(pos)
            }
            console.log(dups)
            pos++
            temp = temp.next
        }
        return false
        
    }
    
    isPalindrome(){
        let isPalindrome = true;
        let temp = this.head;
        if(temp === null){
            return this.head;
        }
        let length = 1;
        let middle = 0;
        
        while(temp.next !== null){
            length++
            temp = temp.next;
        }
       
        
        if(length%2 !==0){
            middle = (length/2)-0.5
        }else{
             middle = (length/2);
        }
         let temp2 = this.head;
         
         let beforeMiddle = [];
         let afterMiddle = [];
         
         for(let i=0;temp2!==null;i++ ){
             if(i>=middle){
                 afterMiddle.push(temp2.data)
             console.log(temp2.data)
                 
             }else{
                 beforeMiddle.push(temp2.data)
             }
             
             temp2 = temp2.next
         }
         
         if(beforeMiddle.length !== afterMiddle.length){
         afterMiddle.shift()
         }
          console.log(beforeMiddle)
console.log(afterMiddle)
afterMiddle.reverse()
         beforeMiddle.forEach((d,i)=>{
             if(afterMiddle[afterMiddle.length-i] && d !== afterMiddle[afterMiddle.length-i] ){
                 isPalindrome = false;
                 console.log(false)
             }
         })
         
//         const diffrence1 = beforeMiddle.filter(d=> !afterMiddle.includes(d));
//          const diffrence2 = afterMiddle.filter(d=> !beforeMiddle.includes(d));
         

// console.log(diffrence1, diffrence2)
//          if(!diffrence1.length && !diffrence2.length ){
//              console.log(true)
//              return true
//          }else{
//               console.log(false)
//                  return false
//          }
         
         
    }
    
}
        let cyclicHead = {
            data:1,
            next:{
                data:2,
                next:{
                    data:3,
                    next:{
                        data:4,
                        next:{
                data:2,
                next:{
                    data:3,
                    next:{
                        data:4,
                        next:null
                    }
                }
            }
                    }
                }
            }
        }
        
        let headB = {
            data:5,
            next:{
                data:6,
                next:{
                    data:3,
                    next:{
                        data:7,
                        next:null
                    }
                }
            }
        }
const list = new LinkedList();
list.addAtEnd(1)
// list.addAtEnd(2)
// list.addAtEnd(2)
list.addAtEnd(2)
list.addAtEnd(2)
// list.addAtEnd(2)
list.addAtEnd(1)
// list.addAtEnd(2)
// list.addAtEnd(3)
// list.addAtEnd(4)
// list.addAtEnd(5)
// list.addAtBeg(9)
// list.removeDuplicatesInSortedList()
// list.findIntersection(headA, headB)
list.isPalindrome()
list.print()