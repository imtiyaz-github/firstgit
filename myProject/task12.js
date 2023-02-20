

function eventToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber =  event.phonenumber.value;


    
    

    console.log('name:',name);
    console.log('email:',email);
    console.log('phonenumber',phonenumber);


    let myObj  = {
        name:'wasim',
        email:'wasim1223@gmail.vom',
        phonenumber:4782369473
    };

    localStorage.setItem('user-details',JSON.stringify(myObj));
    showUserOnScreen(myObj);

}

function showUserOnScreen(myObj) {
    const parentElem = document.getElementById('listofitems');
    parentElem.innerHTML = parentElem.innerHTML+`<li>${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`
}
