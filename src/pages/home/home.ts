import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { VendaPage } from '../venda/venda';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data: any = {};
  pages: Array<{title: string, color: string, component: any}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
    this.pages = [
      { title: 'Registrar Venda', color: "primary", component: VendaPage },
      { title: 'Ativar Cartão', color: "secondary", component: VendaPage },
      { title: 'Sair', color: "danger", component:LoginPage },
    ];
  }

  openPage(page) {
    this.navCtrl.push(page.component);
  }
}
