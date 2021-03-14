import * as ui from '../src';

describe('@brennstoff/ui', () => {
  it('has required base exports', () => {
    expect(ui).toHaveProperty('theme');
    expect(ui).toHaveProperty('Brennstoff');
    expect(ui).toHaveProperty('styled');
    expect(ui).toHaveProperty('Button');
    // TODO: count packages and test if all are exported?
  });
});
