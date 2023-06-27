import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  nombre: string;
  unidades: number;
  precio: number;
  disponibilidad: boolean;
  fechaDeAlta: string;


  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {

  }

  addProduct() {

    console.log(this.disponibilidad);
    const product = {
      name: this.nombre,
      stock: this.unidades,
      price: this.precio,
      active: this.disponibilidad,
      date_added: this.fechaDeAlta
    };
    this.productsService.newProduct(product);
    this.router.navigate(['/products'], { replaceUrl: true });
  }

}
