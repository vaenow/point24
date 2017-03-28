/**
 * 获取所有元素组合
 * @param candidates
 * @returns {Array}
 */
module.exports = (candidates) => {
	let ret = [];

	let candidatesLen = candidates.length;
	let len = Math.pow(candidatesLen, candidatesLen) - 1;

	for(let i =0 ; i< len; i++) {
		let temp = i.toString(candidatesLen);
		if(temp.length === candidatesLen - 1) temp = '0' + temp; //补0
		if((temp.length === candidatesLen)
			&& !temp.match(/(\d).*?\1/)) {//没有相同的两位数
				ret.push(temp.replace(/\d/g, (match)=> {
					return candidates[match]
				}).split(''))
			} 

	}

	return ret;
}