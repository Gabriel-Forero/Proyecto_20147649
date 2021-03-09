import { Component, Input, OnInit } from '@angular/core';
import { ProductModel} from '../../../models/Product.models'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  @Input() dataEntrante:any;
 
  producto?: ProductModel;
  producto1 = new ProductModel;
  producto2 = new ProductModel;
  producto3 = new ProductModel;
  producto4 = new ProductModel;
  producto5 = new ProductModel;
  producto6 = new ProductModel;
  producto7 = new ProductModel;
  producto8 = new ProductModel;
  producto9 = new ProductModel;
  producto10 = new ProductModel;

  productos: ProductModel[] = [this.producto1];
  carritoCompras: ProductModel[]=[this.producto1];
  ngOnInit(): void {
  }
  constructor() 
  {
    this.inicializa();
  }
  inicializa():void
  {
    this.producto1.ID ="J1";
    this.producto1.Color="Azul";
    this.producto1.Inventario = 5;
    this.producto1.Talla="s";
    this.producto1.costo=140000;
    this.producto1.tipo ="Jean";

    this.producto2.ID ="J2";
    this.producto2.Color="Azul";
    this.producto2.Inventario = 4;
    this.producto2.Talla="M";
    this.producto2.costo=120000;
    this.producto2.tipo ="Jean";

    this.producto3.ID ="J3";
    this.producto3.Color="Negro";
    this.producto3.Inventario = 7;
    this.producto3.Talla="L";
    this.producto3.costo=180000;
    this.producto3.tipo ="Jean";

    this.producto4.ID ="C1";
    this.producto4.Color="Azul";
    this.producto4.Inventario = 5;
    this.producto4.Talla="s";
    this.producto4.costo=170000;
    this.producto4.tipo ="Camisa";

    this.producto5.ID ="C2";
    this.producto5.Color="Verde";
    this.producto5.Inventario = 5;
    this.producto5.Talla="s";
    this.producto5.costo=180000;
    this.producto5.tipo ="Camisa";

    this.producto6.ID ="C3";
    this.producto6.Color="Negro";
    this.producto6.Inventario = 5;
    this.producto6.Talla="m";
    this.producto6.costo=140000;
    this.producto6.tipo ="Camisa";

    this.producto7.ID ="T1";
    this.producto7.Color="Negro";
    this.producto7.Inventario = 5;
    this.producto7.Talla="40";
    this.producto7.costo=210000;
    this.producto7.tipo ="Tenis";

    this.producto8.ID ="T2";
    this.producto8.Color="Blanco";
    this.producto8.Inventario = 5;
    this.producto8.Talla="40";
    this.producto8.costo=220000;
    this.producto8.tipo ="Tenis";

    this.producto9.ID ="T3";
    this.producto9.Color="Azul";
    this.producto9.Inventario = 5;
    this.producto9.Talla="41";
    this.producto9.costo=240000;
    this.producto9.tipo ="Tenis";

    
    this.productos?.push(this.producto2);
    this.productos?.push(this.producto3);
    this.productos?.push(this.producto4);
    this.productos?.push(this.producto5);
    this.productos?.push(this.producto6);
    this.productos?.push(this.producto7);
    this.productos?.push(this.producto8);
    this.productos?.push(this.producto9);

  }

 comprarProducto(producto: ProductModel)
  {
    for(let i =0; i<this.productos.length; i++)
    {
      if(producto == this.productos[i])
      {
        this.carritoCompras.push(producto);
      }
    }
  }

  eliminarProducto(producto: ProductModel)
  {
    for(let i =0; i<this.carritoCompras.length; i++)
    {
      if(producto == this.carritoCompras[i])
      {
        this.carritoCompras.splice(i,1);
      }
    }
  }

  realizarCompra()
  {
    alert("Su compra se ha realizado con exito");
  }

}
