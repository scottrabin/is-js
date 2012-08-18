(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD; don't export to window globals
		define(factory);
	} else {
		root.is = factory();
	}
}(this, function() {

	// Local references to global functions (better minification)
	var ObjProto   = Object.prototype,
		ArrayProto = Array.prototype,
		toString   = ObjProto.toString,
		hasOwn     = ObjProto.hasOwnProperty,

		// these get used internally, so define it in scope and then expose it
		is_array   = ArrayProto.isArray || function(a) { return toString.call(a) === '[object Array]'; },
		is_object  = function(o) { return o === Object(o); },
		// in case the browser doesn't have it
		index_of   = ArrayProto.indexOf ?
			function(arr, val) { return arr.indexOf(val); } :
			function(arr, val) {
				for(var i = 0, l = arr.length ; i < l ; i++) {
					if (arr[i] === val) {
						return i;
					}
				}
				return -1;
			};

	return {
		// Primitives - test for type exactness
		string : function(s) {
			return toString.call(s) === '[object String]';
		},
		number : function(n) {
			return Number(n) === n;
		},
		bool   : function(b) {
			return b === !!b;
		},

		// non-primitive builtin types
		fn     : function(f) {
			return toString.call(f) === '[object Function]';
		},
		// array - delegates to builtin if available
		array  : is_array,
		// basically all Javascript types are objects
		object : is_object,

		// HTML elements
		// https://github.com/documentcloud/underscore/blob/master/underscore.js#L836-838
		element : function(e) {
			return !!(e && e.nodeType === 1);
		},

		// non-strict type checking
		// http://dl.dropbox.com/u/35146/js/tests/isNumber.html
		numeric : function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},

		// plain objects - not a specific type, just an object with key/value pairs
		// https://github.com/jquery/jquery/blob/c14a6b385fa419ce67f115e853fb4a89d8bd8fad/src/core.js#L425-452
		hash : function(o) {
			// fail fast for falsy/non-object/HTMLElement/window objects
			if (!o || typeof o !== 'object' || o.nodeType || o === window) {
				return false;
			}

			// check constructor properties - objects don't have their own constructor,
			// and their constructor does not have its own `isPrototypeOf` function
			if (o.constructor &&
				! hasOwn.call(o, 'constructor') &&
				! hasOwn.call(o.constructor.prototype, 'isPrototypeOf')
			) {
				return false;
			}

			// from jQuery source: speed up the test by cycling to the last property,
			// since own properties are iterated over first and therefore the last one will
			// indicate the presence of any prototype properties
			for (var key in o){}
			return (key === undefined || hasOwn.call(o, key));
		},

		// test for containment, in both arrays and objects
		"in" : function(container, val) {
			return (is_array(container) ? index_of(container, val) > -1 :
					is_object(container) ? hasOwn.call(container, val) :
					false);
		},

		// test for having any elements (if an array), any properties (if an object), or falsy-ness
		empty : function(container) {
			if (is_array(container)) {
				return container.length === 0;
			} else if (is_object(container)) {
				for(var x in container) {
					return false;
				}
				return true;
			} else {
				return !container;
			}
		}
	};
}));
