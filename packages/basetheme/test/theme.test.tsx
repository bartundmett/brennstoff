import theme from '../src';

describe('@brennstoff/basetheme', () => {
  it('has required theme properties', () => {
    expect(theme).toHaveProperty('colors');
    expect(theme).toHaveProperty('space');
    expect(theme).toHaveProperty('typography');
    expect(theme).toHaveProperty('components');
  });
});
