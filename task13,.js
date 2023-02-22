// function saveToLocalStorage(event) {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email  = event.target.email.value;
//     const phonenumber = event.target.phonenumber.value;

//     const object = {
//         name,email,phonenumber
//     };


//     localStorage.setItem(email,JSON.stringify('object'));


//     showUserOnScreen(object,email);
// }

// function showUserOnScreen(object,email) {
//     const parentElem =  document.getElementById('list');
//     const newUser = document.createElement('li')
//     newUser.textContent = object.name+ ','+object.email+','+object.phonenumber;



// //create a delete button

// var deleteBtn = document.createElement('input');
// deleteBtn.type = 'button';
// deleteBtn.value = 'Delete';
// deleteBtn.className = 'btn btn-warning'


// deleteBtn.onclick=()=> {
//     localStorage.removeItem(email);
//     parentElem.removeChild(newUser);

// }
// newUser.appendChild(deleteBtn);
// parentElem.appendChild(newUser);
// }


// console.log('hello');





