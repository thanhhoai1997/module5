 let arr = [1,2,3,4,5];
 function ckeck(a){
    if(a==arr.filter((item) => item==a)){
        return console.log(a);
    }else{
        return console.log('khong tim thay');
    }

 }
 ckeck(6);