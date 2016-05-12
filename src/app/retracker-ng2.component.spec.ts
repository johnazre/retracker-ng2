import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RetrackerNg2AppComponent } from '../app/retracker-ng2.component';

beforeEachProviders(() => [RetrackerNg2AppComponent]);

describe('App: RetrackerNg2', () => {
  it('should create the app',
      inject([RetrackerNg2AppComponent], (app: RetrackerNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'retracker-ng2 works!\'',
      inject([RetrackerNg2AppComponent], (app: RetrackerNg2AppComponent) => {
    expect(app.pageTitle).toEqual('RETracker');
  }));
});
