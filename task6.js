///query selector

var header = document.querySelector('#main-header');
header.style.backgroundColor= 'solid 4px #ccc';


// var input =  document.querySelector('input');
// input.value  ="hello wrold"


// var submit  = document.querySelector('input[type="submit"]');
// submit.value  ='send';

// var item  = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var  lastitem = document.querySelector
// ('.list-group-item:last-child');
// lastitem.style.color =  'blue';

//  var  seconditem = document.querySelector
// ('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';
// seconditem.style.fontColor = 'green';


// var thirditem  = document.querySelector
// ('.list-group-item:nth-child(3)');
// thirditem.style.visibility = 'hidden';

//we can use this also 
//document.querySelector('.list-group-item:nth-child(3)').style.visibility = 'hidden'

//var titles = document.querySelectorAll('.titles');

//console.log(titles);


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++) {
    odd[i].style.backgroundColor = "green";
}







