let getDupInfo = require('../src/getDupInfo');
let getAllPatternConditions = require('../src/getAllPatternConditions');
let cleanDupConditions = require('../src/cleanDupConditions');

QUnit.module("过滤重复的模式", {
    setup: function() {
        // 在每个测试之前运行
    }
});

QUnit.test('getDupInfo', (assert, b, c)=> {
    let validPattern = `((2+6)/2)*6`;
    let dupInfo = JSON.parse(`[{"sym":"+","idx":3,"validPattern":"((2+6)/2)*6"},{"sym":"*","idx":9,"validPattern":"((2+6)/2)*6"}]`)

    assert.deepEqual(getDupInfo(validPattern), dupInfo,
        '获取重复模式的信息 getDupInfo ((2+6)/2)*6')


});

QUnit.test('getAllPatternConditions', assert=> {
    let dupInfo = JSON.parse(`[{"sym":"+","idx":3,"validPattern":"((2+6)/2)*6"},{"sym":"*","idx":9,"validPattern":"((2+6)/2)*6"}]`)
    let allPatternConditions = JSON.parse(`["6*((2+6)/2)","((6+2)/2)*6","6*((6+2)/2)"]`)

    assert.deepEqual(getAllPatternConditions(dupInfo), allPatternConditions,
        `获取某个模式下所有的组合情况 getAllPatternConditions ((2+6)/2)*6`)
});


QUnit.test('cleanDupConditions', assert=> {
    let validPatternsArr = JSON.parse(`["((2+6)/2)*6","(2*6)+(2*6)","(2+6)/(2/6)","((6+2)/2)*6","(6/2)*(2+6)","(6*2)+(2*6)","(6+2)/(2/6)","6/(2/(2+6))","((2+6)*6)/2","(2*6)+(6*2)","(2+6)*(6/2)","((6+2)*6)/2","(6*(2+6))/2","(6/2)*(6+2)","(6*2)+(6*2)","(6+2)*(6/2)","6*((2+6)/2)","6/(2/(6+2))","(6*(6+2))/2","6*((6+2)/2)"]`)
    let allPatternConditions = JSON.parse(`["6*((2+6)/2)","((6+2)/2)*6","6*((6+2)/2)"]`)
    let validPatternsArrRet = JSON.parse(`["((2+6)/2)*6","(2*6)+(2*6)","(2+6)/(2/6)","(6/2)*(2+6)","(6*2)+(2*6)","(6+2)/(2/6)","6/(2/(2+6))","((2+6)*6)/2","(2*6)+(6*2)","(2+6)*(6/2)","((6+2)*6)/2","(6*(2+6))/2","(6/2)*(6+2)","(6*2)+(6*2)","(6+2)*(6/2)","6/(2/(6+2))","(6*(6+2))/2"]`)

    assert.deepEqual(cleanDupConditions(allPatternConditions, validPatternsArr), validPatternsArrRet,
        `清理重复的组合模式 cleanDupConditions ((2+6)/2)*6`)
});

