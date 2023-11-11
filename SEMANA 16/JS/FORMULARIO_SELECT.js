total=0;
function liquidar(){
    //VARIABLE PARA CALCULAR
let n1=document.getElementById("n1").value;
let n2=document.getElementById("n2").value;
let op=document.getElementById("op").value;
if (op=="Sumar"){
    total=parseFloat(n1)+parseFloat(n2);
}else if (op=="Restar"){
    total=parseFloat(n1)-parseFloat(n2);
}else if (op=="Multiplicar"){
    total=parseFloat(n1)*parseFloat(n2);
}else if (op=="Dividir"){
    total=parseFloat(n1)/parseFloat(n2);
}
document.getElementById("resp").value=total;
}