import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictacgame',

  templateUrl: './tictacgame.component.html',
  styleUrls: ['./tictacgame.component.css']
})
export class TictacgameComponent implements OnInit {
  resul1: number = 0;
  resul2: number = 0;
  iteration: number = 0;
  game = ['', '', '', '', '', '', '', '', '']
  player = 'X'
  
  constructor() { }

  ngOnInit() {
  }

  gameset(indice) {
    console.log[indice];
    this.game[indice] = this.player;
    this.player = (this.player === 'X') ? 'O' : 'X';
    this.iteration = this.iteration + 1;
    if (this.iteration > 4) {
      for (let i = 0; i < 6; i++) {
        if (i === 0 || i === 3 || i === 6) {
          if (this.game[i] === this.game[i + 1] && this.game[i] === this.game[i + 2] && this.game[i] === "X") {
            
            alert('X a gagne');
            this.resul1 = this.resul1 + 1;
            this.Vider();

          }
          if (this.game[i] === this.game[i + 1] && this.game[i] === this.game[i + 2] && this.game[i] === "O") {
            alert('O a gagne');
            this.resul2 = this.resul2 + 1;
            this.Vider();
          }
        }
        if (i === 0 || i === 1 || i === 2) {
          if (this.game[i] === this.game[i + 3] && this.game[i] === this.game[i + 6] && this.game[i] === "X") {
            alert('X a gagne');
            this.resul1 = this.resul1 + 1;
            this.Vider();

          }
          if (this.game[i] === this.game[i + 3] && this.game[i] === this.game[i + 6] && this.game[i] === "O") {
            alert('O a gagne');
            this.resul2 = this.resul2 + 1;
            this.Vider();
          }
        }
        if (i === 0) {
          if (this.game[i] === this.game[i + 4] && this.game[i] === this.game[i + 8] && this.game[i] === "X") {
            alert('X a gagne');
            this.resul1 = this.resul1 + 1;
            this.Vider();
          }
          if (this.game[i] === this.game[i + 4] && this.game[i] === this.game[i + 8] && this.game[i] === "O") {
            alert('O a gagne');
            this.resul2 = this.resul2 + 1;
            this.Vider();
          }
        }
        if (i === 2) {
          if (this.game[i] === this.game[i + 2] && this.game[i] === this.game[i + 4] && this.game[i] === "X") {
            alert('X a gagne');
            this.resul1 = this.resul1 + 1;
            this.Vider();
          }
          if (this.game[i] === this.game[i + 2] && this.game[i] === this.game[i + 4] && this.game[i] === "O") {
            alert('O a gagne');
            this.resul2 = this.resul2 + 1;
            this.Vider();
          }
        }

      }



    }


  }
  Vider() {
    for (let i = 0; i < 9; i++) {
      this.game[i] = '';

    }
  }
 
  gameset1(indice) {
    console.log[indice];
    this.game[indice] = this.player;
    this.player = (this.player === 'X') ? 'O' : 'X';
    this.iteration = this.iteration + 1;
    if (this.iteration > 4) {
      switch (indice) {
        case 0:

          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "O") {
            alert('O a gagne');

          }
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "O") {
            alert('O a gagne');

          }
        case 1:
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "O") {
            alert('O a gagne');

          }
        case 2:
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 3] && this.game[indice] === this.game[indice + 6] && this.game[indice] === "O") {
            alert('O a gagne');

          }
          if (this.game[indice] === this.game[indice + 2] && this.game[indice] === this.game[indice + 4] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 2] && this.game[indice] === this.game[indice + 4] && this.game[indice] === "O") {
            alert('O a gagne');

          }
        case 3:
          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "O") {
            alert('O a gagne');

          }
        case 6:
          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "X") {
            alert('X a gagne');


          }
          if (this.game[indice] === this.game[indice + 1] && this.game[indice] === this.game[indice + 2] && this.game[indice] === "O") {
            alert('O a gagne');

          }

        default:
          break;
      }



    }


  }
}

