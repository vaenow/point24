let getValidPatterns = require('../src/getValidPatterns');
let parseMathSymbols = require('../src/parseMathSymbols');
let parseNumbers = require('../src/parseNumbers');

QUnit.module("获取满足规则的模式", {
    setup: function() {
        // 在每个测试之前运行
    }
});

QUnit.test('getValidPatterns', (assert, b, c)=> {
    console.log(arguments)

    let shuffledCandidates = JSON.parse(`[["6","6","2","2"],["6","6","2","2"],["6","2","6","2"],["6","2","2","6"],["6","2","6","2"],["6","2","2","6"],["6","6","2","2"],["6","6","2","2"],["6","2","6","2"],["6","2","2","6"],["6","2","6","2"],["6","2","2","6"],["2","6","6","2"],["2","6","2","6"],["2","6","6","2"],["2","6","2","6"],["2","2","6","6"],["2","2","6","6"],["2","6","6","2"],["2","6","2","6"],["2","6","6","2"],["2","6","2","6"],["2","2","6","6"],["2","2","6","6"]]`)
    let candidates = [6, 6, 2, 2];
    let ret = 24;
    let validPattern = JSON.parse(`{"((2+6)/2)*6":0,"(2*6)+(2*6)":0,"(2+6)/(2/6)":0,"((6+2)/2)*6":0,"(6/2)*(2+6)":0,"(6*2)+(2*6)":0,"(6+2)/(2/6)":0,"6/(2/(2+6))":0,"((2+6)*6)/2":0,"(2*6)+(6*2)":0,"(2+6)*(6/2)":0,"((6+2)*6)/2":0,"(6*(2+6))/2":0,"(6/2)*(6+2)":0,"(6*2)+(6*2)":0,"(6+2)*(6/2)":0,"6*((2+6)/2)":0,"6/(2/(6+2))":0,"(6*(6+2))/2":0,"6*((6+2)/2)":0}`)

    assert.deepEqual(getValidPatterns(shuffledCandidates, candidates, ret), validPattern,
        'getValidPatterns [6, 6, 2, 2]')
});

