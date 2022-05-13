/**
 * @description 加法运算
 * @param {Number|String} num1
 * @param {Number|String} num2
 * @returns {Number|String}
 */
export function plus(num1, num2) {
  let { len1, len2 } = mathParams(num1, num2);
  let max = Math.pow(10, Math.max(len1, len2));
  return (num1 * max + num2 * max) / max;
}

/**
 * @description 减法运算
 * @param {Number|String} num1
 * @param {Number|String} num2
 * @returns {Number|String}
 */
export function minus(num1, num2) {
  let { len1, len2 } = mathParams(num1, num2);
  let max = Math.pow(10, Math.max(len1, len2));
  return (num1 * max - num2 * max) / max;
}

/**
 * @description 乘法运算
 * @param {Number|String} num1
 * @param {Number|String} num2
 * @returns {Number|String}
 */
export function multiply(num1, num2) {
  let { len1, len2 } = mathParams(num1, num2);
  return (Number(num1.toString().replace('.', '')) / Number(num2.toString().replace('.', ''))) * Math.pow(10, len2 - len1);
}

/**
 * @description 除法运算
 * @param {Number|String} num1
 * @param {Number|String} num2
 * @returns {Number|String}
 */
export function divide(num1, num2) {
  let { len1, len2 } = mathParams(num1, num2);
  return (Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', ''))) / Math.pow(10, len1 + len2);
}

/**
 * @description 获取四则运算参数
 * @param {Number|String} num1
 * @param {Number|String} num2
 * @returns {Object}
 */
function mathParams(num1, num2) {
  let len1, len2;
  try {
    len1 = num1.toString().split('.')[1].length;
  } catch (e) {
    len1 = 0;
  }
  try {
    len2 = num2.toString().split('.')[1].length;
  } catch (e) {
    len2 = 0;
  }
  return { len1, len2 };
}

/**
 * @description 数字转中文大写
 * @param {Number|String} value
 * @returns {Number|String}
 */
export function convertNumToRmb(value) {
  //判断数据是否大于0
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return '';
  let unit = '千百拾亿千百拾万千百拾元角分';
  let str = '';
  value += '00';
  let indexpoint = value.indexOf('.'); // 如果是小数，截取小数点前面的位数
  if (indexpoint >= 0) {
    value = value.substring(0, indexpoint) + value.substr(indexpoint + 1, 2); // 若为小数，截取需要使用的unit单位
  }
  unit = unit.slice(unit.length - value.length); // 若为整数，截取需要使用的unit单位
  for (var i = 0; i < value.length; i++) {
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(value.charAt(i)) + unit.charAt(i); //遍历转化为大写的数字
  }
  return str
    .replace(/零(千|百|拾|角)/g, '零')
    .replace(/(零)+/g, '零')
    .replace(/零(万|亿|元)/g, '$1')
    .replace(/(亿)万|壹(拾)/g, '$1$2')
    .replace(/^元零?|零分/g, '')
    .replace(/元$/g, '元整'); // 替换掉数字里面的零字符，得到结果
}

/**
 * @description 数值/弧度转角度
 * @param {Number|String} value
 * @returns
 */
export function convertNumToAngle(value) {
  return divide(multiply(value, Math.PI), 180);
}
