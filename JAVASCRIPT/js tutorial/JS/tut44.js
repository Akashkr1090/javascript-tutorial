console.log('this tutorial on error handling');
// console.log('this tutorial on error handling');
// prented this is coming from a server as response
let a = "akash kumar";
a= undefined;
if (a !=undefined){
    throw new Error("this is not undefined");


}
else{
    console.log('this is undefined');
}

try {
//   skld;JSON;adsfkl  
    console.log('we are inside try block')

    functionAkash();

} catch (error) {
    console.log("Are you okey")
    // console.log(error)
    // console.log(error.name)
    // console.log(error.message)

} finally {
    console.log('finally we will run this')
}