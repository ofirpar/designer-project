import { DesignerProjPage } from './app.po';

describe('designer-proj App', () => {
  let page: DesignerProjPage;

  beforeEach(() => {
    page = new DesignerProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
