
  function sum(...args)  {
   return args.reduce((previousValue,currentValue) => previousValue + currentValue)

}
console.log(sum(1,2,3,4));