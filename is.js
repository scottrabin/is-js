(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD; don't export to window globals
		define(factory);
	} else {
		root.is = factory();
	}
}(this, function() {

	// Local references to global functions (better minification)
	var toString = Object.prototype.toString;

	return {
		// Primitives
		string : function(s) {
			return toString.call(s) === '[object String]';
		},
		number : function(n) {
			return Number(n) === n;
		},
		bool   : function(b) {
			return b === !!b;
		}
	};
}));
