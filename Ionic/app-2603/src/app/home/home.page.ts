import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados = {
    nome: '',
    genero: '',
    telefone: '',
    matricula: '',
    bilingue: false,
    cursos: [] as string[]
  }

  // languages = {
  //   html: false,
  //   php: false,
  //   javascript: false
  // }

  languages:string = "";

  cursos:string[] = []

  constructor() {}

  // cadastrar(form: any) {
  //   if (form.valid) {
  //     if(this.languages.html === true) {
  //       this.cursos.push("html ")
  //     }
  //     if(this.languages.php === true) {
  //       this.cursos.push("php ")
  //     }
  //     if(this.languages.javascript == true) {
  //       this.cursos.push("javascript")
  //     }
  //     this.dados.cursos = this.cursos
  //     console.log("Dados: ", this.dados);
  //   } else {
  //     console.log("Formulário inválido!")
  //   }
  // }

  cadastrar(form: any) {
    if (form.valid) {
      console.log(this.languages);
    }
  }
}
