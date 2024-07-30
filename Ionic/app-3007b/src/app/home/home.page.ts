import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dadosTela : dadosForm[]=[];
  pos : number = 0;
  indexObj : number;

  constructor(public servico : DadosService,
              public rota : Router,
              public alert : AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuário Deletado com sucesso!',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  ionViewWillEnter(){ //antes do usuário visualizar a tela
    this.dadosTela = this.servico.listarDados();
  }

  formulario(){
    this.rota.navigate(['/formulario'])
  }

  public visualizarDadosObj(obj : dadosForm){

    this.pos = this.servico.encontrarPosicaoObj(obj);
    //console.log("Pos: "+this.pos);
    this.rota.navigate(['visualizar-dados-objeto/'+this.pos])

  }

  async alertExcluir(obj : dadosForm){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);

    const alert = await this.alert.create({
      header: 'Excluir item!',
      message: 'Deseja realmente excluir o item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Excluir',
          handler: async () => {
            this.servico.deletarItem(this.indexObj);
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
  }

  editarItem(obj : dadosForm){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);
    this.rota.navigate(['editar-obj/'+this.indexObj])
  }

  
}