QUnit.test('parseMathSymbols', assert=> {
    let candidates = ["6","6","2","2"];
    let templSymbolParsed = JSON.parse(`["((a+b)+c)+d","((a-b)+c)+d","((a*b)+c)+d","((a/b)+c)+d","((a+b)-c)+d","((a-b)-c)+d","((a*b)-c)+d","((a/b)-c)+d","((a+b)*c)+d","((a-b)*c)+d","((a*b)*c)+d","((a/b)*c)+d","((a+b)/c)+d","((a-b)/c)+d","((a*b)/c)+d","((a/b)/c)+d","((a+b)+c)-d","((a-b)+c)-d","((a*b)+c)-d","((a/b)+c)-d","((a+b)-c)-d","((a-b)-c)-d","((a*b)-c)-d","((a/b)-c)-d","((a+b)*c)-d","((a-b)*c)-d","((a*b)*c)-d","((a/b)*c)-d","((a+b)/c)-d","((a-b)/c)-d","((a*b)/c)-d","((a/b)/c)-d","((a+b)+c)*d","((a-b)+c)*d","((a*b)+c)*d","((a/b)+c)*d","((a+b)-c)*d","((a-b)-c)*d","((a*b)-c)*d","((a/b)-c)*d","((a+b)*c)*d","((a-b)*c)*d","((a*b)*c)*d","((a/b)*c)*d","((a+b)/c)*d","((a-b)/c)*d","((a*b)/c)*d","((a/b)/c)*d","((a+b)+c)/d","((a-b)+c)/d","((a*b)+c)/d","((a/b)+c)/d","((a+b)-c)/d","((a-b)-c)/d","((a*b)-c)/d","((a/b)-c)/d","((a+b)*c)/d","((a-b)*c)/d","((a*b)*c)/d","((a/b)*c)/d","((a+b)/c)/d","((a-b)/c)/d","((a*b)/c)/d","((a/b)/c)/d","(a+(b+c))+d","(a-(b+c))+d","(a*(b+c))+d","(a/(b+c))+d","(a+(b-c))+d","(a-(b-c))+d","(a*(b-c))+d","(a/(b-c))+d","(a+(b*c))+d","(a-(b*c))+d","(a*(b*c))+d","(a/(b*c))+d","(a+(b/c))+d","(a-(b/c))+d","(a*(b/c))+d","(a/(b/c))+d","(a+(b+c))-d","(a-(b+c))-d","(a*(b+c))-d","(a/(b+c))-d","(a+(b-c))-d","(a-(b-c))-d","(a*(b-c))-d","(a/(b-c))-d","(a+(b*c))-d","(a-(b*c))-d","(a*(b*c))-d","(a/(b*c))-d","(a+(b/c))-d","(a-(b/c))-d","(a*(b/c))-d","(a/(b/c))-d","(a+(b+c))*d","(a-(b+c))*d","(a*(b+c))*d","(a/(b+c))*d","(a+(b-c))*d","(a-(b-c))*d","(a*(b-c))*d","(a/(b-c))*d","(a+(b*c))*d","(a-(b*c))*d","(a*(b*c))*d","(a/(b*c))*d","(a+(b/c))*d","(a-(b/c))*d","(a*(b/c))*d","(a/(b/c))*d","(a+(b+c))/d","(a-(b+c))/d","(a*(b+c))/d","(a/(b+c))/d","(a+(b-c))/d","(a-(b-c))/d","(a*(b-c))/d","(a/(b-c))/d","(a+(b*c))/d","(a-(b*c))/d","(a*(b*c))/d","(a/(b*c))/d","(a+(b/c))/d","(a-(b/c))/d","(a*(b/c))/d","(a/(b/c))/d","(a+b)+(c+d)","(a-b)+(c+d)","(a*b)+(c+d)","(a/b)+(c+d)","(a+b)-(c+d)","(a-b)-(c+d)","(a*b)-(c+d)","(a/b)-(c+d)","(a+b)*(c+d)","(a-b)*(c+d)","(a*b)*(c+d)","(a/b)*(c+d)","(a+b)/(c+d)","(a-b)/(c+d)","(a*b)/(c+d)","(a/b)/(c+d)","(a+b)+(c-d)","(a-b)+(c-d)","(a*b)+(c-d)","(a/b)+(c-d)","(a+b)-(c-d)","(a-b)-(c-d)","(a*b)-(c-d)","(a/b)-(c-d)","(a+b)*(c-d)","(a-b)*(c-d)","(a*b)*(c-d)","(a/b)*(c-d)","(a+b)/(c-d)","(a-b)/(c-d)","(a*b)/(c-d)","(a/b)/(c-d)","(a+b)+(c*d)","(a-b)+(c*d)","(a*b)+(c*d)","(a/b)+(c*d)","(a+b)-(c*d)","(a-b)-(c*d)","(a*b)-(c*d)","(a/b)-(c*d)","(a+b)*(c*d)","(a-b)*(c*d)","(a*b)*(c*d)","(a/b)*(c*d)","(a+b)/(c*d)","(a-b)/(c*d)","(a*b)/(c*d)","(a/b)/(c*d)","(a+b)+(c/d)","(a-b)+(c/d)","(a*b)+(c/d)","(a/b)+(c/d)","(a+b)-(c/d)","(a-b)-(c/d)","(a*b)-(c/d)","(a/b)-(c/d)","(a+b)*(c/d)","(a-b)*(c/d)","(a*b)*(c/d)","(a/b)*(c/d)","(a+b)/(c/d)","(a-b)/(c/d)","(a*b)/(c/d)","(a/b)/(c/d)","a+((b+c)+d)","a-((b+c)+d)","a*((b+c)+d)","a/((b+c)+d)","a+((b-c)+d)","a-((b-c)+d)","a*((b-c)+d)","a/((b-c)+d)","a+((b*c)+d)","a-((b*c)+d)","a*((b*c)+d)","a/((b*c)+d)","a+((b/c)+d)","a-((b/c)+d)","a*((b/c)+d)","a/((b/c)+d)","a+((b+c)-d)","a-((b+c)-d)","a*((b+c)-d)","a/((b+c)-d)","a+((b-c)-d)","a-((b-c)-d)","a*((b-c)-d)","a/((b-c)-d)","a+((b*c)-d)","a-((b*c)-d)","a*((b*c)-d)","a/((b*c)-d)","a+((b/c)-d)","a-((b/c)-d)","a*((b/c)-d)","a/((b/c)-d)","a+((b+c)*d)","a-((b+c)*d)","a*((b+c)*d)","a/((b+c)*d)","a+((b-c)*d)","a-((b-c)*d)","a*((b-c)*d)","a/((b-c)*d)","a+((b*c)*d)","a-((b*c)*d)","a*((b*c)*d)","a/((b*c)*d)","a+((b/c)*d)","a-((b/c)*d)","a*((b/c)*d)","a/((b/c)*d)","a+((b+c)/d)","a-((b+c)/d)","a*((b+c)/d)","a/((b+c)/d)","a+((b-c)/d)","a-((b-c)/d)","a*((b-c)/d)","a/((b-c)/d)","a+((b*c)/d)","a-((b*c)/d)","a*((b*c)/d)","a/((b*c)/d)","a+((b/c)/d)","a-((b/c)/d)","a*((b/c)/d)","a/((b/c)/d)","a+(b+(c+d))","a-(b+(c+d))","a*(b+(c+d))","a/(b+(c+d))","a+(b-(c+d))","a-(b-(c+d))","a*(b-(c+d))","a/(b-(c+d))","a+(b*(c+d))","a-(b*(c+d))","a*(b*(c+d))","a/(b*(c+d))","a+(b/(c+d))","a-(b/(c+d))","a*(b/(c+d))","a/(b/(c+d))","a+(b+(c-d))","a-(b+(c-d))","a*(b+(c-d))","a/(b+(c-d))","a+(b-(c-d))","a-(b-(c-d))","a*(b-(c-d))","a/(b-(c-d))","a+(b*(c-d))","a-(b*(c-d))","a*(b*(c-d))","a/(b*(c-d))","a+(b/(c-d))","a-(b/(c-d))","a*(b/(c-d))","a/(b/(c-d))","a+(b+(c*d))","a-(b+(c*d))","a*(b+(c*d))","a/(b+(c*d))","a+(b-(c*d))","a-(b-(c*d))","a*(b-(c*d))","a/(b-(c*d))","a+(b*(c*d))","a-(b*(c*d))","a*(b*(c*d))","a/(b*(c*d))","a+(b/(c*d))","a-(b/(c*d))","a*(b/(c*d))","a/(b/(c*d))","a+(b+(c/d))","a-(b+(c/d))","a*(b+(c/d))","a/(b+(c/d))","a+(b-(c/d))","a-(b-(c/d))","a*(b-(c/d))","a/(b-(c/d))","a+(b*(c/d))","a-(b*(c/d))","a*(b*(c/d))","a/(b*(c/d))","a+(b/(c/d))","a-(b/(c/d))","a*(b/(c/d))","a/(b/(c/d))"]`)

    assert.deepEqual(parseMathSymbols(candidates), templSymbolParsed, `转化数学符号 ["6","6","2","2"]`)
});


