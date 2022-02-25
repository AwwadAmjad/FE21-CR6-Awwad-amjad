import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phones } from '../phones';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones:any=phones ;

  constructor(private route: ActivatedRoute, private cs: CartService) {
  }

  ngOnInit(): void {
  }

  addToCart(prod:any){
    alert('Your Phone has been added to the cart!');
    this.cs.addToCart(prod);

  }
}




