import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phones } from '../phones';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
phone:any;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
var id:any =params.get('phoneId');
      this.phone= phones[id];
      console.log(this.phone);

    });
  }

}
