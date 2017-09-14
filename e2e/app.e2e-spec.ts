import { SetTimeoutPage } from './app.po';

describe('set-timeout App', () => {
  let page: SetTimeoutPage;

  beforeEach(() => {
    page = new SetTimeoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
