import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totaitemNumber:number=0

  constructor(private carService:CartapiService, private route: Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.carService.getProductData().subscribe(res=>{
      this.totaitemNumber=res.length
    })
  }

}