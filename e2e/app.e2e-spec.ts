import { LoopclientPage } from './app.po';

describe('loopclient App', () => {
  let page: LoopclientPage;

  beforeEach(() => {
    page = new LoopclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
