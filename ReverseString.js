class Test1{

reverse(string)
{
  if(!string){console.log('no input')}
  else if(string.length<2)
{return string}
else{
let rev=[];
for(let i=string.length-1;i>=0;i--)
{
rev.push(string[i]);
}
return rev.join('');
}
}

 reverse2(string)
{return string.split('').reverse().join('');
}


}

test=new Test1();
test.reverse('abih si siht');
test.reverse2('abih si siht');

const reverse3 = str =>[...str].reverse().join('');
reverse3('reverse3');
