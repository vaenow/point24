/**
 * 清理重复的组合模式
 * @param conditions
 * @param validPatternsArr
 * @returns {*}
 */

module.exports = function cleanDupConditions(conditions, validPatternsArr) {
    conditions.forEach(tempSwapCase => {
        for (let i = validPatternsArr.length - 1; i >= 0; i--) {
            if (tempSwapCase === validPatternsArr[i]) {
                validPatternsArr.splice(i, 1); //同时删除重复的元素
            }
        }
    });
    return validPatternsArr;
};