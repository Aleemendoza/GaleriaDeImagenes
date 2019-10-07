var imagenes = ["anonimus.jpg","descarga.jpg","images.jpg","welcome.jpg"];
var num = 0;

function siguiente(){

    var cambiaImagen = document.getElementById("cambiaImagen");
    num++;
    if (num >= imagenes.length) {
        num = 0;
    }
    cambiaImagen.src = imagenes[num];

}
function anterior () {

    var cambiaImagen = document.getElementById("cambiaImagen");
    num--;
    if (num < 0){
        num = imagenes.length-1;
    }
    cambiaImagen.src = imagenes[num];
}