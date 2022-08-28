console.log('this is a ajax tutorial');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchBtn');
    // Instantiate an xhr object
    //create a xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);

    //post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type', 'application/json')

    // xhr.open('GET', 'akash.txt',true);
    
    //want to do progress(optional)
    xhr.onprogress = function(){
        // console.log('on progress');
    }
    //what to do when response is ready  //(optional)
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.log("some error occured")
        }
    }

    //send the request
    param = `{"name":"test123","salary":"123","age":"23"}`
    xhr.send(param);


    //incomplete
}