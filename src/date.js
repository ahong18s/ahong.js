/**
 *
 * @description 获取当前时间
 * @param {Date} date
 * @param {String} type
 * @param {String} p1
 * @param {String} p2
 * @returns {String}
 */
export function getDateTime(date, format, char) {
  if (typeof format != 'string') return date;
  if (!date) date = new Date();
  if (!format) format = 'Y-M-D h:m:s';
  if (!char) char = '/';
  let result = format;
  const year = formatNumber(date.getFullYear());
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hour = formatNumber(date.getHours());
  const minute = formatNumber(date.getMinutes());
  const second = formatNumber(date.getSeconds());
  if (result.indexOf('Y') != -1) result = result.replace(/Y/, year);
  if (result.indexOf('-M') != -1) result = result.replace(/-M/, char + month);
  if (result.indexOf('-D') != -1) result = result.replace(/-D/, char + day);
  if (result.indexOf('h') != -1) result = result.replace(/h/, hour);
  if (result.indexOf('m') != -1) result = result.replace(/m/, minute);
  if (result.indexOf('s') != -1) result = result.replace(/s/, second);
  return result;
}

/**
 *
 * @description 日期数字补0
 * @param {String|Number} n
 * @returns {String}
 */
export function formatNumber(n) {
  n = n.toString();
  return n.length < 2 ? '0' + n : n;
}

/**
 *
 * @description 获取周数
 * @param {*} day
 * @param {*} char
 * @returns {String}
 */
export function getWeek(day, char) {
  const weekDict = ['日', '一', '二', '三', '四', '五', '六'];
  if (!char) char = '周';
  day = !day || isNaN(day) || day > 7 || day < 1 ? new Date().getDay() : parseInt(day);
  return day >= 0 ? char + weekDict[day] : '';
}

/**
 *
 * @description 获取星座
 * @param {String} birthday
 * @returns {String}
 */
export function getConstellation(birthday) {
  // const XZDate = ["1222-0120", "0121-0219", "0220-0320", "0321-0420", "0421-0521", "0522-0621", "0622-0722", "0723-0822", "0823-0922", "0923-1023", "1024-1122", "1123-1221"]; //百度百科
  // const XZDate = ["1222-0120", "0121-0219", "0220-0320", "0321-0420", "0421-0521", "0522-0621", "0622-0722", "0723-0823", "0824-0923", "0924-1023", "1024-1122", "1123-1221"]; //美索不达米亚占星术
  // const XZDate = ["1222-0120", "0121-0219", "0220-0320", "0321-0420", "0421-0521", "0522-0621", "0622-0722", "0723-0823", "0824-0923", "0924-1023", "1024-1122", "1123-1221"]; //新浪
  if (!birthday || typeof birthday != 'string' || birthday.length != 4 || birthday >= '1231' || birthday <= '0101') return '';
  const XZDate = ['1222-0120', '0121-0219', '0220-0320', '0321-0420', '0421-0521', '0522-0621', '0622-0722', '0723-0822', '0823-0922', '0923-1023', '1024-1122', '1123-1221']; //百度百科
  const XZText = ['魔羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手'];
  const act = XZDate.findIndex((item) => {
    let arr = item.split('-');
    return birthday >= arr[0] && birthday <= arr[1];
  });
  return act != -1 ? XZText[act] : '';
}

/**
 * @description 获取生肖
 * @param {String} year
 * @returns {String}
 */
export function getZodiac(year) {
  const SXDict = '鼠牛虎兔龙蛇马羊猴鸡狗猪';
  if (!year) year = new Date().getFullYear();
  return SXDict.charAt((year - 4) % 12);
}

/**
 * @description 获取天干
 * @param {String} year
 * @returns {String}
 */
export function getHeavenlyStem(year) {
  const TGDict = '甲乙丙丁戊己庚辛壬癸';
  if (!year) year = new Date().getFullYear();
  return TGDict.charAt((year - 1900 + 36) % 10);
}

/**
 * @description 获取地支
 * @param {String} year
 * @returns {String}
 */
export function getEarthlyBranch(year) {
  const DZDict = '子丑寅卯辰巳午未申酉戌亥';
  if (!year) year = new Date().getFullYear();
  return DZDict.charAt((year - 1900 + 36) % 12);
}
