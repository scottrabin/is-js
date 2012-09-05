/**
 * is.js <https://github.com/scottrabin/is-js>
 * Copyright (c) 2012 Scott Rabin
 * @author Scott Rabin <scottrabin@gmail.com>
 * @license MIT License <https://raw.github.com/scottrabin/is-js/master/MIT-LICENSE.txt>
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD; don't export to window globals
		define(factory);
	} else if (typeof exports === 'object') {
		// Node
		module.exports = factory();
	} else {
		root.is = factory();
	}
}(this, function() {

	// Local references to global functions (better minification)
	var ObjProto   = Object.prototype,
		ArrayProto = Array.prototype,
		toString   = ObjProto.toString,
		hasOwn     = ObjProto.hasOwnProperty,
		// in case the browser doesn't have it
		index_of   = (ArrayProto.indexOf ?
			function(arr, val) { return arr.indexOf(val); } :
			function(arr, val) {
				for(var i = 0, l = arr.length ; i < l ; i++) {
					if (arr[i] === val) {
						return i;
					}
				}
				return -1;
			}),
		// define the functions in the local scope to enable internal re-use

		// Primitives - test for type exactness
		// typeof is faster; see http://jsperf.com/underscore-js-istype-alternatives/7
		// typeof does not catch values made with a constructor, but is still faster than to String
		//   see : http://jsperf.com/is-js
		is_string  = function(s) { return (typeof s === 'string') || s instanceof String; },
		is_number  = function(n) { return (typeof n === 'number') || n instanceof Number; },
		is_bool    = function(b) { return b === !!b || b instanceof Boolean; },

		// non-primitive builtin types
		is_fn      = function(f) { return (typeof f === 'function'); },
		// array - delegates to builtin if available
		is_array   = ArrayProto.isArray || function(a) { return toString.call(a) === '[object Array]'; },
		// basically all Javascript types are objects
		is_object  = function(o) { return o === Object(o); },
		// duck typing, because there isn't really a good way to do this
		is_regex   = function(r) { return !!(r && r.test && r.exec && (r.ignoreCase || r.ignoreCase === false)); },

		// HTML elements
		is_element = (typeof HTMLElement !== 'undefined' ?
					  function(e) { return (e instanceof HTMLElement); } :
					  // https://github.com/documentcloud/underscore/blob/master/underscore.js#L836-838
					  function(e) { return !!(e && e.nodeType === 1); }
					 ),

		// non-strict type checking
		// http://dl.dropbox.com/u/35146/js/tests/isNumber.html
		is_numeric = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); },

		// plain objects - not a specific type, just an object with key/value pairs
		// https://github.com/jquery/jquery/blob/c14a6b385fa419ce67f115e853fb4a89d8bd8fad/src/core.js#L425-452
		is_hash    = function(o) {
			// fail fast for falsy/non-object/HTMLElement/window objects
			// also check constructor properties - objects don't have their own constructor,
			// and their constructor does not have its own `isPrototypeOf` function
			if (!o || typeof o !== 'object' || is_element(o) || (typeof window !== 'undefined' && o === window) ||
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
		is_inside  = function(container, val) {
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
		is_set     = function(v) { return v !== null && v !== (void 0); },

		// test for having any elements (if an array), any properties (if an object), or falsy-ness
		is_empty   = function(container) {
			if (is_array(container)) {
				return container.length === 0;
			} else if (is_object(container)) {
				// when an object has a valueOf function that doesn't return an object,
				// object is empty if value is empty
				if (is_fn(container.valueOf) && !is_object(container.valueOf())) {
					return is_empty(container.valueOf());
				}
				for(var x in container) {
					if (hasOwn.call(container, x)) {
						return false;
					}
				}
				return true;
			} else {
				return !container;
			}
		};

	// expose the external functions
	return {
		string  : is_string,
		number  : is_number,
		bool    : is_bool,
		fn      : is_fn,
		array   : is_array,
		object  : is_object,
		regex   : is_regex,
		element : is_element,
		numeric : is_numeric,
		hash    : is_hash,
		inside  : is_inside,
		set     : is_set,
		empty   : is_empty
	};
}));
