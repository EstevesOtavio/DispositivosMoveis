import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../services/dados.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-obj',
  templateUrl: './editar-obj.page.html',
  styleUrls: ['./editar-obj.page.scss'],
})
export class EditarObjPage implements OnInit {

  objeto : dadosForm;
  indice : number;

  interEsporte: boolean;
  interLeitura: boolean;
  interMusica: boolean;
  interViagem : boolean;

  constructor(public param : ActivatedRoute,
              public servico : DadosService,
              public rota : Router,
              public toast : ToastController) { }

  ngOnInit() {

    this.param.params.subscribe(

      (data : any) => {
        this.indice = data.item;
        this.objeto = this.servico.retornarObjViaPosicao(this.indice);
        console.log("dados: "+JSON.stringify(this.objeto))
        this.inicializarOpcoesCheckbox();
      }

    )

  }

  inicializarOpcoesCheckbox(){
    if(this.objeto.interesses[0])
      this.interEsporte = true
    else
      this.interEsporte = false

    if(this.objeto.interesses[1])
      this.interLeitura = true
    else
      this.interLeitura = false
  
    if(this.objeto.interesses[2])
      this.interMusica = true
    else
      this.interMusica = false

    if(this.objeto.interesses[3])
      this.interViagem = true
    else
      this.interViagem = false
  }

  atualizarOpcao1() {
    // Atualizar a variável quando o checkbox for alterado
    this.interEsporte = !this.interEsporte; // Alternar entre true e false
  }

  atualizarOpcao2() {
    // Atualizar a variável quando o checkbox for alterado
    this.interLeitura = !this.interLeitura; // Alternar entre true e false
  }

  atualizarOpcao3() {
    // Atualizar a variável quando o checkbox for alterado
    this.interMusica = !this.interMusica; // Alternar entre true e false
  }

  atualizarOpcao4() {
    // Atualizar a variável quando o checkbox for alterado
    this.interViagem = !this.interViagem; // Alternar entre true e false
  }

  salvar(form: NgForm) {
    if (form.valid) { 

      this.objeto.interesses = [];

      if(this.interEsporte){
        this.objeto.interesses[0] = 'Esporte';
      }
      if(this.interLeitura){
        this.objeto.interesses[1] = 'Musica';
      }
      if(this.interMusica){
        this.objeto.interesses[2] = 'Leitura';
      }
      if(this.interViagem){
        this.objeto.interesses[3] = 'Viagens';
      }

      console.log("Vetor interesses: " + JSON.stringify(this.objeto.interesses))
      
      this.servico.editarItem(this.objeto);
      this.rota.navigate(['home']);
    }
  }

  async mensagem(msg : any,duration : any,color : any) {
    const toast = await this.toast.create({
          message: msg,
          duration: duration,
          color: color
        });
        toast.present();
    }

    
}
