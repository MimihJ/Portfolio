const form = document.querySelector('form');

function validations(){
    let name = document.getElementById('name').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('comments').value;

    if(name == "" || name == null){
        let name_err = document.getElementById('name_err');
        name_err.style.display = "block";
        return false;
    }
    if(phonenumber.length != 10) {
        document.getElementById("phone_err").style.display = "block";
        return false;
    }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) 
    {
        document.getElementById("email_err").style.display = "block";
        return false;
    }
    return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validations()) {
    form.submit();
  }
});
