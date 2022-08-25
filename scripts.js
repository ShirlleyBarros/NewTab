function soma(){
    var num1 = document.getElementById("n1").value;
    if(document.getElementById("n1").value == "" ){
        alert("Por favor, preencha o campo Valor 1");
        document.getElementById("n1").focus();
        return 
        } 
    var num2 = document.getElementById("n2").value;
    if(document.getElementById("n2").value == ""){
        alert("Por favor, preencha o campo Valor 2");
        document.getElementById("n2").focus();
        return 
        }
    var res = document.getElementById("res");
    num1=parseInt(num1);
    if(num1<0){
        alert ("Não é permitido números negativos, preencha o Valor 1 com um número válido!");
    }
    num2=parseInt(num2);
    if(num2<0){
        alert ("Não é permitido números negativos, preencha o Valor 2 com um número válido!");
    }
    res.innerHTML ="O Resultado é:"+ (num1+num2);
 } 

