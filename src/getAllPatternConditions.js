
let utils = require('./utils')

/**
 * 获取某个模式下所有的组合情况
 * @param dupInfo
 * @returns {Array}
 */
module.exports = function getAllPatternConditions(dupInfo) {
    let conditions = {};

    if (!dupInfo.length) return Object.keys(conditions);

    let validPattern = dupInfo[0].validPattern;

    let conditionsLen = Math.pow(2, dupInfo.length) - 1;

    let tempReplaceValidPatterns = [];
    for (let i = 0; i < conditionsLen; i++) {
        // let swapCase = (i + 1).toString(2);  // 000, 001, 101, 111 ...
        let swapCase = utils.paddingZero(i + 1, 2, dupInfo.length)  // 000, 001, 101, 111 ...

        //从左至右扫描
        let tempSwapCase = [];
        for (let j = 0; j < swapCase.length; j++) {
            if (swapCase[j] == 1) {
                let leftRightPads = swapLeftRightPads(dupInfo[j]);
                // 中间加号交换没有意义 "6/((5+5)-6)"
                // if(leftRightPads.from !== leftRightPads.to) {
                tempSwapCase.push(leftRightPads);
                // }
            }
        }
        tempReplaceValidPatterns.push(tempSwapCase);

        //从右至左扫描
        tempSwapCase = [];
        for (let j = swapCase.length - 1; j >= 0; j--) {
            if (swapCase[j] == 1) {
                let leftRightPads = swapLeftRightPads(dupInfo[swapCase.length - j - 1]);
                // 中间加号交换没有意义 "6/((5+5)-6)"
                // if(leftRightPads.from !== leftRightPads.to) {
                tempSwapCase.push(leftRightPads);
                // }
            }
        }
        tempReplaceValidPatterns.push(tempSwapCase)
    }

    tempReplaceValidPatterns.forEach((tempSwapCase)=> {
        //顺序替换
        let swappedValidPattern = validPattern;
        tempSwapCase.forEach(({from, to}, idx)=> {
            // 中间加号交换没有意义 "6/((5+5)-6)"
            if(from === to && from.match(/^[0-9]$/)) {
                return;
            }

            for (let i = 0; i < idx; i++) {
                from = from.replace(tempSwapCase[i].from, tempSwapCase[i].to);
                to = to.replace(tempSwapCase[i].from, tempSwapCase[i].to);
            }
            swappedValidPattern = swappedValidPattern.replace(from, to)
        });

        if(swappedValidPattern !== validPattern) {
            conditions[swappedValidPattern] = 1;
        }
    });

    return Object.keys(conditions);
};

/**
 * 交换符号左右两边
 * @param sym
 * @param idx
 * @param validPattern
 * @returns {XML|string|void|*}
 */
function swapLeftRightPads({sym, idx, validPattern}) {
    let leftPad, rightPad, left, right;

    leftPad = isNaN(validPattern[idx - 1])
        ? utils.findSymbolMatch(validPattern, idx - 1, {reverse: true}) //非零为括号
        : getFullNumber(validPattern, idx - 1, true);
    rightPad = isNaN(validPattern[idx + 1])
        ? utils.findSymbolMatch(validPattern, idx + 1, {reverse: false}) //非零为括号
        : getFullNumber(validPattern, idx + 1, false);

    // 预防 (6+2)*(6+2)
    left = validPattern.slice(0, idx - leftPad.length);
    right = validPattern.slice(idx + 2, validPattern.length);

    //交换情况
    return {
        from: leftPad + sym + rightPad,
        to: rightPad + sym + leftPad,
        left,
        right
    }
}

/**
 * 获取数字的总长
 * @param str
 * @param idx
 * @param reverse
 * @returns {string}
 */
function getFullNumber(str, idx, reverse) {
    let fullNum = "";
    while (!isNaN(str[idx])) {
        fullNum += str[idx];
        idx = idx + reverse ? -1 : 1;
    }

    return reverse ? utils.reverseStr(fullNum) : fullNum;
}