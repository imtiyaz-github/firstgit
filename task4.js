var li  =  document.getElementsByTagName('li');


console.log(li);

console.log(li[1]);
console.log(document.getElementsByClassName("list-group-item"));

console.log(document.getElementsByTagName('items'));
console.log(document.getElementsByClassName('items are here'));

li[1].textContent = 'hello2';
li[1].style.fontWeight  ="bold";
li[1].style.backgroundColor = 'pink';


for(var  i =0;i<items.length;i++) {
    items[i].style.backgroundColor = 'green';
}