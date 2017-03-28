let getTemplates = require('../src/getTemplates');

QUnit.module("获取元素模板", {
    setup: function() {
        // 在每个测试之前运行
        coverage: true
    },
    teardown: function() {
        // 在每个测试之后运行
    }
});

QUnit.test('getTemplates', (assert, b, c)=> {
    console.log(arguments)

    assert.equal(getTemplates([6,2]).length, 1, '输入数据长度为2时,会生成1个模板')
    assert.equal(getTemplates([6,2,2]).length, 2, '输入数据长度为3时,会生成2个模板')
    assert.equal(getTemplates([6,2,2,6]).length, 5, '输入数据长度为4时,会生成5个模板')
    assert.equal(getTemplates([6,2,2,6,7]).length, 15, '输入数据长度为5时,会生成15个模板')
});