import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.id=this.route.snapshot.paramMap.get('id');
}
}
