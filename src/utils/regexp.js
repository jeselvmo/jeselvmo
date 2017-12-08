/**
 * 正则表达式的几种用法
 */
const regexp = {

    /**
     * 匹配测试
     *
     * @param {string} str 文本
     * @param {RegExp} reg 正则表达式
     * @returns {boolean} 匹配结果
     */
    test(str, reg) {
        return reg.test(str)
    },

    /**
     * 文本替换
     *
     * @param {string} str 文本
     * @param {RegExp} reg 正则表达式
     * @param {string} rep 替换文本
     * @returns {string} 替换后文本
     */
    replace(str, reg, rep) {
        return str.replace(reg, rep)
    },

    /**
     * 文本分隔
     *
     * @param {string} str 文本
     * @param {RegExp} reg 正则表达式
     * @returns {*|Array} 数组结果
     */
    split(str, reg) {
        return str.split(reg)
    },

    /**
     * 查找位置
     *
     * @param {string} str 文本
     * @param {RegExp} reg 正则表达式
     * @returns {number} 索引位置
     */
    search(str, reg) {
        return str.search(reg)
    },

    /**
     * 匹配查找
     *
     * @param {string} str 文本
     * @param {RegExp} reg 正则表达式
     * @returns {*|Array|{index: number, input: string}} 匹配结果
     */
    match(str, reg) {
        return str.match(reg)
    },


    /**
     * 匹配查找
     *
     * @param str
     * @param reg
     * @returns {Array}
     */
    exec(str, reg) {
        let array = [], result;
        while ((result = reg.exec(str)) != null) {
            array.push(result);
        }
        return array
    }

};

export default regexp
