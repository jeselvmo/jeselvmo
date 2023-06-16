import isMimeType from '../../src/isMimeType';

describe('isMimeType test', () => {
  it('`application/pdf`是一个有效的MimeType', () => {
    expect(isMimeType('application/pdf')).toBe(true);
  });

  it('`image/jpeg`是一个有效的MimeType', () => {
    expect(isMimeType('image/jpeg')).toBe(true);
  });

  it('`textcss`不是一个有效的MimeType', () => {
    expect(isMimeType('textcss')).toBe(false);
  });
});
