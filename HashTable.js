class hashtable{
 
constructor(size)
  {
     
     this.data=new Array(size)

  }
set(key,value)
{
  let address=this._hash(key);
if(!this.data[address])
  { this.data[address] =[];
  }
  this.data[address].push([key,value])
  return this.data
}
_hash(key)
{
  let hash=0;
  for(let i=0;i<key.length;i++)
  {
hash = (hash+key.charCodeAt(i)*i )% this.data.length

  }
  return hash;
}
get(key){
  console.log(this.data)
let address=this._hash(key)
return this.data[address]
}
keys()
{
  let keysArray=[];
  for(let i=0;i<this.data.length;i++)
  {
    if(this.data[i])
    {
      keysArray.push(this.data[i][0][0])
    }
  }
  return keysArray;
}
  
}

h1=new hashtable(50);
h1.set('oranges',10000)
h1.set('grapes',20000)
h1.set('mangoes',500)
h1.get('grapes')
h1.keys()
