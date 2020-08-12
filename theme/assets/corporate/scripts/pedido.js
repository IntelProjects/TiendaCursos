const carro=new Carrito();
const carrito = document.getElementById('carrito');
const productos =document.getElementById('lista-productos');    
const listaProductos =document.getElementById('lista-carrito')

cargarEventos();
function cargarEventos(){
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)});
    carrito.addEventListener('click',(e)=>{carro.eliminarProducto(e)});
} 
