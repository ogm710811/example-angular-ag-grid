import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood-renderer',
  templateUrl: './mood-renderer.component.html',
  styleUrls: ['./mood-renderer.component.css']
})
export class MoodRendererComponent implements OnInit {
  private params: any;
  private mood: string;
  public imgForMood: string;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
    this.setMood(params);
  }

  ngOnInit() {
  }

  // refresh(params: any): void {
  //   this.params = params;
  //   this.setMood(params);
  // }

  private setMood(params) {
    this.mood = params.value;
    this.imgForMood = this.mood === 'Happy' ? 'https://www.ag-grid.com/images/smiley.png' : 'https://www.ag-grid.com/images/smiley-sad.png';
  };

}
