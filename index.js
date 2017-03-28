/**
 * 入口 Entry
 */

var getShuffledCandidates = require('./src/shuffledCandidates');
var removeDupPatterns = require('./src/removeDupPatterns');
var getValidPatterns = require('./src/getValidPatterns');

/**
 * 计算模式
 * @param candidates
 * @param ret
 */
function getPattern(candidates, ret) {
	console.time('time');

	let shuffledCandidates = getShuffledCandidates(candidates);
	let validPatterns = getValidPatterns(shuffledCandidates, candidates, ret);
	validPatterns = removeDupPatterns(validPatterns);

	console.timeEnd('time');

	return validPatterns;
}

let pat;

// pat = getPattern([24], 24)
// pat = getPattern([6,4], 24)
// pat = getPattern([6,6,12], 24);
// pat = getPattern([6,6,2,2], 24)
// pat = getPattern([6,2,6,2], 24)
// pat = getPattern([3,2,3,4], 24)
// pat = getPattern([5,5,6,6], 24)
// pat = getPattern([3,3,6,6], 24)
// pat = getPattern([1,2,3,4], 24)
// pat = getPattern([6,4,3,2,7], 33)
// pat = getPattern([6,4,3,2,7], 30)
pat = getPattern([6,4,3,2,7], 30)
// pat = getPattern([1,2,3,4,5], 30)


if(!pat.length) pat.push("无解");
console.log("result: ")
console.log(pat.join('\t'))
try {	
$('body')
	.append($('<div style="display: flex;justify-content: center;">')
	.html(pat.join('<br/>')));
} catch(e){}

