/* eslint-disable valid-jsdoc */
class ObjectUtils {

    /**
     * @desc 深拷贝，支持常见类型
     * @param {Any} values
     */
    deepClone(values) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == values || "object" != typeof values) return values;

        // Handle Date
        if (values instanceof Date) {
            copy = new Date();
            copy.setTime(values.getTime());
            return copy;
        }

        // Handle Array
        if (values instanceof Array) {
            copy = [];
            for (var i = 0, len = values.length; i < len; i++) {
                copy[i] = this.deepClone(values[i]);
            }
            return copy;
        }

        // Handle Object
        if (values instanceof Object) {
            copy = {};
            for (var attr in values) {
                if (values.hasOwnProperty(attr)) copy[attr] = this.deepClone(values[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy values! Its type isn't supported.");
    }

    /**
     * 对象浅复制
     * @param  {Obejct} obj 被复制的对象
     * @param  {Obejct} res 目标对象
     */
    shallowCopy(obj, res) {
        for (var i in obj) {
            // 判断不是原型的属性
            if (obj.hasOwnProperty(i)) {
                res[i] = obj[i];
            }
        }
    }

}

const objectUtils = new ObjectUtils();

export default objectUtils;
