let _global = {};

/**
 * 工具类
 */
module.exports = {
	/**
	 * 扩展对像
	 * @param a
	 * @param b
     */
	extends(a, b) {
		for (let k in b) {
			if (b.hasOwnProperty(k)) {
				a[k] = b[k];
			}
		}
	},

	/**
	 * 字符串是否包含 pattern
	 * @param source
	 * @param pattern
	 * @returns {*|boolean}
     */
	contains(source, pattern) {
		return source && source.indexOf(pattern) !== -1
	},

	/**
	 * 转义字符串, for ES6
	 * @param str
	 * @returns {string|void|XML|*}
     */
	escapeRegExp(str) {
		return str.replace(/[\-\/\{\}\*\+\?\.\\\^\$\|\(\)]/g, '\\$&');
	},

	/**
	 * 全局使用
	 * @returns {{}}
     */
	global() {
		return _global;
	},

	/**
	 * 从data找到所有匹配match的符号
	 * 使用stack来匹配 	a+(b+(c))
	 */
	findSymbolMatch(str, start, option) {
		let len = str.length;
		let defaultOptions = {
			left: '(',
			right: ')',
			reverse: false // 反方向匹配
		};

		let leftStack = [];
		let temp;

		let result = "";

		this.extends(defaultOptions, option);
		// option = option || defaultOptions;

		let leftSym = defaultOptions.left,
			rightSym = defaultOptions.right,
			reverse = defaultOptions.reverse;

		if(reverse) {
			let swapTemp = leftSym;
			leftSym = rightSym;
			rightSym = swapTemp;
		}

		for (let i = start; isNext(i, len, reverse); i = nextI(i, reverse)) {
			temp = str[i];
			if (leftSym == temp) {
				leftStack.push(temp);
			} else if (temp == rightSym) {
				leftStack.pop();
				if (leftStack.length == 0) 	{
					result += temp;
					break;
				}
			}
			result += temp;
		}



		function isNext(i, len, reverse) {
			return reverse ? i >= 0 : i < len;
		}

		function nextI(i, reverse) {
			return i + (reverse ? -1 : 1);
		}

		//翻转得到正常顺序的结果
		return reverse ? this.reverseStr(result) : result;

	},

	/**
	 * 反转
	 * @param str
	 * @returns {string}
     */
	reverseStr(str) {
		return (str + "").split('').reverse().join('');
	},

	/**
	 * 生成相应进制的串
	 * @param str
	 * @param jinZhi
	 * @param len
	 * @returns {string}
     */
	paddingZero(str, jinZhi, len) {
		let ret = str.toString(jinZhi);
		while(ret.length < len) {
			ret = '0' + ret;
		}
		return ret;
	}

}