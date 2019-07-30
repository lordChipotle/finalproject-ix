import { Component } from '@angular/core';
import{Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public trips: Array<any> =[];
  public hasTrips: boolean = this.trips.length>0;
  constructor(private router: Router) {}
  go(){
    this.router.navigateByUrl('/tabs/tab2');
  }
}
