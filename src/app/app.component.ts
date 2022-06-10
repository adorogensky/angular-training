import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-training';
  author = {
    name: '[waiting on value...]'
  };

  ngOnInit(): void {
    interval(3000).pipe().subscribe(() => {
      this.author = {
        name: 'Alex'
      };
    });
  }
}