QUnit.test('parseNumbers', assert=> {
    let candidates = ["6","6","2","2"];
    let templSymbolParsed = JSON.parse(`["((a+b)+c)+d","((a-b)+c)+d","((a*b)+c)+d","((a/b)+c)+d","((a+b)-c)+d","((a-b)-c)+d","((a*b)-c)+d","((a/b)-c)+d","((a+b)*c)+d","((a-b)*c)+d","((a*b)*c)+d","((a/b)*c)+d","((a+b)/c)+d","((a-b)/c)+d","((a*b)/c)+d","((a/b)/c)+d","((a+b)+c)-d","((a-b)+c)-d","((a*b)+c)-d","((a/b)+c)-d","((a+b)-c)-d","((a-b)-c)-d","((a*b)-c)-d","((a/b)-c)-d","((a+b)*c)-d","((a-b)*c)-d","((a*b)*c)-d","((a/b)*c)-d","((a+b)/c)-d","((a-b)/c)-d","((a*b)/c)-d","((a/b)/c)-d","((a+b)+c)*d","((a-b)+c)*d","((a*b)+c)*d","((a/b)+c)*d","((a+b)-c)*d","((a-b)-c)*d","((a*b)-c)*d","((a/b)-c)*d","((a+b)*c)*d","((a-b)*c)*d","((a*b)*c)*d","((a/b)*c)*d","((a+b)/c)*d","((a-b)/c)*d","((a*b)/c)*d","((a/b)/c)*d","((a+b)+c)/d","((a-b)+c)/d","((a*b)+c)/d","((a/b)+c)/d","((a+b)-c)/d","((a-b)-c)/d","((a*b)-c)/d","((a/b)-c)/d","((a+b)*c)/d","((a-b)*c)/d","((a*b)*c)/d","((a/b)*c)/d","((a+b)/c)/d","((a-b)/c)/d","((a*b)/c)/d","((a/b)/c)/d","(a+(b+c))+d","(a-(b+c))+d","(a*(b+c))+d","(a/(b+c))+d","(a+(b-c))+d","(a-(b-c))+d","(a*(b-c))+d","(a/(b-c))+d","(a+(b*c))+d","(a-(b*c))+d","(a*(b*c))+d","(a/(b*c))+d","(a+(b/c))+d","(a-(b/c))+d","(a*(b/c))+d","(a/(b/c))+d","(a+(b+c))-d","(a-(b+c))-d","(a*(b+c))-d","(a/(b+c))-d","(a+(b-c))-d","(a-(b-c))-d","(a*(b-c))-d","(a/(b-c))-d","(a+(b*c))-d","(a-(b*c))-d","(a*(b*c))-d","(a/(b*c))-d","(a+(b/c))-d","(a-(b/c))-d","(a*(b/c))-d","(a/(b/c))-d","(a+(b+c))*d","(a-(b+c))*d","(a*(b+c))*d","(a/(b+c))*d","(a+(b-c))*d","(a-(b-c))*d","(a*(b-c))*d","(a/(b-c))*d","(a+(b*c))*d","(a-(b*c))*d","(a*(b*c))*d","(a/(b*c))*d","(a+(b/c))*d","(a-(b/c))*d","(a*(b/c))*d","(a/(b/c))*d","(a+(b+c))/d","(a-(b+c))/d","(a*(b+c))/d","(a/(b+c))/d","(a+(b-c))/d","(a-(b-c))/d","(a*(b-c))/d","(a/(b-c))/d","(a+(b*c))/d","(a-(b*c))/d","(a*(b*c))/d","(a/(b*c))/d","(a+(b/c))/d","(a-(b/c))/d","(a*(b/c))/d","(a/(b/c))/d","(a+b)+(c+d)","(a-b)+(c+d)","(a*b)+(c+d)","(a/b)+(c+d)","(a+b)-(c+d)","(a-b)-(c+d)","(a*b)-(c+d)","(a/b)-(c+d)","(a+b)*(c+d)","(a-b)*(c+d)","(a*b)*(c+d)","(a/b)*(c+d)","(a+b)/(c+d)","(a-b)/(c+d)","(a*b)/(c+d)","(a/b)/(c+d)","(a+b)+(c-d)","(a-b)+(c-d)","(a*b)+(c-d)","(a/b)+(c-d)","(a+b)-(c-d)","(a-b)-(c-d)","(a*b)-(c-d)","(a/b)-(c-d)","(a+b)*(c-d)","(a-b)*(c-d)","(a*b)*(c-d)","(a/b)*(c-d)","(a+b)/(c-d)","(a-b)/(c-d)","(a*b)/(c-d)","(a/b)/(c-d)","(a+b)+(c*d)","(a-b)+(c*d)","(a*b)+(c*d)","(a/b)+(c*d)","(a+b)-(c*d)","(a-b)-(c*d)","(a*b)-(c*d)","(a/b)-(c*d)","(a+b)*(c*d)","(a-b)*(c*d)","(a*b)*(c*d)","(a/b)*(c*d)","(a+b)/(c*d)","(a-b)/(c*d)","(a*b)/(c*d)","(a/b)/(c*d)","(a+b)+(c/d)","(a-b)+(c/d)","(a*b)+(c/d)","(a/b)+(c/d)","(a+b)-(c/d)","(a-b)-(c/d)","(a*b)-(c/d)","(a/b)-(c/d)","(a+b)*(c/d)","(a-b)*(c/d)","(a*b)*(c/d)","(a/b)*(c/d)","(a+b)/(c/d)","(a-b)/(c/d)","(a*b)/(c/d)","(a/b)/(c/d)","a+((b+c)+d)","a-((b+c)+d)","a*((b+c)+d)","a/((b+c)+d)","a+((b-c)+d)","a-((b-c)+d)","a*((b-c)+d)","a/((b-c)+d)","a+((b*c)+d)","a-((b*c)+d)","a*((b*c)+d)","a/((b*c)+d)","a+((b/c)+d)","a-((b/c)+d)","a*((b/c)+d)","a/((b/c)+d)","a+((b+c)-d)","a-((b+c)-d)","a*((b+c)-d)","a/((b+c)-d)","a+((b-c)-d)","a-((b-c)-d)","a*((b-c)-d)","a/((b-c)-d)","a+((b*c)-d)","a-((b*c)-d)","a*((b*c)-d)","a/((b*c)-d)","a+((b/c)-d)","a-((b/c)-d)","a*((b/c)-d)","a/((b/c)-d)","a+((b+c)*d)","a-((b+c)*d)","a*((b+c)*d)","a/((b+c)*d)","a+((b-c)*d)","a-((b-c)*d)","a*((b-c)*d)","a/((b-c)*d)","a+((b*c)*d)","a-((b*c)*d)","a*((b*c)*d)","a/((b*c)*d)","a+((b/c)*d)","a-((b/c)*d)","a*((b/c)*d)","a/((b/c)*d)","a+((b+c)/d)","a-((b+c)/d)","a*((b+c)/d)","a/((b+c)/d)","a+((b-c)/d)","a-((b-c)/d)","a*((b-c)/d)","a/((b-c)/d)","a+((b*c)/d)","a-((b*c)/d)","a*((b*c)/d)","a/((b*c)/d)","a+((b/c)/d)","a-((b/c)/d)","a*((b/c)/d)","a/((b/c)/d)","a+(b+(c+d))","a-(b+(c+d))","a*(b+(c+d))","a/(b+(c+d))","a+(b-(c+d))","a-(b-(c+d))","a*(b-(c+d))","a/(b-(c+d))","a+(b*(c+d))","a-(b*(c+d))","a*(b*(c+d))","a/(b*(c+d))","a+(b/(c+d))","a-(b/(c+d))","a*(b/(c+d))","a/(b/(c+d))","a+(b+(c-d))","a-(b+(c-d))","a*(b+(c-d))","a/(b+(c-d))","a+(b-(c-d))","a-(b-(c-d))","a*(b-(c-d))","a/(b-(c-d))","a+(b*(c-d))","a-(b*(c-d))","a*(b*(c-d))","a/(b*(c-d))","a+(b/(c-d))","a-(b/(c-d))","a*(b/(c-d))","a/(b/(c-d))","a+(b+(c*d))","a-(b+(c*d))","a*(b+(c*d))","a/(b+(c*d))","a+(b-(c*d))","a-(b-(c*d))","a*(b-(c*d))","a/(b-(c*d))","a+(b*(c*d))","a-(b*(c*d))","a*(b*(c*d))","a/(b*(c*d))","a+(b/(c*d))","a-(b/(c*d))","a*(b/(c*d))","a/(b/(c*d))","a+(b+(c/d))","a-(b+(c/d))","a*(b+(c/d))","a/(b+(c/d))","a+(b-(c/d))","a-(b-(c/d))","a*(b-(c/d))","a/(b-(c/d))","a+(b*(c/d))","a-(b*(c/d))","a*(b*(c/d))","a/(b*(c/d))","a+(b/(c/d))","a-(b/(c/d))","a*(b/(c/d))","a/(b/(c/d))"]`)
    let templNumParsed = JSON.parse(`["((2+2)+6)+6","((2-2)+6)+6","((2*2)+6)+6","((2/2)+6)+6","((2+2)-6)+6","((2-2)-6)+6","((2*2)-6)+6","((2/2)-6)+6","((2+2)*6)+6","((2-2)*6)+6","((2*2)*6)+6","((2/2)*6)+6","((2+2)/6)+6","((2-2)/6)+6","((2*2)/6)+6","((2/2)/6)+6","((2+2)+6)-6","((2-2)+6)-6","((2*2)+6)-6","((2/2)+6)-6","((2+2)-6)-6","((2-2)-6)-6","((2*2)-6)-6","((2/2)-6)-6","((2+2)*6)-6","((2-2)*6)-6","((2*2)*6)-6","((2/2)*6)-6","((2+2)/6)-6","((2-2)/6)-6","((2*2)/6)-6","((2/2)/6)-6","((2+2)+6)*6","((2-2)+6)*6","((2*2)+6)*6","((2/2)+6)*6","((2+2)-6)*6","((2-2)-6)*6","((2*2)-6)*6","((2/2)-6)*6","((2+2)*6)*6","((2-2)*6)*6","((2*2)*6)*6","((2/2)*6)*6","((2+2)/6)*6","((2-2)/6)*6","((2*2)/6)*6","((2/2)/6)*6","((2+2)+6)/6","((2-2)+6)/6","((2*2)+6)/6","((2/2)+6)/6","((2+2)-6)/6","((2-2)-6)/6","((2*2)-6)/6","((2/2)-6)/6","((2+2)*6)/6","((2-2)*6)/6","((2*2)*6)/6","((2/2)*6)/6","((2+2)/6)/6","((2-2)/6)/6","((2*2)/6)/6","((2/2)/6)/6","(2+(2+6))+6","(2-(2+6))+6","(2*(2+6))+6","(2/(2+6))+6","(2+(2-6))+6","(2-(2-6))+6","(2*(2-6))+6","(2/(2-6))+6","(2+(2*6))+6","(2-(2*6))+6","(2*(2*6))+6","(2/(2*6))+6","(2+(2/6))+6","(2-(2/6))+6","(2*(2/6))+6","(2/(2/6))+6","(2+(2+6))-6","(2-(2+6))-6","(2*(2+6))-6","(2/(2+6))-6","(2+(2-6))-6","(2-(2-6))-6","(2*(2-6))-6","(2/(2-6))-6","(2+(2*6))-6","(2-(2*6))-6","(2*(2*6))-6","(2/(2*6))-6","(2+(2/6))-6","(2-(2/6))-6","(2*(2/6))-6","(2/(2/6))-6","(2+(2+6))*6","(2-(2+6))*6","(2*(2+6))*6","(2/(2+6))*6","(2+(2-6))*6","(2-(2-6))*6","(2*(2-6))*6","(2/(2-6))*6","(2+(2*6))*6","(2-(2*6))*6","(2*(2*6))*6","(2/(2*6))*6","(2+(2/6))*6","(2-(2/6))*6","(2*(2/6))*6","(2/(2/6))*6","(2+(2+6))/6","(2-(2+6))/6","(2*(2+6))/6","(2/(2+6))/6","(2+(2-6))/6","(2-(2-6))/6","(2*(2-6))/6","(2/(2-6))/6","(2+(2*6))/6","(2-(2*6))/6","(2*(2*6))/6","(2/(2*6))/6","(2+(2/6))/6","(2-(2/6))/6","(2*(2/6))/6","(2/(2/6))/6","(2+2)+(6+6)","(2-2)+(6+6)","(2*2)+(6+6)","(2/2)+(6+6)","(2+2)-(6+6)","(2-2)-(6+6)","(2*2)-(6+6)","(2/2)-(6+6)","(2+2)*(6+6)","(2-2)*(6+6)","(2*2)*(6+6)","(2/2)*(6+6)","(2+2)/(6+6)","(2-2)/(6+6)","(2*2)/(6+6)","(2/2)/(6+6)","(2+2)+(6-6)","(2-2)+(6-6)","(2*2)+(6-6)","(2/2)+(6-6)","(2+2)-(6-6)","(2-2)-(6-6)","(2*2)-(6-6)","(2/2)-(6-6)","(2+2)*(6-6)","(2-2)*(6-6)","(2*2)*(6-6)","(2/2)*(6-6)","(2+2)/(6-6)","(2-2)/(6-6)","(2*2)/(6-6)","(2/2)/(6-6)","(2+2)+(6*6)","(2-2)+(6*6)","(2*2)+(6*6)","(2/2)+(6*6)","(2+2)-(6*6)","(2-2)-(6*6)","(2*2)-(6*6)","(2/2)-(6*6)","(2+2)*(6*6)","(2-2)*(6*6)","(2*2)*(6*6)","(2/2)*(6*6)","(2+2)/(6*6)","(2-2)/(6*6)","(2*2)/(6*6)","(2/2)/(6*6)","(2+2)+(6/6)","(2-2)+(6/6)","(2*2)+(6/6)","(2/2)+(6/6)","(2+2)-(6/6)","(2-2)-(6/6)","(2*2)-(6/6)","(2/2)-(6/6)","(2+2)*(6/6)","(2-2)*(6/6)","(2*2)*(6/6)","(2/2)*(6/6)","(2+2)/(6/6)","(2-2)/(6/6)","(2*2)/(6/6)","(2/2)/(6/6)","2+((2+6)+6)","2-((2+6)+6)","2*((2+6)+6)","2/((2+6)+6)","2+((2-6)+6)","2-((2-6)+6)","2*((2-6)+6)","2/((2-6)+6)","2+((2*6)+6)","2-((2*6)+6)","2*((2*6)+6)","2/((2*6)+6)","2+((2/6)+6)","2-((2/6)+6)","2*((2/6)+6)","2/((2/6)+6)","2+((2+6)-6)","2-((2+6)-6)","2*((2+6)-6)","2/((2+6)-6)","2+((2-6)-6)","2-((2-6)-6)","2*((2-6)-6)","2/((2-6)-6)","2+((2*6)-6)","2-((2*6)-6)","2*((2*6)-6)","2/((2*6)-6)","2+((2/6)-6)","2-((2/6)-6)","2*((2/6)-6)","2/((2/6)-6)","2+((2+6)*6)","2-((2+6)*6)","2*((2+6)*6)","2/((2+6)*6)","2+((2-6)*6)","2-((2-6)*6)","2*((2-6)*6)","2/((2-6)*6)","2+((2*6)*6)","2-((2*6)*6)","2*((2*6)*6)","2/((2*6)*6)","2+((2/6)*6)","2-((2/6)*6)","2*((2/6)*6)","2/((2/6)*6)","2+((2+6)/6)","2-((2+6)/6)","2*((2+6)/6)","2/((2+6)/6)","2+((2-6)/6)","2-((2-6)/6)","2*((2-6)/6)","2/((2-6)/6)","2+((2*6)/6)","2-((2*6)/6)","2*((2*6)/6)","2/((2*6)/6)","2+((2/6)/6)","2-((2/6)/6)","2*((2/6)/6)","2/((2/6)/6)","2+(2+(6+6))","2-(2+(6+6))","2*(2+(6+6))","2/(2+(6+6))","2+(2-(6+6))","2-(2-(6+6))","2*(2-(6+6))","2/(2-(6+6))","2+(2*(6+6))","2-(2*(6+6))","2*(2*(6+6))","2/(2*(6+6))","2+(2/(6+6))","2-(2/(6+6))","2*(2/(6+6))","2/(2/(6+6))","2+(2+(6-6))","2-(2+(6-6))","2*(2+(6-6))","2/(2+(6-6))","2+(2-(6-6))","2-(2-(6-6))","2*(2-(6-6))","2/(2-(6-6))","2+(2*(6-6))","2-(2*(6-6))","2*(2*(6-6))","2/(2*(6-6))","2+(2/(6-6))","2-(2/(6-6))","2*(2/(6-6))","2/(2/(6-6))","2+(2+(6*6))","2-(2+(6*6))","2*(2+(6*6))","2/(2+(6*6))","2+(2-(6*6))","2-(2-(6*6))","2*(2-(6*6))","2/(2-(6*6))","2+(2*(6*6))","2-(2*(6*6))","2*(2*(6*6))","2/(2*(6*6))","2+(2/(6*6))","2-(2/(6*6))","2*(2/(6*6))","2/(2/(6*6))","2+(2+(6/6))","2-(2+(6/6))","2*(2+(6/6))","2/(2+(6/6))","2+(2-(6/6))","2-(2-(6/6))","2*(2-(6/6))","2/(2-(6/6))","2+(2*(6/6))","2-(2*(6/6))","2*(2*(6/6))","2/(2*(6/6))","2+(2/(6/6))","2-(2/(6/6))","2*(2/(6/6))","2/(2/(6/6))"]`)

    assert.deepEqual(parseNumbers(candidates, templSymbolParsed), templNumParsed, `字母转化为数字 ["6","6","2","2"]`)
});
