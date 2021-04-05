import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner:  string;

  constructor() { }

  ngOnInit(): void {
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  getPlayer(){
    return this.xIsNext? 'X' : 'O';
  }
}
