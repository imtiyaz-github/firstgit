
        function saveToLocalStorage(event) {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const phonenumber = event.target.phonenumber.value;

            if(name===''|| !email==='' || !phonenumber==='') {
                alert("Please enter valid data in all fields");
                return;
            } else {
              console.log('login succeseful');
            }

            const obj = {
                name,
                email,
                phonenumber
           
            }
            localStorage.setItem(email, JSON.stringify(obj));
            showUserOnScreen(obj)
        }
        function showUserOnScreen(obj){
            const parentElem = document.getElementById('listOfitems');
            parentElem.innerHTML = parentElem.innerHTML+ `<li>${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`
        }
      
   


