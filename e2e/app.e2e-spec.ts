import { ZenithAGPage } from './app.po';

describe('zenith-ag App', function() {
  let page: ZenithAGPage;

  beforeEach(() => {
    page = new ZenithAGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
