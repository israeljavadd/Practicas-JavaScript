let nota1, nota2, nota3;
    let dato1, dato2,dato3, media;
    var resultado;
    dato1 = window.prompt("PRIMER CALIFICACION?", "0");
    nota1 = parseInt(dato1);
    dato2 = window.prompt("SEGUNDA CALIFICACION?","0")
    nota2 = parseInt(dato2);
    dato3 = window.prompt("TERCERA CALIFICACION?","0");
    nota3 = parseInt(dato3);

    media=(nota1 + nota2 + nota3)/3;
    
    if (media < 5){
        resultado = "Suspendido";
    }
    else
    {
        resultado = "Aprobado";
    }
    document.write("<h3>La nota final es "+resultado+"</h3>");