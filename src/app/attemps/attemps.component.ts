import { Component, OnInit } from '@angular/core'

import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-attemps',
  templateUrl: './attemps.component.html',
  styleUrls: ['./attemps.component.css']
})
export class AttempsComponent implements OnInit {

  public heartEmpty: string = '/assets/coracao_vazio.png'
  public heartFull: string = '/assets/coracao_cheio.png'

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() {
    console.log(this.hearts)
  }

  ngOnInit() {
  }

}
