import { Component, OnInit } from '@angular/core';
import{ ComprasModel} from '../../../models/Compras.models'
import{ ProductModel} from '../../../models/Product.models'
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
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

  productos1: ProductModel[] = [this.producto1,this.producto5,this.producto9];
  productos2: ProductModel[] = [this.producto2,this.producto8,this.producto3];
  productos3: ProductModel[] = [this.producto7,this.producto4,this.producto3];
  productos4: ProductModel[] = [this.producto6,this.producto4,this.producto1];

  compras1 = new ComprasModel;
  compras2 = new ComprasModel;
  compras3 = new ComprasModel;
  compras4 = new ComprasModel;

  compras: ComprasModel[]=[this.compras1];
  constructor() {
    this.inicializa();
    this.llenaCompras();
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   llenaCompras()
   {
      this.compras1.fecha ="12/10/20";
      this.compras1.productos = this.productos1;
      this.compras1.descripcion ="Gabriel Forero"
      this.compras1.total = 200000;

      this.compras2.fecha ="10/01/21";
      this.compras2.productos = this.productos2;
      this.compras2.descripcion ="Lina maria"
      this.compras2.total = 310000;

      this.compras3.fecha ="11/02/21";
      this.compras3.productos = this.productos3;
      this.compras3.descripcion ="Sofia Forero"
      this.compras3.total = 220000;

      this.compras4.fecha ="22/02/21";
      this.compras4.productos = this.productos1;
      this.compras4.descripcion ="Andres Murcia"
      this.compras4.total = 215000;

      this.compras.push(this.compras2);
      this.compras.push(this.compras3);
      this.compras.push(this.compras4);
   } 
   inicializa()
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
   }
}
