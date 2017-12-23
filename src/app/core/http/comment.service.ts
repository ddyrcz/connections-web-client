import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

import { Comment } from '../../shared/model/comment.interface'

@Injectable()
export class CommentService {
  constructor(private http: HttpClient,
    private serviceAddressProvider: ServiceAddressProvider) { }
}
