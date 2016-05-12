export class RetrackerNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('retracker-ng2-app h1')).getText();
  }
}
