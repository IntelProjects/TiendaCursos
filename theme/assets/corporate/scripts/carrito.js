class Carrito{
    
    //Añadir el producto al carrito
    comprarProducto(e){
     e.preventDefault();
     if(e.target.classList.contains('add2cart')){
        const producto = e.target.parentElement.parentElement;
        this.leerDatosProducto(producto);
       
     }
    }

    leerDatosProducto(producto){
        const infoProducto ={
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h3').textContent,
            precio : producto.querySelector('.pi-price').textContent,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : 1

            
        }
        this.InsertarCarrito(infoProducto);
    }

    InsertarCarrito(producto){
        const row=document.createElement('tr');
        row.innerHTML=`

        <td>
        <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
        <a href="#" class=" borrar-producto del-goods" data-id="${producto.id}"></a>
        </td>
        `;
        listaProductos.appendChild(row);
        
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto=e.target.parentElement.parentElement;
         productoID=producto.querySelector('a').getAttribute('data-id');
        }
    }
}