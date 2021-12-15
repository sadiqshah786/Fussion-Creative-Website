let auth = firebase.auth();
var email = document.getElementById('email');
var pass = document.getElementById('password');

function signup(){
  var email = document.getElementById('email');
  var pass = document.getElementById('password');
  if(email.value==""){
    swal({
      title: "Empty Email Feild",
    });
  }
  else if(pass.value==""){
    swal({
      title: "Empty Password  Feild",
    });
    
  }
  else{
    auth.createUserWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      swal("Registerd Sucessfully", "You clicked the button!", "success", {
        button: "Can LogIn",
      });
      // swal("Registerd Sucessfully !")
      // window.location.replace("signIn.html")
      
  
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      
    });
  
    }

  }


  function login(){
    var email = document.getElementById('email-login');
    var pass = document.getElementById('password-login');
    if(email.value==""){
      swal({
        title: "Empty Email Feild",
      });
    }
    else if(pass.value==""){
      swal({
        title: "Empty Password  Feild",
      });
      
    }
    else{
    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.replace('https://github.com/sadiqshah786/User-Authentication')
      // console.log(user)
      // swal(user)  
      // alert("login")
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
  }
  }



