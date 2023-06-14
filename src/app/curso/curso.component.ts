import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  //URL base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor:Curso[] | undefined;
  
  //Construtor
  constructor(private curso_servico:CursoService){ }

  //inicializador
  ngOnInit(){
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }



  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }

  //Seleção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //Alterar
  alterar():void{
    alert("Alterar");
  }

  //Remover
  remover():void{
    alert("Remover");
  }
}
