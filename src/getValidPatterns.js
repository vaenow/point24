
var utils = require('./utils')
var parseNumbers = require('./parseNumbers')
var parseMathSymbols = require('./parseMathSymbols')
var filterValidPatterns = require('./filterValidPatterns')
/**
 * 获取有效的模式
 * @param shuffledCandidates
 * @param candidates
 * @param ret
 * @returns {{}}
 */
module.exports = (shuffledCandidates, candidates, ret)=> {
	let validPatterns = {}; // 为了去重

	shuffledCandidates.forEach((candidates, idx, all)=> {
		console.log(`candidates: ${idx}/${all.length} `)
		let templSymbolParsed = parseMathSymbols(candidates);
		let templNumParsed = parseNumbers(candidates, templSymbolParsed);
		utils.extends(validPatterns, filterValidPatterns(templNumParsed, ret));	
	})

	return validPatterns
}