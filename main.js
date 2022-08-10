// Examine the document

// console.dir(document);
// console.log(document.referrer);
// console.log(document.domain);


// Get Element

// console.log(document.getElementById('item').innerHTML);

// console.log(document.getElementById('main-header'));
var header = document.getElementById('add');
header.textContent = 'hello';

var headerTitle = document.getElementById('item');
headerTitle.textContent = 'item header';

//  console.log(headerTitle);

//  headerTitle.innerText = 'bye';





// Get element BY class name

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// console.log(items[2]);
// items[2].textContent = 'good';
// // items[1].style.backgroundColor = '#8256';

// for(var i = 0; i < items.length ; i++){
//     items[i].style.backgroundColor = '#2656';
// }



// Get element by tag name

// var li = document.getElementsByClassName('list-group-item');
// console.log(li);
// console.log(li[1]);
// console.log(li[2]);
// li[2].textContent = 'good';
// // li[1].style.backgroundColor = '#8256';

// for(var i = 0; i < li.length ; i++){
//     li[i].style.backgroundColor = '#2966';
// }



// Quary selector

//  var header= document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #000';

// var text = document.querySelector('input');
// text.value = 'I am input box'; 

// var button = document.querySelector('input[type ="submit"]');
// button.value = 'send'; 

// var list = document.querySelector('.list-group-item');
// list.textContent = 'good morning'; 
// list.style.color = 'green';

// var list = document.querySelector('.list-group-item:nth-child(2)');
// list.textContent = 'good evening'; 
// list.style.color = '#0123';


// var list = document.querySelector('.list-group-item:last-child');
// list.textContent = 'good night'; 
// list.style.color = 'red';



// Query selectorAll

// var titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent ='hewlo';
// titles[1].style.color ='red';

// var li = document.querySelectorAll('li');
// console.log(li);
// li.textContent ='hewlo';

// li[1].style.backgroundColor ='red';

// li[2].style.color ='red';
// li[2].textContent = 'good';


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i < odd.length; i++){
//     odd[i].style.background = 'red';
//     odd[i].style.color = '#fff';
//     even[i].style.background = 'blue';
//     even[i].style.color = 'pink';
// }
