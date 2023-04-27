import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, decrementaCont, incrementaCont } from './app.state';

import { map } from "rxjs/operators"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{ app: IAppState }>) {
  }
  counter$ = this.store.select('app')
    .pipe(
      map(e => e.counter)
    );

  incrementaCont() {
    this.store.dispatch(incrementaCont());
  }

  decrementaCont() {
    this.store.dispatch(decrementaCont());
  }

}
