class Stack
{
  constructor()
  {
    this.array=[];
    
  }
  push(value)
  {
    this.array.push(value);
    
    return this.array

  }
  peek(value)
  {
    return this.array[this.array.length-1];
  }
}

const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.array.pop();
stack.peek();
