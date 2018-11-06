import 'lib-flexible'
import './assets/less/common.less'
import './assets/less/index.less'
import { Equ, getVersion } from './assets/js/utils.js'

window.onload = () => {
  let url = 'gtjayyz://jumpfunc?funid=10006&moduleid=11&linkurl=https://apicdn.app.gtja.com/baishitong/ZXDB/201809/8102/JSON/3862BF6C-AC2C-43A9-A717-7F84BB672714.json'
  if (getVersion() < '8.19.0' && Equ() === 'IOS') {
    url = 'gtjayyz://jumpfunc?funid=30001&type=4&linkurl=https://dl.app.gtja.com/news/xiaojunFM/2018/07/06/200000000000007435.json'
  }
  window.location.replace(url)
}
