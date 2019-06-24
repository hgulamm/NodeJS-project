class LinkedList{
  constructor (value)
  {
    this.head = {
      value:value,
    next: {
      value: 15,
      next:null
    }
    }
    this.tail=this.head
    this.length=1;

    
  }
  append(value)
  {
    const newNode={
      value:value,
      next: null
    };
   
  
  this.tail.next=newNode;
  this.tail=newNode;
  
    
    this.length=this.length+1;
  return this;
  }

  prepend(value)
  {
    const preNode={
      value: value,
      next: this.head
    }
  this.head=preNode;
  this.length=this.length+1;
  return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
   let counter=0;
   let currentNode=this.head;
   while(counter!=index)
   {
     currentNode=currentNode.next;
     counter++;
        }
return currentNode;
}

deleteNode(index)
{
  let currentNode=this.traverseToIndex(index)
  let prevNode=this.traverseToIndex(index-1);
  
  prevNode.next=currentNode.next;
 
  this.length--;
  return this.printList();


  
}
reverse()
{
  let node=this.head;
  if(!this.head.next)
  {
    return this.head.value
  }
  let first=this.head
  this.tail=this.head;
    let second=first.next
    while(second)
    {
      let temp=second.next;
      second.next=first;
      first=second;
      second=temp;
    }
    this.head.next=null;
    
    this.head=first;
  
 return this
}
}

const mylink=new LinkedList(10);
mylink.append(5)
mylink.append(15)
mylink.append(25)
mylink.reverse();
