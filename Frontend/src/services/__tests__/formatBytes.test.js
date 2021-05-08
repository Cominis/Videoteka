import formatBytes from '../formatBytes';

test.each([
    [0, '0 bytes'],
    [1, '1 byte'],
    [11111, '10.85 KB'],
    [2222222, '2.12 MB'],
    [33333333333, '31.04 GB'],
])('Should format bytes correctly', (bytes, expected) => {
    expect(formatBytes(bytes)).toBe(expected);
});
