
var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario);

    console.log(datos)
    console.log(datos.get('Usuario'))
    console.log(datos.get('Clave'))
    console.log(datos.get('idTipo'))

    fetch('http://mibanez.ml/public/api/acceso/agregar',{
        method: 'POST',
        body: datos
    })
    //respuesta o
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        } )
})
