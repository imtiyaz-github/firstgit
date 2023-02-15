

//create  a  div
var newDiv  = document.createElement('div');

//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title','Hello Div');

var newDivText  = document.createTextNode('Hello world');

//add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1  =  document.querySelector('header h1');

console.log(newDiv);
//container.insertBefore(newDiv,h1);



const newNode  = document.createElement('li');
//create a text node here

const textNode = document.createTextNode('Hello');

//append the text node to  'li'  element 

newNode.appendChild(textNode);

///insert before exsisting child

const list = document.getElementById('items');

list.insertBefore(newNode,list.children[0]);