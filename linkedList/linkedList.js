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

}
const list = new LinkedList();
list.addAtEnd(1)
list.addAtEnd(2)
list.addAtEnd(3)
list.addAtBeg(9)
list.delAtSpecifiedPosition(0)
list.insertAtPosition(1,55)

list.print()

