import { Component, OnDestroy, OnInit } from '@angular/core';
import {CompanyDetailsService} from './service/company-details.service';
import {companyModel} from './models/company.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'danskit';
  constructor(private companyService:CompanyDetailsService){}
  notificationData: companyModel[] = [];
  companySubscription!: Subscription;
   ngOnInit(){
    this.companySubscription = this.companyService.getData().subscribe( data => {
              this.notificationData  = data;
     });
   }
   ngOnDestroy(){
     this.companySubscription.unsubscribe();
  }
}
