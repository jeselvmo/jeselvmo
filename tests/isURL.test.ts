import isURL from '../src/isURL';

describe('isURL test', () => {
  it('`http://harveyzeng.iteye.com/blog/1776991`是一个有效的URL', () => {
    expect(isURL('http://harveyzeng.iteye.com/blog/1776991')).toBe(true);
  });

  it('`https://www.baidu.com`是一个有效的URL', () => {
    expect(isURL('https://www.baidu.com')).toBe(true);
  });

  it('`http://baidu.com`是一个有效的URL', () => {
    expect(isURL('http://baidu.com')).toBe(true);
  });

  it('`192.168.0.1:8080`是一个有效的URL', () => {
    expect(isURL('192.168.0.1:8080')).toBe(true);
  });
});
