import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addlike(): void {
    this.likes += 1;
  }
}
