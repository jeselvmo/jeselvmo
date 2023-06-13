import isIP from '../src/isIP';

describe('isIP test', () => {
  it('`172.16.0.207`是一个有效的IP地址', () => {
    expect(isIP('172.16.0.207')).toBe(true);
  });

  it('`localhost`不是一个有效的IP地址', () => {
    expect(isIP('localhost')).toBe(false);
  });

  it('`127.0.0.1`是一个有效的IP地址', () => {
    expect(isIP('127.0.0.1')).toBe(true);
  });

  it('`127.0.0.1000`不是一个有效的IP地址', () => {
    expect(isIP('127.0.0.1000')).toBe(false);
  });
});
