import { Component, OnInit } from '@angular/core'

import { Phrasal } from '../shared/phrasal.model'
import { PHRASES } from './phrases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Phrasal[] = PHRASES
  public instruction: string = 'Traduza a frase:'
  public response: string = ''

  public round: number = 0
  public roundPhrasal: Phrasal

  public progress: number = 0

  public attemps: number = 3

  constructor() {
    this.updateRound()
  }

  ngOnInit() {
  }

  public updateResponse(resposta: Event): void {
    this.response = (resposta.target as HTMLInputElement).value
    // console.log(this.response)
  }

  public checkResponse(): void {
    console.log(this.attemps)
    if (this.roundPhrasal.frasePtBr == this.response) {
    alert('A tradução esta correta')

    // trocar pergunta da rodada
    this.round++

    // progress
    this.progress = this.progress + (100 / this.phrases.length)
    console.log(this.progress)

    // atualiza o objeto roundPhrasal
    this.updateRound()

    } else {
      // diminuir a variável attemps
      this.attemps--

      if (this.attemps === -1) {
        alert('You missed all attemps')
      }
    }
    console.log(this.attemps)
  }

  public updateRound(): void {

    // define a frase da rodada com base em alguma lógica
    this.roundPhrasal = this.phrases[this.round]
    // limpar campo de texto
    this.response = ''
  }

}
