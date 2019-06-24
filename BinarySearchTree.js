class Node
{
  constructor(value){
  this.value=value;
  this.left=null;
  this.right=null;
  }
    
}
class BST{
   
  constructor(){
    this.root = null;
  }
  insert(value){
   
  
  if(this.root==null)
  {
  return this.root=new Node(value);
  }

   
   var node= this.traverse(this.root,value);
   
    return this.root;

}
lookup(value)
{
  
  let node=this.root;
  while(node){
    
    if(value===node.value)
  {
    return true;

  }
  if(value<node.value)
  {
    node=node.left;
  }
  else{
    node=node.right;
  }
  
  
  
  }

  return false;

  
}

 traverse(node,value)
{
 
  
 if(node===null)
  { 
    node=new Node(value);
     return node;
  }
 
  if(value<node.value)
  {
    node.left=this.traverse(node.left,value);
    
  }
  else
  {
    node.right=this.traverse(node.right,value);
   
  }

return node;
  
  }
 


}

var bst=new BST();
//bst.insert(10);
bst.insert(9);

bst.insert(4);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.insert(10);
JSON.stringify(bst.root);
//bst.lookup(170);
bst.lookup(45);
 







