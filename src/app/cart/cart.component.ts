import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  checkoutForm= new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')

  })
  constructor(private cs: CartService ,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
     }

  ngOnInit(): void {
    this.cart = this.cs.getItems();
  }
  submit(customerData:any) {

    console.warn('Your order has been submitted', customerData);


    this.cart = this.cs.clearCart();

    this.checkoutForm.reset();

  }
}
