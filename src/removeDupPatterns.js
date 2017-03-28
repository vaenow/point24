let utils = require('./utils');
let getDupInfo = require('./getDupInfo');
let getAllPatternConditions = require('./getAllPatternConditions');
let cleanDupConditions = require('./cleanDupConditions');

/**

 同意义模式,去重

 // ((a+b)+c)*d   a+(b*(c+d))  (a+b)*(c+d)

 // 101 -> (b*(c+d))+a, c+d -> d+c

 */
module.exports = (validPatterns) => {

    let validPatternsArr = Object.keys(validPatterns);

    validPatternsArr.forEach((validPattern, idx)=> {
        let dupInfo = getDupInfo(validPattern);
        let allPatternConditions = getAllPatternConditions(dupInfo);
        cleanDupConditions(allPatternConditions, validPatternsArr);
        // console.log('allPatternConditions', validPattern, allPatternConditions)
        console.log('allPatternConditions:', validPatternsArr.length, 'eta:', validPatternsArr.length - idx)
    });

    return validPatternsArr;
};


