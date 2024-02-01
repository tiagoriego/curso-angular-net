import { Injectable } from '@angular/core';

export type AppInfo = {
  version: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getApp(): AppInfo {
    return {
      version: '0.1.0',
      name: 'app-custo-angular'
    }
  }
}
