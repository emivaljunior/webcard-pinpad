import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Base64Provider } from '../../providers/base64/base64';

@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html'
})
export class VendaPage {
 
  barcodeData:any ={};
  cartao:any = {};

  constructor(
    public navCtrl: NavController, 
    public scanner: BarcodeScanner,
    public base64: Base64Provider) {
      this.scanCartaoMock();
    }

    /**
     * Realiza o scan do QR Code do cartão do cliente.
     */
    scanCartao() {
      this.barcodeData = {};
      var options = {
        prompt: "Focalize o código do cartão.",
      }
      this.scanner.scan(options).then((data) => {
        //Verifica se o usuário não cancelou
        //E se o código escaneado, é um QRCode.
        if(!data.cancelled && data.format == 'QR_CODE'){
          //Define o barcode recuperado.
          this.barcodeData = data;
          var strJson = this.base64.decodeUtf8(data.text);
          this.cartao = JSON.parse(strJson);
        }

      //var data = {"format":"QR_CODE","text":"eyJpZCI6ICIxIiwibm9tZUV4aWJpY2FvIjogIkVNSVZBTCBKw5pOSU9SIiwibnVtZXJvIjogIjkwMDEwMzkzNzY4ODgzODIiLCJkYWRvc0ZpbmFuY2Vpcm9zIjogeyJpZCI6MSwiY2xpZW50ZSI6IHsiY3BmIjoiNzIzNDI0ODAxMzAifX19"};
      console.log(strJson);
      console.log(this.cartao.numero);
      console.log(this.cartao.nomeExibicao);
      console.log(this.cartao.dadosFinanceiros.cliente.cpf);
    }).catch((err:any)=>{
      console.error(err);
    })
  }

  scanCartaoMock(){
    var data = {
      cancelled: false,
      format:"QR_CODE",
      text:"eyJpZCI6ICIxIiwibm9tZUV4aWJpY2FvIjogIkVNSVZBTCBKw5pOSU9SIiwibnVtZXJvIjogIjkwMDEwMzkzNzY4ODgzODIiLCJkYWRvc0ZpbmFuY2Vpcm9zIjogeyJpZCI6MSwiY2xpZW50ZSI6IHsiY3BmIjoiNzIzNDI0ODAxMzAifX19"
    };
    if(!data.cancelled && data.format == 'QR_CODE'){
      //Define o barcode recuperado.
      this.barcodeData = data;
      var strJson = this.base64.decodeUtf8(data.text);
      this.cartao = JSON.parse(strJson);
      console.log(strJson);
      console.log(this.cartao.numero);
      console.log(this.cartao.nomeExibicao);
      console.log(this.cartao.dadosFinanceiros.cliente.cpf);
    }
  }

 
  process(){

  }
}