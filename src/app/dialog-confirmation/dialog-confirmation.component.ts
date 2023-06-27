import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {
  productId: string;

  constructor(
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productId: string }) {
    this.productId = data.productId;
  }

  ngOnInit() {
  }
  confirm(): void {
    this.productsService.deleteProduct(this.productId);
    this.dialogRef.close();
  }
}


