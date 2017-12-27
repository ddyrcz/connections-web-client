import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

interface FileLocation {
  fileUrl: string
}

@Injectable()
export class FileService {

  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider) { }

  upload(form: FormData): Promise<FileLocation> {
    return this.http.post<FileLocation>(`${this.serviceAddressProvider.serviceAddress}/images`, form)
      .toPromise();
  }

}
