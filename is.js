(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD; don't export to window globals
		define(factory);
	} else {
		root.is = factory();
	}
}(this, function() {

	return {
	};
}));
