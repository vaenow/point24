

//统计 + * 的个数, 便于计算迭代次数
const SYMBOL_CNT_REG = /\+|\*/g;

/**
 * 获取重复组合的信息
 */
module.exports =  function getDupInfo(validPattern) {
    let cnt = 0;
    let ret = [];

    validPattern.replace(SYMBOL_CNT_REG, (/*leftNum = "", */sym, /*rightNum = "", */idx, validPattern)=> {
        cnt++;
        ret.push({sym, idx, validPattern});
        // ret.push({leftNum, sym, rightNum, idx, validPattern});
    });

    return ret;

}