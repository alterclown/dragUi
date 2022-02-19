import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DragService {
  constructor(private httpClient: HttpClient) {
  }
  readonly rootURL = 'https://localhost:44398/api/DragDrop/';

  getMoveItem() {
    return this.httpClient.get(this.rootURL + `GetMoveItem`);
  }
  getTransferItem() {
    return this.httpClient.get(this.rootURL + `GetTransferItem`);
  }
}