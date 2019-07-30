import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/service-provider.model';
import { ServiceProviderService } from 'src/app/services/service-provider.service';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<ServiceProvider>;

  constructor(
    private spService: ServiceProviderService
  ) {

    this.serviceProviders = this.spService.getServiceProviders();

  }

  ngOnInit() {
  }

}