let shuffledCandidates = require('../src/shuffledCandidates');

QUnit.module("所有可能的元素组合", {
    setup: function() {
        // 在每个测试之前运行
    }
});

QUnit.test('shuffledCandidates', (assert, b, c)=> {

    let candidates1 = [6, 4];
    let shuffledCandidates1 = JSON.parse(`[["6","4"],["4","6"]]`)
    assert.deepEqual(shuffledCandidates(candidates1), shuffledCandidates1,
        '所有可能的元素组合 shuffledCandidates([6, 4]), [["6","4"],["4","6"]]')

    let candidates2 = [6, 6, 2];
    let shuffledCandidates2 = JSON.parse(`[["6","6","2"],["6","2","6"],["6","6","2"],["6","2","6"],["2","6","6"],["2","6","6"]]`)
    assert.deepEqual(shuffledCandidates(candidates2), shuffledCandidates2,
        '所有可能的元素组合 shuffledCandidates([6, 6, 2]), [["6","6","2"],["6","2","6"],["6","6","2"],["6","2","6"],["2","6","6"],["2","6","6"]]')

    let shuffledCandidates4 = JSON.parse(`[["6","6","2","2"],["6","6","2","2"],["6","2","6","2"],["6","2","2","6"],["6","2","6","2"],["6","2","2","6"],["6","6","2","2"],["6","6","2","2"],["6","2","6","2"],["6","2","2","6"],["6","2","6","2"],["6","2","2","6"],["2","6","6","2"],["2","6","2","6"],["2","6","6","2"],["2","6","2","6"],["2","2","6","6"],["2","2","6","6"],["2","6","6","2"],["2","6","2","6"],["2","6","6","2"],["2","6","2","6"],["2","2","6","6"],["2","2","6","6"]]`)
    let candidates4 = JSON.parse("[6,6,2,2]");
    assert.deepEqual(shuffledCandidates(candidates4), shuffledCandidates4,
        `所有可能的元素组合 shuffledCandidates([6,6,2,2])`)

});