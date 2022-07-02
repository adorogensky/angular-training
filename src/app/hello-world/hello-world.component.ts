import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  clickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.clickCount++;
  }
}
