function showName(...args){
    let showLog = 'welcome';

    
    args.forEach((item) => showLog += ',['+item+']' );

    return showLog

}
console.log(showName('hoai','tuan','nam'));
