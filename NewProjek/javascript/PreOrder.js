const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

function validationform() {
  if(document.myform.username.value == "") {
    alert("Username Cannot Empty");
    return false;
  }
  if (document.myform.username.value.charAt(0) != '@') {
    alert("Username Must Begin With @");
    return false;
  }
  if (document.myform.email.value == "") {
    alert("Email Cannot Empty");
    return false;
  }
  if (document.myform.password.value == "") {
    alert("Password Cannot Empty");
    return false;
  }
  var listsymbol = new Array("/", "!", "@", "#", "$", "%", "%", "^", "&",
   "*", "(", ")", "_", "+", "=", "-", "`", "~", ";", "<", ">", ".", 
   "?", "[", "]", "{", "}", ",");

  var symbolLength = listsymbol.length;
  for (let i = 0; i < symbolLength; i++) {
    if (document.myform.password.value.indexOf(listsymbol[i]) != -1) {
      alert("Password Must Alphanumeric");
      return false;
    }
  }
  if (document.myform.address.value == "") {
    alert("Address Cannot Empty");
    return false;
  }
  if (document.myform.address.value.length < 5) {
    alert("Address Cannot Less Than 5 Character");
    return false;
  }
  if (document.myform.copies.value < 1) {
    alert("Copies Cannot Less Than 1");
    return false;
  }
  if (document.myform.username.value.charAt(0) != '@') {
    alert("Username Must Begin With @");
    return false;
  }
  if (document.myform.TermsAndService.checked == false) {
    alert("Terms And Service Must Be Checked");
    return false;
  }

  alert("Your Pre-Order Successfull !");
  return true;
}
