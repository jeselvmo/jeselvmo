import isUUID from '../../src/isUUID';

describe('isUUID test', () => {
  it('`424a9ae0-0d39-4b28-9f24-446c8572de57`是一个有效的UUID', () => {
    expect(isUUID('424a9ae0-0d39-4b28-9f24-446c8572de57')).toBe(true);
  });

  it('`424a9ae0`不是一个有效的UUID', () => {
    expect(isUUID('424a9ae0')).toBe(false);
  });
});
