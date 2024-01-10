// função para o botão submit da tela 4 ser liberado
const button = document.getElementById('checkbox');
button.disabled = true;

const invest1Field = document.getElementById('invest1');
const invest2Field = document.getElementById('invest2');
const invest3Field = document.getElementById('invest3');
const invest4Field = document.getElementById('invest4');

const formFields = [invest1Field, invest2Field, invest3Field, invest4Field]

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
  


