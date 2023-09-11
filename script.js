lista = [];

function springfields(){
    lista.push(600);
}

function winsters(){
    lista.push(890);
}

function hymmons(){
    lista.push(780);
}

function josephis(){
    lista.push(590);
}

function oppuxits(){
    lista.push(840);
}

function frimess(){
    lista.push(990);
}

function naaniiss(){
    lista.push(850);
}

function looloss(){
    lista.push(930);
}

function mostrarcarrito(){
    var nombre = document.getElementById('nombrecliente').value;
    var total = 0;
    productos = [];
    length = lista.length;
    for (var i = 0; i < length; i++)
        productos.push(parseInt(lista[i]));
    for(let x of productos){
        total+=x;
    }
    document.getElementById('name').innerHTML="Nombre del cliente: " + nombre; 
    document.getElementById('resultado').innerHTML="total due " + total +"$";     

}