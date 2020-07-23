import dowParser from '../dowParser';

test('Monday(full)', () => {
  expect(dowParser(1)).toBe('จันทร์');
});

test('Tuesday(full)', () => {
  expect(dowParser(2)).toBe('อังคาร');
});

test('Wednesday(full)', () => {
  expect(dowParser(3)).toBe('พุธ');
});

test('Thursday(full)', () => {
  expect(dowParser(4)).toBe('พฤหัส');
});

test('Friday(full)', () => {
  expect(dowParser(5)).toBe('ศุกร์');
});

test('Saturday(full)', () => {
  expect(dowParser(6)).toBe('เสาร์');
});

test('Sunday(full)', () => {
  expect(dowParser(0)).toBe('อาทิตย์');
});

test('Monday(abbv)', () => {
  expect(dowParser(1, true)).toBe('จ.');
});

test('Tuesday(abbv)', () => {
  expect(dowParser(2, true)).toBe('อ.');
});

test('Wednesday(abbv)', () => {
  expect(dowParser(3, true)).toBe('พ.');
});

test('Thursday(abbv)', () => {
  expect(dowParser(4, true)).toBe('พฤ.');
});

test('Friday(abbv)', () => {
  expect(dowParser(5, true)).toBe('ศ.');
});

test('Saturday(abbv)', () => {
  expect(dowParser(6, true)).toBe('ส.');
});

test('Sunday(abbv)', () => {
  expect(dowParser(0, true)).toBe('อา.');
});
