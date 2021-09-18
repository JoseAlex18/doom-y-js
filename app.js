class Producto{
    constructor(codigo, nombre, username){
      this.codigo=codigo;
      this.nombre=nombre;
      this.username=username;
    }
    info(){
      return this.codigo + "- " + this.nombre + 
        "- " + this.username;
    }
    infoHtml(){
      return `   
        <div class ='productoCard' id='cod${this.codigo}'>
          <h3>${this.codigo} - ${this.nombre} - ${this.username}</h3>
        </div>
      `;
    }
  }
  
  class Inventario{
    constructor(){
      this.datos=new Map();
    }
    agregar(nuevo){
      this.datos.set(nuevo.codigo,nuevo)
      console.log(nuevo)
    }
    llenarMenu(){
      //foreach en el MAP
      return `
				
			`;
    }
    buscar(codigo){
      return this.datos.get('1');
    }
  }
  
  class Interfaz{
    agregarProducto(nuevo){
      const lista=document.getElementById('listaProductos');
      let producto=document.createElement('div');
      producto.innerHTML=nuevo.infoHtml();
      lista.appendChild(producto);
    }
    mensaje(mensaje){
      const cont=document.getElementById('container');
      const app=document.getElementById('app');
      
      const msg=document.createElement('div');
      msg.className='alerta';
      msg.appendChild(document.createTextNode(mensaje));
      
      cont.insertBefore(msg,app);
      
      setTimeout( function(){
      	document.querySelector('.alerta').remove();
      }  ,3000);
    }
  }
  
  console.log('iniciando...');
  let almacen=new Inventario();
  let ui=new Interfaz();
  
  
  let btnAdd=document.getElementById('btnAdd');
  btnAdd.addEventListener('click',()=>{
    console.log('...nuevo...');
  	let codigo=document.getElementById('txtCodigo').value;
    let nombre=document.getElementById('txtNombre').value;
    let username=document.getElementById('txtUsername').value;
    let nuevo=new Producto(codigo,nombre,username);
    almacen.agregar(nuevo)
    console.log(nuevo.info());
    ui.mensaje('Se agrego el producto ' + nuevo.nombre);
  });
  
  
  
  let btnCargar=document.getElementById('btnCargar');
  btnCargar.addEventListener('click',()=>{
  	let mnuProds=document.getElementById('mnuProds');
    mnuProds.innerHTML=almacen.llenarMenu();
  
  });
  
  let mnuProds=document.getElementById('mnuProds');
  mnuProds.addEventListener('change',()=>{
  	let producto=almacen.buscar(mnuProds.value);
    if (producto!=null)
      ui.agregarProducto(producto);
  
  });