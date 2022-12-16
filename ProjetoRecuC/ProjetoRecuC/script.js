/* Calculadora IMC */
function calculoImc() {
    var alt = document.querySelector('.altura')
    var pes = document.querySelector('.peso')
    

    
    var alt = Number (alt.value)
    var pes = Number (pes.value)
    var altq = alt * alt

    var imc =  pes / altq *10000
    
    var imcc = imc.toFixed(1)
        

    seu_imc.innerHTML = `Seu indice de massa corporal é ${imcc}`

    /* imc planos */
    var titlep = document.getElementById('titulo_plano')
    var textp = document.getElementById('textoplan')

    if( imc < 18.5){
      titulo_plano.innerHTML = `Abaixo do peso`
      textoplan.innerHTML = `Plano Inicial`

    } else if(imc < 25){
     
      titulo_plano.innerHTML = `Peso ideal `
      textoplan.innerHTML = `Plano Inicial`
   

    } else if(imc < 30) {
   
      titulo_plano.innerHTML = `Sobrepeso `
      textoplan.innerHTML = `Plano Basico`

    }
    
    else if(imc < 35) {
      titulo_plano.innerHTML = `Obesidade grau 1 `
      textoplan.innerHTML = `Plano Intermediario`
    
    }

    else {
      titulo_plano.innerHTML = `Obesidade grau 2 `
      textoplan.innerHTML = `Plano Intemediario`
    }

  

  }


   /* FIM - Calculadora IMC */ 



/* Cep Fech */

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

/* Validação */ 


/* Validação */ 
function validardados(){
    let checkNome = nome.value
    let checkEmail = email.value
    let checkSenha = inputSenha.value
    let checkConfSenha = confirmarSenha.value
    let checkCep = cep.value
    
    if(checkEmail == '' && checkSenha === checkConfSenha && checkNome == '' && checkCep == ''){
        alert('campos vazios')

    }else{
        alert('Cadastrado')
    ;}
}

/* Senha validação */ 

document.getElementById("inputSenha").addEventListener("focusout", validarSenha);
document.getElementById("confirmarSenha").addEventListener("focusout", validarSenha);

let senhaValidada = false;
function validarSenha() {
  if (document.getElementById("inputSenha").value != "" && document.getElementById("confirmarSenha").value != "") {
    if (document.getElementById("inputSenha").value != document.getElementById("confirmarSenha").value) {
      document.getElementById("inputSenha").parentElement.parentElement.classList.add("senhaInvalida");
    } else {
      document.getElementById("inputSenha").parentElement.parentElement.classList.remove("senhaInvalida");
      senhaValidada = true;
    }
  }
}


