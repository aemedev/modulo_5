//Mostrar el carrito de la compra.
// Listar todos los productos.
// Eliminar el producto con id 54657 del carrito de la compra.
// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
// Filtrar por los productos que sean prime.

const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true,
        img: "assets/color-ink.jpg"
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,
        img: "assets/impresora.jpg"
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false,
        img: "assets/folios.jpg"
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false,
        img: "assets/papel.jpg"
    }
];

//Creamos un div para contener los productos y limpiarlo cada vez que le pedimos que nos muestre nuevos productos
let crearProducto = (a)=> {
    let crearDivCard = document.createElement('DIV');
    crearDivCard.classList.add("product-card");

    let crearImg = document.createElement('IMG');
    crearImg.classList.add("crearImg");
    crearImg.src = a.img;
    crearImg.setAttribute("src", crearImg.src);
    crearDivCard.append(crearImg);

    let crearNombre = document.createElement('P');
    crearNombre.textContent = a.name;
    crearDivCard.append(crearNombre);

    let crearCuantos = document.createElement('p');
    crearCuantos.textContent = "Cantidad: " + a.count;
    crearDivCard.append(crearCuantos);

    let crearPrecio = document.createElement('P');
    crearPrecio.classList.add("precio");
    crearPrecio.textContent = a.price + (" €");
    crearDivCard.append(crearPrecio);

    let divContenedor = document.querySelector('#contenidoLista');
    divContenedor.append(crearDivCard);
};

//Creamos un div para contener la informacion del precio de todos los productos y ademas poder limpiarlo cada vez que pedimos nuevos productos
let crearDivPrecioTotal = (e)=> {
    let divPrecioTotal = document.createElement('DIV');

    let crearTotal = document.createElement('P');
    crearTotal.classList.add("total");
    crearTotal.textContent = "Total = " + e + "€";
    divPrecioTotal.append(crearTotal);

    let divContenedor = document.querySelector('#precioTotal');
    divContenedor.append(divPrecioTotal);
}


//Limpiar el contenido
let limpiarTabla = ()=>{
    document.querySelector('#contenidoLista').innerHTML = "";
    document.querySelector('#precioTotal').innerHTML = "";
}

//Filtrar todos los productos
let todosProductos = ()=>{

    let todos;
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
        todos = crearProducto(carrito[i]);
    }

    return todos;
};

//Filtrar solo productos con el tag premium
let productoPremium = ()=>{

    let premiums;
    for (producto of carrito) {
        if (producto.premium) {
            console.log(producto);
            premiums = crearProducto(producto);
        }
    }

    return premiums;
}


//Sumar el precio total de los articulos
let precioTotal = ()=> {
    let total = 0;
    for (producto in carrito) {
        total += Math.round(carrito[producto].price);
    }

    return crearDivPrecioTotal(total);
}




//Logica para seleccionar que tipo de producto mostrar
let selectTipoProducto = ()=> {
    let filtro = document.querySelector('#filtro');
    let valueSelect = filtro.options[filtro.selectedIndex].value;


    limpiarTabla();


    if (valueSelect === '1') {
        todosProductos();

        console.log('Hola');
    } else {
        productoPremium();
        console.log('adios')
    }
    
    precioTotal();
}
filtro.addEventListener('change', selectTipoProducto);