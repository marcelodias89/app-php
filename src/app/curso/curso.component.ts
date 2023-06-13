import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  //Construtor
  constructor(private http:HttpClient){ }

  //inicializador
  ngOnInit(){
    
  }

  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }

  //Seleção
  selecao():void{
    alert("Seleção");
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
