console.log('this is tutorial 39 on javascript');

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const error = true;
            if (!error){
                console.log('your promise has been resolved')
            }
            else{
                console.log('your promise has not been resolved')
                reject('sorry not fulfilled');
            }
        },2000);
    })
}
// then mean if promise resolve  then run this function 
func1().then(function(){
    console.log('thanks for resolving');
}).catch(function(error){
    console.log('very bad bro ' + error);
})