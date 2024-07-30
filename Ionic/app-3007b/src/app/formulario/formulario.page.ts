import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dadosForm } from '../models/dadosForm';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  dadosFormulario: dadosForm = {
    nome: '',
    idade: '',
    genero: '',
    email:  '',
    telefone: '',
    endereco: '',
    cidade: '',
    interesses: [] as string[],
    newsletter: false
  };

  interEsporte: boolean = false;
  interLeitura: boolean = false;
  interMusica: boolean = false;
  interViagem : boolean = false;

  constructor(public rota : Router,
              public servico : DadosService) { }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    if (form.valid) {     

      if (this.interEsporte) {
        this.dadosFormulario.interesses[0] = "Esporte";
      }
      if (this.interLeitura) {
        this.dadosFormulario.interesses[1] = "Leitura";
      }
      if (this.interMusica) {
        this.dadosFormulario.interesses[2] = "Música";
      }
      if (this.interViagem) {
        this.dadosFormulario.interesses[3] = "Viagem";
      }

      console.log("Dados preenchidos: " + JSON.stringify(this.dadosFormulario))

      //acionar o serviço
      this.servico.adicionarDados(this.dadosFormulario);

      this.resetFormulario();
      this.rota.navigate(['home'])
    }
  }

  resetFormulario() {
    // Reseta os campos do formulário
    this.dadosFormulario.nome = '',
    this.dadosFormulario.idade = '',
    this.dadosFormulario.genero = '',
    this.dadosFormulario.email = '',
    this.dadosFormulario.telefone = '',
    this.dadosFormulario.endereco = '',
    this.dadosFormulario.cidade = '',
    this.dadosFormulario.interesses = [],
    this.dadosFormulario.newsletter = false

    this.interEsporte = false;
    this.interLeitura = false;
    this.interMusica = false;
    this.interViagem = false;
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

}
