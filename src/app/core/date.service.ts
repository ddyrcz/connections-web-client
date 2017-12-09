import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class DateService {
  toISO8601(date: Date): string {
    return moment(date).format();
  }
}
