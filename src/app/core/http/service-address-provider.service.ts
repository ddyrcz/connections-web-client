import { Injectable } from '@angular/core';
import { environment } from "environments/environment";

@Injectable()
export class ServiceAddressProvider {
  serviceAddress = `http://${environment.serviceConnection.serverAddress}:${environment.serviceConnection.port}`;
}
