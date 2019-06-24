function recurring1(array){
  for(let i=0;i<array.length;i++)
  {
    for(let j=i+1;j<array.length;j++)
  {
    if(array[i]===array[j])
    {
      return array[j]
    }
  }
  return undefined
  }
}

function hash(input)
{
  let map={};
  for(let i=0;i<input.length;i++)
{
  
  if(map[input[i]]!=undefined)
  {
    return input[i];
  }
  else{
    map[input[i]] = i;
  }

}
return undefined;

}

hash([2,5,5,2,0,9,1,2,4])

