export default function dowParser(dow: number, abbv = false) {
  const dowStr = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'];
  const dowStrAbbv = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
  return abbv ? dowStrAbbv[dow] : dowStr[dow];
}
