import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  public saved: Array<any> = [];
  public hasSavedContents: boolean = this.saved.length>0;
  constructor(private router: Router) {}
  go(){
    this.router.navigateByUrl('/tabs/tab2');
  }

}
