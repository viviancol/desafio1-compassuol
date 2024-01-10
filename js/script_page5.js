//função contar caracteres textarea
let textarea=document.getElementById("text_area");
let caracteresRestantes= document.getElementById("caracteresRestantes");
textarea.oninput=function(e){
    caracteresRestantes.innerText=(130-this.value.length);
}

// função para o botão submit da tela 5 ser liberado
const button = document.getElementById('textarea');
button.disabled = true;

const textareaField = document.getElementById('text_area');

const formFields = [textareaField]

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
  })
  


