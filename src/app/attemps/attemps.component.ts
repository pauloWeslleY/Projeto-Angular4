import { Component, OnInit, Input, OnChanges } from '@angular/core'

import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-attemps',
  templateUrl: './attemps.component.html',
  styleUrls: ['./attemps.component.css']
})
export class AttempsComponent implements OnInit, OnChanges {

  @Input() public attemps: number

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() {  }

  ngOnChanges() {
    // this.attemps
    // this.heart.length
    if (this.attemps !== this.hearts.length) {
      const index = this.hearts.length - this.attemps

      this.hearts[index - 1].full = false
    }
  }

  ngOnInit() {

  }

}
