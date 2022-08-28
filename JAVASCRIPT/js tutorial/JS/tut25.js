console.log('this is tutorial 25');
/* you hava create a div and inject it into the page which contains a heading. whenever someone clicks on the div, it should be converted into a editable item. whenever user click away (blur). save into the local storage.*/

let divElm = document.createElement('div')
let text = document.createTextNode('this is element, click to edit it');
divElm.appendChild(text);
divElm.setAttribute('id', 'elem');
// divElm.setAttribute('class', 'edit');
// divElm.setAttribute('style', 'border:2px soli/* d red;width: 154px; margin:34px;');
let container = document.querySelector('.container');
let first = document.getElementsByClassName('this');

// inserting the element
container.appendChild(divElm)
container.appendChild(text);

// add event listener
divElm.addEventListener('click', function () {
    let html = elem.innerHTML;
    divElm.innerHTML= `<textarea class="form-control" id="textarea" rows="3"> ${html}</textarea>`;
})
// console.log(divElm, container, first);
