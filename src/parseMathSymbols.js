/**
* 转化数学符号
*/
var getTemplates = require('./getTemplates')

let MATH_SYMBOLS = ['+', '-', '*', '/']

module.exports = (candidates)=>{
	let ret = [];
	let templates = getTemplates(candidates);
	templates.map((templ)=> {
		// MATH_SYMBOLS.forEach((sym)=>{

		// })
		let cnt = templ.match(/\?/g).length; //问号的个数
		let epochs = Math.pow(MATH_SYMBOLS.length, cnt);
		let idxArr = new Array(cnt)
		// let a = 0, b=0, c = 0, d=0;
		for(let i = 0; i < epochs; i++) {
			// if(epochs % Math.pow(MATH_SYMBOLS.length, 1)) idxArr[0] = 0;
			// if(epochs % Math.pow(MATH_SYMBOLS.length, 2)) idxArr[1] = 0;
			// if(epochs % Math.pow(MATH_SYMBOLS.length, 3)) idxArr[2] = 0;
			// if(epochs % Math.pow(MATH_SYMBOLS.length, 4)) idxArr[3] = 0;
			resetIdxArr(i, idxArr);

			let _mathSym = getMatchSymArray(MATH_SYMBOLS, idxArr);
			ret.push(templ.replace(/\?/g, ()=>{
				return _mathSym.pop();
			}))
		}
	})

	return ret;
}

/**
 * 重置游标
 * @param epochsIdx
 * @param idxArr
 */
function resetIdxArr(epochsIdx, idxArr) {
	//"000000".replace(/\d{4}$/, "30")
	let len = idxArr.length;
	let encode = epochsIdx.toString(MATH_SYMBOLS.length) //转化为相应的进制
	let zeroPadding = '0'.repeat(len).replace(new RegExp(`\\d{${encode.length}}$`), encode); // '0023'

	for (let i = 0; i < idxArr.length; i++) {
		idxArr[i] = zeroPadding[i]
	}

	// for(let i =0; i<idxArr.length; i++ ){
	// 	if(epochsIdx % Math.pow(MATH_SYMBOLS.length, i + 1) === 0) idxArr[i] = 0;

	// }


	// idxArr.forEach((e, i, arr)=> {
	// 	if(epochs % Math.pow(MATH_SYMBOLS.length, i - 1)) arr[i] = 0;
	// })
}

/**
 * 获取对应的数学符号
 * @param sym
 * @param idxArr
 * @returns {Array}
 */
function getMatchSymArray(sym, idxArr) {
	return idxArr.map((symIdx)=> {
		return sym[symIdx]
	})
}


