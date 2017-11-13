/**
 * 正则表达式的几种用法
 */
const regexp = {

	test(str, reg) {
		return reg.test(str)
	},

	search(str, reg) {
		return str.search(reg)
	},

	match(str, reg) {
		return str.match(reg)
	},

	split(str, reg) {
		return str.split(reg)
	},

	replace(str, reg, rep) {
		return str.replace(reg, rep)
	},
};

export default regexp
