function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}




const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas [contadoor];
 const instrumento = listaDeTeclas[contador].classList[1];
 //template string
 const idAudio = `#som_${instrumento}`;

 console.log(idAudio);


    tecla.onclik = function () {
        tocaSom('#som_tecla_pom');
    }


    contador = contador + 1;

    console.log(contador);

}
