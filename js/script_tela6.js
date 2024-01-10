// função para o botão submit da tela 6 ser liberado
const button = document.getElementById('buttonsubmit');
button.disabled = true;

const textField = document.getElementById('name');
const emailField = document.getElementById('email');
const ageField = document.getElementById('age');

const formFields = [textField, emailField, ageField]

function checkFormFields() {
    let fieldsFilled = true;
   
     formFields.forEach((field) => {
       if (field.value === '') {
         fieldsFilled = false;
       }
     });
   
  
    if (fieldsFilled) {
      button.removeAttribute('disabled');
    } else {
      button.disabled = true;
    }
  }

  formFields.forEach((field) => {
    field.addEventListener('input', checkFormFields);
  });
  

