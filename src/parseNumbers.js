/**
 * 转化数学数字 0-9
 */
// var getTemplates = require('./getTemplates')

module.exports = (candidates, templSymbolParsed) => {
	// let templates = getTemplates(candidates);
	return templSymbolParsed.map((templ) => {
		let _candi = candidates.slice();
		return templ.replace(/[a-z]/g, () => {
			return _candi.pop();
		})
	})
}