


function test() {
    var name =  document.getElementById('name').value;
      var email = document.getElementById('email').value;

       //storing the data value

       var n  =  localStorage.setItem('name',name)
       var e  =  localStorage.setItem('email',email)

      //now crete a get item



       var n  =  localStorage.getItem('name',name)
       var e  =  localStorage.getItem('email',email)



       console.log(n);
       consolelog(e);
   var  a,b,c;
   a = 'imtiyaz';
   b = "imtiyazshirasangi456@gmail.com";


   if(a==n && b==e) {
    alert('login successful !');
   } else  {
    alert('Invalid details !');

 }
}

// console.log('hello world');