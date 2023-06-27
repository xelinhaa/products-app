import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.product = this.productsService.selectedProduct;
  }
  goToUpdateProduct() {
    this.router.navigate(['/edit-product', this.product.id]);

  }
  openConfirmationDialog(productId: string): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, { data: { productId: productId } });

  }
 
}
