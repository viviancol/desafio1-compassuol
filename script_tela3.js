// função para o botão submit da tela 3 ser liberado
const button = document.getElementById('radio');
button.disabled = true;

const mercados1Field = document.getElementById('mercados1');
const mercados2Field = document.getElementById('mercados2');
const mercados3Field = document.getElementById('mercados3');
const mercados4Field = document.getElementById('mercados4');
const mercados5Field = document.getElementById('mercados5');
const option1Field = document.getElementById('option1');
const option2Field = document.getElementById('option2');
const option3Field = document.getElementById('option3');

const formFields = [mercados1Field, mercados2Field, mercados3Field, mercados4Field, mercados5Field, option1Field, option2Field, option3Field]

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
  


