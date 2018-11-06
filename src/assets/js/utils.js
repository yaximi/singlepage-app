/**
 * 判断平台是Android还是IOS
 * @returns {*}
 * @constructor
 */
const Equ = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid) {
    return 'Android';
  } else if (isIOS) {
    return 'IOS';
  }
  return '';
};

/**
 * 获取app版本信息
 */
const getVersion = () => {
  let u = navigator.userAgent;
  let v = u.substr(u.indexOf('GTJA JH/'));
  return v.substr(v.indexOf('/') + 1);
};

export {
  Equ,
  getVersion
}