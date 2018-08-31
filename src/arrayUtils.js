/* eslint-disable valid-jsdoc */
class ArrayUtils {

    /**
     *
     * @desc 判断两个数组是否相等
     * @param {array} arr1 数组1
     * @param {array} arr2 数组2
     * @return {boolean} 是否相等
     */
    equals(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

}

const arrayUtils = new ArrayUtils();

export default arrayUtils;
