import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products: any[] = [];
  productDetail: any;
  productName: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  viewProductDetails(product: any) {
    this.productDetail = product;
    this.productsService.selectedProduct = this.productDetail;
    this.router.navigate(['/product', this.productDetail.id]);
  }
  openConfirmationDialog(productId: string): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, { data: { productId: productId } });

  }
  findProduct() {
    if (this.productName) {
      const product = this.products.find(p => p.name.toLowerCase() === this.productName.toLowerCase());

      if (product) { 
        this.productsService.selectedProduct = product; //meto la variable product en el servicio para que pueda acceder
        this.router.navigate(['/product', product.id]);
      }
    }
  }
}






