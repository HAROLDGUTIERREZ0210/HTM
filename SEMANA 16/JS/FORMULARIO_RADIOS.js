function ingresar()
{
    let nombre,edad,estado,institucion;
    nombre=document.getElementById('nom').value;
    edad=document.getElementById('ed').value;
    institucion=document.getElementById('ins').value;

    if(document.getElementById('radio1').checked)
    {
        estado="Sin nivel de estudio";
    }
    else if(document.getElementById('radio2').checked)
    {
        estado="Primaria";
    }
    else if(document.getElementById('radio3').checked)
    {
        estado="Secundaria";
    }
    else if(document.getElementById('radio4').checked)
    {
        estado="Tecnico";
    }
    else if(document.getElementById('radio5').checked)
    {
        estado="Universitario";
    }
    else if(document.getElementById('radio6').checked)
    {
        bot.style.visibility='visible'
        estado="Otro tipo de estudio";
    }
    alert ('El estudiante : ..'+ nombre+' cuya edad es: ...'+edad+' años,'+'\n'+'Nivel de estudios:...'+estado +'\n'+'Graduado en la instutucion : '+insticucion);
}