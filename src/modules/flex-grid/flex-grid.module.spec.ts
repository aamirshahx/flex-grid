import {FlexGridModule} from './flex-grid.module';

describe('FlexGridModule', () => {
  let flexGridModule: FlexGridModule;

  beforeEach(() => {
    flexGridModule = new FlexGridModule();
  });

  it('should create an instance', () => {
    expect(flexGridModule).toBeTruthy();
  });
});
