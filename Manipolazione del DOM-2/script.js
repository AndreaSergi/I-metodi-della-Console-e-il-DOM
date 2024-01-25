const name = document.getElementById("firstName").value;
const surname = document.getElementById("lastName").value;
const age = document.getElementById("age").value;

let person = {
  firstName: name,
  lastName: surname,
  age: age,
};


const form = document.querySelector('form')
person = JSON.stringify(person)
form.setAttribute('data-person', person)
console.log(form)