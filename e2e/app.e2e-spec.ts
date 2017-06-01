import { NativeTalkWebClientPage } from './app.po';

describe('native-talk-web-client App', () => {
  let page: NativeTalkWebClientPage;

  beforeEach(() => {
    page = new NativeTalkWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
