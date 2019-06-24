 class Node{
  constructor(value){
this.newnode={
value:value,
next:null,
prev:null,
};
  }

}

class DLL{
 
  constructor(value)
  {
    var nodeobj=new Node(value);
    this.head=nodeobj.newnode;
    this.tail=this.head;
    this.length=1;
  }
  append(value)
  {
   var newobj=new Node(value);
   let newNode=newobj.newnode;
let currentTail=this.tail;
 
let headNode=this.head;
newNode.prev=currentTail;
currentTail.next=newNode;
currentTail=newNode;
this.tail=currentTail;
    this.length++;
  return this.printList();

  }
  remove(index)
  {
   
    let currentNode=this.traverseNode(index-1);
     
    let prevNode=currentNode.prev;
    let nextNode=currentNode.next;
    
    if(index===0)
    {
      nextNode.prev=null;
     this.head=nextNode;
    }
    else if(index==this.length)
    {
      prevNode.next=null;
        this.tail=prevNode;
    }
    else{
      nextNode.prev=prevNode;
       prevNode.next=nextNode;
    }
this.length--;
return this.printList();
 
  }

  traverseNode(index)
  {
    let counter=0;
    let currentNode=this.head;
    while(counter!=index)
    {
        counter++;
        currentNode=currentNode.next;
    }
    return currentNode;

  }
insert(index,value)
{
  var newobj=new Node(value);
let newNode=newobj.newnode;
  
 let currentNode=this.traverseNode(index-1);

let prevNode=currentNode.prev;
newNode.next=currentNode;
newNode.prev=prevNode;
prevNode.next=newNode;
currentNode.prev=newNode;

this.length++;

return this.head;

}
  printList()
  {
    let currentNode=this.head;
   let array=[];
   
    while(currentNode!==null)
    {
      
       array.push(currentNode.value);
       
       currentNode=currentNode.next;
        
    }
    console.log(this.length)
   return array
  }

  

}

mylist=new DLL(10);

mylist.append(8)

mylist.append(6)
mylist.append(7)
mylist.remove(3)

mylist.insert(2,9)
mylist.printList();

