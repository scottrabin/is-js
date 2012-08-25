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

		is_element = (typeof HTMLElement !== 'undefined' ?
					  function(e) { return (e instanceof HTMLElement); } :
					  // https://github.com/documentcloud/underscore/blob/master/underscore.js#L836-838
					  function(e) { return !!(e && e.nodeType === 1); }
					 );
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
		// typeof is faster; see http://jsperf.com/underscore-js-istype-alternatives/7
		string : function(s) {
			return (typeof s === 'string');
		},
		number : function(n) {
			return (typeof n === 'number');
		},
		bool   : function(b) {
			return b === !!b;
		},

		// non-primitive builtin types
		fn     : function(f) {
			return (typeof f === 'function');
		},
		// array - delegates to builtin if available
		array  : is_array,
		// basically all Javascript types are objects
		object : is_object,

		// duck typing, because there isn't really a good way to do this
		regex  : function(r) {
			return !!(r && r.test && r.exec && (r.ignoreCase || r.ignoreCase === false));
		},

		// HTML elements
		element : is_element,

		// non-strict type checking
		// http://dl.dropbox.com/u/35146/js/tests/isNumber.html
		numeric : function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},

		// plain objects - not a specific type, just an object with key/value pairs
		// https://github.com/jquery/jquery/blob/c14a6b385fa419ce67f115e853fb4a89d8bd8fad/src/core.js#L425-452
		hash : function(o) {
			// fail fast for falsy/non-object/HTMLElement/window objects
			// also check constructor properties - objects don't have their own constructor,
			// and their constructor does not have its own `isPrototypeOf` function
			if (!o || typeof o !== 'object' || is_element(o) || o === window ||
			   (o.constructor && ! hasOwn.call(o, 'constructor') && ! hasOwn.call(o.constructor.prototype, 'isPrototypeOf'))
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
		inside : function(container, val) {
			if (is_array(container)) {
				return index_of(container, val) > -1;
			} else if (is_object(container)) {
				for(var prop in container) {
					if (hasOwn.call(container, prop) && container[prop] === val) {
						return true;
					}
				}
				return false;
			} else {
				return false;
			}
		},

		// test for variable being undefined or null
		set   : function(v) {
			return v !== null && v !== (void 0);
		},

		// test for having any elements (if an array), any properties (if an object), or falsy-ness
		empty : function(container) {
			if (is_array(container)) {
				return container.length === 0;
			} else if (is_object(container)) {
				for(var x in container) {
					if (hasOwn.call(container, x)) {
						return false;
					}
				}
				return true;
			} else {
				return !container;
			}
		}
	};
}));
