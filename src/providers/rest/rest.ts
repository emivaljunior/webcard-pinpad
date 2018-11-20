import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestProvider {
  data:Response = null;
  apiUrl:string = 'http://webcard.comercialdias.com.br/webcard-back/api';
  
  constructor(public http: HttpClient) {

  }

  addVenda(qrcode:string, valor:string) {    
    return new Promise((resolve, reject) => {
      let dataJson = JSON.stringify({
        valor: valor.replace(",","."),
        token:qrcode
      });
      console.log("QR CODE: ", qrcode);
      console.log("JSON: ", dataJson);
      this.http.post(this.apiUrl + '/v1/lancamentos/pdvs', dataJson, {responseType: "text"})
        .subscribe((result: any) => {
          console.log("result (addVenda)", result);
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  getQrcode() {    
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/v1/cartoes/qrcodes/1', {responseType: "text"})
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
