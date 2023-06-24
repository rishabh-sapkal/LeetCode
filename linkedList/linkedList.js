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
        this.head = secondVal;
    }
    //del at en
    delAtEnd(){
        let temp = this.head;
       
        while(temp.next !== null){
            temp = temp.next;
        }
        temp()
        
    }
    //del at a position specified
    //insert at a position specified

}
const list = new LinkedList();
list.addAtEnd(1)
list.addAtEnd(2)
list.addAtEnd(3)
list.addAtBeg(9)
list.delAtBeg()
list.delAtBeg()
list.print()

