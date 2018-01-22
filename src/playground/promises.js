
const failed = false;
const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        if(failed){
            reject('Something went wrong');
        }else{
            resolve({
                name: 'Hussein',
                age: 39
            });    
        }
        
    }, 1500);
});
console.log('Before');
promise.then((data)=>{
    console.log(data);
    return 'This will be passed to the second then call';
}).then((str)=>{
    console.log(str)
}).catch((error)=>{
    console.log('Error', error);
});

console.log('After');