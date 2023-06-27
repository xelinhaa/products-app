import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-charts',
  templateUrl: './products-charts.component.html',
  styleUrls: ['./products-charts.component.scss']
})
export class ProductsChartsComponent implements OnInit {
  stockProducts = [];
  priceProducts = [];
  precios5 = [];
  stockVolume = [];




  colorScheme = {
    domain: ['#92E9A5', '#7C2FDF', '#DFA9E1', '#277F9C', '#EFCD1E'],
  };


  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: any[]) => {

      const activeProducts = products.filter((product) => product.active);
      const unactiveProducts = products.filter((product) => !product.active);

      const hasta5 = products.filter((products) => { return products.price <= 5 });
      const hasta10 = products.filter((products) => { return products.price > 5 && products.price <= 10 });
      const hasta20 = products.filter((products) => { return products.price > 10 && products.price <= 20 });
      const hasta50 = products.filter((products) => { return products.price > 20 && products.price <= 50 });
      const hasta100 = products.filter((products) => { return products.price > 50 && products.price <= 100 });

      const under50 = products.filter((products) => { return products.stock <= 50 });
      const from50to100 = products.filter((products) => { return products.stock > 50 && products.stock <= 100 });
      const from100to500 = products.filter((products) => { return products.stock > 100 && products.stock <= 500 });
      const moreThan500 = products.filter((products) => { return products.stock > 500 });

      this.stockProducts = [
        { name: "En Stock", value: activeProducts.length },
        { name: "No disponible", value: unactiveProducts.length }
      ];

      this.priceProducts = [
        { name: 'milk', value: 1.72 },
        { name: 'norwegian salmon', value: 10.89 },
        { name: 'pork ribs', value: 5.75 },
        { name: 'gazpacho', value: 1.77 },
        { name: 'cured cheese', value: 5.45 }
      ];

      this.precios5 = [
        { name: "Hasta 5€", value: hasta5.length },
        { name: "Entre 5 y 10€", value: hasta10.length },
        { name: "Entre 10 y 20€", value: hasta20.length },
        { name: "Entre 20 y 50€", value: hasta50.length },
        { name: "Más de 100€", value: hasta100.length },
      ];

      this.stockVolume = [
        { name: "Hasta 50 unidades ", value: under50.length },
        { name: "Entre 50 y 100 ud.", value: from50to100.length },
        { name: "Entre 100 y 500 ud.", value: from100to500.length },
        { name: "Más de 500 ud.", value: moreThan500.length }
      ];



    });
  }

}
