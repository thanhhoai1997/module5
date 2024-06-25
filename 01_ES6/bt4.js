let arr1 = [2,1,2,3,4];

let arr2 = arr1.filter((item) => item < 0)
if(arr2.length >0){
    console.log("trong arr co item < 0");
}else{
    console.log('tat ca cac item trong arr >0');
}
