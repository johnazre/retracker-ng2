import { RetrackerNg2Page } from './app.po';

describe('retracker-ng2 App', function() {
  let page: RetrackerNg2Page;

  beforeEach(() => {
    page = new RetrackerNg2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('retracker-ng2 works!');
  });
});
