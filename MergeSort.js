function example(array1,array2)
{
const mergedArray=[];
let array1item=array1[0];
let array2item=array2[0]
let i=1,j=1;
while(array1item || array2item)
{
if(!array2item || array1item<array2item)
{
  mergedArray.push(array1item);
  array1item=array1[i];
  i++;
}
else{
mergedArray.push(array2item);
  array2item=array2[j];
  j++;


}

}
console.log(mergedArray)
}

example([1,2,3],[4,5,6]);
