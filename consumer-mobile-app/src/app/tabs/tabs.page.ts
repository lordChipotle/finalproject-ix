import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnChanges {

  constructor() {
    console.log("ayy")
  }
  ngOnChanges(){
    console.log("ayy")
  }
}
