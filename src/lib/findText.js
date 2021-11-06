/**
 * 正则文本查找。
 * @param {string} content 文本内容
 * @param {RegExp} reg 匹配的正则表达式
 * @returns {Array} 查找到的结果
 *
 * @example
 *
 * const content = '11月5日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例55例。其中境外输入病例15例（上海3例，福建3例，广东3例，四川2例，云南2例，天津1例，陕西1例），含3例由无症状感染者转为确诊病例（四川2例，天津1例）；本土病例40例（黑龙江16例，均在黑河市；河北9例，其中辛集市8例，石家庄市1例；辽宁3例，均在大连市；河南3例，均在郑州市；四川3例，均在成都市；云南2例，均在德宏傣族景颇族自治州；甘肃2例，均在兰州市；内蒙古1例，在阿拉善盟；江西1例，在上饶市），含3例由无症状感染者转为确诊病例（均在河南）。无新增死亡病例。无新增疑似病例。';
 * const reg = /([\u4E00-\u9FA5]{2,4})(\d+)例/g;
 * jeselvmo.findText(content, reg);
 * //=> [...]
 *
 */
function findText(content, reg) {
  let result = [];

  let arr;
  while ((arr = reg.exec(content))) {
    result.push(arr);
  }

  return result;
}

export default findText;
