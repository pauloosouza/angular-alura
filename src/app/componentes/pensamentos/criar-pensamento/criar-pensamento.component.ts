import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
  FormsModule
  ],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamentos = {
    id:'1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    Modelo: ''
  }
  criarPensamentos(){
    alert("Novo pensamento criado");
  }
  cancelarAcao(){
    alert(" Cancelamento realizado com sucesso !")
  }

}
