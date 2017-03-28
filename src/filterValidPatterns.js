/**
 * 过滤有效的模式
 * @param templSymbolParsed
 * @param ret
 * @returns {{}}
 */
module.exports = function filterValidPatterns(templSymbolParsed, ret) {
	let validPatterns = {} // 为了去重
	templSymbolParsed.forEach((templ)=> {
		if(eval(templ) === ret) {
			validPatterns[templ] = 0; 
		}
	})
	return validPatterns;
}