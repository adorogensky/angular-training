import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnChanges {

  @Input() author: { name: string };
  authFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.authFormGroup = new FormBuilder().group(this.author);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.authFormGroup = new FormBuilder().group(this.author);
  }
}
