//var items=document.getElementsByClassName('list-group-item');
// items[0].style.fontWeight='bold';
// items[1].style.fontWeight='bold';
// items[2].style.fontWeight='bold';
// items[3].style.fontWeight='bold';
// items[2].style.backgroundColor='green'

var itemList=document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="f4f4f4"
console.log(itemList.parentElement.parentElement.parentElement);
//childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//FirstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello 1";

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//Create Element
//create div

var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id="hello1";

//Add attr
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);

//Create text node
var newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);
newDiv.scrollLeft.fontSize='30px'

container.insertBefore(newDiv,h1);

