import isLatLong from '../../src/isLatLong';

describe('isLatLong test', () => {
  it('`116.40741300000002,39.904214`是一个有效的经纬度', () => {
    expect(isLatLong('116.40741300000002,39.904214')).toBe(true);
  });

  it('`[116.40741300000002,39.904214]`是一个有效的经纬度', () => {
    expect(isLatLong([116.40741300000002, 39.904214])).toBe(true);
  });
});
