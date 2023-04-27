import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  @Input()
  counter$ = this.store.select('app').pipe(
    map(e => e.counter)
  );

  constructor(private store: Store<{ app: IAppState }>) { }

  ngOnInit(): void {
  }

}
